---
title: JavaScript Minifier and Beautifier
date: 2016-08-15 13:49:34
---

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/css/css.js"></script>

<script src="/libraries/uglify.js"></script>

<script src="/libraries/jshint.js"></script>

<script src="/libraries/beautify.js"></script>

<script src="/libraries/text-mechanic.js"></script>

<script src="/libraries/non-printable-chars-regex.js"></script>

<script src="/libraries/arnoldjs.js"></script>

<script src="/libraries/brainfuck.js"></script>

<script src="/libraries/hq9plus.js"></script>

<script src="/libraries/checksum1.js"></script>

<script src="/libraries/crc32.js"></script>

<script src="/libraries/md5.js"></script>

<script src="/libraries/common.js"></script>

<script type="text/javascript">
window.onload = function() {
  'use strict';

  function removeDuplicateLines(text) {
    text = text.replace(/\r/g, '');

    const inputArr = text.split('\n');
    const len = inputArr.length;
    const outputArray = [];

    let n = 0;
    let processedLines = 0;

    const hash = {};
    let xkey = '';
    let hkey = '';

    const caseSensitive = document.getElementById('chk-case-sensitive').checked;
    //tff
    if (caseSensitive) {
      for (let x = 0; x < len; x++) {
        xkey = inputArr[x];
        hkey = ' ' + xkey;
        if (!hash[hkey] || xkey === '') {
          hash[hkey] = x + 1;
          outputArray[n] = xkey;
          n++;
        } else { 
          processedLines++;
        }
      }
    } else {
      for (let x = 0; x < len; x++) {
        xkey = inputArr[x];
        hkey = ' ' + xkey.toUpperCase();
        if (!hash[hkey] || xkey === '') {
          hash[hkey] = x + 1;
          outputArray[n] = xkey;
          n++;
        } else { 
          processedLines++;
        }
      }
    }
    const lines = processedLines === 1 ? 'line' : 'lines';
    
    return [outputArray.join('\n'), processedLines + ' ' + lines + ' removed.'];
  }

  function removeEmptyLines(str) {
    const input = str.replace(/\r/g, '').split('\n');
    const out = [];
    const length = input.length;

    for (let i = 0; i < length; i++) {
      if (input[i].trim() !== '') {
        out.push(input[i]);
      }
    }

    return out.join('\n');
  }

  function trimLines(str) {
    const input = str.replace(/\r/g, '').split('\n');
    const out = [];
    const length = input.length;

    for (let i = 0; i < length; i++) {
      out.push(input[i].trim());
    }

    return out.join('\n');
  }

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

  window.myCodeMirror = CodeMirror(document.getElementById('textfield'), {
    value: "// Minifier powered by UglifyJS2\nvar a = 0; var b = 'abc';\n\n/** UglifyJS is released under the BSD license:\n\nCopyright 2012-2013 (c) Mihai Bazon <mihai.bazon@gmail.com>\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions\nare met:\n\n    * Redistributions of source code must retain the above\n      copyright notice, this list of conditions and the following\n      disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials\n      provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY\nEXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE\nLIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,\nOR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\nPROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\nPROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR\nTORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF\nTHE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGE. */",
    mode:  "css",
    lineWrapping: true,
    lineNumbers: true
  });

  function escapeNonPrintable(str) {
    // window.MATCH_NON_PRINTABLE_CHARS is from libraries/non-printable-chars-regex.js
// THE THEORY: (but not actually how it seems to work)
//    return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
//      var codePoint = match.codePointAt(0);
//      var codeVal = codePoint.toString(16);
//      if (codePoint < 256) {
//        return '\\x' + ("00" + codeVal).slice(-2); // not in JSON
//      } else if (codePoint < 65536) {
//        return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
//      } else {
//        return '\\u{' + codeVal + '}' // new in ES6
//      }
//    });
    return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
      var codePoint = match.codePointAt(0);
      var codeVal = codePoint.toString(16);
      if (codePoint < 256) {
        return '\\x' + ("00" + codeVal).slice(-2); // not in JSON
      } else {
        return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
      }
    });
  }

  function escapeNonPrintableJSON(str) {
    return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
      var codePoint = match.codePointAt(0);
      var codeVal = codePoint.toString(16);
      return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
    });
  }

  function unZalgo(str) {
    return str.replace(/[\u0300–\u036F\u1AB0–\u1AFF\u1DC0–\u1DFF\u20D0–\u20FF\uFE20–\uFE2F\u0483-\u0486\u05C7\u0610-\u061A\u0656-\u065F\u0670\u06D6-\u06ED\u0711\u0730-\u073F\u0743-\u074A\u0F18-\u0F19\u0F35\u0F37\u0F72-\u0F73\u0F7A-\u0F81\u0F84\u0e00-\u0eff\uFC5E-\uFC62]/g, '');
  }

  function fromBinary(str) {
    str = str.replace(/\s*/g, ''); // remove whitespace
    str = str.match(/.{1,7}/g); // split 8 chars
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push(parseInt(str[i], 2));
    }
    return outstr.join('');
  }

  function toBinary(str) {
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push(str[i].charCodeAt(i).toString(2));
    }
    return outstr.join(' ');
  }

  function toHex(str) {
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push((str[i].charCodeAt(i) % 256).toString(16)); // % 256 gets only the lower byte
    }
    return outstr.join(' ');
  }

  function fromHex(str) {
    str = str.replace(/\s*/g, ''); // remove whitespace
    str = str.match(/../g); // split 2 chars
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push(String.fromCharCode(parseInt(str[i], 16)));
    }
    return outstr.join('');
  }

  function toDec(str) {
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push((str[i].charCodeAt(i) % 256).toString()); // % 256 gets only the lower byte
    }
    return outstr.join(' ');
  }

  function fromDec(str) {
    str = str.split(' '); // split by space
    var outstr = [];
    for (var i = 0; i < str.length; i++) {
      outstr.push(String.fromCharCode(parseInt(str[i])));
    }
    return outstr.join('');
  }

  function doChecksum(str) {
    var achk = checksum(str);
    var bchk = crc32(str);
    var cchk = MD5(str);
    outputText('Checksum: ' + achk + '\nCRC32: ' + bchk + '\nMD5: ' + cchk);
    return str;
  }

  // Minify
  document.getElementById('do-min').onclick = makeFunc(minify, 'Could not minify: ');
  // Beautify
  document.getElementById('do-bt').onclick = makeFunc(beautify, 'Could not beautify: ');
  // Escape
  document.getElementById('do-esc').onclick = makeFunc(descape, 'Could not escape: ');
  // Encode URI
  document.getElementById('do-enc').onclick = makeFunc(encodeURI, 'Could not encode: ');
  // Escape RegExp
  document.getElementById('do-resc').onclick = makeFunc(re_escape, 'Could not encode: ');
  // Escape RegExp (no newlines)
  document.getElementById('do-resc2').onclick = makeFunc(re_escape_n, 'Could not encode: ');
  // Escape JSON
  document.getElementById('do-jesc').onclick = makeFunc(jsonEscape, 'Could not encode: ');
  // Remove duplicate lines
  document.getElementById('do-dupl').onclick = makeFunc(function(text) {
    var out = removeDuplicateLines(text);

    outputText(out[1]);

    return out[0];
  }, 'Could not remove duplicate lines: ');
  // Remove empty lines
  document.getElementById('do-reme').onclick = makeFunc(removeEmptyLines, 'Could not remove empty lines: ');
  // Trim lines
  document.getElementById('do-trim').onclick = makeFunc(trimLines, 'Could not trim lines: ');
  // Escape non-printable characters
  document.getElementById('do-reprint').onclick = makeFunc(escapeNonPrintable, 'Could not escape non-printable characters: ');
  // Escape non-printable characters (JSON)
  document.getElementById('do-prijson').onclick = makeFunc(escapeNonPrintableJSON, 'Could not escape non-printable characters: ');
  // Remove combining characters
  document.getElementById('do-zalgo').onclick = makeFunc(unZalgo, 'Could not remove combining characters: ');


  // list tools:
  document.getElementById('list-generate').onclick = makeFunc(generateNumberList, 'Could not generate list of numbers: ');
  document.getElementById('list-randomize').onclick = makeFunc(randomizeList, 'Could not randomize list of numbers: ');
  document.getElementById('list-reverse').onclick = makeFunc(reverseList, 'Could not reverse list of numbers: ');

  // linters:
  // jshint
  document.getElementById('do-jshint').onclick = makeFunc(function(text) {
    var options = JSON.parse(document.getElementById('jshint-rules').textContent);
    JSHINT(text, options);
    var errors = JSHINT.data().errors;
    if (errors.length === 0) return text;
    var errText = [];
    for (var i = errors.length - 1; i >= 0; i--) {
      errText.push(errors[i].id + ' ' + errors[i].code + ', ' + errors[i].line + ':' + errors[i].character + ' - ' + errors[i].raw);
    }

    outputText(errText.join('<br>'));

    return text;
  }, 'Could not run JSHint: ');
  // code eval
  document.getElementById('do-eval').onclick = makeFunc(function(text) {
    var evaled = eval(text);

    if (evaled !== undefined)
      outputText(evaled);

    return text;
  }, 'Could not execute code lines: ');
  // arnoldjs code eval
  document.getElementById('do-arnold').onclick = makeFunc(function(text) {
    var evaled = eval(transpileArnold(text));

    if (evaled !== undefined)
      outputText(evaled);

    return text;
  }, 'Could not execute code lines: ');
  // brainfuck code eval
  document.getElementById('do-bfuk').onclick = makeFunc(function(text) {
    var evaled = runBrainfuck(text);

    if (evaled !== undefined)
      outputText(evaled);

    return text;
  }, 'Could not execute code lines: ');
  // fishq9+ code eval
  document.getElementById('do-fishq9').onclick = makeFunc(function(text) {
    var lintOutput = document.querySelector('#lint-output');
    makeVisible(lintOutput);
      lintOutput.innerHTML = "(Executing script, no result yet)";

    fishq9plus(function(str) {
      lintOutput.innerHTML = lintOutput.innerHTML + '\n' + str;
    }, text);

    return text;
  }, 'Could not execute code lines: ');

  document.getElementById('do-264').onclick =  makeFunc(btoa, 'Could not convert to Base64: ');
  document.getElementById('do-f64').onclick =  makeFunc(atob, 'Could not convert from Base64: ');
  document.getElementById('do-2hex').onclick = makeFunc(toHex, 'Could not convert to Hex: ');
  document.getElementById('do-fhex').onclick = makeFunc(fromHex, 'Could not convert from Hex: ');
  document.getElementById('do-2dec').onclick = makeFunc(toDec, 'Could not convert to Decimal: ');
  document.getElementById('do-fdec').onclick = makeFunc(fromDec, 'Could not convert from Decimal: ');
  document.getElementById('do-2bi').onclick =  makeFunc(toBinary, 'Could not convert to Binary: ');
  document.getElementById('do-fbi').onclick =  makeFunc(fromBinary, 'Could not convert from Binary: ');
  document.getElementById('do-checksm').onclick =  makeFunc(doChecksum, 'Could not calculate checksum: ');
  document.getElementById('do-rand').onclick =  makeFunc(function() {
    return Math.random().toString();
  }, 'Could not generate random number: ');
};

