---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>chgrp</h1> 
<p>Change group ownership<br>
  <br>
  'chgrp' changes the group ownership of each given <i>File</i> to <i>Group</i> (which can be 
  either a group name or a numeric group id) or to match the same group as an existing reference 
file. </p>
<pre>Syntax
      chgrp [<i>Options</i>]... {<i>Group</i> | --reference=<i>File</i>} <i>File</i>...

Key

  -c
  --changes
       Verbosely describe the action for each <i>File</i> whose group actually
       changes.

  -f
  --silent
  --quiet
       Do not print error messages about files whose group cannot be
       changed.

  -f
  --no-dereference
       Act on symbolic links themselves instead of what they point to.
       Only available if the `lchown' system call is provided.

  --reference=<i>FILE</i>
       Use the group of the reference <i>FILE</i> instead of an explicit <i>GROUP</i>.

  -v
  --verbose
       Verbosely describe the action or non-action taken for every <i>File</i>.

  -R
  --recursive
       Recursively change the group ownership of directories and their
       contents.</pre>
<p><b>Example<br>
  <br>
  </b> Make Oracle the owner of the database directory<br>
  <span class="code">$ chgrp oracle /usr/database</span> </p>
<p class="quote"><i>Groupthink - Tendency of decision makers to join together around a policy or person without questioning basic assumptions.</i></p>
<p><b>Related:</b><br>
<a href="chmod.html"><br>
chmod</a> - Change access permissions<br>
<a href="chown.html">chown</a> - Change file owner and group<br>
<a href="syntax-permissions.html">bash syntax - Permissions</a><br>
Equivalent Windows command:  <a href="../nt/cacls.html">CACLS</a> - Change file permissions</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

