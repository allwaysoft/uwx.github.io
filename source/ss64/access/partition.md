---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Partition</h1>
<p>  Locate a number within a range.(SQL).</p>
<pre>Syntax
      Partition (<i>number,start,stop,interval</i>)

Key
   <i>number</i>   The number to evaluate

   <i>start</i>    The start of the overall range of numbers.

   <i>stop</i>     The end of the overall range of numbers.

   interval The interval spanned by each range.</pre>
<p>The Partition() function can be used in  an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Example</b></p>
<pre>SELECT Count(T_Sales.ItemID) AS CountSales,
       <b>Partition(</b>[Sale_Price],0,100000,5000<b>)</b> AS Pricebracket
FROM T_Sales
WHERE (T_Sales.Sale_Price&gt;0)
GROUP BY <b>Partition(</b>[Sale_Price],0,100000,5000<b>)</b>; </pre>
<p class="quote"><i>“Love's dominion, like a king's, admits of no partition” ~ Ovid</i></p>
<p><b>Related:</b></p>
<p><a href="avg.html">Avg</a> (SQL) - Average.<br>
<a href="count.html">Count</a> - Count records.<br>
<a href="max.html">Max</a> - Return the maximum value from a query.<br>
<a href="min.html">Min</a> - Return the minimum value from a query.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="partition.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

