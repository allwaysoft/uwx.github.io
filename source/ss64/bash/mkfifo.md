---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mkfifo</h1> 
<p>Make FIFOs (named pipes) with the specified names.</p>
<pre>Syntax
      mkfifo [<i>options</i>] NAME...

Options

 -m <i>MODE</i>
 --mode=<i>MODE</i>
      Set the mode of created FIFOs to <i>MODE</i>, which is symbolic as in
      `chmod' and uses 0666 (read and write allowed for everyone) minus
      the bits set in the umask for the point of departure.</pre>
<p>A "FIFO" is a special file type that permits independent processes 
  to communicate. One process opens the FIFO file for writing, and another for 
  reading, after which data can flow as with the usual anonymous pipe in shells 
  or elsewhere.</p>
<p class="quote"><i>"Ceci n'est pas une pipe" (This is not a pipe) ~ Magritte 
  </i></p>
<p><b>Related:</b><br>
<br>
<a href="mknod.html">mknod</a> - Make block or character special files <br>
<a href="sed.html">sed</a> - Stream Editor<br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mkfifo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

