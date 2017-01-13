---
title: PNG to ICO converter
date: 2016-08-15 13:49:34
---

<!--

<script src="/libraries/lib/codemirror.js"></script>

<link rel="stylesheet" href="/libraries/lib/codemirror.css">

<script src="/libraries/mode/css/css.js"></script>

<script src="/libraries/uglify.js"></script>

<script src="/libraries/beautify.js"></script>

-->

<script type="text/javascript">
window.onload = function() {

  var form = document.forms.namedItem("fileinfo");
  form.addEventListener('submit', function(ev) {
    
    var val = document.getElementById('turl').value;
    var oData;
    if (val.startsWith('http')) {
      var blob = new Blob([val], {type: 'file'});
      oData = new FormData();
      oData.append('imgfile', blob);
    } else {
      oData = new FormData(form);
    }

    console.log();

    var oOutput = document.querySelector("#resultdiv");

    //oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "https://cors-anywhere.herokuapp.com/http://convertico.com/remoteLoad.php", true);
    oReq.onload = function(oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
        var obj = JSON.parse(oReq.responseText);
        if (obj.error.length > 0) {
          oOutput.innerHTML = "Backend error: " + JSON.stringify(obj.error);
        } else if (!obj.New) {
          oOutput.innerHTML = "No error, but no result. The image needs to be a PNG!";
        } else {
          oOutput.innerHTML = "Original: <a href=\"http://convertico.com" + obj.original + "\">" + obj.original + "</a><br>Converted: <a href=\"http://convertico.com" + obj.New + "\">" + obj.New + "</a>";
        }
      } else {
        oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  }, false);
};
</script>

<style type="text/css">
#drop_zone {
    border: 2px dashed #bbb;
    border-radius: 5px;
    color: #bbb;
    padding: 25px;
    text-align: center;
}
.dropHolder {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>

<form enctype="multipart/form-data" method="post" name="fileinfo">
  <input type="file" name="imgfile" />
  <input id="turl" type="text" value="URL" />
  <input type="submit" value="Plant the bomb!" />
</form><p></p>
<div id="resultdiv"></div>