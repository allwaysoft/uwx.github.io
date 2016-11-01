---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>break</h1>  
<p>Exit from a <code>for</code>, <code>while</code>, <code>until</code>, 
or <code>select</code> loop</p>
<pre>SYNTAX
      break [<var>n</var>]</pre>
<p>If <var>n</var> is supplied, the <var>n</var>th enclosing loop is exited. <var>n</var> 
  must be greater than or equal to 1. <br>
  <br>
  The return status is zero unless <var>n</var> is not greater than or equal to 
  1. <br>
  <br>
  <b>Example</b></p>
<pre>for myloop in 1 2 3 4 5 
do 
  echo -n "$myloop"
  if [ "$myloop" -eq 3 ] 
   then 
   break # This line will break out of the loop
  fi
done</pre>
<p> break is a POSIX `special' builtin</p>
<p class="quote"><i>"Don't worry about the world coming to an end today. It's already tomorrow 
  in Australia" ~ Charles 
Schultz</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
  <a href="select.html">select</a> - Accept keyboard input <br>
  <a href="until.html">until</a> - Execute commands (until error) <br>
  <a href="while.html">while</a> - Execute commands <br>
  <a href="continue.html">continue</a> - Resume the next iteration of a loop <br>
  Equivalent Windows command:  <a href="../nt/goto.html">GOTO</a> :eof - Jump to end of file </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="break.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

