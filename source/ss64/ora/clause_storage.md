---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>STORAGE Clause</h1> 
<p>Storage options that apply to tables, indexes, clusters, mviews 
  and rollback segments. <br>
  <br>
  Syntax:</p>
<pre>   STORAGE <i>options</i> </pre>
<p><i>Options</i></p>
<pre>   INITIAL <i>int</i> K | M
   NEXT <i>int</i> K | M
   MINEXTENTS <i>int</i>
   MAXEXTENTS <i>int</i>
   MAXEXTENTS UNLIMITED
   PCTINCREASE <i>int</i>
   FREELISTS <i>int</i>
   FREELIST GROUPS <i>int</i>
   OPTIMAL
   OPTIMAL <i>int</i> K | M
   OPTIMAL NULL
   BUFFER POOL {KEEP|RECYCLE|DEFAULT}</pre>
<p><b>  Related Commands:</b></p>
<p>INDEX - <a href="index_a.html">ALTER INDEX</a><br>
TABLE - <a href="table_a.html">ALTER TABLE</a><br>
MVIEW - <a href="mview_a.html">ALTER MATERIALIZED VIEW</a> (Snapshot)<br>
MVIEW LOG - <a href="mview_log_a.html">ALTER MATERIALIZED 
VIEW LOG</a> <b><br></b></p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> <br>  
  <a href="../orad/FILEXT$.html">FILEXT$</a> <br>  
  <a href="../orad/SYSFILES.html">SYSFILES</a><br>  
 <a href="../orad/DBA_TEMP_FILES.html">DBA_TEMP_FILES</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_storage.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
