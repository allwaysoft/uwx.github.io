---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$DATAFILE </h1>  
 <p> An entry for each datafile. </p> 
 
<pre>Columns
   ___________________________
 
   FILE#
   NAME

   TS#
   RFILE#
   STATUS
   ENABLED
   CHECKPOINT_CHANGE#
   CHECKPOINT_TIME
   UNRECOVERABLE_CHANGE#
   UNRECOVERABLE_TIME
   LAST_CHANGE#
   LAST_TIME
   OFFLINE_CHANGE#
   ONLINE_CHANGE#
   ONLINE_TIME
   BYTES
   BLOCKS
   CREATE_BYTES
   CREATION_CHANGE#
   CREATION_TIME
   BLOCK_SIZE
   PLUGGED_IN
   BLOCK1_OFFSET
   AUX_NAME</pre>
<p>Example<br>
<span class="code">select name, status from v$datafile</span></p>
<p><span class="code"><b></b></span><b>Related:</b></p>
<pre><a href="../orad/DBA_DATA_FILES.html">dba_data_files</a> 
<a href="V$COMPATIBILITY.html">V$COMPATIBILITY</a> 
<a href="V$COMPATSEG.html">V$COMPATSEG</a> 
<a href="V$COPY_CORRUPTION.html">V$COPY_CORRUPTION</a> 
<a href="V$DATABASE.html">V$DATABASE</a> 
<a href="V$DATAFILE_COPY.html">V$DATAFILE_COPY</a> 
<a href="V$DATAFILE_HEADER.html">V$DATAFILE_HEADER</a> 
<a href="V$DBFILE.html">V$DBFILE</a> 
<a href="V$DBLINK.html">V$DBLINK</a> 
<a href="V$DB_PIPES.html">V$DB_PIPES</a> 
<a href="V$TABLESPACE.html">V$TABLESPACE</a> 
<a href="V$TEMPFILE.html">V$TEMPFILE</a> 
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

