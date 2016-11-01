---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>LOB Clause</h1> 
<p>Specify a Large Object<br>
  <br>
  Syntax:</p>
<pre>   LOB (<i>lob_item</i>,…) STORE AS (<i>options</i>)

   LOB (<i>lob_item</i>,…) STORE AS <i>LOB_segname</i> [(<i>options</i>)]

<i>options</i>:

   TABLESPACE <i>tablespace</i>
   {ENABLE|DISABLE} STORAGE IN ROW
   STORAGE <a href="clause_storage.html">storage_clause</a>
   CHUNK <i>int</i>
   PCTVERSION <i>int</i>
   CACHE
   CACHE READS [[NO]LOGGING]
   NOCACHE [[NO]LOGGING]
   RETENTION
   FREEPOOLS <i>int</i></pre>
<p>Syntax - to modify a LOB:</p>
<pre>   MODIFY LOB (<i>lob_item</i>,…) <i>(storage_options</i>)</pre>
<p><i>storage_options</i>: <br>
</p>
<pre>   PCTVERSION <i>int</i>
   CACHE
   CACHE READS [LOGGING | NOLOGGING]
   NOCACHE [LOGGING | NOLOGGING]
   ALLOCATE EXTENT [( [DATAFILE filname] [SIZE <i>int</i> {K | M}] [INSTANCE <i>int</i>] )]
   DEALLOCATE UNUSED [KEEP <i>int</i> [K|M] ]
   STORAGE <a href="clause_storage.html">storage_clause</a></pre>
<p><b> Related Commands:<br>
  </b><br>
  <br>
  MVIEW - <a href="mview_a.html">ALTER MATERIALIZED VIEW</a><b><br>
  </b>TABLE - <a href="table_c.html">CREATE TABLE</a> <br>
  TABLE - <a href="table_a.html">ALTER TABLE</a> <b><br>
  </b></p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_LOBS.html">DBA_LOBS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_LOBS.html">ALL_LOBS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_LOBS.html">USER_LOBS</a> <br>  
  <a href="../orad/DBA_LOB_PARTITIONS.html">DBA_LOB_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_LOB_PARTITIONS.html">ALL_LOB_PARTITIONS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_LOB_PARTITIONS.html">USER_LOB_PARTITIONS</a>  <br>  
<a href="../orad/DBA_LOB_SUBPARTITIONS.html">DBA_LOB_SUBPARTITIONS</a>&nbsp;<a href="../orad/ALL_LOB_SUBPARTITIONS.html">ALL_LOB_SUBPARTITIONS</a>&nbsp;<a href="../orad/USER_LOB_SUBPARTITIONS.html">USER_LOB_SUBPARTITIONS</a>  </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_lob.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

