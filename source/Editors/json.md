---
title: Json Minifier and Beautifier
date: 2016-08-15 13:49:34
---

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/javascript/javascript.js"></script>

<script src="/libraries/jsonlint.js"></script>

<script src="/libraries/jsonlint-stuff.js"></script>

<script src="/libraries/common.js"></script>

<script type="text/javascript">
window.onload = function() {
  window.myCodeMirror = CodeMirror(document.getElementById('textfield'), {
    value: "[\n  \"it's hip to be square!\"\n]\n",
    mode:  "javascript",
    lineWrapping: true,
    lineNumbers: true
  });
  // Minify
  document.getElementById('do-min').onclick =  makeFunc(function(text) {
    return JSON.stringify(JSON.parse(text));
  }, 'Could not minify: ');

  // Beautify
  document.getElementById('do-bt').onclick =  makeFunc(function(text) {
    return JSON.stringify(JSON.parse(text), null, 2);
  }, 'Could not beautify: ');

  // Lint
  document.getElementById('do-lint').onclick = makeFunc(function(text) {

    try {
      var output = jsonlint.parse(text);
      outputText('No errors found, ol\' chap');
      return JSON.stringify(output, null, 2);
    } catch (e) {
      outputText(e.toString());
      return text;
    }

  }, 'Could not run CSSLint: ');

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

<button class="submit" id="do-min">Minify</button> <button class="submit" id="do-bt">Beautify</button> <button class="submit" id="do-lint">Lint</button>

<div id="textfield"></div>

<div id="lint-output" style="display: none !important;">placeholder text, this should not be visible</div>
