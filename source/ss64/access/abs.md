---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Abs</h1>
<p>Function that returns the  absolute value of a number (ignoring positive/negative sign)</p>
<pre>Syntax
      Abs (<i>number</i>)</pre>
<p><br>
The Abs function can also be used in an SQL query.</p>
<p>Abs() is often useful when working with boolean values. <br>
The standard boolean values are FALSE=0 and TRUE=any non Zero value<br>
(Access and VBA use -1 for TRUE, but SQL Server bit fields use 1)</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="abs.png" width="266" height="86" alt="ABS"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">Dim dblDemo As Double</p>
<p class="code"> dblDemo = Abs (-123.4)<br>
123.4</p>
<p class="code">dblDemo = Abs (-1)<br>
1</p>
<p class="code">dblDemo = Abs (45.1)<br> 
45.1
</p>
<p class="quote"><i>“I've nothing much to offer, There's nothing much to take, I'm an absolute beginner” ~ David Bowie</i></p>
<p><b>Related:</b><br>
<br>
<a href="int.html">Int</a> - Return the integer portion of a number<br>
<a href="sgn.html">Sgn</a> - Return the sign of a number, positive or negative.<br>
Excel has an identical function <span class="code">abs()</span> </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="abs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
