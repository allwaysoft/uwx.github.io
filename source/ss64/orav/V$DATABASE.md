---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$DATABASE </h1>  
 <p> Data Dictionary View </p> 
 
<pre>Columns
   ___________________________
 
   DBID
   NAME
   CREATED
   RESETLOGS_CHANGE#
   RESETLOGS_TIME
   PRIOR_RESETLOGS_CHANGE#
   PRIOR_RESETLOGS_TIME
   LOG_MODE
   CHECKPOINT_CHANGE#
   ARCHIVE_CHANGE#
   CONTROLFILE_TYPE
   CONTROLFILE_CREATED
   CONTROLFILE_SEQUENCE#
   CONTROLFILE_CHANGE#
   CONTROLFILE_TIME
   OPEN_RESETLOGS
   VERSION_TIME
   OPEN_MODE
   PROTECTION_MODE
   PROTECTION_LEVEL
   REMOTE_ARCHIVE
   ACTIVATION#
   DATABASE_ROLE
   ARCHIVELOG_CHANGE#
   SWITCHOVER_STATUS
   DATAGUARD_BROKER
   GUARD_STATUS
   SUPPLEMENTAL_LOG_DATA_MIN
   SUPPLEMENTAL_LOG_DATA_PK
   SUPPLEMENTAL_LOG_DATA_UI
   FORCE_LOGGING</pre>
<p>Examples</p>
<p class="code">select NAME, LOG_MODE, CREATED from v$database;</p>
<p><b>Related:</b></p>
<pre><a href="V$ACTIVE_INSTANCES.html">V$ACTIVE_INSTANCES</a> 
<a href="V$BGPROCESS.html">V$BGPROCESS</a> 
<a href="V$BH.html">V$BH</a> 
<a href="V$COMPATIBILITY.html">V$COMPATIBILITY</a> 
<a href="V$COMPATSEG.html">V$COMPATSEG</a> 
<a href="V$COPY_CORRUPTION.html">V$COPY_CORRUPTION</a> 
<a href="V$DATAFILE.html">V$DATAFILE</a> 
<a href="V$DBFILE.html">V$DBFILE</a> 
<a href="V$DBLINK.html">V$DBLINK</a> 
<a href="V$DB_PIPES.html">V$DB_PIPES</a> 
<a href="V$INSTANCE.html">V$INSTANCE</a> 
<a href="V$LICENSE.html">V$LICENSE</a> 
<a href="V$OFFLINE_RANGE.html">V$OFFLINE_RANGE</a> 
<a href="V$OPTION.html">V$OPTION</a> 
<a href="V$SGA.html">V$SGA</a> 
<a href="V$SGASTAT.html">V$SGASTAT</a> 
<a href="V$TABLESPACE.html">V$TABLESPACE</a> 
<a href="V$VERSION.html">V$VERSION</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

