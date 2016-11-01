---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_TAB_COL_STATISTICS </h1><p>Columns of user's tables, views and clusters </p> 
 
<pre>Columns
   ___________________________
 
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

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_TAB_COL_STATISTICS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

