---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_SEGMENTS </h1><p> Storage allocated for all database segments </p> 
 
<pre>Columns
   ___________________________
 
   SEGMENT_NAME
      Name,if any,of the segment
   PARTITION_NAME
      Partition/Subpartition Name,if any,of the segment
   SEGMENT_TYPE
      "Type of segment: "TABLE","CLUSTER","INDEX","ROLLBACK","DEFERRED
   TABLESPACE_NAME
      Name of the tablespace containing the segment
   BYTES
      Size,in bytes,of the segment
   BLOCKS
      Size,in Oracle blocks,of the segment
   EXTENTS
      Number of extents allocated to the segment
   INITIAL_EXTENT
      Size,in bytes,of the initial extent of the segment
   NEXT_EXTENT
      Size,in bytes,of the next extent to be allocated to the segment
   MIN_EXTENTS
      Minimum number of extents allowed in the segment
   MAX_EXTENTS
      Maximum number of extents allowed in the segment
   PCT_INCREASE
      Percent by which to increase the size of the next extent to be allocated
   FREELISTS
      Number of process freelists allocated to this segment
   FREELIST_GROUPS
      Number of freelist groups allocated to this segment
   BUFFER_POOL
      The default buffer pool to be used for blocks from this segment

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_SEGMENTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

