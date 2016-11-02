---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>FIRST and LAST Functions</h1>
<p> Operate on a set of rows that rank as the FIRST or LAST with respect to a given sorting specification, in many cases only one row will rank as FIRST or 
LAST.<br><br>Note that the value retrieved from the first or last row need not be from the column on which the group was sorted.<br>
<br>The FIRST and LAST functions eliminate the need for self joins or views and enable better performance.</p>
<p>Syntax</p>
<pre>  aggregate_function KEEP
  (DENSE_RANK<b> FIRST</b>
     ORDER BY <i>Order_by_clause</i>)
       [OVER (<i>query_partitioning_clause</i>)]

  aggregate_function KEEP 
  (DENSE_RANK<b> LAST</b> 
     ORDER BY <i>Order_by_clause</i>)
       [OVER (<i>query_partitioning_clause</i>)]


Order by clause:
   ORDER BY expr [ DESC | ASC ] [ NULLS { FIRST | LAST }]
         [, expr [ DESC | ASC ] [ NULLS { FIRST | LAST }]]…

query_partitioning_clause:
   PARTITION BY value/expr [,value/expr…]
</pre>
<p> Dense_Rank:<br>
DENSE_RANK FIRST or DENSE_RANK LAST indicates that Oracle will aggregate over only those rows with the minimum (FIRST) or the maximum (LAST) dense rank ("olympic rank").<br>
<br>aggregate_functions:<br>
Any one of MIN, MAX, SUM, AVG, COUNT, VARIANCE, or STDDEV. <br>
The function will only operate on those rows that rank either FIRST or LAST (often a single row). <br>
<br>OVER<br>
Specifying the OVER (PARTITION… clause will apply the FIRST and LAST functions as analytic functions (rather than as simple aggregate functions).<br>
<b><br>Example (aggregate function):</b></p>
<pre>SELECT department_id,
       MIN(salary) KEEP (DENSE_RANK FIRST ORDER BY commission_pct) "Worst",
       MAX(salary) KEEP (DENSE_RANK LAST ORDER BY commission_pct) "Best"
FROM employees
GROUP BY department_id;

DEPARTMENT_ID      Worst       Best
------------- ---------- ----------
           10       4400       4400
           20       6000      13000
           30       2500      11000
           40       6500       6500
           50       2100       8200
…</pre>
<p>This displays the best and worst salary for employees in each department.</p>
<p><b>Example (analytic function):</b>
<br>For each employee within the department</p>
<pre>SELECT last_name, department_id, salary,
       MIN(salary) KEEP (DENSE_RANK FIRST ORDER BY commission_pct)
          OVER (PARTITION BY department_id) "Worst",
       MAX(salary) KEEP (DENSE_RANK LAST ORDER BY commission_pct)
          OVER (PARTITION BY department_id) "Best"
FROM employees
ORDER BY department_id, salary;

LAST_NAME           DEPARTMENT_ID     SALARY      Worst       Best
------------------- ------------- ---------- ---------- ----------
Whalen                         10       4400       4400       4400
Goyal                          20       6000       6000      13000
Hartstein                      20      13000       6000      13000
…</pre>
<p>This displays the employees salary along with the best and worst salaries for all employees in the same dept.<br>
<br>
<i>“This is not the end. It is not even the beginning of the end. It is perhaps the end of the beginning” - Winston Churchill</i><br>
<br><a href="syntax-analytic.html">Back to Analytic features</a><br>
<br><a href="syntax-functions.html">List of all functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

