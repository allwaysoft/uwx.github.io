/* global hexo */
/* jshint node:true*/
/* exported hexo*/
'use strict';
console.log('here');
var CleanCSS = require('clean-css'),
    UglifyJS = require('uglify-js'),
    Htmlminifier = require('html-minifier').minify,
    Imagemin = require('imagemin'),
    mozjpeg = require('imagemin-mozjpeg'),
    pngquant = require('imagemin-pngquant'),
    gifsicle = require('imagemin-gifsicle'),
    jpegtran = require('imagemin-jpegtran'),
    optipng = require('imagemin-optipng'),
    svgo = require('imagemin-svgo'),
    streamToArray = require('stream-to-array');

const _htmlMinifier = require('html-minify').minify;
var Promise = require('bluebird'); // jshint ignore:line
var minimatch = require('minimatch');
//var htmlparser = require('htmlparser2');
//var domutils = require('domutils');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
const parse5 = require('parse5');
console.log('here2');

function OptimizeHTML(str, data, _hexo, _path) {
    var hexo = _hexo||this;
    //console.log('hexo ' + hexo, '_hexo ' + _hexo, 'this ' + this);
    
    var options = hexo.config.html_minifier;
    // Return if disabled.
    if (false === options.enable) return;

    var path = data.path || _path;
    var exclude = options.exclude;
    if (exclude && !Array.isArray(exclude)) exclude = [exclude];

    if (path && exclude && exclude.length) {
        for (var i = 0, len = exclude.length; i < len; i++) {
            if (minimatch(path, exclude[i])) return str;
        }
    }

    var log = hexo.log.log.bind(hexo.log) || hexo.log || console.log;
    
    var result;
    
    //// domparser
    //var rawHtml = str;
    //var handler = new htmlparser.DomHandler(function (error, dom) {
    //    if (error)
    //      throw error;
    //    else {
    //      result = domutils.getOuterHTML(dom.body)
    //      console.log(result);
    //    }
    //      
    //});
    //var parser = new htmlparser.Parser(handler);
    //parser.write(rawHtml);
    //parser.done();
    //// domparser end
    
    try {
      result = parse5.serialize(parse5.parse(str));
    } catch (e) {
      try {
        log('domparser failed!');
        result = Htmlminifier(str, options);
      } catch (e) {
        log('htmlminifier failed: ' + (e.toString().split('\n')[0]));
        
        try {
          var document = new DOMParser().parseFromString(str, 'text/html');
          
          result = new XMLSerializer().serializeToString(document); //_htmlMinifier(str, options.linebreakpos || 512);
        } catch (e) {
          log('xmldom failed: ' + e);
          result = _minify(str).replace(/>\s*\?\?\s+\?\?\s*</g, '><');
        }
      }
    }
    var saved = ((result.length / str.length) * 100).toFixed(2);
    log('update Optimize HTML: %s [ %s saved]', path, saved + '%');

    return result;
}

/*
old:

function OptimizeHTML(str, data) {
    var hexo = this,
        options = hexo.config.html_minifier;
    // Return if disabled.
    if (false === options.enable) return;

    var path = data.path;
    var exclude = options.exclude;
    if (exclude && !Array.isArray(exclude)) exclude = [exclude];

    if (path && exclude && exclude.length) {
        for (var i = 0, len = exclude.length; i < len; i++) {
            if (minimatch(path, exclude[i])) return str;
        }
    }

    var log = hexo.log || console.log;
    var result = Htmlminifier(str, options);
    var saved = ((str.length - result.length) / str.length * 100).toFixed(2);
    log.log('update Optimize HTML: %s [ %s saved]', path, saved + '%');

    return result;
};
*/


function _minify(contents) {
    var htmlBuilder = [];
    var inner = false,
        intag = false, //<div> or </div>
        intagin = false, //<% expr %> ... <% for(var a=1; a "<" 5
        inscript = false,
        incss = false;

    var innerTextBuilder = [];
    for (var i = 0; i < contents.length; i++) {
        var charstr = contents[i];
        if (charstr === '<') {
            if (contents.substr(i, 7).toLowerCase() === '<script') {
                inscript = true;
            }

            if (contents.substr(i, 6).toLowerCase() === '<style') {
                inscript = true;
            }

            //maybe [<]div> or [<]/div> or a [<] 5
            if (contents[i + 1] !== '%') {
                //case a <= 5
                if (!intagin) {
                    intag = true;
                }
                inner = true;
            } else {
                //> ... [<]% ...
                if (!inner) {
                    intag = false;
                    inner = true;
                    intagin = true;
                }
            }

            if (inner && innerTextBuilder.length) {
                //debugger;
                var innerTextStr = innerTextBuilder.join('');
                htmlBuilder.push(trim(innerTextStr))
                innerTextBuilder = [];
            }
        }

        if (charstr === '>') {
            if (i >= 4 && contents.substr(i - 6, 6).toLowerCase() === '/style') {
                incss = false;
                htmlBuilder.push(charstr);
                inner = intag = intagin = false;
                continue;
            }
            if (i >= 7 && contents.substr(i - 7, 7).toLowerCase() === '/script') {
                inscript = false;
                htmlBuilder.push(charstr);
                inner = intag = intagin = false;
                continue;
            }
        }

        if (inscript || incss) {
            htmlBuilder.push(charstr);
            continue;
        } else {
            if (inner) {
                htmlBuilder.push(charstr);
            } else {
                if (charstr === '\r' || charstr === '\n' || charstr === '\t')
                    continue;
                innerTextBuilder.push(charstr);
            }
        }
        //maybe <...div[>] or </div[>] or <% a [>] 5 %> or <div ...  <% a [>] 5 %>[>]
        if (charstr === '>') {
            if (contents[i - 1] !== '%') {
                intag = false;
                inner = false;
            } else {
                if (!intag) {
                    inner = false;
                    intagin = false;
                }
            }
        }
    }
    return htmlBuilder.join('');
}


