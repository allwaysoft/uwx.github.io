---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>rcp</h1> 
<p>Remote Copy - move files between machines. <br>
  Each file or directory is either a remote filename of the form rname@rhost:path 
or a local filename.</p>
<pre>Syntax
      rcp [<i>options</i>] <i>file1 file2</i>

      rcp [<i>options</i>] <i>file</i> ... <i>directory</i>

Options
   -k   Attempt to get tickets for remote host; query krb_realmofhost to determine realm.

   -p   Preserve modification times and modes of the source files.

   -r   If any of the source files are directories, rcp copies each subtree rooted at that name.
        The destination must be a directory.

   -x   Turns on DES encryption for all data passed by rcp.</pre>
<p class="quote"><i>"Worms are now able to propagate much faster than humans 
  can react to install patches. In short, the patch-and-pray model can't prevent 
  massive-scale attacks from succeeding" ~ icir.org 
  (2002) </i></p>
<p><b>Related:</b><br>
<br>
<a href="rsync.html">rsync</a> - Remote file copy (Synchronize file trees) <br>
Equivalent Windows command: 
<a href="../nt/robocopy.html">ROBOCOPY</a> - Robust File and Folder Copy</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rcp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

