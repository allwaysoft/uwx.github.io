---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>CASE and Width_Bucket Functions</h1> 
<p> <b>Case Function<br>
  </b> A flexible method of grouping data into even or unevenly sized buckets.<br>
  Very similar to <a href="syntax-decode.html">DECODE</a></p>
<p>Syntax:</p>
<pre>CASE WHEN &lt;cond1&gt; THEN &lt;Value1&gt;
     WHEN &lt;cond2&gt; THEN &lt;Value2&gt;
     [ELSE Value n ] END   </pre>
<p>A single CASE statement can be selected (along with other columns), resulting in a vertical list of data buckets. Alternatively several case statements can be summed to display totals in a horizontal row:<br>
</p>
<pre> SELECT CASE WHEN sal&gt;1000 THEN 'Over paid'
             ELSE 'Under paid' END
 FROM   emp;


 SELECT SUM(CASE WHEN SUM(amount) BETWEEN 0 AND 49 THEN 1 
            ELSE 0 END) AS "0-49",
        SUM(CASE WHEN SUM(amount) BETWEEN 50 AND 100
           THEN 1 ELSE 0 END) AS "50-100"
 FROM sales;
 </pre>
<p><b> WIDTH_BUCKET Function</b> </p>
<p> Divide a data set into buckets with an equal interval size.<br>
  e.g. Age = 0-20, 20-40, 40-60, 60-80…<br>
  This is known as an 'equiwidth histogram'.</p>
<p>Syntax:</p>
<pre>WIDTH_BUCKET(column/expr, low boundary, high_boundary,
              bucket_count)
</pre>
<p> If you ask for (n) buckets you actually get (n+2) buckets<br>
The extra 2 being for values above and below the high/low boundaries.<br>
<br>
e.g.<br>
<span class="code">SELECT last_name, salary,<br>
WIDTH_BUCKET(salary,3000,9000,3)</span><br>
<br>
Will create 5 buckets:<br>
<span class="code">Up_to_3000, 3000-5000, 5000-7000, 7000-9000, 9000+</span></p>
<p>When using WIDTH_BUCKET pay attention to the boundary values, each bucket will contain values equal to or greater than the lowest 
boundary of that bucket, so age ranges 0-20, 20-40… would actually be 0-19.99... and 20-39.999…<br>
<br>
<i class="quote">"Our team is well balanced. We have problems everywhere" ~ Tommy Prothro</i> </p>
<p><b>Related</b></p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-analytic-case.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

