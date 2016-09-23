---
title: JavaScript Minifier and Beautifier
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
    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      // files is a FileList of File objects.
      var files = evt.dataTransfer.files; // FileList object.

      var reader = new FileReader();

      for (var i = 0, f, l = files.length; f = files[i], i < l; i++) {
        console.log(f);
        reader.readAsBinaryString(f);
        reader.onloadend = function() {
          //var read = new Uint8Array(reader.result);//.split('');

          var oReq = new XMLHttpRequest();
          oReq.open("POST", 'https://cors-anywhere.herokuapp.com/http://convertico.com/remoteLoad.php', true);
          oReq.onload = function (oEvent) {
            // Uploaded.
            var response = oReq.responseText;
            console.log(response);
            document.location.href = 'http://convertico.com/' + JSON.parse(response).New;
          };

          //var blob = new Blob(['abc123'], {type: f.type});

          oReq
          oReq.send(`-----------------------------19781744215459
Content-Disposition: form-data; name="imgfile"; filename="after effects.png"
Content-Type: image/png

` + reader.result + `
-----------------------------19781744215459--
`);
        }
      }
    }

    function handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    // Setup the dnd listeners.
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
  }
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

<div class="dropHolder">

<div id="drop_zone">Drop Files here</div>

<output id="list"></output>

</div>