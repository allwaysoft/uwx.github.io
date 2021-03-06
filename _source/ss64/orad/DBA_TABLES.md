---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_TABLES </h1><p> Description of all relational tables in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the table
   TABLE_NAME
      Name of the table
   TABLESPACE_NAME
      Name of the tablespace containing the table
   CLUSTER_NAME
      Name of the cluster,if any,to which the table belongs
   IOT_NAME
      Name of the index-only table,if any,to which the overflow or mapping table entry belongs
   PCT_FREE
      Minimum percentage of free space in a block
   PCT_USED
      Minimum percentage of used space in a block
   INI_TRANS
      Initial number of transactions
   MAX_TRANS
      Maximum number of transactions
   INITIAL_EXTENT
      Size of the initial extent in bytes
   NEXT_EXTENT
      Size of secondary extents in bytes
   MIN_EXTENTS
      Minimum number of extents allowed in the segment
   MAX_EXTENTS
      Maximum number of extents allowed in the segment
   PCT_INCREASE
      Percentage increase in extent size
   FREELISTS
      Number of process freelists allocated in this segment
   FREELIST_GROUPS
      Number of freelist groups allocated in this segment
   LOGGING
      Logging attribute
   BACKED_UP
      Has table been backed up since last modification?
   NUM_ROWS
      The number of rows in the table
   BLOCKS
      The number of used blocks in the table
   EMPTY_BLOCKS
      The number of empty (never used) blocks in the table
   AVG_SPACE
      The average available free space in the table
   CHAIN_CNT
      The number of chained rows in the table
   AVG_ROW_LEN
      The average row length,including row overhead
   AVG_SPACE_FREELIST_BLOCKS
      The average freespace of all blocks on a freelist
   NUM_FREELIST_BLOCKS
      The number of blocks on the freelist
   DEGREE
      The number of threads per instance for scanning the table
   INSTANCES
      The number of instances across which the table is to be scanned
   CACHE
      Whether the table is to be cached in the buffer cache
   TABLE_LOCK
      Whether table locking is enabled or disabled
   SAMPLE_SIZE
      The sample size used in analyzing this table
   LAST_ANALYZED
      The date of the most recent time this table was analyzed
   PARTITIONED
      Is this table partitioned? YES or NO
   IOT_TYPE
      If index-only table,then IOT_TYPE is IOT or IOT_OVERFLOW or IOT_MAPPING else NULL
   TEMPORARY
      Can the current session only see data that it place in this object itself?
   SECONDARY
      Is this table object created as part of icreate for domain indexes?
   NESTED
      Is the table a nested table?
   BUFFER_POOL
      The default buffer pool to be used for table blocks
   ROW_MOVEMENT
      Whether partitioned row movement is enabled or disabled
   GLOBAL_STATS
      Are the statistics calculated without merging underlying partitions?
   USER_STATS
      Were the statistics entered directly by the user?
   DURATION
      If temporary table,then duration is sys$session or sys$transaction else NULL
   SKIP_CORRUPT
      Whether skip corrupt blocks is enabled or disabled
   MONITORING
      Should we keep track of the amount of modification?
   CLUSTER_OWNER
      Owner of the cluster,if any,to which the table belongs
   DEPENDENCIES
      Should we keep track of row level dependencies?

</pre>
<p><b>Related:</b></p>
<pre> <a href="DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>         <a href="ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>        <a href="USER_ALL_TABLES.html">USER_ALL_TABLES</a>
 <a href="DBA_PARTIAL_DROP_TABS.html">DBA_PARTIAL_DROP_TABS</a>  <a href="ALL_PARTIAL_DROP_TABS.html">ALL_PARTIAL_DROP_TABS</a> <a href="USER_PARTIAL_DROP_TABS.html">USER_PARTIAL_DROP_TABS</a>
 <a href="DBA_PART_TABLES.html">DBA_PART_TABLES</a>        <a href="ALL_PART_TABLES.html">ALL_PART_TABLES</a>       <a href="USER_PART_TABLES.html">USER_PART_TABLES</a> 
 DBA_TABLES             <a href="ALL_TABLES.html">ALL_TABLES</a>            <a href="USER_TABLES.html">USER_TABLES</a>          <a href="TAB.html">TAB</a> 
 <a href="DBA_TABLESPACES.html">DBA_TABLESPACES</a>                              <a href="USER_TABLESPACES.html">USER_TABLESPACES</a> 
 <a href="DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>         <a href="USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a> 
 <a href="DBA_TAB_COLS.html">DBA_TAB_COLS</a>         <a href="ALL_TAB_COLS.html">ALL_TAB_COLS</a>           <a href="USER_TAB_COLS.html"> USER_TAB_COLS</a> 
 <a href="DBA_TAB_COMMENTS.html">DBA_TAB_COMMENTS</a>     <a href="ALL_TAB_COMMENTS.html">ALL_TAB_COMMENTS</a>        <a href="USER_TAB_COMMENTS.html">USER_TAB_COMMENTS</a> 
 <a href="DBA_TAB_HISTOGRAMS.html">DBA_TAB_HISTOGRAMS</a>   <a href="ALL_TAB_HISTOGRAMS.html">ALL_TAB_HISTOGRAMS</a>      <a href="USER_TAB_HISTOGRAMS.html">USER_TAB_HISTOGRAMS</a> 
 <a href="DBA_TAB_MODIFICATIONS.html">DBA_TAB_MODIFICATIONS</a>  <a href="ALL_TAB_MODIFICATIONS.html">ALL_TAB_MODIFICATIONS</a> <a href="USER_TAB_MODIFICATIONS.html">USER_TAB_MODIFICATIONS</a> 
 <a href="DBA_TAB_PARTITIONS.html">DBA_TAB_PARTITIONS</a>   <a href="ALL_TAB_PARTITIONS.html">ALL_TAB_PARTITIONS</a>      <a href="USER_TAB_PARTITIONS.html">USER_TAB_PARTITIONS</a> 
 <a href="DBA_CONSTRAINTS.html">DBA_CONSTRAINTS</a>
</pre>
<p>
<!-- #BeginLibraryItem "/Library/foot_orad.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

