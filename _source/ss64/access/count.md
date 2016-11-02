---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Count</h1>
<p>  Count records (SQL).</p>
<pre>Syntax
      Count(<i>expression</i>)

Key
   <i>expression</i>   A field or string expression.
</pre>
<p>Use the Count function in the access query builder by clicking the Totals toolbar button:</p>
<blockquote>
<p>Σ</p>
</blockquote>
<p> The Count() function is used in conjunction with the Group By clause.</p>
<p><b>Example</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="count.png" width="266" height="86" alt="Count"></p>
</blockquote>
<p>In VBA:</p>
<pre>Select <b>Count(</b>sales_id<b>)</b>
from T_Sales 
Group By Product;</pre>
<p class="quote"><i>“All that glitters is not gold. All who wander are not lost‚” ~ William Shakespeare</i></p>
<p><b>Related:</b></p>
<p><a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="avg.html">Avg</a> (SQL) - Average<br>

<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
Min</a> (SQL) - Return the minimum value from a query.<br>
<a href="partition.html">Partition</a> (SQL) - Locate a number within a range.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

