---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_EXTENTS </h1><p> Extents comprising all segments in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the segment associated with the extent
   SEGMENT_NAME
      Name of the segment associated with the extent
   PARTITION_NAME
      Partition/Subpartition Name,if any,of the segment
   SEGMENT_TYPE
      Type of the segment
   TABLESPACE_NAME
      Name of the tablespace containing the extent
   EXTENT_ID
      Extent number in the segment
   FILE_ID
      Name of the file containing the extent
   BLOCK_ID
      Starting block number of the extent
   BYTES
      Size of the extent in bytes
   BLOCKS
      Size of the extent in ORACLE blocks
   RELATIVE_FNO
      Relative number of the file containing the segment header</pre>
<p><b>Related:</b></p>
<p><a href="DBA_DMT_FREE_SPACE.html">DBA_DMT_FREE_SPACE</a><br> 
<a href="DBA_DMT_USED_EXTENTS.html">DBA_DMT_USED_EXTENTS</a><br>
<a href="DBA_LMT_USED_EXTENTS.html">DBA_LMT_USED_EXTENTS</a><br>
<a href="DBA_LMT_FREE_SPACE.html">DBA_LMT_FREE_SPACE</a><br>
<a href="DBA_FREE_SPACE.html">DBA_FREE_SPACE</a><br>
<a href="DBA_SEGMENTS.html">DBA_SEGMENTS</a><br>
Storage - <a href="../ora/syntax-storage.html">Blocks, Extents, Segments</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_EXTENTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

