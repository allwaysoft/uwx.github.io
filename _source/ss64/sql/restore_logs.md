---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE LOG </h1>
<p>Restore  a Transaction Log</p>
<pre>Syntax
      RESTORE <b>LOG</b> {<i>database</i> | @<i>database_var</i>} 
         <i>file_or_filegroup_or_pages</i> [ ,...<i>f</i> ]
            [FROM <i>backup_device</i> [ ,...<i>n</i> ] ]
               [WITH <i>option</i> [,<i>option</i>...]] [;]

   Options:
      {CHECKSUM | NO_CHECKSUM } 
      {CONTINUE_AFTER_ERROR | <u>STOP_ON_ERROR</u> } 
      FILE = { <i>backup_set_file_number</i> | @<i>backup_set_file_number</i> } 
      KEEP_REPLICATION
      MEDIANAME = { <i>media</i> | @<i>media_variable</i> } 
      MEDIAPASSWORD = { <i>mediapassword</i> | @<i>mediapw_variable</i> } 
      MOVE '<i>logical_file_name_in_backup</i>' TO '<i>operating_system_file_name</i>'   [ ,...<i>n</i> ]  
      PASSWORD = { <i>password</i> | @<i>password_variable</i> } ] 
      {<u>RECOVERY</u> | NORECOVERY | STANDBY = 
          {<i>standby_file_name</i> | @<i>standby_file_name_var</i> }  } 
      REPLACE 
      RESTART 
      RESTRICTED_USER 
      {<u>REWIND</u> | NOREWIND } 
      {<u>UNLOAD</u> | NOUNLOAD } 
      STATS [ = percentage ] 
      { STOPAT = { <i>date_time</i> | @<i>date_time_var</i> } 
      | STOPATMARK = { '<i>mark</i>' | '<i>lsn:lsn_number</i>' }  [ AFTER <i>datetime</i> ] 
      | STOPBEFOREMARK = { '<i>mark</i>' | '<i>lsn:lsn_number</i>' }  [ AFTER <i>datetime</i> ] 
      } 

   backup_device:
      <i>logical_backup_device</i>
      @<i>logical_backup_device_var</i>
      {DISK | TAPE } = '<i>physical_backup_device</i>'
      {DISK | TAPE } = @<i>physical_backup_device_var

</i>   file_or_filegroup_or_pages: <br>      FILE = {<i>logical_file_name_in_backup</i> | @<i>logical_file_name_in_backup_var</i>}<br>      FILEGROUP = {<i>logical_filegroup</i> | @<i>logical_filegroup_var</i>}<br>      PAGE = '<i>fileID:pageID</i> [ ,...<i>p</i> ]'</pre>
<p>  Key:<br>
  DATABASE - The target database.<br>
FROM <i>backup_device</i> - The backup device from which to restore.<br>
CHECKSUM - verify all backup checksums (or fail)<br>
NO_CHECKSUM - Disable validation of checksums<br>
FILE - The backup set to be restored (text string) <br>
KEEP_REPLICATION - Retain replication settings for log shipping. Recover a warm standby.<br>
MEDIANAME - Specify the name for the media, check for a matching media name on the backup volume.<br>
MOVE - The data or log file (logical name) should be moved by restoring it to the file location specified.<br>
RECOVERY- After the restore, roll back any uncommitted transactions.<br>
NORECOVERY- Do not roll back any uncommitted transactions. Use if applying another tx log later.<br>
STANDBY - Specify a standby (undo) file that allows the recovery to be undone, for offline restore only.<br>
REPLACE - Overwrite any existing database with the same name.<br>
RESTART - Restart a restore operation that has been interrupted.<br>
RESTRICTED_USER - Restrict access to the newly restored db to the db_owner, dbcreator, or sysadmin roles.<br>
UNLOAD - Automatically rewind and unload the backup tape when the backup is finished.<br>
STATS - Display a message each time <i>n</i> percentage completes.<br>
STOPATMARK - Recover to a marked transaction or log sequence number<br>
STOPBEFOREMARK - Recover to a marked transaction or log sequence number</p>
<p>FILE - Logical filename in backup (number) <br>
  FILEGROUP - Logical filegroup <br>
PAGE - Page restore (full recovery only)</p>
<p>Examples</p>
<pre>RESTORE DATABASE SS64<br>   FROM SS64_1<br>   WITH NORECOVERY
<br>RESTORE LOG SS64<br>   FROM SS64Log1<br>   WITH RECOVERY</pre>
<p><i>"The desire for safety stands against every great and noble enterprise" - Cornelius Tacitus </i></p>
<p><b>Related commands:</b></p>
<p>   <a href="restore_full.html">Complete Restore</a> - an <i>Entire</i> Database from a Full database backup. <a href="restore_partial.html"><br>
  Partial Restore</a> - part of database/point in time <a href="restore_files.html"><br>
Restore Files</a> - Files, Filegroups, or Pages<br>
<a href="restore_snap.html">RESTORE DATABASE_SNAPSHOT</a> <br>
  RESTORE FILELISTONLY - List  database and log files<br>
  RESTORE VERIFYONLY  - Verify the backup but don't restore it<br>
  <a href="backup.html">BACKUP</a>  <br>
Equivalent Oracle command:  <a href="../ora/rman.html">RMAN</a> - Recovery Manager  </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="restore_logs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