//Finds y value of given object
function hFindPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
        curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
  return curtop;
}

document.body.addEventListener("load", function() {
  var elem = document.getElementById('txt-header');
  if (elem.scrollIntoView) elem.scrollIntoView();
  else window.scroll(0, hFindPos(elem));
}, true);
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


<h1 class="hansen-header">Generate List of Sequential Numbers</h1>

<div class="hansen-blok">
  Make a list of numbers starting at
  <input class="hansen-input" id="low_num" maxlength="7" value="1" type="text">
  ending at
  <input class="hansen-input" id="high_num" maxlength="7" value="100" type="text">
  <input id="pad_num" type="checkbox">Pad (001-010-100)
</div>

<div class="hansen-blok">
  Prefix numbers with:
  <input class="hansen-input" id="prefix" value="" type="text">
  and/or suffix with:
  <input class="hansen-input" id="suffix" value="" type="text">
  Join with: <input id="delimiter" value="\x" class="hansen-input" type="text">
</div>

<div class="hansen-blok">
  <button class="submit hansen-wrap" id="list-generate">Generate List of Numbers</button>
  <button class="submit hansen-wrap" id="list-randomize">Randomize List</button>
  <button class="submit hansen-wrap" id="list-reverse">Reverse List</button>
</div>

<h1 class="hansen-header">Code Tools</h1>

