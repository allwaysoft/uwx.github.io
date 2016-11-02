---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>CInt</h1>
<p> Function that converts an expression into  an integer value.</p>
<pre>Syntax
      Cint (<i>expression</i>)</pre>
<p> Fractional values will be rounded to create a whole integer number, <a href="http://en.wikipedia.org/wiki/Rounding#Tie-breaking">Tie-breaking</a>: If the fraction is less than or equal to .5, the result will round down.<br>
If the fraction is greater than .5, the result will round up.</p>
<p>CInt cannot handle Null values, use Nz() to convert Nulls to a valid number.</p>
<p><b>Example</b></p>
<p class="code">Dim intDemo as Integer </p>
<p class="code">intDemo = CInt(45.76)<br>
&gt;45
</p>
<p class="quote"><i>“A man is like a fraction whose numerator is what he is and whose denominator is what he thinks of himself. The larger the denominator, the smaller the fraction” ~  Leo Tolstoy</i></p>
<p><b>Related:</b></p>
<p><a href="cbool.html">CBool</a> - Convert to boolean <a href="cbyte.html"><br>
CByte</a> - Convert to byte <a href="ccur.html"><br>
CCur</a> - Convert to currency (number) <a href="cdate.html"><br>
CDate</a> - Convert to Date <a href="cdbl.html"><br>
CDbl</a> - Convert to Double (number) <a href="cdec.html"><br>
CDec</a> - Convert to Decimal (number) <a href="chr.html"><br>
</a><a href="clng.html">
CLng</a> - Convert to Long (number)<br>
<a href="syntax-datatypes.html">Number Data Types</a><a href="../convert.html"><br>Convert to Base 36</a><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

