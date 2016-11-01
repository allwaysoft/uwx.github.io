---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_UNDO_EXTENTS </h1><p> Extents comprising all segments in the system managed undo tablespaces </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the segment associated with the extent
   SEGMENT_NAME
      Name of the segment associated with the extent
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
      Relative number of the file containing the segment header
   COMMIT_JTIME
      Commit Time of the undo in the extent expressed as Julian date
   COMMIT_WTIME
      Commit Time of the undo in the extent expressed as wall clock time
   STATUS
      Transaction Status of the undo in the extent

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_UNDO_EXTENTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

