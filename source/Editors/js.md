---
title: JavaScript Minifier and Beautifier
date: 2016-08-15 13:49:34
noSidebar: true
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

<script src="/libraries/math.js"></script>

<script src="/libraries/common.js"></script>

<script src="/libraries/checksum.js"></script>

<script src="/libraries/jseditor.js"></script>

<style type="text/css">
.CodeMirror { /* not at all stolen from http://jsbeautifier.org/ */
    border: 1px solid #ccc;
    height: 450px;
    font-size: 90%;
    margin-bottom: 6px;
    background: white;
}
</style>

<script type="text/javascript">
/*globals removeDuplicateLines, removeEmptyLines, trimLines, re_escape_n, re_escape, descape, jsonEscape, minify, beautify, escapeNonPrintable, escapeNonPrintableJSON, unZalgo, fromBinary, toBinary, toHex, fromHex, toDec, fromDec, doChecksum, titleCase, htmlEscape*/
/*exported removeDuplicateLines, removeEmptyLines, trimLines, re_escape_n, re_escape, descape, jsonEscape, minify, beautify, escapeNonPrintable, escapeNonPrintableJSON, unZalgo, fromBinary, toBinary, toHex, fromHex, toDec, fromDec, doChecksum, titleCase, htmlEscape*/

(function() {
  'use strict';
  var queryId = document.getElementById.bind(document);

  window.onload = function() {
    window.myCodeMirror = CodeMirror(document.getElementById('textfield'), {
      value: "// Minifier powered by UglifyJS2\nvar a = 0; var b = 'abc';\n\n/** UglifyJS is released under the BSD license:\n\nCopyright 2012-2013 (c) Mihai Bazon <mihai.bazon@gmail.com>\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions\nare met:\n\n    * Redistributions of source code must retain the above\n      copyright notice, this list of conditions and the following\n      disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials\n      provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY\nEXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE\nLIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,\nOR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\nPROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\nPROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR\nTORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF\nTHE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGE. */",
      mode:  "css",
      lineWrapping: true,
      lineNumbers: true
    });

    // Escape
    queryId('do-esc').onclick = makeFunc(descape, 'Could not escape: ');
    queryId('do-un-esc').onclick = makeFunc(undescape, 'Could not escape: ');
    // Encode URI
    queryId('do-enc').onclick = makeFunc(encodeURI, 'Could not encode: ');
    queryId('do-un-enc').onclick = makeFunc(decodeURI, 'Could not encode: ');
    // Escape RegExp
    queryId('do-resc').onclick = makeFunc(re_escape, 'Could not escape: ');
    queryId('do-un-resc').onclick = makeFunc(un_re_escape, 'Could not escape: ');
    // Escape RegExp (no newlines)
    queryId('do-resc2').onclick = makeFunc(re_escape_n, 'Could not escape: ');
    queryId('do-un-resc2').onclick = makeFunc(un_re_escape_n, 'Could not escape: ');
    // Escape JSON
    queryId('do-jesc').onclick = makeFunc(jsonEscape, 'Could not escape: ');
    //queryId('do-un-jesc').onclick = makeFunc(unjsonEscape, 'Could not escape: ');
    // Escape HTML
    queryId('do-htmlesc').onclick = makeFunc(htmlEscape, 'Could not escape: ');
    queryId('do-un-htmlesc').onclick = makeFunc(unhtmlEscape, 'Could not escape: ');
    
    // Minify
    queryId('do-min').onclick = makeFunc(minify, 'Could not minify: ');
    // Beautify
    queryId('do-bt').onclick = makeFunc(beautify, 'Could not beautify: ');
    // Remove duplicate lines
    queryId('do-dupl').onclick = makeFunc(function(text) {
      var out = removeDuplicateLines(text);

      outputText(out[1]);

      return out[0];
    }, 'Could not remove duplicate lines: ');
    // Remove empty lines
    queryId('do-reme').onclick = makeFunc(removeEmptyLines, 'Could not remove empty lines: ');
    // Trim lines
    queryId('do-trim').onclick = makeFunc(trimLines, 'Could not trim lines: ');
    // Escape non-printable characters
    queryId('do-reprint').onclick = makeFunc(escapeNonPrintable, 'Could not escape non-printable characters: ');
    // Escape non-printable characters (JSON)
    queryId('do-prijson').onclick = makeFunc(escapeNonPrintableJSON, 'Could not escape non-printable characters: ');
    // Remove combining characters
    queryId('do-zalgo').onclick = makeFunc(unZalgo, 'Could not remove combining characters: ');


    // list tools:
    queryId('list-generate').onclick = makeFunc(generateNumberList, 'Could not generate list of numbers: ');
    queryId('list-randomize').onclick = makeFunc(randomizeList, 'Could not randomize list of numbers: ');
    queryId('list-reverse').onclick = makeFunc(reverseList, 'Could not reverse list of numbers: ');

    // linters:
    // jshint
    queryId('do-jshint').onclick = makeFunc(function(text) {
      var options = JSON.parse(queryId('jshint-rules').textContent);
      JSHINT(text, options);
      var errors = JSHINT.data().errors;
      //if (errors.length === 0) return text;
      var errText = [];
      for (var i = errors.length - 1; i >= 0; i--) {
        errText.push(errors[i].id + ' ' + errors[i].code + ', ' + errors[i].line + ':' + errors[i].character + ' - ' + errors[i].raw);
      }

      outputText(errText.join('<br>'));

      return text;
    }, 'Could not run JSHint: ');
    // code eval
    queryId('do-eval').onclick = makeFunc(function(text) {
      var evaled = eval(text);

      if (evaled !== undefined)
        outputText(evaled);

      return text;
    }, 'Could not execute code lines: ');
    // arnoldjs code eval
    queryId('do-arnold').onclick = makeFunc(function(text) {
      var evaled = eval(transpileArnold(text));

      if (evaled !== undefined)
        outputText(evaled);

      return text;
    }, 'Could not execute code lines: ');
    // brainfuck code eval
    queryId('do-bfuk').onclick = makeFunc(function(text) {
      var evaled = runBrainfuck(text);

      if (evaled !== undefined)
        outputText(evaled);

      return text;
    }, 'Could not execute code lines: ');
    // fishq9+ code eval
    queryId('do-fishq9').onclick = makeFunc(function(text) {
      var lintOutput = document.querySelector('#lint-output');
      makeVisible(lintOutput);
        lintOutput.innerHTML = "(Executing script, no result yet)";

      fishq9plus(function(str) {
        lintOutput.innerHTML = lintOutput.innerHTML + '\n' + str;
      }, text);

      return text;
    }, 'Could not execute code lines: ');

    queryId('do-evmath').onclick = makeFunc(function(text) {
      if (!window.parser) {
        window.parser = math.parser();
      }
      var res = window.parser.eval(text);
      var resStr = math.format(res, { precision: 14 });
      var unRoundedStr = math.format(res);
      if (unRoundedStr.length - resStr.length > 4) {
        outputText('<p>' + resStr + '</p><p style="margin-bottom: 0;">This result contains a round-off error which is hidden from the output. The unrounded result is:<br>' + 
               unRoundedStr + 
               '<br><a href="http://mathjs.org/docs/datatypes/numbers.html#roundoff-errors" style="color: #c8ecf6;">read more...</a></p>');
      } else {
        outputText(resStr);
      }

      return text;
    }, 'Could not eval math: ');
    

    queryId('do-264').onclick = makeFunc(btoa, 'Could not convert to Base64: ');
    queryId('do-f64').onclick = makeFunc(atob, 'Could not convert from Base64: ');
    queryId('do-2hex').onclick = makeFunc(toHex, 'Could not convert to Hex: ');
    queryId('do-fhex').onclick = makeFunc(fromHex, 'Could not convert from Hex: ');
    queryId('do-2dec').onclick = makeFunc(toDec, 'Could not convert to Decimal: ');
    queryId('do-fdec').onclick = makeFunc(fromDec, 'Could not convert from Decimal: ');
    queryId('do-2bi').onclick = makeFunc(toBinary, 'Could not convert to Binary: ');
    queryId('do-fbi').onclick = makeFunc(fromBinary, 'Could not convert from Binary: ');
    queryId('do-checksm').onclick = makeFunc(doChecksum, 'Could not calculate checksum: ');
    
    queryId('do-rand').onclick = makeFunc(function() {
      return Math.random().toString();
    }, 'Could not generate random number: ');
    queryId('do-mceil').onclick = makeFunc(Math.ceil, 'How does this even happen?! ');
    queryId('do-mflor').onclick = makeFunc(Math.floor, 'How does this even happen?! ');
    queryId('do-mrond').onclick = makeFunc(Math.round, 'How does this even happen?! ');

    queryId('do-dlowercase').onclick = makeFunc(Function.apply.bind(String.prototype.toLowerCase), 'Could not convert to lowercase: ');
    queryId('do-duppercase').onclick = makeFunc(Function.apply.bind(String.prototype.toUpperCase), 'Could not convert to uppercase: ');
    queryId('do-dtitlecase').onclick = makeFunc(titleCase, 'How does this even happen?! ');

  }; // jshint ignore:line

  window.addEventListener("load", function() {
    var elem = queryId('txt-header');
    if (elem.scrollIntoView) elem.scrollIntoView();
    else window.scroll(0, window.hFindPos(elem));
  }, true); // jshint ignore:line
})();
</script>

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

