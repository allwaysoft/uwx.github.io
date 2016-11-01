---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$ARCHIVE_DEST </h1>  
 <p> Shows all archived redo log destinations.</p> 
 
<pre>Columns

 
   DEST_ID
   DEST_NAME
   STATUS
   BINDING
   NAME_SPACE
   TARGET
   ARCHIVER
   SCHEDULE
   DESTINATION
   LOG_SEQUENCE
   REOPEN_SECS
   DELAY_MINS
   NET_TIMEOUT
   PROCESS
   REGISTER
   FAIL_DATE
   FAIL_SEQUENCE
   FAIL_BLOCK
   FAILURE_COUNT
   MAX_FAILURE
   ERROR
   ALTERNATE
   DEPENDENCY
   REMOTE_TEMPLATE
   QUOTA_SIZE
   QUOTA_USED
   MOUNTID
   TRANSMIT_MODE
   ASYNC_BLOCKS
   AFFIRM
   TYPE</pre>
<p><b>Example</b></p>
<p class="code">select dest_id, destination from v$archive_dest</p>
<p><b>Related:</b></p>
<pre><a href="V$ARCHIVE.html">V$ARCHIVE</a> 
<a href="V$ARCHIVED_LOG.html">V$ARCHIVED_LOG</a> 
<a href="V$ARCHIVE_PROCESSES.html">V$ARCHIVE_PROCESSES</a> 
<a href="V$BACKUP.html">V$BACKUP</a> 
<a href="V$BACKUP_ASYNC_IO.html">V$BACKUP_ASYNC_IO</a> 
<a href="V$BACKUP_CORRUPTION.html">V$BACKUP_CORRUPTION</a> 
<a href="V$BACKUP_DATAFILE.html">V$BACKUP_DATAFILE</a> 
<a href="V$BACKUP_DEVICE.html">V$BACKUP_DEVICE</a> 
<a href="V$BACKUP_PIECE.html">V$BACKUP_PIECE</a> 
<a href="V$BACKUP_REDOLOG.html">V$BACKUP_REDOLOG</a> 
<a href="V$BACKUP_SET.html">V$BACKUP_SET</a> 
<a href="V$DELETED_OBJECT.html">V$DELETED_OBJECT</a> 
<a href="V$RECOVERY_FILE_STATUS.html">V$RECOVERY_FILE_STATUS</a> 
<a href="V$RECOVERY_LOG.html">V$RECOVERY_LOG</a> 
<a href="V$RECOVERY_PROGRESS.html">V$RECOVERY_PROGRESS</a> 
<a href="V$RECOVERY_STATUS.html">V$RECOVERY_STATUS</a> 
<a href="V$RECOVER_FILE.html">V$RECOVER_FILE</a><span class="body"><br></span></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$ARCHIVE_DEST.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

