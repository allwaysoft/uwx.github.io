---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>shift</h1> 
<p>Shift positional parameters.</p>
<pre>Syntax

      shift [<i>n</i>]</pre>
<p>The positional parameters from <span class="code"><i>n</i>+1 ... </span>are renamed to<span class="code"> $1 ....</span> <br>Parameters represented by the numbers <span class="code">$# </span>down to <span class="code">$#-n+1</span> are unset.</p>
<p> <span class="code"><i>n</i></span> must be a non-negative number less than or equal to <span class="code">$#</span>. If <span class="code"><i>n</i></span> is 0, no parameters are changed. If <span class="code"><i>n</i></span> is not given, it is assumed to be 1. If <span class="code"><i>n</i></span> is greater than<span class="code"> $#</span>, the positional parameters are not changed. </p>
<p>The return status is greater than zero if <span class="code"><i>n</i></span> is greater than <span class="code">$#</span> or less than zero; otherwise 0.</p>
<p><span class="code">shift</span> is a bash builtin command. </p>
<p class="quote"><i>"Discovery consists of seeing what everybody has seen and thinking what nobody has thought” ~Albert 
  Szent-Gyorgyi </i></p>
<p><b>Related:</b></p>
<p>
<a href="set.html">set</a> - Set a shell variable = value</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shift.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
