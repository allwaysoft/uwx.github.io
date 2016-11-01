---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>CDbl</h1>
<p> Function that converts an expression into  a Double (Number.) </p>
<pre>Syntax
      CDbl (<i>expression</i>)</pre>
<p>The Double data type  stores precision floating point numbers from -1.79769313486232E<sup>308</sup> to -4.94065645841247E-<sup>324</sup> for negative values or 1.79769313486232E<sup>308</sup> to 4.94065645841247E-<sup>324</sup> for positive values. </p>
<p>CDbl cannot handle Null values, use Nz() to convert Nulls to a valid number.</p>
<p><b>Example</b></p>
<p class="code">Dim dblDemo as Double</p>
<p class="code">dblDemo = CDbl(12 * 0.000001)</p>
<p class="quote"><i>“People have a peculiar pleasure in making converts, that is, in causing others to enjoy what they enjoy, thus finding their own likeness represented and reflected back to them” ~ Johann Wolfgang von Goethe </i></p>
<p><b>Related:</b></p>
<p><a href="cbool.html">CBool</a> - Convert to boolean <a href="cbyte.html"><br>
CByte</a> - Convert to byte <a href="ccur.html"><br>
CCur</a> - Convert to currency (number) <a href="cdate.html"><br>
CDate</a> - Convert to Date <a href="cdbl.html"><br>
</a><a href="cdec.html">
CDec</a> - Convert to Decimal (number) <a href="chr.html"><br>
</a><a href="cint.html">CInt</a> - Convert to Integer (number) <a href="clng.html"><br>
CLng</a> - Convert to Long (number)
<br>

<a href="syntax-datatypes.html">Number Data Types</a><br>
<a href="../convert.html">Convert to Base 36</a><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="cdbl.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

