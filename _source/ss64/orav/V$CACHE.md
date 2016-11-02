---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$CACHE </h1>  
 
<p>V$CACHE  is an optional view (OPS/RAC) The view can be created (even in standard edition Oracle) by running the script $ORACLE_HOME/rdbms/admin/catparr.sql <br>
  Run this
  under 
  the SYS account.</p>
<p>(In Oracle v9 this actually calls catclust.sql)</p>
<pre>Columns
   ___________________________
 
   FILE#
   BLOCK# 
   STATUS
   XNC
   NAME
   KIND
   OWNER#
   LOCK_ELEMENT_ADDR
   LOCK_ELEMENT_NAME
   PARTITION_NAME</pre>
<p><b>Related Views:</b></p>
<pre><a href="V$DB_OBJECT_CACHE.html">V$DB_OBJECT_CACHE</a> 
<a href="V$LIBRARYCACHE.html">V$LIBRARYCACHE</a> 
<a href="V$ROWCACHE.html">V$ROWCACHE</a> 
<a href="V$ROWCACHE_PARENT.html">V$ROWCACHE_PARENT</a> 
<a href="V$ROWCACHE_SUBORDINATE.html">V$ROWCACHE_SUBORDINATE</a> 
<a href="V$SUBCACHE.html">V$SUBCACHE</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$CACHE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

