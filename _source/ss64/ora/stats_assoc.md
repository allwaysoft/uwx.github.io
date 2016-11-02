---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ASSOCIATE STATISTICS </h1> 
<p>Associate a type of statistics (or default statistics) with an 
  object. <br>This allows you to override the CBO on a per object basis (rather than using hints for every SQL statement.)<br>
  <br>
Syntax:</p>
<pre>   ASSOCIATE STATISTICS WITH
      COLUMNS [<i>schema</i>.]<i>table_column</i>,…
         USING [<i>schema</i>.]<i>statistics_type</i>;

   ASSOCIATE STATISTICS WITH
      <b><i>object</i></b> [<i>schema</i>.]<i>object_name</i>,…
         <i>cost_usage_clause</i>;

    Where <b><i>object</i></b> is any of
   
      FUNCTIONS
      PACKAGES
      TYPES
      INDEXES
      INDEXTYPES

<i>cost_usage_clause</i>s:
   USING [<i>schema</i>.]<i>statistics_type</i>
   USING NULL
   DEFAULT COST (<i>cpu_cost</i>, <i>io_cost</i>, <i>network_cost</i>)
   DEFAULT SELECTIVITY <i>default_selectivity</i>

Key:

<i>  cpu_cost</i>            An Integer: 0 or greater
<i>  io_cost</i>             An Integer: 0 or greater
<i>  network_cost</i>        An Integer: 0 or greater
<i>  default_selectivity</i> A number between 0 and 100
  <i>statistics_type</i>     Must already have been created. 

Examples:
ASSOCIATE STATISTICS WITH PACKAGES spud.spuds_package DEFAULT SELECTIVITY 10; 

ASSOCIATE STATISTICS WITH INDEXES My_Index DEFAULT COST (50,10,0);

ASSOCIATE STATISTICS WITH COLUMNS spud.My_Table.My_col USING spud.My_Stats;

ASSOCIATE STATISTICS WITH COLUMNS spud.My_Table.My_col USING NULL;
</pre>
<p> <span class="quote"><i> "There are lies, damned lies, and statistics" - Disraeli</i></span><br>
  <br>
<b>Related Commands:</b></p>
<p><a href="stats_dis.html">DISASSOCIATE STATISTICS</a><br>
<a href="../orap/DBMS_STATS.html">DBMS_STATS</a>  <br>
<a href="analyze.html">ANALYZE</a><a href="explain.html"><br>
EXPLAIN PLAN</a><br>
IMP with rows=y<br>
<br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_PART_COL_STATISTICS.html">DBA_PART_COL_STATISTICS</a>  <a href="../orad/ALL_PART_COL_STATISTICS.html">ALL_PART_COL_STATISTICS</a> <a href="../orad/USER_PART_COL_STATISTICS.html">USER_PART_COL_STATISTICS</a> 
 <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a>   <a href="../orad/ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a>  <a href="../orad/USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 

 <a href="../orav/V$BUFFER_POOL_STATISTICS.html">V$BUFFER_POOL_STATISTICS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stats_assoc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

