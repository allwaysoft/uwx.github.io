---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_CLUSTERS </h1><p> Descriptions of user's own clusters </p> 
 
<pre>Columns
   ___________________________
 
   CLUSTER_NAME
      Name of the cluster
   TABLESPACE_NAME
      Name of the tablespace containing the cluster
   PCT_FREE
      Minimum percentage of free space in a block
   PCT_USED
      Minimum percentage of used space in a block
   KEY_SIZE
      Estimated size of cluster key plus associated rows
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
   AVG_BLOCKS_PER_KEY
      Average number of blocks containing rows with a given cluster key
   CLUSTER_TYPE
      Type of cluster: b-tree index or hash
   FUNCTION
      If a hash cluster,the hash function
   HASHKEYS
      If a hash cluster,the number of hash keys (hash buckets)
   DEGREE
      The number of threads per instance for scanning the cluster
   INSTANCES
      The number of instances across which the cluster is to be scanned
   CACHE
      Whether the cluster is to be cached in the buffer cache
   BUFFER_POOL
      The default buffer pool to be used for cluster blocks
   SINGLE_TABLE
      Whether the cluster can contain only a single table
   DEPENDENCIES
      Should we keep track of row level dependencies?

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_CLUSTERS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

