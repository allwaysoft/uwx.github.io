---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>INDEX_STATS </h1><p> statistics on the b-tree </p> 
 
<pre>Columns
   ___________________________
 
   OPT_CMPR_PCTSAVE
      percentage storage saving expected from optimal prefix compression
   HEIGHT
      height of the b-tree
   BLOCKS
      blocks allocated to the segment
   NAME
      name of the index
   PARTITION_NAME
      name of the index partition,if partitioned
   LF_ROWS
      number of leaf rows (values in the index)
   LF_BLKS
      number of leaf blocks in the b-tree
   LF_ROWS_LEN
      sum of the lengths of all the leaf rows
   LF_BLK_LEN
      useable space in a leaf block
   BR_ROWS
      number of branch rows
   BR_BLKS
      number of branch blocks in the b-tree
   BR_ROWS_LEN
      sum of the lengths of all the branch blocks in the b-tree
   BR_BLK_LEN
      useable space in a branch block
   DEL_LF_ROWS
      number of deleted leaf rows in the index
   DEL_LF_ROWS_LEN
      total length of all deleted rows in the index
   DISTINCT_KEYS
      number of distinct keys in the index
   MOST_REPEATED_KEY
      how many times the most repeated key is repeated
   BTREE_SPACE
      total space currently allocated in the b-tree
   USED_SPACE
      total space that is currently being used in the b-tree
   PCT_USED
      percent of space allocated in the b-tree that is being used
   ROWS_PER_KEY
      average number of rows per distinct key
   BLKS_GETS_PER_ACCESS
      Expected number of consistent mode block gets per row. This assumes that a row chosen at random from the table is being searched for using the index
   PRE_ROWS
      number of prefix rows (values in the index)
   PRE_ROWS_LEN
      sum of lengths of all prefix rows
   OPT_CMPR_COUNT
      optimal prefix compression count for the index

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="INDEX_STATS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

