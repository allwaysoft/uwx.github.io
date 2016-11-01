---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>sync</h1> 
<p>Synchronize data on disk with memory</p>
<pre>Syntax
      sync</pre>
<p>Writes any data buffered in memory out to disk. This can include 
  (but is not limited to) modified superblocks, modified inodes, and delayed reads 
  and writes. <br>
  This must be implemented by the kernel; The `sync' program does nothing but 
  exercise the `sync' system call. The kernel keeps data in memory to avoid doing 
  (relatively slow) disk reads and writes. This improves performance, but if the 
  computer crashes, data can be lost or the filesystem corrupted as a result. 
  `sync' ensures everything in memory is written to disk. <br>
  <br>
  Any arguments are ignored, except for a lone `--help' or `--version'<br>
  <br>
  <i class="quote">"The way to a mans heart is through his stomach" - Fanny 
  Fern (writer) </i> </p>
<p><b>Related:</b><br>
<br>
<a href="mount.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sync.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

