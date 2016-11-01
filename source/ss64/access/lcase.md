---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Lcase</h1>
<p>  Convert a string to lower-case.</p>
<pre>Syntax
      Lcase(<i>string</i>)

Key
   <i>string</i>    A string or string <a href="stringexpression.html">expression</a>.</pre>
<p>The Lcase() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Lcase()</span> will return a Variant, you can also use <span class="code">Lcase$()</span> to return a String. <br>
You should use <span class="code">Lcase()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Lcase("12 ACACIA Gardens")<br>
Msgbox strDemo
<br>
</span>Returns <span class="code">"12 acacia gardens"</span></p>
<p class="quote"><i>“Graze on my lips, and if those hills be dry,  Stray lower, where the pleasant fountains lie” ~ Shakespeare (Venus and Adonis) </i></p>
<p><b>Related:</b></p>
<p><a href="ucase.html">UCase</a> - Uppercase <i>String</i><br>
<a href="../case.html">Swap Case</a> - Reverse CAPS lock</p>
<!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="lcase.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

