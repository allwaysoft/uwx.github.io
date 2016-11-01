---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>local</h1> 
<p> Set a local (function) variable.</p>
<pre>Syntax
      local [<i>option</i>] [<i>name</i>[=<i>value</i>] ...]</pre>
<p> For each argument, a local variable named <i>name</i> is created, and assigned <i>value</i>.  </p>
<p>The <i>option</i> can be any of the options accepted by <a href="declare.html">declare</a>. </p>
<p>When <span class="code">local</span> is used within a function, it causes the variable name to have a visible scope restricted to that function and its children.<br>
With no operands, <span class="code">local</span> writes a list of local variables to the standard output. </p>
<p>It is an error to use <span class="code">local</span> when not within a function. <br>
The return status is 0 unless local is used outside a function, an invalid name is supplied, or name is a readonly variable.<br>
local is a bash builtin command.</p>
<p class="quote"><i>“A local shop for local people” ~ The League Of Gentlemen</i></p>
<p><b>Related:</b></p>
<p>
  <a href="set.html">set</a> - Set a shell variable = value</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="local.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
