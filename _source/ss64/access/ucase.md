---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Ucase</h1>
<p>  Convert a string to upper-case.</p>
<pre>Syntax
      Ucase(<i>string</i>)

Key
   <i>string</i>    A string or string <a href="stringexpression.html">expression</a>.</pre>
<p>The Ucase() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Ucase()</span> will return a Variant, you can also use <span class="code">Ucase$()</span> to return a String. <br>
You should use <span class="code">Ucase()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Ucase("12 Acacia Gardens")<br>
Msgbox strDemo
<br>
</span>Returns <span class="code">"12 ACACIA GARDENS "</span></p>
<p class="quote"><i>“Those who cannot hear an angry shout may strain to hear a whisper” ~ Leonard Nimoy</i></p>
<p><b>Related:</b></p>
<p><a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
<a href="lcase.html">LCase</a> - Convert a string to lower-case.<br>
<a href="../case.html">Swap Case</a> - Reverse CAPS lock<br>
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="ucase.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

