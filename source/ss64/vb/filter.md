---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Filter</h1> 
<p>Produce an array by filtering an existing array.</p>
<pre>Syntax 
      Filter (<i>SourceArray, FilterString</i> [,<i>Switch</i> [,<i>Compare</i>]])

Key
   <i>SourceArray</i><i>  </i>An array to be filtered
<span class="code"></span>
   <i>FilterString</i> A string of characters to find in <i>SourceArray</i>

   <i>Switch</i>       If <u>True</u> include items that match <i>FilterString</i>
                If False include items that don't match <i>FilterString

   Compare      </i><u>vbBinaryCompare</u> (0), vbTextCompare (1)</pre>
<p>Example</p>
<pre>arrDemo=<b>Filter</b>(vaVolcanoes, "Cinder cone")
WScript<a href="echo.html">.Echo</a> arrDemo(0)</pre>
<p class="quote"><i>“To be without some of the things you want is an indispensable part of happiness” ~ Bertrand Russell</i></p>
<p><b>Related:</b></p>
<p>   <a href="array.html">Array</a> -  Add values to an Array variable<br>
Equivalent in PowerShell: <a href="../ps/syntax-arrays.html">Hash Tables</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="filter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

