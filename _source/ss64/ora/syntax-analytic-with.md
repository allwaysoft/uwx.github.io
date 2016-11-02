---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Analytic Features - WITH clause</h1>
<p> A traditional SQL query can contain more than one SELECT from the same table 
  such as <br>
  SELECT a, sum(b) FROM <b>table_x</b> HAVING sum (b) &gt; (SELECT sum(b) FROM 
  <b>table_x</b>)<br>
  To avoid scanning the table twice, we can define a WITH clause that will SELECT 
  a, sum(b) from table_x.<br>
  <br>
  The WITH clause must be defined <i>before </i>it is used in the query.<br>
  <br>
  WITH clause Syntax:</p>
<pre> <b>  WITH
   <i>name_for_summary_data</i> AS (
     SELECT Statement)</b>
   SELECT <i>columns
</i>   FROM <i>name_for_summary_data</i>
   WHERE <i>conditions</i> &lt;=&gt; (
                      SELECT <i>column
</i>                      FROM <i>name_for_summary_data</i>)
   [ORDER BY <i>columns</i>]</pre>
<p>The WITH clause is resolved internally as either an in-line view or a temporary 
  table (the CBO will choose).<br>
  The <i>name_for_summary_data</i> is visible to all elements of the query and 
  subquery. <br>
  <br>
  Example:<br>
</p>
<pre>  WITH
   MySummary AS (
<b>     SELECT dept_name, Sum(Salary) AS total_sal
     FROM emp, dept
     WHERE emp.dept_id = dept.dept_id
     GROUP BY dept_name</b>)
   SELECT dept_name, total_sal
   FROM MySummary
   WHERE total_sal &gt; (
                      SELECT SUM (total_sal) * 1/12
                      FROM MySummary)
   ORDER BY total_sal</pre>
<p><b>Notes:</b><br>
  The <i>name_for_summary_data</i> can be the same as an existing table name and 
  will take precedence. <br>
</p>
<p><b>Related</b></p>
<p><a href="syntax-analytic.html">Analytic features</a><br>
<a href="syntax-functions.html">Oracle SQL Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-analytic-with.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
