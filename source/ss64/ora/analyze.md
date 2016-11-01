---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ANALYZE Statement </h1> 
<p>Update  statistics. <br>
  Now superceeded by <a href="../orap/DBMS_STATS.html">GATHER_SCHEMA_STATS</a>  <br>
  <br>
  Syntax:</p>
<pre>   ANALYZE TABLE <i>tablename</i> COMPUTE|ESTIMATE|DELETE STATISTICS <i>ptnOption</i> <i>options</i>
   ANALYZE INDEX <i>indexname</i> COMPUTE|ESTIMATE|DELETE STATISTICS <i>ptnOption options</i><br>   ANALYZE CLUSTER <i>clustername</i> COMPUTE|ESTIMATE|DELETE STATISTICS <i>options</i>

<i>ptnOption</i>
   PARTITION (partion)
   SUBPARTITION (<i>subpartition</i>)

<i>options</i>
   VALIDATE STRUCTURE [CASCADE] [INTO <i>tablename</i>]
   LIST CHAINED ROWS [INTO <i>tablename</i>]
   COMPUTE|ESTIMATE STATISTICS FOR TABLE
   COMPUTE|ESTIMATE STATISTICS FOR ALL COLUMNS
   COMPUTE|ESTIMATE STATISTICS FOR ALL INDEXED COLUMNS
   COMPUTE|ESTIMATE STATISTICS FOR COLUMNS [SIZE <i>int</i>] column [SIZE <i>int</i>]

   When Estimating statistics you can optionally 
   specify a sample:
    …ESTIMATE STATISTICS SAMPLE <i>n</i> ROWS
    …ESTIMATE STATISTICS SAMPLE <i>n</i> PERCENT</pre>
<p>Validate structure will perform an integrity check - and will therefore lock the table/index/cluster while it is running.<br><br>
If the INTO clause is used to store a list of chained rows in a table - the default tablename is CHAINED_ROWS</p>
<p> UTLCHAIN.sql - creates the chained_rows table<br><br>
The ANALYZE command is available for all versions of Oracle, however to obtain faster and better statistics use the procedures supplied - in 7.3.4 and 8.0 
<a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY.ANALYZE_SCHEMA</a>, and in 8i and above - <a href="../orap/DBMS_STATS.html">DBMS_STATS.GATHER_SCHEMA_STATS</a><br>
<br>
<i class="quote">"50% of the population has a below average understanding of statistics." ~ Anon</i><br>
<br>
<b>Related:</b></p>
<p><a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY.ANALYZE_SCHEMA</a><br>
<a href="../orap/DBMS_STATS.html">DBMS_STATS.GATHER_SCHEMA_STATS</a> <br>
<a href="../orap/DBMS_DDL.html">DBMS_DDL</a> - compile/analyze objects <br>
<a href="../orap/DBMS_IOT.html">DBMS_IOT</a>.BUILD_CHAIN_ROWS_TABLE <br>
<br>
<a href="explain.html">EXPLAIN PLAN</a><br>
STATISTICS - <a href="stats_assoc.html">ASSOCIATE STATISTICS</a> <br>
STATISTICS - <a href="stats_dis.html">DISASSOCIATE STATISTICS</a></p>
<pre>&nbsp;<a href="../orad/INDEX_STATS.html">INDEX_STATS</a>
 <a href="../orad/DBA_PART_COL_STATISTICS.html">DBA_PART_COL_STATISTICS</a>&nbsp;<a href="../orad/ALL_PART_COL_STATISTICS.html">ALL_PART_COL_STATISTICS</a> <a href="../orad/USER_PART_COL_STATISTICS.html">USER_PART_COL_STATISTICS</a> 
 <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a>&nbsp;&nbsp;<a href="../orad/ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a>  <a href="../orad/USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 
 <a href="../orad/DBA_USTATS.html">DBA_USTATS</a>              <a href="../orad/ALL_USTATS.html">ALL_USTATS</a>              <a href="../orad/USER_USTATS.html">USER_USTATS</a> 
 <a href="../orav/V$BUFFER_POOL_STATISTICS.html">V$BUFFER_POOL_STATISTICS</a></pre>
<p>Equivalent SQL Server command:
<a href="../sql/stats_c.html">CREATE STATISTICS </a><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

