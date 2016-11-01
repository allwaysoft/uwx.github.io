---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>StrComp</h1> 
<p>Compare two strings.</p>
<pre>Syntax 
      StrComp(<i>String1, String2 </i>[,<i>compare</i>] )

Key
   <i>String1</i>   A string expression.

   <i>String2</i>   A string expression.

   <i>compare</i>   vbBinaryCompare (0) or vbTextCompare(1)
</pre>
<p>If string1 = string2 StrComp returns <span class="code">0 </span>(<a href="syntax-constants.html">vbFalse</a>)<br>
If string1 &lt; string2 StrComp returns <span class="code">-1 </span>(<a href="syntax-constants.html">vbTrue</a>) <br>
If string1 &gt; string2 StrComp returns<span class="code"> 1 </span><br>
If either string = null  StrComp returns null </p>
<p>Example</p>
<pre>strPerson ="Hilary"
result = StrComp("Hilary", strPerson)
WScript<a href="echo.html">.Echo</a> result</pre>
<p class="quote"><i>“If you want to marry wisely, marry your equal” ~ Spanish Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="replace.html">Replace</a> - Find and replace text<br>
Equivalent in PowerShell: <span class="code">[String]::Compare</span> or the <a href="../ps/syntax-methods.html">CompareTo</a> method or <a href="../ps/syntax-compare.html">comparison operators.</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="strcomp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