function OptimizeCSS(str, data, _hexo, _path) {
    var hexo = _hexo||this,
        options = hexo.config.css_minifier;
    // Return if disabled.
    if (false === options.enable) return;

    var path = data.path || _path;
    var exclude = options.exclude;
    if (exclude && !Array.isArray(exclude)) exclude = [exclude];

    if (path && exclude && exclude.length) {
        for (var i = 0, len = exclude.length; i < len; i++) {
            if (minimatch(path, exclude[i])) return str;
        }
    }

    var log = hexo.log || console.log;
    // var result = MoreCSS.compress(str, options.radical);
    // var saved = ((str.length - result.length) / str.length * 100).toFixed(2);
    // log.log('update Optimize CSS: %s [ %s saved]', path, saved + '%');
    // return result;

    return new Promise(function (resolve, reject) {
        new CleanCSS(options).minify(str, function (err, result) {
            if (err) return reject(err);
            var saved = ((str.length - result.styles.length) / str.length * 100).toFixed(2);
            resolve(result.styles);
            log.log('update Optimize CSS: %s [ %s saved]', path, saved + '%');
        });
    });
}

function OptimizeJS(str, data, _hexo, _path) {
    var hexo = _hexo||this,
        options = hexo.config.js_minifier;
    // Return if disabled.
    if (false === options.enable) return;

    var path = data.path || _path;
    var exclude = options.exclude;
    if (exclude && !Array.isArray(exclude)) exclude = [exclude];

    if (path && exclude && exclude.length) {
        for (var i = 0, len = exclude.length; i < len; i++) {
            if (minimatch(path, exclude[i])) return str;
        }
    }

    var log = hexo.log || console;
    var result = UglifyJS.minify(str, options);
    var saved = ((str.length - result.code.length) / str.length * 100).toFixed(2);
    log.log('update Optimize JS: %s [ %s saved]', path, saved + '%');

    return result.code;
}

// Configure.
var streamToArrayAsync = Promise.promisify(streamToArray);

function OptimizeImage() {
    // Init.
    var hexo = this,
        options = hexo.config.image_minifier,
        route = hexo.route;

    // Return if disabled.
    if (false === options.enable) return;

    // Filter routes to select all images.
    var routes = route.list().filter(function (path) {
        return minimatch(path, '**/*.{gif,jpg,png,svg}', { nocase: true });
    });

    var log = hexo.log || console;
    // Retrieve image contents, and minify it.
    return Promise.map(routes, function (path) {
        // Retrieve and concatenate buffers.
        var stream = route.get(path);
        return streamToArrayAsync(stream)
            .then(function (arr) {
                return Buffer.concat(arr);
            }).then(function (buffer) {
                // Create the Imagemin instance.
                var imageminOption = {
                    plugins: [
                        mozjpeg({ progressive: options.progressive }),
                        gifsicle({ interlaced: options.interlaced }),
                        jpegtran({ progressive: options.progressive }),
                        optipng({ optimizationLevel: options.optimizationLevel }),
                        svgo({ multipass: options.multipass })
                    ]
                };

                // Add additional plugins.
                if (options.pngquant) { // Lossy compression.
                    imageminOption.plugins.push(pngquant());
                }

                return Imagemin.buffer(buffer, imageminOption)
                    .then(function (newBuffer) {
                        var length = buffer.length;
                        if (newBuffer && length > newBuffer.length) {
                            var saved = ((length - newBuffer.length) / length * 100).toFixed(2);
                            log.log('update Optimize IMG: %s [ %s saved]', path, saved + '%');
                            route.set(path, newBuffer); // Update the route.
                        }
                    });
            });
    });
}

module.exports = {
    optimizeHTML: OptimizeHTML,
    optimizeCSS: OptimizeCSS,
    optimizeJS: OptimizeJS,
    optimizeImage: OptimizeImage
};