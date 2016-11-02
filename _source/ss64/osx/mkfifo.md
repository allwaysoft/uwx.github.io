---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>mkfifo</h1> 
<p>Make FIFOs (named pipes)<br>
  Creates the fifos requested, in the order specified, using mode 0666 modified 
by the current <a href="umask.html">umask</a>. </p>
<pre>Syntax
       mkfifo [-m <i>mode</i>] <i>fifo_name</i> ...

Options
  -m      Set the file permission bits of newly-created
          directories to<i> mode</i>. The mode is specified as in <a href="chmod.html">chmod</a>.

          In symbolic mode strings, the `+' and `-' operators
          are interpreted relative to an assumed initial mode of `a=rw'</pre>
<p>mkfifo requires write permission in the parent directory.<br>
  mkfifo exits 0 if successful, and &gt;0 if an error occurred.</p>
<p>A "FIFO" is a special file type that permits independent processes 
  to communicate. One process opens the FIFO file for writing, and another for 
  reading, after which data can flow as with the usual anonymous pipe in shells 
  or elsewhere.</p>
<p class="quote"><i>"Ceci n'est pas une pipe" (This is not a pipe) ~ Magritte 
  </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mkfifo.1.html">mkfifo man page</a> - Apple.com<br>
mknod - Make block or character special files <br>
<a href="sed.html">sed</a> - Stream Editor<br>
<a href="umask.html">umask</a> - Users file creation mask</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mkfifo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
