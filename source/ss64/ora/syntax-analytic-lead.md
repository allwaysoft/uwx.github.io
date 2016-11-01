---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Lead, Lag and CASE Functions</h1> 
<p> LAG and LEAD provide a comparison between 2 rows in a table without requiring 
  a self join.<br>
  <br>
  LAG() provides access to a prior row<br>
  LEAD() provides access to a row after the current position<br>
  <br>
  These functions are position, not value based <br>
</p>
<p>Syntax</p>
<pre>LEAD | LAG<br>   (&lt;exp1&gt; [,&lt;offset&gt; [, &lt;default&gt;]]) OVER<br>    ([PARTITION BY &lt;exp2&gt; [,…]])<br>    ORDER BY &lt;exp3&gt; [ASC|DESC] <br>    [NULLS FIRST | NULLS LAST] [,…])</pre>
<p> &lt;offset&gt; is optional and defaults to 1 <br>
  &lt;default&gt; is optional and is the value returned if the &lt;offset&gt; 
  falls outside the bounds of the dataset.<br>
  <br>
  Example:</p>
<pre>SELECT customer_id, order_date, sum(Order_amt) As CurrentOrder,
<b>  LAG(SUM(Order_amt),1) OVER
     (PARTITION BY customer_id
      ORDER BY payment_date ) AS LastOrder</b>
 FROM OrderBook
WHERE order_date &gt; '01-JAN-03'
GROUP BY customer_id, order_date
   </pre>
<p> <b> Case Function<br>
  </b> A very flexible method of grouping data into even or unevenly sized buckets.<br>
  Very similar to <a href="syntax-decode.html">DECODE</a></p>
<p>Syntax:</p>
<pre>CASE WHEN &lt;cond1&gt; THEN &lt;Value1&gt;
     WHEN &lt;cond2&gt; THEN &lt;Value2&gt;
     [ELSE Value n ] END   </pre>
<p>A single CASE statement can be selected (along with other columns), resulting in a vertical list of data buckets. Alternatively several case statements can be summed to display totals in a horizontal row:</p>
<pre> SUM(CASE WHEN SUM(amount) 
   BETWEEN 0 AND 49 
   THEN 1 ELSE 0 END) AS "0-49",
 SUM(CASE WHEN SUM(amount) 
   BETWEEN 50 AND 100
   THEN 1 ELSE 0 END) AS "50-100",</pre>
<p> <span class="quote"> <i>"We herd sheep, we drive cattle, we lead people. Lead me, follow me, or get out of my way" ~ George S. Patton</i> </span><br>
<br>
Related</p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-analytic-lead.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

