---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Analytic Features - Grouping Sets</h1> 
<p> Grouping Sets - Instead of a UNION ALL statement (that would require multiple 
  table scans), define a grouping set - the new syntax will result in only a single 
  pass over the base table.<br>
  <br>
Grouping Sets are specified in the GROUP BY clause.</p>
<p>Syntax:</p>
<pre>   SELECT <i>group_function</i>(column1), column2, <i>group_function</i>(column3)…
      FROM <i>table_list</i>
         [WHERE <i>conditions</i>]
            <b>GROUP BY GROUPING SETS</b> (<i>group_by_list</i>)

   SELECT <i>group_function</i>(column1), column2, <i>group_function</i>(column3)…
      FROM <i>table_list</i>
         [WHERE <i>conditions</i>]
            <b>GROUP BY CUBE</b> (<i>group_by_list</i>)

   SELECT <i>group_function</i>(column1), column2, <i>group_function</i>(column3)…
      FROM <i>table_list</i>
         [WHERE <i>conditions</i>]
            GROUP BY <b>ROLLUP</b> <i>(group_by_list)</i></pre>
<p>Examples:<br>
  Instead of this UNION query…</p>
<pre>   SELECT
       manager_id, null hire_date, count(*)
   FROM 
       employees
   GROUP BY manager_id, 2
 UNION ALL
   SELECT
       null, hire_date, count(*)
   FROM 
       employees
   GROUP BY 1, hire_date</pre>
<p> The above rewritten as a Grouping Set…</p>
<pre>   SELECT
       manager_id, hire_date, count(*)
   FROM 
       employees
   GROUP BY GROUPING SETS (manager_id, hire_date);</pre>
<p> The GROUPING SET clause allows you to specify the EXACT groups.</p>
<h2> CUBE</h2>
<p>Where a large number of groupings are needed then the CUBE and ROLLUP statements extend this idea by calculating multiple groupings in a single statement.<br><br>
e.g. <span class="code">GROUP BY CUBE (hire_date, manager_id, product)</span> will produce 2^3 =8 groupings<br>
1) hire_date, manager_id, product<br>
2) hire_date, manager_id<br>
3) hire_date, product<br>
4) manager_id, product<br>
5) hire_date<br>
6) manager_id<br>
7) product<br>
8) Grand Total<br>
<br>
GROUP BY CUBE always calculates ALL the combinations - which might be far more than needed</p>
<h2>ROLLUP</h2>
<p> e.g. <span class="code">GROUP BY ROLLUP (hire_date, manager_id, product)</span> will produce 4 groupings<br>
1) hire_date, manager_id, product<br>
2) hire_date, manager_id<br>
3) hire_date, <br>
4) Grand Total</p>
<p>GROUP BY ROLLUP calculates all combinations for the first column listed in the ROLLUP clause.<br>
<br>
This can be further tuned by using parenthesis to remove some of the combinations<br>
<br>
e.g. <span class="code">GROUP BY ROLLUP (hire_date, <b>(</b>manager_id, product<b>)</b>)</span> will produce <br>
1) hire_date, manager_id, product<br>
2) hire_date<br>
3) Grand Total</p>
<h2>Grouping function</h2>
<p> CUBE and ROLLUP will generate NULLs for each dimension at the subtotal levels.<br>
The Grouping() function can be used to identify these rows, which can be very 
useful when performing additional calculations such as <a href="syntax-analytic-topn.html">Rank</a>ing 
within a group. <br>
<br>
The values returned by grouping() are:<br>
0 for NULL data values<br>
1 for NULL indicating a dimension subtotal<br>
<br>
The results of Grouping() can be passed into a <a href="syntax-decode.html">decode()</a> 
e.g.<br>
<span class="code">SELECT … PARTITION BY GROUPING(column1) .. <br>
SELECT … PARTITION BY DECODE(GROUPING(column1), 1, ‘My SubTotal’, column1)) … </span></p>
<p>Combining (concatenating) Groupings:<br><br>
The CUBE and ROLLUP clauses can be combined as part of a standard <a href="select_group.html">GROUP BY</a> clause<br>
<br>e.g. GROUP BY manager_id, ROLLUP (hire_date, product)<br>
<br>
<b>Notes</b><br>
Grouping sets are typically 80 - 90% more efficient at producing sub-totals than equivalent SQL code. <br><br>
ROLLUP/CUBE can be used with all aggregate functions (MAX, MIN, AVG, etc.) <br>
<br>
A HAVING clause will apply to all the data returned.<br>
<br>
<i class="quote"># Roll Up, Roll up for the Mystery Tour # - The Beatles </i></p>
<p><b>Related</b></p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-analytic-grouping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