<button class="submit hansen-wrap" id="do-jshint">JSHint</button> <button class="submit hansen-wrap" id="do-eval">Execute (Javascript using eval)</button> <button class="submit hansen-wrap" id="do-arnold">Execute (ArnoldC using ArnoldJS)</button> <button class="submit hansen-wrap" id="do-bfuk">Execute (Brainfuck)</button> <button class="submit hansen-wrap" id="do-fishq9">Execute (FisHQ9+)</button>

<h1 class="hansen-header">Encryption Tools</h1>

<button class="submit hansen-wrap" id="do-264">Convert to Base64</button> <button class="submit hansen-wrap" id="do-f64">Convert from Base64</button>
<button class="submit hansen-wrap" id="do-2hex">Convert to Hex</button> <button class="submit hansen-wrap" id="do-fhex">Convert from Hex</button>
<button class="submit hansen-wrap" id="do-2dec">Convert to Decimal</button> <button class="submit hansen-wrap" id="do-fdec">Convert from Decimal</button>
<button class="submit hansen-wrap" id="do-2bi">Convert to Binary</button> <button class="submit hansen-wrap" id="do-fbi">Convert from Binary</button>
<button class="submit hansen-wrap" id="do-checksm">Get checksum (CRC32, MD5)</button>

<h1 class="hansen-header" id="txt-header">General Text Tools</h1>

