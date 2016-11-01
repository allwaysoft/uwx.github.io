---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>Query Hint</h1>
<p>Specify a table scan, index, or locking method for the query optimizer. Normally the query optimizer will pick the best optimization method without hints being specified.</p>
<pre>Syntax
 
   FAST <i>number_rows</i> 
   FORCE ORDER
   HASH <b>GROUP</b>
   ORDER <b>GROUP</b> 
   LOOP <b>JOIN</b> 
   MERGE <b>JOIN</b>    
   HASH <b>JOIN</b> 
   MAXDOP <i>number_of_processors</i> 
   OPTIMIZE FOR ( @<i>variable_name</i> = <i>literal_constant</i> [ ,…n ] ) 
   PARAMETERIZATION { SIMPLE | FORCED }
   RECOMPILE
   ROBUST PLAN 
   KEEP PLAN 
   KEEPFIXED PLAN
   EXPAND VIEWS 
   MAXRECURSION number 
   CONCAT <b>UNION</b> 
   HASH <b>UNION</b> 
   MERGE <b>UNION</b>
   USE PLAN N'<i>xml_plan</i>'

Key:

   FAST number_rows        - Optimise for fast retrieval of the first number_rows. 
   FORCE ORDER             - Preserve the join order indicated 
   HASH|ORDER <b>GROUP</b>        - Used by GROUP BY, DISTINCT, or COMPUTE clause
   LOOP|MERGE|HASH <b>JOIN</b>    - Specify the allowable join operations
   MAXDOP number           - Override the max_degree_of_parallelism configuration option
   OPTIMIZE FOR            - Specify a local variables value
   PARAMETERIZATION        - Specify parameterization rules 
   RECOMPILE               - Force the query optimizer to recompile the query plan
   ROBUST PLAN             - Optimise for reliability (rather than performance)
   KEEP PLAN               - Relax the estimated recompile threshold
   KEEPFIXED PLAN          - Do not recompile a query due to changes in statistics
   MERGE|HASH|CONCAT <b>UNION</b> - How to perform UNION operations
   EXPAND VIEWS            - virtually disallow direct use of indexed views
                             (and indexes on indexed views) in the query plan.
   MAXRECURSION number     - Max no. of recursions allowed (0-32767)
   USE PLAN N'xml_plan'    - Force the query optimizer to use an existing query plan
   
</pre>
<p> An INSERT statement may only utilise Query hints within a nested SELECT clause (INSERT...SELECT... FROM ...).</p>
<p>Query hints cannot be specified in a subquery.</p>
<p class="quote"><i>"The coolness of menthol, and a hint of mint" ~ Bill Nimmo (plugging Newport cigarettes)</i></p>
<p><b>Related commands:</b></p>
<p><a href="clause_table_hint.html">Table Hints</a><br>
  <a href="select.html">SELECT</a><br>
  <span class="body"><a href="insert.html">INSERT</a><br>
  <a href="update.html">UPDATE</a></span><br>
  <a href="delete.html">DELETE</a><br>
  <a href="set.html">SET</a> TRANSACTION ISOLATION LEVEL<br>
  <br>
<b>Equivalent Oracle command</b>:</p>
<p><a href="../ora/select_hints.html">Oracle Hints</a> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_query_hint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

