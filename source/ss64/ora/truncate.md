---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>TRUNCATE Statement</h1> 
<p>Remove ALL rows from a table or cluster.<br>
  <br>
  Syntax:</p>
<pre>   TRUNCATE TABLE [<i>schema</i>.]<i>table</i> 
     [{<u>PRESERVE</u>|PURGE} MATERIALIZED VIEW LOG]
        [{<u>DROP</u> | REUSE} STORAGE]

   TRUNCATE CLUSTER [<i>schema</i>.]<i>cluster</i> 
        [{<u>DROP</u> | REUSE} STORAGE]</pre>
<p>For backwards compatibility, the terms "snapshot" and "materialized view" are synonymous.<b><br>
  <br>
  </b><i class="quote">"A clever man commits no minor blunders" ~ Goethe 
  </i><b><br>
  <br>
Related Commands:</b></p>
<p><a href="syntax-trunc.html">Trunc function</a><br>
<a href="delete.html">DELETE</a><br>
<a href="insert.html">INSERT</a><br>
<a href="select.html">SELECT</a><br>
<a href="update.html">UPDATE</a></p>
<p><b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_CLUSTERS.html">DBA_CLUSTERS</a>         <a href="../orad/ALL_CLUSTERS.html">ALL_CLUSTERS</a>         <a href="../orad/USER_CLUSTERS.html">USER_CLUSTERS</a>        
  <a href="../orad/DBA_CLUSTER_HASH_EXPRESSIONS.html">DBA_CLUSTER_HASH_EXPRESSIONS</a>              <a href="../orad/USER_CLUSTER_HASH_EXPRESSIONS.html">USER_CLUSTER_HASH_EXPRESSIONS</a> 
                       <a href="../orad/ALL_CLUSTER_HASH_EXPRESSIONS.html">ALL_CLUSTER_HASH_EXPRESSIONS</a> 

  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
                                                                <a href="../orad/DICTIONARY.html">DICTIONARY</a>
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="truncate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