<button class="submit hansen-wrap" id="do-jshint">JSHint</button> <button class="submit hansen-wrap" id="do-eval">Execute (Javascript using eval)</button> <button class="submit hansen-wrap" id="do-arnold">Execute (ArnoldC using ArnoldJS)</button> <button class="submit hansen-wrap" id="do-bfuk">Execute (Brainfuck)</button> <button class="submit hansen-wrap" id="do-fishq9">Execute (FisHQ9+)</button> <button class="submit hansen-wrap" id="do-evmath">Evaluate mathematical expression</button>

<table style="width:100%;color: inherit;font-size: inherit;border: none;">
  <tr>
    <td>
      <h1 class="hansen-header">Encryption Tools</h1>
      <button class="submit hansen-wrap" id="do-264">Convert to Base64</button> <button class="submit hansen-wrap" id="do-f64">Convert from Base64</button> <br>
      <button class="submit hansen-wrap" id="do-2hex">Convert to Hex</button> <button class="submit hansen-wrap" id="do-fhex">Convert from Hex</button> <br>
      <button class="submit hansen-wrap" id="do-2dec">Convert to Decimal</button> <button class="submit hansen-wrap" id="do-fdec">Convert from Decimal</button> <br>
      <button class="submit hansen-wrap" id="do-2bi">Convert to Binary</button> <button class="submit hansen-wrap" id="do-fbi">Convert from Binary</button> <br>
      <button class="submit hansen-wrap" id="do-checksm">Get checksum (CRC32, MD5)</button>
    </td>
    <td>
      <h1 class="hansen-header">Math Tools</h1>
      <button class="submit hansen-wrap" id="do-rand">Generate random number (0-1)</button> <br>
      <button class="submit hansen-wrap" id="do-mceil">Round number up (ceil)</button> <br>
      <button class="submit hansen-wrap" id="do-mflor">Round number down (floor)</button> <br>
      <button class="submit hansen-wrap" id="do-mrond">Round number</button>
    </td>
  </tr>
  <tr>
    <td>
      <h1 class="hansen-header">Escapism Tools <span style="font-size: 6pt;font-weight: initial;font-style: italic;">because your life is no fun</span></h1>
      <button class="submit hansen-wrap" id="do-esc">Escape (String)</button> <br>
      <button class="submit hansen-wrap" id="do-enc">Encode URI</button> <br>
      <button class="submit hansen-wrap" id="do-resc">Escape (RegExp)</button> <br>
      <button class="submit hansen-wrap" id="do-resc2">Escape (RegExp without newlines)</button> <br>
      <button class="submit hansen-wrap" id="do-htmlesc">Escape (HTML)</button> <br>
      <button class="submit hansen-wrap" id="do-jesc">Escape (JSON)</button>
    </td>
    <td>
      <h1 class="hansen-header">Descapism Tools <span style="font-size: 6pt;font-weight: initial;font-style: italic;">because making up words is fun</span></h1>
      <button class="submit hansen-wrap" id="do-un-esc">Unescape (String)</button> <br>
      <button class="submit hansen-wrap" id="do-un-enc">Decode URI</button> <br>
      <button class="submit hansen-wrap" id="do-un-resc">Unescape (RegExp)</button> <br>
      <button class="submit hansen-wrap" id="do-un-resc2">Unescape (RegExp without newlines)</button> <br>
      <button class="submit hansen-wrap" id="do-un-htmlesc">Unescape (HTML)</button> <br>
    </td>
  </tr>
</table> 

<h1 class="hansen-header" id="txt-header" onload="showHeader();">General Text Tools</h1>

<button class="submit hansen-wrap" id="do-min">Minify</button> <button class="submit hansen-wrap" id="do-bt">Beautify</button> <button class="submit hansen-wrap" id="do-dupl">Remove duplicate lines</button> <input id="chk-case-sensitive" type="checkbox"> Case-sensitive <button class="submit hansen-wrap" id="do-reme">Remove empty lines</button> <button class="submit hansen-wrap" id="do-trim">Trim lines</button> <button class="submit hansen-wrap" id="do-reprint">Escape non-printable characters</button> <button class="submit hansen-wrap" id="do-prijson">Escape non-printable characters (JSON)</button> <button class="submit hansen-wrap" id="do-zalgo">Remove combining characters</button> <button class="submit hansen-wrap" id="do-dlowercase">Convert to lowercase</button> <button class="submit hansen-wrap" id="do-duppercase">Convert to uppercase</button> <button class="submit hansen-wrap" id="do-dtitlecase">Convert to titlecase</button>

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