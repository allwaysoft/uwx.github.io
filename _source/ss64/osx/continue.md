---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>continue</h1> 
<p>Resume the next iteration of the enclosing <i>for</i>, <i>while</i>, <i>until</i>, or <i>select</i> loop.</p>
<pre>Syntax
      continue [<i>n</i>]

Key
    -n   Resume at the nth enclosing loop</pre>
<p> <i>n</i> must be &gt;= 1. <br>
If <i>n</i> is greater than the number of
enclosing loops, the last enclosing loop (the ``top-level'' loop) is resumed. </p>
<p>The return
value is 0 unless the shell is not executing a loop when continue is executed.</p>
<p>continue is a bash builtin command</p>

<p class="quote"><i>“Success is not final, failure is not fatal: it is the courage to continue that counts” - Winston Churchill</i></p>
<p><b>Related:</b></p>
<p>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="while.html">while</a> - Loop to execute commands<br>
until - Loop to execute commands</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="continue.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