<button class="submit hansen-wrap" id="do-min">Minify</button> <button class="submit hansen-wrap" id="do-bt">Beautify</button> <button class="submit hansen-wrap" id="do-esc">Escape (String)</button> <button class="submit hansen-wrap" id="do-enc">Encode URI</button> <button class="submit hansen-wrap" id="do-resc">Escape (RegExp)</button> <button class="submit hansen-wrap" id="do-resc2">Escape (RegExp without newlines)</button> <button class="submit hansen-wrap" id="do-jesc">Escape (JSON)</button> <button class="submit hansen-wrap" id="do-dupl">Remove duplicate lines</button> <input id="chk-case-sensitive" type="checkbox"> Case-sensitive <button class="submit hansen-wrap" id="do-reme">Remove empty lines</button> <button class="submit hansen-wrap" id="do-trim">Trim lines</button> <button class="submit hansen-wrap" id="do-reprint">Escape non-printable characters</button> <button class="submit hansen-wrap" id="do-prijson">Escape non-printable characters (JSON)</button> <button class="submit hansen-wrap" id="do-zalgo">Remove combining characters</button> <button class="submit hansen-wrap" id="do-rand">Generate random number (0-1)</button>

<div id="textfield"></div>

<div id="lint-output" style="display: none !important;">placeholder text, this should not be visible</div>

<textarea id="jshint-rules" style="width: 47.48%; height: 15em; resize: vertical;">
{
  "strict": "global",
  "node": true,
  "esnext": true,
  "unused": "vars",
  "bitwise": false,
  "evil": true,
  "varstmt": true,
  "unused": "vars"
} 
</textarea>