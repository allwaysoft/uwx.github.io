---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Sum</h1>
<p>  Add up the values in a query result set. (SQL).</p>
<pre>Syntax
      Sum (<i>expression</i>)

Key
   <i>expression</i>   A field or formula that evaluates to a numeric expression.</pre>
<p>Use the Sum function in the access <a href="syntax-functions.html">query builder</a> by clicking the Totals toolbar button:</p>
<p>Σ</p>
<p>The Sum() function is used in conjunction with the Group By clause.</p>
<p>Example</p>
<pre>Select Sum(price) 
from T_Sales 
Group By Supplier;</pre>
<p class="quote"><i>“Winning takes talent; to repeat takes character.” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="dsum.html">DSum</a> - Return the sum of values from a set of records.<br>
<a href="avg.html">Avg</a> (SQL) - Average<br>
<a href="count.html">Count</a> (SQL) - Count records<br>
<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
Min</a> (SQL) - Return the minimum value from a query.<br>
<a href="partition.html">Partition</a> (SQL) - Locate a number within a range.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

