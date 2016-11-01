---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$BH </h1>  
 <p> Blocks in the database buffer cache. </p> 
 
<pre>Columns
   ___________________________
 
   FILE#
   BLOCK#
   CLASS#
   STATUS
   XNC
   FORCED_READS
   FORCED_WRITES
   LOCK_ELEMENT_ADDR
   LOCK_ELEMENT_NAME
   LOCK_ELEMENT_CLASS
   DIRTY
   TEMP
   PING
   STALE
   DIRECT
   NEW
   OBJD
   TS#
</pre>
<p>Status column values:</p>
<blockquote>
<p> <span class="code">free</span> This block is not in use<br>
<span class="code">xcur</span> Block held exclusively by this instance<br>
<span class="code">scur</span> Block held in cache, shared with other instance<br>
<span class="code">cr</span> &nbsp;Block for consistent read<br>
<span class="code">read</span> Block being read from disk<br>
<span class="code">mrec</span> Block in media recovery mode<br>
<span class="code">irec</span> Block in instance (crash) recovery mode </p>
</blockquote>
<p><b>Related:</b></p>
<pre><a href="V$ACTIVE_INSTANCES.html">V$ACTIVE_INSTANCES</a> 
<a href="V$BGPROCESS.html">V$BGPROCESS</a> 
<a href="V$COMPATIBILITY.html">V$COMPATIBILITY</a> 
<a href="V$COMPATSEG.html">V$COMPATSEG</a> 
<a href="V$COPY_CORRUPTION.html">V$COPY_CORRUPTION</a> 
<a href="V$DATABASE.html">V$DATABASE</a> 
<a href="V$DATAFILE.html">V$DATAFILE</a> 
<a href="V$DATAFILE_COPY.html">V$DATAFILE_COPY</a> 
<a href="V$DATAFILE_HEADER.html">V$DATAFILE_HEADER</a> 
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
<a href="V$VERSION.html">V$VERSION</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$BH.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

