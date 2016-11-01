---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>CLng</h1>
<p> Function that converts an expression into  a Long (Number) value </p>
<pre>Syntax
      CLng (<i>expression</i>)</pre>
<p> Fractional values will be rounded to create a whole integer number, <a href="http://en.wikipedia.org/wiki/Rounding#Tie-breaking">Tie-breaking</a>: If the fraction is less than or equal to .5, the result will round down.<br>
If the fraction is greater than .5, the result will round up.</p>
<p>CLng cannot handle Null values, use Nz() to convert Nulls to a valid number.</p>
<p><b>Examples</b></p>
<p class="code">Dim lngDemo as Long </p>
<p class="code">lngDemo = CLng(35000.50)<br>
&gt;35000</p>
<p class="code">lngDemo = CLng(Nz(Me!txtInvoiceNo,0))</p>
<p class="quote"><i>“A man is like a fraction whose numerator is what he is and whose denominator is what he thinks of himself. The larger the denominator, the smaller the fraction” ~  Leo Tolstoy</i></p>
<p><b>Related:</b><br>
<br>
<a href="cbool.html">CBool</a> - Convert to boolean <a href="cbyte.html"><br>
CByte</a> - Convert to byte <a href="ccur.html"><br>
CCur</a> - Convert to currency (number) <a href="cdate.html"><br>
CDate</a> - Convert to Date <a href="cdbl.html"><br>
CDbl</a> - Convert to Double (number) <a href="cdec.html"><br>
CDec</a> - Convert to Decimal (number) <a href="chr.html"><br>
</a><a href="cint.html">CInt</a> - Convert to Integer (number) <br>
<a href="syntax-datatypes.html">Number Data Types</a><br>
<a href="../convert.html">Convert to Base 36</a><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="clng.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

