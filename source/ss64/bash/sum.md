---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>sum</h1> 
<p>Print a checksum for a file.<br>
  <br>
  `sum' is provided for compatibility; `<a href="cksum.html">cksum</a>' is preferable 
in new applications. </p>
<pre>Syntax
      sum [<i>options</i>]... [file]...

Options

 -r
     Use the default (BSD compatible) algorithm.  This option is
     included for compatibility with the System V `sum'.  Unless `-s'
     was also given, it has no effect.

 -s
 --sysv
     Compute checksums using an algorithm compatible with System V
     `sum''s default, and print file sizes in units of 512-byte blocks.</pre>
<p>`sum' prints the checksum for each FILE followed by the number 
  of blocks in the file (rounded up). If more than one FILE is given, file names 
  are also printed (by default). (With the `--sysv' option, corresponding file 
  name are printed when there is at least one file argument.) <br>
  <br>
  By default, GNU `sum' computes checksums using an algorithm compatible with 
  BSD `sum' and prints file sizes in units of 1024-byte blocks.</p>
<p class="quote"><i>“Winning takes talent; to repeat takes character” ~ John Wooden</i></p>
<p><b>Related:</b><br>
<br>
<a href="cksum.html">cksum</a> - Print CRC checksum and byte counts</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sum.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

