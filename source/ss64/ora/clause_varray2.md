---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>VARRAY Clause</h1> 
<p>Store as Varray <br>
  <br>
Syntax:</p>
<pre>   VARRAY <i>varray</i> [ELEMENT] IS OF [TYPE]] (ONLY <i>type</i>)

   VARRAY <i>varray</i> [NOT] SUBSTITUTABLE AT ALL LEVELS

   VARRAY <i>varray</i> STORE AS LOB <i>LOB_segname</i> (<i>LOB_Parameters</i>)

   VARRAY <i>varray</i> STORE AS LOB <i>LOB_segname</i> 

   VARRAY <i>varray</i> STORE AS LOB (<i>LOB_Parameters</i>)

<i>LOB_Parameters</i>:

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
<p><b>   Related Commands:<br>
  <br>
</b>MVIEW - <a href="mview_c.html">CREATE MATERIALIZED VIEW</a><b>
</b><br>
TABLE - <a href="table_c.html">CREATE TABLE</a><br> 
TABLE - <a href="table_a.html">ALTER TABLE</a></p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_VARRAYS.html">DBA_VARRAYS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VARRAYS.html">ALL_VARRAYS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VARRAYS.html">USER_VARRAYS</a>  </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_varray2.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

