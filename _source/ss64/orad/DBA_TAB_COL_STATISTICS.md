---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_TAB_COL_STATISTICS </h1><p>Columns of user's tables, views and clusters </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Table,view or cluster owner
   TABLE_NAME
      Table,view or cluster name
   COLUMN_NAME
      Column name
   NUM_DISTINCT
      The number of distinct values in the column
   LOW_VALUE
      The low value in the column
   HIGH_VALUE
      The high value in the column
   DENSITY
      The density of the column
   NUM_NULLS
      The number of nulls in the column
   NUM_BUCKETS
      The number of buckets in histogram for the column
   LAST_ANALYZED
      The date of the most recent time this column was analyzed
   SAMPLE_SIZE
      The sample size used in analyzing this column
   GLOBAL_STATS
      Are the statistics calculated without merging underlying partitions?
   USER_STATS
      Were the statistics entered directly by the user?
   AVG_COL_LEN
      The average length of the column in bytes

</pre>
<p><b>Related:</b></p>
<pre> <a href="DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>         <a href="ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="USER_ALL_TABLES.html"> USER_ALL_TABLES</a>
 <a href="DBA_PART_TABLES.html">DBA_PART_TABLES</a>       <a href="ALL_PART_TABLES.html"> ALL_PART_TABLES</a>       <a href="USER_PART_TABLES.html">USER_PART_TABLES</a> 
 <a href="DBA_TABLES.html">DBA_TABLES</a>           <a href="ALL_TABLES.html">  ALL_TABLES</a>           <a href="USER_TABLES.html"> USER_TABLES</a>          <a href="TAB.html">TAB</a> 
 <a href="DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>        <a href="ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="USER_TAB_COLUMNS.html"> USER_TAB_COLUMNS</a> 
 <a href="DBA_TAB_COLS.html">DBA_TAB_COLS</a>         <a href="ALL_TAB_COLS.html">  ALL_TAB_COLS</a>         <a href="USER_TAB_COLS.html"> USER_TAB_COLS</a> 
 DBA_TAB_COL_STATISTICS <a href="ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a> <a href="USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 
 <a href="DBA_TAB_COMMENTS.html">DBA_TAB_COMMENTS</a>     <a href="ALL_TAB_COMMENTS.html">  ALL_TAB_COMMENTS</a>     <a href="USER_TAB_COMMENTS.html"> USER_TAB_COMMENTS</a> 
 <a href="DBA_TAB_HISTOGRAMS.html">DBA_TAB_HISTOGRAMS</a>   <a href="ALL_TAB_HISTOGRAMS.html">  ALL_TAB_HISTOGRAMS</a>   <a href="USER_TAB_HISTOGRAMS.html"> USER_TAB_HISTOGRAMS</a> 
 <a href="DBA_TAB_MODIFICATIONS.html">DBA_TAB_MODIFICATIONS</a>  <a href="ALL_TAB_MODIFICATIONS.html">ALL_TAB_MODIFICATIONS</a> <a href="USER_TAB_MODIFICATIONS.html">USER_TAB_MODIFICATIONS</a> 
 <a href="DBA_TAB_PARTITIONS.html">DBA_TAB_PARTITIONS</a>   <a href="ALL_TAB_PARTITIONS.html">  ALL_TAB_PARTITIONS</a>    <a href="USER_TAB_PARTITIONS.html">USER_TAB_PARTITIONS</a> 
</pre>
<p>
<!-- #BeginLibraryItem "/Library/foot_orad.lbi" --></p><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_TAB_COL_STATISTICS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

