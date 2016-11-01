---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>break</h1> 
<p>Exit from a <code>for</code>, <code>while, until </code> or <code>select</code> loop.</p>
<pre>Syntax
      break [n]</pre>
<p> If <i>n</i> is specified, break <i>n</i> levels.  </p>
<p>n
must be &gt;= 1. If n is greater than the number of enclosing loops, all enclosing loops are
exited. </p>
<p>The return value is 0 unless the shell is not executing a loop when break is executed.</p>
<p><b>Example</b></p>
<pre>for i in 1 2 3 4 5
do echo -n "Hello World${i} "
  if [ "$i" -eq 3 ] 
   then 
   break # This line will break out of the loop
  fi
done</pre>
<p> break is a builtin command</p>
<p class="quote"><i>“Don't worry about the world coming to an end today. It's already tomorrow in Australia” ~ Charles Schultz</i></p>
<p><b>Related:</b></p>
<p>continue - Resume the next iteration of a while or foreach loop. <br>
<a href="for.html">for</a> - Loop, expand <i>words</i>, and execute <i>commands</i><br>
<a href="while.html">while</a> - Execute commands </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="break.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
