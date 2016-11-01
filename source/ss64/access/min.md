---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Min</h1>
<p>  Return the minimum value from the result set of a query. (SQL).</p>
<pre>Syntax
      Min (<i>expression</i>)

Key
   <i>expression</i>   A field or formula that evaluates to a numeric expression.</pre>
<p>Use the Min function in the access <a href="syntax-functions.html">query builder</a> by clicking the Totals toolbar button:</p>
<p>Σ</p>
<p>The Min function is used in conjunction with the Group By clause.</p>
<p><b>Example</b></p>
<pre>Select Min(price) 
from T_Sales 
Group By Supplier;</pre>
<p class="quote"><i>“Winning takes talent; to repeat takes character.” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="dmin.html">DMin</a> - Return the minimum value from a set of records.<br>
<a href="avg.html">Avg</a> (SQL) - Average<br>
<a href="count.html">Count</a> (SQL) - Count records<br>
<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
</a><a href="partition.html">Partition</a> (SQL) - Locate a number within a range.<a href="min.html"><br>
</a>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="min.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

