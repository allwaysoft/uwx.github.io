---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Avg</h1>
<p>SQL Function that  returns the average (<a href="http://en.wikipedia.org/wiki/Arithmetic_mean">arithmetic mean</a>) of the numeric values returned by a SELECT query.</p>
<pre>Syntax
      Avg (<i>expression</i>)</pre>
<p>Use the Avg function in the access <a href="syntax-functions.html">query builder</a> by clicking the Totals toolbar button:</p>
<blockquote>
<p>Σ</p>
</blockquote>
<p> The Avg function is used in conjunction with the Group By clause.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="avg.png" width="266" height="86" alt="AVG"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">Select Avg(Salary) from T_Employees Group By Department; <br>
</p>
<p class="quote"><i>“Gold is the money of kings; silver is the money of gentlemen; barter is the money of peasants; but debt is the money of slaves” ~ Norm Franz</i></p>
<p><b>Related:</b><br>
<br>
<a href="davg.html">DAvg</a> - Average from a set of records.<br>
<a href="http://msdn.microsoft.com/en-us/library/dd789431%28v=office.12%29.aspx">Median function for access</a> - MSDN<br>
<a href="count.html">Count</a> (SQL) - Count records<br>
<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
Min</a> (SQL) - Return the minimum value from a query.<br>
<a href="partition.html">Partition</a> (SQL) - Locate a number within a range.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="avg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

