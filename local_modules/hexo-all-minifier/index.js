/* jshint node:true, strict:false*/
/* global hexo */

// important stuff
const minimatch = require('minimatch');
const assign = require('object-assign');
const fs = require('fs');

// minify deps
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');
const Htmlminifier = require('html-minifier').minify;
const Imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const gifsicle = require('imagemin-gifsicle');
const jpegtran = require('imagemin-jpegtran');
const optipng = require('imagemin-optipng');
const svgo = require('imagemin-svgo');
const streamToArray = require('stream-to-array');
const Promise = require('bluebird'); // jshint ignore:line
const DOMParser = require('xmldom').DOMParser;
const XMLSerializer = require('xmldom').XMLSerializer;
const parse5 = require('parse5');
const chalk = require('chalk');
const getTemporaryFilePath = require('gettemporaryfilepath');

const OptiPng = require('optipng');

var log = hexo.log ? hexo.log.log.bind(hexo.log) : console.log.bind(console);

const _registeredMatchers = [];
const _registeredHandlers = [];

// HTML minifier
hexo.config.html_minifier = assign({
  enable: true,
  exclude: [],
  ignoreCustomComments: [/^\s*more/],
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeEmptyAttributes: true,
  minifyJS: true,
  minifyCSS: true,
}, hexo.config.html_minifier);

// Css minifier
hexo.config.css_minifier = assign({
  enable: true,
  exclude: ['*.min.css']
}, hexo.config.css_minifier);

// Js minifier
hexo.config.js_minifier = assign({
  enable: true,
  mangle: true,
  output: {},
  compress: {},
  exclude: ['*.min.js']
}, hexo.config.js_minifier, {
  fromString: true
});

// Image minifier
hexo.config.image_minifier = assign({
  enable: true,
  interlaced: false,
  multipass: false,
  optimizationLevel: 3,
  pngquant: false,
  progressive: false
}, hexo.config.image_minifier);

/*
raw data object:
{
  path: 'file path, absolute',
  toString: true,
  text: 'content'
}
*/
function js(contents, path, rawDataObject, options) {
  options.fromString=true;
  //console.log(path);
  
  return UglifyJS.minify(contents, options).code;
}

function html(contents, path, rawDataObject, options) {
  return 'weme'+contents;
}

function check(type, path) {
  if (typeof type == 'string') type = type.split('/');
  
  const options = hexo.config[type[0]+'_minifier'] || {};
  
  if (options.enable === false) {
    console.log(path + '; disabled thru options');
    return false;
  }
  
  let b = false;
  for (let i = 0; i < type.length; i++) {
    if (path.endsWith(type[i])) {
      b = true;
      break;
    }
  }
  if (!b) {
    console.log(path + '; path doesnt end with ' + type);
    return false;
  }
  
  let exclude = options.exclude || [];
  if (typeof exclude == 'string') exclude = [exclude];

  if (exclude.length > 0) {
    for (let i = 0, len = exclude.length; i < len; i++) {
      if (minimatch(path, exclude[i])) {
        console.log(path + '; excluded by ' + exclude[i]);
        return false;
      }
    }
  }
  
  return true;//FUCKING HELL DONT FORGET ABOUT THIS STUFF
}

addSyncHandler('**/*.js', 'js', (contents, path, options) => {
  options.fromString=true;
  
  var code = UglifyJS.minify(contents, options).code;
  //console.log(code);
  return code;
});

addSyncHandler('**/*.css', 'css', (contents, path, options) => {
  //options.fromString=true;
  
  var code = new CleanCSS(options).minify(contents).styles;
  //console.log(code);
  return code;
});

addSyncHandler('**/*.html', 'html', (contents, path, options) => {
  try {
    return Htmlminifier(contents, options);
    log('htmlminifier failed: ' + (e.toString().split('\n')[0]));
  } catch (e) {
    try {
      return parse5.serialize(parse5.parse(contents));
    } catch (e) {
      log('domparser failed!');
      
      try {
        var document = new DOMParser().parseFromString(contents, 'text/html');
        
        return new XMLSerializer().serializeToString(document); //_htmlMinifier(contents, options.linebreakpos || 512);
      } catch (e) {
        log('xmldom failed: ' + e);
        return contents;
        //return _minify(str).replace(/>\s*\?\?\s+\?\?\s*</g, '><');
      }
    }
  }
});

