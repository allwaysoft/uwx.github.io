---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Analytic Functions - Window Aggregate Functions </h1>
<p> Window aggregate functions return a summary value representing a set of rows.<br>
  <br>
  This syntax applies to the aggregate functions SUM, AVG, MIN, MAX, MEDIAN, FIRST_VALUE, 
  LAST_VALUE, STDDEV, VARIANCE, COUNT, VAR_SAMP, VAR_POP, STDDEV_SAMP, STDDEV_POP, 
  COVAR_SAMP, COVAR_POP, REGR_SLOPE, REGR_INTERCEPT, REGR_R2, REGR_AVGX, REGR_AVGY, 
  REGR_COUNT, REGR_SXX, REGR_SXY, REGR_SYY.<br>
  <br>
  Each Window aggregate function can have an optional clause defining the size 
  of the window, by default the window is unbounded i.e. the whole table/partition. 
  This provides answers to questions such as "what is the average sale price 
  over all time" or "What is the average sale price over the last 28 
  days"<br>
  <br>
  <b>Defining the Window size</b><br>
  The window (or the set of rows to be worked on) can be defined as a fixed number 
  of rows, all preceeding or all following rows or it can be calculated based 
  on comparing values (or time periods) in the current row with values in the 
  ordered sequence. This definition is made with the ROWS or RANGE clause<br>
</p>
<p>Syntax:</p>
<pre>Function([arguments]) OVER 
   ([PARTITION BY value/expr]
       [ORDER BY expr [<u>ASC</u>|DESC]
          [ROWS | RANGE <i>windowing_clause</i>]])

<i>windowing_clause</i>s:

   INTERVAL 'nn' DAY PRECEDING
   INTERVAL 'nn' SECONDS FOLLOWING
   INTERVAL 'nn' MONTH PRECEDING
   BETWEEN x PRECEDING AND y FOLLOWING
   BETWEEN x PRECEDING AND y PRECEDING
   BETWEEN CURRENT ROW AND y FOLLOWING
   BETWEEN x PRECEDING AND CURRENT ROW
   BETWEEN x PRECEDING AND UNBOUNDED FOLLOWING
   BETWEEN UNBOUNDED PRECEDING AND y FOLLOWING
   column BETWEEN current.column +/- n AND current.column +/- m
   UNBOUNDED PRECEDING | FOLLOWING
   value/expr PRECEDING | FOLLOWING
   CURRENT ROW</pre>
<p> For time intervals, the ORDER BY clause has to be a DATE column/expression. 
  <br>
  <br>
  If you omit the windowing_clause entirely, the default is RANGE BETWEEN UNBOUNDED 
  PRECEDING AND CURRENT ROW. <br>
  <br>
  If ROWS is specified, it's a physical offset (the no. of rows in the window)<br>
  If RANGE is specified, it's a logical offset.<br>
  <br>
  UNBOUNDED means the very first/last row of the partition, or if not partitioned, 
  the first/last row of the dataset.<br>
  <br>
  Examples:</p>
<pre>   SELECT employee_name, hire_date, salary,
     AVG(salary) OVER (ORDER BY hire_date)
     RANGE INTERVAL '28' DAY PREDEEDING
   FROM employees;

   SELECT department_id, hire_date, salary,
     SUM(salary) OVER (PARTITION BY department_id
     ORDER BY hire_date 
     ROWS UNBOUNDED PRECEEDING) As "Salary running sum"
   FROM employees
   ORDER BY department_id;   </pre>
<p> <b> Analytic aggregate functions<br>
  </b>This other aggregate functions listed at the top of the page all work in 
  much the same way, FIRST_VALUE and LAST_VALUE are particularly 
  useful when working with a data window.<br>
  <br>
  The functions PERCENTILE_CONT and PERCENTILE_DISC are new in Oracle 9 and calculate 
  reverse percentiles e.g. given the value 0.42 find the item that comes out at 
  42% in the ordered data set (_DISC = discrete or nearest value, _CONT=continuous 
  using linear interpolation)<br>
  <br>
<i class="quote">"In the long run the aggregate of decisions in individual businessmen, exercising individual judgment in a free economy, even if often mistaken, is less likely to do harm than the centralized decisions of a government" ~ P. J. O'Rourke (Eat the Rich)</i></p>
<p>Related</p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
