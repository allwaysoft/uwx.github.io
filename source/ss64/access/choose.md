---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Choose</h1>
<p> Function that returns a value from a list of values based on a given position.</p>
<pre>Syntax
      Choose ( <i>index, value1, value2</i>, ... <i>value_n</i> )</pre>
<p><i>value1, value2, ... value_n</i> is a list of values.</p>
<p><i>index</i> is the position number in the list of values to return, so <span class="code">Choose(2, "The", "universe", "is", "expanding")</span> will return "universe" the second item in the list. <br>
<br>
In many cases you will get better performance by storing the list of values in a table and then use a query/join to retrieve the relevant items.
</p>
<p><b>Example</b></p>
<p class="code">Dim varDemo as String</p>
<p class="code">varDemo = choose(4,"The", "universe", "is", "expanding")</p>
<p class="quote"><i>“I chose and my world was shaken. So what? The choice may have been mistaken; the choosing was not. You have to move on” ~ Stephen Sondheim</i></p>
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
DAvg function  (VBA) - Average<br>
<a href="syntax-datatypes.html">Number Data Types</a><br>
<a href="../convert.html">Convert to Base 36</a><br>
Nz function - 
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="choose.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

