---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cksum</h1> 
<p>Print CRC checksum and byte counts.<br>
  <br>
  Computes a cyclic redundancy check (CRC) checksum for each given <span class="code"><i>File</i></span>, or standard 
input if none are given or for a <span class="code"><i>File</i></span> of <span class="code">-</span></p>
<pre>Syntax
      cksum [<i>Option</i>]... [<i>File</i>]...
</pre>
<p>
cksum prints the CRC checksum for each file along with the number
of bytes in the file, and the filename unless no arguments were given.</p>
<p>cksum is typically used to ensure that files transferred by
  unreliable means (e.g., netnews) have not been corrupted, by comparing
  the cksum output for the received files with the cksum output for
  the original files (typically given in the distribution).</p>
<p>The CRC algorithm is specified by the POSIX.2 standard.  It is not
  compatible with the BSD or System V sum algorithms; it is more robust.</p>
<p>The only options are <span class="code">--help</span> and <span class="code">--version</span>.</p>
<p><i class="quote">"How to be green? consume less, share more, enjoy life" ~ Penny Kemp </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="sum.html">sum</a> - Print a checksum for a file<br>
Equivalent Windows command: <a href="../nt/certutil.html">CERTUTIL</a> - Dump and display certification authority (CA) configuration information</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

