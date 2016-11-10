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
</table> 

<h1 class="hansen-header" id="txt-header" onload="showHeader();">General Text Tools</h1>

<button class="submit hansen-wrap" id="do-min">Minify</button> <button class="submit hansen-wrap" id="do-bt">Beautify</button> <button class="submit hansen-wrap" id="do-esc">Escape (String)</button> <button class="submit hansen-wrap" id="do-enc">Encode URI</button> <button class="submit hansen-wrap" id="do-resc">Escape (RegExp)</button> <button class="submit hansen-wrap" id="do-resc2">Escape (RegExp without newlines)</button> <button class="submit hansen-wrap" id="do-jesc">Escape (JSON)</button> <button class="submit hansen-wrap" id="do-dupl">Remove duplicate lines</button> <input id="chk-case-sensitive" type="checkbox"> Case-sensitive <button class="submit hansen-wrap" id="do-reme">Remove empty lines</button> <button class="submit hansen-wrap" id="do-trim">Trim lines</button> <button class="submit hansen-wrap" id="do-reprint">Escape non-printable characters</button> <button class="submit hansen-wrap" id="do-prijson">Escape non-printable characters (JSON)</button> <button class="submit hansen-wrap" id="do-zalgo">Remove combining characters</button> <button class="submit hansen-wrap" id="do-dlowercase">Convert to lowercase</button> <button class="submit hansen-wrap" id="do-duppercase">Convert to uppercase</button> <button class="submit hansen-wrap" id="do-dtitlecase">Convert to titlecase</button>

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