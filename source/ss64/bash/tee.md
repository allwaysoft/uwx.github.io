---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tee</h1> 
<p>Redirect output to multiple files, copies standard input to standard 
  output and also to any files given as arguments. This is useful when you want 
not only to send some data down a pipe, but also to save a copy.</p>
<pre>Syntax
      tee [<i>options</i>]... [<i>file</i>]...

Options
   -a
   --append
        Append standard input to the given files rather than overwriting
        them.

   -i
   --ignore-interrupts'
        Ignore interrupt signals.

Example:

   ps -ax | tee processes.txt | more</pre>
<p>If a file being written to does not already exist, it is created. 
  <br>
  If a file being written to already exists, the data it previously contained 
  is overwritten unless the `-a' option is used.<br>
  <span class="quote"><br>
  <i>"Twenty years from now, you will be more disappointed by the things you didn't 
  do than by the ones you did do. So throw off the bowlines, sail away from the 
  safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover" 
  ~ Mark 
Twain</i></span> </p>
<p><b>Related:</b><br>
<br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="head.html">head</a> - Output the first part of file(s)<br>
<a href="less.html">less</a> - Display output one screen at a time<br>
<a href="more.html">more</a> - Display output one screen at a time <br>
pg - Display one page at a time<br>
Equivalents in NT Batch/Perl Script - <a href="http://www.robvanderwoude.com/unixports.php#TEE">TEE Scripts</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tee.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

