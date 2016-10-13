---
title: JavaScript Minifier and Beautifier
date: 2016-08-15 13:49:34
---

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/css/css.js"></script>

<script src="/libraries/uglify.js"></script>

<script src="/libraries/beautify.js"></script>

<script type="text/javascript">
window.onload = function() {
  function re_escape_n(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  function re_escape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\n/g, '\\n');
  }

  function descape(string) {
    /*
    From joliss/js-string-escape under MIT:

    The MIT License (MIT)

    Copyright (c) 2013 Jo Liss

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

     */
    return ('' + string).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
      // Escape all characters not included in SingleStringCharacters and
      // DoubleStringCharacters on
      // http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
      switch (character) {
        case '"':
        case "'":
        case '\\':
          return '\\' + character;
        // Four possible LineTerminator characters need to be escaped:
        case '\n':
          return '\\n';
        case '\r':
          return '\\r';
        case '\u2028':
          return '\\u2028';
        case '\u2029':
          return '\\u2029';
      }
    });
  }

  function jsonEscape(str) {
    return str.replace(/\"/g, '\\"').replace(/\r?\n/g, '\\n');
  }

  function minify(__str) {

    var options = UglifyJS.defaults({}, {
        spidermonkey     : false,
        outSourceMap     : null,
        sourceRoot       : null,
        inSourceMap      : null,
        sourceMapUrl     : null,
        fromString       : false,
        warnings         : false,
        mangle           : {},
        mangleProperties : false,
        nameCache        : null,
        output           : null,
        compress         : {},
        parse            : {}
    });
    UglifyJS.base54.reset();

    // 1. parse
    var toplevel = null,
        sourcesContent = {};

    if (options.spidermonkey) {
        toplevel = UglifyJS.AST_Node.from_mozilla_ast(files);
    } else {
      toplevel = UglifyJS.parse(__str, {
        filename: 'inlinefile.js',
        toplevel: toplevel,
        bare_returns: options.parse ? options.parse.bare_returns : undefined
      });
    }

    if (options.wrap) {
      toplevel = toplevel.wrap_commonjs(options.wrap, options.exportAll);
    }

    // 2. compress
    if (options.compress) {
        var compress = { warnings: options.warnings };
        UglifyJS.merge(compress, options.compress);
        toplevel.figure_out_scope();
        var sq = UglifyJS.Compressor(compress);
        toplevel = sq.compress(toplevel);
    }

    // 3. mangle properties
    if (options.mangleProperties || options.nameCache) {
        options.mangleProperties.cache = UglifyJS.readNameCache(options.nameCache, "props");
        toplevel = UglifyJS.mangle_properties(toplevel, options.mangleProperties);
        UglifyJS.writeNameCache(options.nameCache, "props", options.mangleProperties.cache);
    }

    // 4. mangle
    if (options.mangle) {
        toplevel.figure_out_scope(options.mangle);
        toplevel.compute_char_frequency(options.mangle);
        toplevel.mangle_names(options.mangle);
    }

    // 5. output
    var inMap = options.inSourceMap;
    var output = {};
    //if (typeof options.inSourceMap == "string") {
    //    inMap = JSON.parse(fs.readFileSync(options.inSourceMap, "utf8"));
    //}
    if (options.outSourceMap) {
        output.source_map = UglifyJS.SourceMap({
            file: options.outSourceMap,
            orig: inMap,
            root: options.sourceRoot
        });
        if (options.sourceMapIncludeSources) {
            for (var file in sourcesContent) {
                if (sourcesContent.hasOwnProperty(file)) {
                    output.source_map.get().setSourceContent(file, sourcesContent[file]);
                }
            }
        }

    }
    if (options.output) {
        UglifyJS.merge(output, options.output);
    }
    var stream = UglifyJS.OutputStream(output);
    toplevel.print(stream);

    var mappingUrlPrefix = "\n//# sourceMappingURL=";
    if (options.outSourceMap && typeof options.outSourceMap === "string" && options.sourceMapUrl !== false) {
        stream += mappingUrlPrefix + (typeof options.sourceMapUrl === "string" ? options.sourceMapUrl : options.outSourceMap);
    }

    var source_map = output.source_map;
    if (source_map) {
        source_map = source_map + "";
    }

    //return {
    //    code : stream + "",
    //    map  : source_map
    //};

    return stream + "";

  }
  function beautify(text) {
    return js_beautify(text, {
      'indent_size' : 2,
      'indent_char' : ' '
    });
  }
  var myCodeMirror = CodeMirror(document.getElementById('textfield'), {
    value: "// Minifier powered by UglifyJS2\nvar a = 0; var b = 'abc';\n\n/** UglifyJS is released under the BSD license:\n\nCopyright 2012-2013 (c) Mihai Bazon <mihai.bazon@gmail.com>\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions\nare met:\n\n    * Redistributions of source code must retain the above\n      copyright notice, this list of conditions and the following\n      disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials\n      provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY\nEXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE\nLIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,\nOR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\nPROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\nPROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR\nTORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF\nTHE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGE. */",
    mode:  "css",
    lineWrapping: true,
    lineNumbers: true
  });
  // Minify
  document.getElementById('do-min').onclick = function() {
    try {
      myCodeMirror.setValue(minify(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not minify: " + err);
      console.trace(err);
    }
  };
  // Beautify
  document.getElementById('do-bt').onclick = function() {
    try {
      myCodeMirror.setValue(beautify(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not beautify: " + err);
      console.trace(err);
    }
  };
  // Escape
  document.getElementById('do-esc').onclick = function() {
    try {
      myCodeMirror.setValue(descape(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not escape: " + err);
      console.trace(err);
    }
  };
  // Encode URI
  document.getElementById('do-enc').onclick = function() {
    try {
      myCodeMirror.setValue(encodeURI(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not encode: " + err);
      console.trace(err);
    }
  };
  // Escape RegExp
  document.getElementById('do-resc').onclick = function() {
    try {
      myCodeMirror.setValue(re_escape(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not escape: " + err);
      console.trace(err);
    }
  };
  // Escape RegExp (no newlines)
  document.getElementById('do-resc2').onclick = function() {
    try {
      myCodeMirror.setValue(re_escape_n(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not escape: " + err);
      console.trace(err);
    }
  };
  // Escape JSON
  document.getElementById('do-jesc').onclick = function() {
    try {
      myCodeMirror.setValue(jsonEscape(myCodeMirror.getValue()));
    } catch (err) {
      alert("Could not escape: " + err);
      console.trace(err);
    }
  };
};
</script>

<style type="text/css">
.CodeMirror { /* not at all stolen from http://jsbeautifier.org/ */
    border: 1px solid #ccc;
    height: 450px;
    font-size: 90%;
    margin-bottom: 6px;
    background: white;
}
</style>

<button class="submit hansen-wrap" id="do-min">Minify</button> <button class="submit hansen-wrap" id="do-bt">Beautify</button> <button class="submit hansen-wrap" id="do-esc">Escape (String)</button> <button class="submit hansen-wrap" id="do-enc">Encode URI</button> <button class="submit hansen-wrap" id="do-resc">Escape (RegExp)</button> <button class="submit hansen-wrap" id="do-resc2">Escape (RegExp without newlines)</button> <button class="submit hansen-wrap" id="do-jesc">Escape (JSON)</button> 

<div id="textfield"></div>