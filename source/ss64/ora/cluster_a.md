---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER CLUSTER</h1> 
<p>Change the storage properties of a cluster.<br>
  <br>
  Syntax:</p>
<pre>   ALTER CLUSTER <i>schema.cluster options</i></pre>
<p>The <i>options</i> used with this command can be any combination of the following:</p>
<pre>    PCTUSED <i>int</i>
    PCTFREE <i>int</i>
    INITRANS <i>int</i>
    MAXTRANS <i>int</i>
    SIZE <i>int</i> K | M
    TABLESPACE <i>tablespace_name
</i>    STORAGE <a href="clause_storage.html">storage_clause</a>
    CACHE <i>int</i> | <u>NOCACHE</u>
    ALLOCATE EXTENT
    ALLOCATE EXTENT SIZE <i>int</i> K | M
    ALLOCATE EXTENT DATAFILE 'filename'
    ALLOCATE EXTENT INSTANCE <i>int</i>
    DEALLOCATE UNUSED
    DEALLOCATE UNUSED KEEP <i>int</i> K | M
    INSTANCE <i>instance_no</i>
    PARALLEL <a href="clause_parallel.html">parallel_clause</a>
</pre>
<p>If the PARALLEL clause is used it should be the last option.</p>
<p>Specify CACHE if you want the blocks retrieved for this cluster to be placed at the most recently used end of the least recently used (LRU) list
in the buffer cache when a full table scan is performed. This can improve performance for small lookup  tables.</p>
<p>When you explicitly ALLOCATE an extent,  Oracle will ignore the  cluster’s storage parameters when allocating space for a new extent.
Therefore, specify SIZE only if you do not want  to use the default value.</p>
<p><i class="quote">"Birds of a feather will gather together" ~ Robert Burton</i><br>
  <br>
<b> Related Commands:</b></p>
<p><a href="analyze.html">ANALYZE</a> CLUSTER COMPUTE STATISTICS<br>
<a href="cluster_c.html">CREATE CLUSTER</a><br>
<b><br>
Related Views:</b></p>
<pre> <a href="../orad/DBA_CLUSTERS.html">DBA_CLUSTERS</a>      <a href="../orad/ALL_CLUSTERS.html">ALL_CLUSTERS</a>     <a href="../orad/USER_CLUSTERS.html">USER_CLUSTERS</a> 
 <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> 
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cluster_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

