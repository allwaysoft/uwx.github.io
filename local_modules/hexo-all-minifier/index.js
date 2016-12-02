/* jshint node:true, strict:false*/
/* global hexo */

var assign = require('object-assign');
const minimatch = require('minimatch');
const async = require('async');
const accum = require('accum');
const hasProp = {}.hasOwnProperty;
const extend = function (child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key]; }

  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child; };

const Applier = (function (superClass) {
  extend(Applier, superClass);

  function Applier(opts, applyFunction, _hexo, _path) {
    var defaults;
    Applier.__super__.constructor.call(this);
    defaults = {
      collapseWhitespace: true,
      conservativeCollapse: false,
      removeAttributeQuotes: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    };
    this.opts = assign({}, opts, defaults);
    this.applyFunction = applyFunction;
    this._hexo = _hexo;
    this._path = _path;
  }

  Applier.prototype._transform = function (chunk, encoding, cb) {
    var err;
    try {
      chunk = this.applyFunction(chunk.toString('utf8'), this.opts, this._hexo, this._path);
    } catch (error) {
      err = error;
      console.trace(error);
      throw err;
    }
    this.push(chunk);
    return cb();
  };

  return Applier;

})(require('stream').Transform);

function setRoutes(ctx, opts, resolve, reject, route, paths, applyFunction, _hexo) {
  return async.forEach(paths, function (path, callback) {
    return route.get(path).pipe(new Applier(opts, applyFunction, _hexo, path)).on('error', function (e) {
      return ctx.log.debug("Minifier Error: %s", e);
    }).pipe(accum.buffer(function (buffer) {
      route.set(path, buffer);
      return callback();
    }));
  }, function () {
    return resolve();
  });
}

function makeFunc(func, extension, opt, _hexo) {
  return function() {
    // ???
    //let hexo = this || module.exports;
    let route = hexo.route;
    let opts = hexo.config[opt];
    let routes = route.list().filter(function (path) {
      return minimatch(path, '**/*.' + extension, {
        nocase: true
      });
    });
    return new Promise(function (resolve, reject) {
      return setRoutes(hexo, opts, resolve, reject, route, routes, func, _hexo);
    });
  };
}

//module.exports = function (hexo) {
if (false === hexo.config.hasOwnProperty('all_minifier') || true === hexo.config.all_minifier) {
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


  var filter = require('./lib/filter');
  //        hexo.extend.filter.register('after_render:html', filter.optimizeHTML);
  //
  //        hexo.extend.filter.register('after_render:css', filter.optimizeCSS);
  //
  //        hexo.extend.filter.register('after_render:js', filter.optimizeJS);

  hexo.extend.filter.register('after_generate', makeFunc(filter.optimizeHTML, 'html', 'html_minifier', hexo));
  hexo.extend.filter.register('after_generate', makeFunc(filter.optimizeCSS, 'css', 'css_minifier', hexo));
  hexo.extend.filter.register('after_generate', makeFunc(filter.optimizeJS, 'js', 'js_minifier', hexo));
  hexo.extend.filter.register('after_generate', filter.optimizeImage);
}
//}
