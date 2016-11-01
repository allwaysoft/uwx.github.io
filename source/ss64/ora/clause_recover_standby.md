---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>RECOVER MANAGED STANDBY Clause</h1> 
<p>Perform media recovery - this clause Is part
  of an <a href="database_a.html">ALTER DATABASE </a> command.<br>
  <br>
Syntax:</p>
<pre>   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> 
      RECOVER MANAGED STANDBY DATABASE <i>option(s)</i><b>

</b>   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> 
      RECOVER TO LOGICAL STANDBY <i>db_name</i>

   <a href="database_a.html">ALTER DATABASE</a> <i>database_name</i> 
      RECOVER TO LOGICAL STANDBY KEEP IDENTITY</pre>
<p><i>Option</i>s:</p>
<pre>   USING ARCHIVED LOGFILE
   CANCEL
   DISCONNECT [FROM SESSION]
   FINISH
   NODELAY
   UNTIL CHANGE <i>int</i>
   UNTIL CONSISTENT
   PARALLEL <a href="clause_parallel.html">parallel_clause</a>
</pre>
<p>It is possible to
      include multiple options in a single RECOVER command
      .<br>
      <b><br>
  Related:<br>
  <br>
    </b>DATABASE - <a href="database_a.html">ALTER DATABASE</a><br>
RECOVER <a href="clause_recover.html">recover_clause</a></p>
<p><b>Views:</b></p>
<p class="code"> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br> 
  <a href="../orad/DBA_TABLESPACES.html">DBA_TABLESPACES</a> <br> 
  <a href="../orav/V$ARCHIVE.html">V$ARCHIVE</a><br> 
  <a href="../orav/V$DATABASE.html">V$DATABASE</a><br> 
  <a href="../orav/V$DATAFILE.html">V$DATAFILE</a><br> 
  <a href="../orav/V$INSTANCE.html">V$INSTANCE</a><br> 
  <a href="../orav/V$INSTANCE_RECOVERY.html">V$INSTANCE_RECOVERY</a><br> 
  <a href="../orav/V$RECOVERY_FILE_STATUS.html">V$RECOVERY_FILE_STATUS</a><br> 
  <a href="../orav/V$RECOVERY_LOG.html">V$RECOVERY_LOG</a><br> 
  <a href="../orav/V$RECOVERY_PROGRESS.html">V$RECOVERY_PROGRESS</a><br> 
  <a href="../orav/V$RECOVERY_STATUS.html">V$RECOVERY_STATUS</a><br> 
  <a href="../orav/V$RECOVER_FILE.html">V$RECOVER_FILE</a><br> 
<a href="../orav/V$TABLESPACE.html">V$TABLESPACE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

