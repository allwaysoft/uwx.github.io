---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>CDate</h1>
<p> Function that converts an expression into  a date value.</p>
<pre>Syntax
      CDate (<i>expression</i>)</pre>
<p>The expression must be a valid date. The Date data type accepts either the date or the time, or both. Possible values range from January 1, 100 to December 31, 9999.</p>
<p>CDate() has identical syntax to <a href="cvdate.html">CVDate()</a>, CVDate() returns a Variant with the subtype of Date, CDate() returns an actual Date type.</p>
<p>CDate cannot handle Null values, use Nz() to convert Nulls to a valid date.</p>
<p><b>Example</b></p>
<p class="code">Dim dtmRetirement as Date </p>
<p class="code">dtmRetirement = CDate("Aug 6, 2083")<br>
dtmRetirement = CDate(Nz(Me!txtDate, #01/01/1980#))</p>
<p class="quote"><i>“The hours of folly are measured by the clock, but of wisdom no clock can measure” ~ William Blake</i></p>
<p><b>Related:</b></p>
<p><a href="cbool.html">CBool</a> - Convert to boolean <a href="chr.html"><br>
</a><a href="cint.html">CInt</a> - Convert to Integer (number) <br>

<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="cdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

