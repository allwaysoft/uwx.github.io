---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Split</h1> 
<p>Parse a string of delimited values into an array.</p>
<pre>Syntax 
      Split(<i>expression </i>[,<i>Delimiter</i> [,<i>count</i> [,<i>compare</i>]]] )

Key
   <i>expression </i> The string expression to be broken up into an array.

   <i>Delimiter</i>   The character used to separate items (default=a space " ")

   <i>count</i>       The number of strings

   <i>compare</i>    vbBinaryCompare (0) or vbTextCompare(1)
</pre>
<p>Example</p>
<pre>vaPrices = Split("23.50, 67.50, 45.99, 18.47", ",")
WScript<a href="echo.html">.Echo</a> vaPrices(0)
&gt; 23.50</pre>
<p><i>“A gentle stream can split a mountain, given enough time” </i></p>
<p><b>Related:</b></p>
<p><a href="array.html">Array</a> -  Add values to an Array variable<br>
<a href="join.html">Join</a> - Combine the contents of an array into a single variable.<br>
Equivalent in PowerShell: <a href="../ps/syntax-methods.html">.Split</a> method          </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="split.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

