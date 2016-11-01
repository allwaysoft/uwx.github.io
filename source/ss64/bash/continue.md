---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>continue</h1> 
<p>Resume the next iteration of an enclosing <code>for</code>, <code>while</code>, <code>until</code>, or <code>select</code> loop.</p> 
<pre>SYNTAX
      continue [<var>n</var>]</pre>
<p>If <var>n</var> is supplied, the execution of the <var>n</var>th enclosing loop is resumed. <var>n</var> must be greater than or equal to 1. 
The return status is zero unless <var>n</var> is not greater than or equal to 1.</p>
<p><b>Example</b></p>
<pre>for myloop in 1 2 3 4 5 
do 
  if [ "$myloop" -eq 3 ] 
   then 
   continue # Skip rest of this particular loop iteration.
  fi
  echo -n "$myloop"
done</pre>
<p> continue is a POSIX `special' builtin<br>
<br>
<i class="quote">"We are American at puberty. We die French" ~ Evelyn Waugh </i></p>
<p><b>Related:</b><br>
<br>
<a href="break.html">break</a> - Exit from a loop<a href="for.html"><br>
for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="until.html">until</a> - Execute commands (until error) <br>
<a href="while.html">while</a> - Execute commands </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="continue.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