//addHandler('**/*.png', (_1, _2, route, paths) => {
//
//  paths.forEach(path => {
//    try {
//      if (!check('png', path)) {
//        return;
//      }
//      
//      const rpath = './public/'+path;
//      const pSize = fs.statSync(rpath).size;
//      
//      const opti = new OptiPng(['-o7']);
//      
//      if (!opti.writeStream) { // write a tempfile to give to binary
//        opti.tempFile = getTemporaryFilePath({suffix: '.png'});
//        opti.writeStream = fs.createWriteStream(opti.tempFile);
//        opti.writeStream.on('error', function onWsErr(err){
//          opti._error(err);
//        }.bind(opti));
//      }
//
//      fs.createReadStream(rpath).pipe(opti).pipe(fs.createWriteStream(rpath)).once('end', () => {
//        const nSize = fs.statSync(rpath).size;
//
//        log('Minifying: ' + path + '; from ' + ~~(pSize / 1024) + 'KiB to ' + ~~(nSize/1024) + 'KiB, saved: ' + (100-Math.floor((nSize/pSize)*100)) + '%');    
//      });
//    } catch (e) {
//      console.error(chalk.red('error during png optimization:' + e.toString().split('\n')[0]));
//    }
//  });
//});

/**
handler structure:
  function handlerFunc(
    function resolvePromise
    function rejectPromise
    object? route
    string[] paths
  )
*/
function addHandler(matcherString, handlerFunc) {
  _registeredMatchers.push(matcherString);
  _registeredHandlers.push(handlerFunc);
}

/**
handler structure:
  function handlerFunc(
    string contents,
    string path,
    object options
  ) returns -> string newContents
*/
function addSyncHandler(matcherString, type /*eg js or html, where the config is pulled from*/, handlerFunc) {
  _registeredMatchers.push(matcherString);
  _registeredHandlers.push((resolve, reject, route, routes) => {
    let success = true;
    
    const options = hexo.config[type+'_minifier'] || {};
    
    routes.forEach(path => {
      
      //console.log(path);
        
      if (!check(type, path)) {
        return;
      }
      
      try {
        const rpath = './public/'+path;
        const contents = fs.readFileSync(rpath, 'utf8');
        
        const newContents = handlerFunc(contents, rpath, options);
        
        if (contents !== newContents) {
          fs.writeFileSync(rpath, newContents, 'utf8');
          console.log(fs.readFileSync(rpath, 'utf8') == newContents && (rpath +process.cwd()));
          log('Minifying: ' + path + '; from ' + ~~(contents.length / 1024) + 'KiB to ' + ~~(newContents.length/1024) + 'KiB, saved: ' + (100-Math.floor((newContents.length/contents.length)*100)) + '%');
        }
      } catch (e) {
        console.error(chalk.red(e));
        success = false;
      }
      
    });
    
    //if (success) resolve();
    //else reject();
  });
}

//let hasListened=false;

const wemeFunc = p => {
  var route = hexo.route;

  _registeredMatchers.forEach((_, i) => {
    var routes = [p].filter(function(path) {
      return minimatch(path, _registeredMatchers[i], { nocase: true });
    });
    
    _registeredHandlers[i](function(){}, function(){}, route, routes);
    //return new Promise(function (resolve, reject) {
    //  _registeredHandlers[i](resolve, reject, route, routes);
    //});
  });
};

global.hacks=global.hacks||{};
global.hacks.onGenerate = p => {
  //console.log('weme func has been called');
  
  //if (hasListened)return;
  //hasListened=true;
  
  wemeFunc(p);
}

//hexo.extend.filter.register('after_generate', function() {
//  if (hasListened)return;
//  hasListened=true;
//  process.once('exit', wemeFunc);
//}, 10000);




// after render does not work, its not far enough!
/*
console.log('FUCKIGN HELL');
hexo.extend.filter.register('after_render:js', function(str, data) {
  if (!check('js', data.path)) {
    return str;
  }
  
  const out = js(str, data.path, data, hexo.config['js_minifier'] || {});
  log('Minifying: ' + (data.path.substr(data.path.lastIndexOf('static-site-hexo\\'))) + '; Saved: ' + Math.floor((out.length/str.length)*100) + '%');
  return out;
  
});

hexo.extend.filter.register('after_render:html', function(str, data) {
  if (!check('html/md/ejs', data.path)) {
    return str;
  }
  
  const out = html(str, data.path, data, hexo.config['html_minifier'] || {});
  log('Minifying: ' + (data.path.substr(data.path.lastIndexOf('static-site-hexo\\'))) + '; Saved: ' + Math.floor((out.length/str.length)*100) + '%');
  return out;
  
});
*/