---
title: Json Minifier and Beautifier
date: 2016-08-15 13:49:34
---

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/javascript/javascript.js"></script>

<script type="text/javascript">
window.onload = function() {
  var myCodeMirror = CodeMirror(document.getElementById('textfield'), {
    value: "[\n  \"it's hip to be square!\"\n]\n",
    mode:  "javascript",
    lineWrapping: true,
    lineNumbers: true
  });
  // Minify
  document.getElementById('do-min').onclick = function() {
    try {
      myCodeMirror.setValue(JSON.stringify(JSON.parse(myCodeMirror.getValue()), null, 0));
    } catch (err) {
      alert("Could not minify: " + err);
      console.trace(err);
    }
  };
  // Beautify
  document.getElementById('do-bt').onclick = function() {
    try {
      myCodeMirror.setValue(JSON.stringify(JSON.parse(myCodeMirror.getValue()), null, 2));
    } catch (err) {
      alert("Could not beautify: " + err);
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

<button class="submit" id="do-min">Minify</button> <button class="submit" id="do-bt">Beautify</button>

<div id="textfield"></div>