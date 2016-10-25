---
title: GitHub Remote File Uploader
date: 2016-08-15 13:49:34
---

<script src="//npmcdn.com/github-api/dist/GitHub.bundle.min.js"></script>

<script type="text/javascript">
window.onload = function() {
  'use strict';
  // Check for the various File API support.
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    alert('The File APIs are not fully supported in this browser.');
    return;
  }

  function $(x) {
    return document.querySelector(x);
  }
  function $$(x) {
    return document.querySelectorAll(x);
  }
  function $each(x, func) {
    return document.querySelectorAll(x).forEach(func);
  }

  /*
     Data can be retrieved from the API either using callbacks (as in versions < 1.0)
     or using a new promise-based API. For now the promise-based API just returns the
     raw HTTP request promise; this might change in the next version.
   */
  
  // unauthenticated client
  function upload() {
    var gh = new GitHub({
      username: $('#user').value,
      password: $('#pword').value
    });
    console.log('got gh instance');

    var user = gh.getUser();
    user.listRepos({}, function(error, result) {
      if (error) console.error(error);
      console.log(result);

      var hasRepo = false;
      result.forEach(function(v, k) {
        if (v.name == 'hansen-web-uploads') {
          hasRepo = true;
        }
      });

      if (!hasRepo) {
        user.createRepo({
          name: 'hansen-web-uploads',
          has_issues: false,
          has_wiki: false,
          has_downloads: false,
          auto_init: true // creates empty readme
        }, function(error) {
          if (error) console.error(error);

          findBranch(gh);
        });
      } else {
        findBranch(gh);
      }
    });
  }

  function findBranch(gh) {
    var repo = gh.getRepo($('#user').value, 'hansen-web-uploads');

    console.log('listing branches');
    repo.listBranches(function(error, branches) {
      if (error) console.error(error);

      var hasBranch = false;
      branches.forEach(function(v, k) {
        if (v.name == 'gh-pages')
          hasBranch = true;
      });
      if (hasBranch) {
        uploadFile(repo);
      } else {
        console.log('makin branch');
        repo.createBranch('master', 'gh-pages', function(error) {
          if (error) console.error(error);

          uploadFile(repo);
        });
      }

    });
  }

  function wipeHeader(str) {
    return str.replace(/data:(.*?)\/(.*?);base64,/, '');
  }

  function getBase64(file, callback) {
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function() {
       callback(null, reader.result);
     };
     reader.onerror = function(error) {
       callback(error, null);
     };
  }

  function uploadFile(repo) {
    var file = $('#file').files[0];
    var fileName = $('#file').value;
    getBase64(file, function(error, b64) {

      console.log('sending file (length ' + b64.length + ', ' + b64 + '\n' + wipeHeader(b64) + ')');

      repo.writeFile('gh-pages', fileName, wipeHeader(b64), 'Auto-uploaded file at ' + new Date().toString(), { encode:false },
        function(error, result, request) {
          if (error) console.warn(error);
          alert('File has been uploaded to https://' + $('#user').value + '.github.io/hansen-web-uploads/' + fileName);
        }
      );

    });
  }

  $('#h-upload').onclick = upload;
};
</script>

<style type="text/css">

</style>

<form>
  GitHub username:<br>
  <input id="user" type="text" name="user"><br>
  GitHub password:<br>
  <input id="pword" type="password" name="pass"><br>
  File to upload:<br>
  <input type="file" id="file" name="files[]" multiple />
</form>

<b>WARNING:</b> Never trust your password anywhere, even here. Read the source code to make sure you're safe.

<button class="submit hansen-wrap" id="h-upload">Upload</button>
