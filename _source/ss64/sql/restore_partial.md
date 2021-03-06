---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE Database </h1>
<p>Partial Restore - part of database/point in time</p>
<pre>Syntax
      RESTORE DATABASE {<i>database</i> | @<i>database_var</i>} 
         <b>files_or_filegroups</b> [ ,...<i>f</i> ]
            [FROM <i>backup_device</i> [ ,...<i>n</i> ] ]
               [<b>WITH PARTIAL</b> <i>option</i> [,<i>option</i>...]] [;]

   Options:
      {CHECKSUM | NO_CHECKSUM } 
      {CONTINUE_AFTER_ERROR | <u>STOP_ON_ERROR</u> } 
      FILE = { <i>backup_set_file_number</i> | @<i>backup_set_file_number</i> } 
      MEDIANAME = { <i>media</i> | @<i>media_variable</i> } 
      MEDIAPASSWORD = { <i>mediapassword</i> | @<i>mediapw_variable</i> } 
      MOVE '<i>logical_file_name_in_backup</i>' TO '<i>operating_system_file_name</i>'   [ ,...<i>n</i> ]  
      PASSWORD = { <i>password</i> | @<i>password_variable</i> } ] 
      NORECOVERY
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

</i>   files_or_filegroups: <br>      FILE = {<i>logical_file_name_in_backup</i> | @<i>logical_file_name_in_backup_var</i>}<br>      FILEGROUP = {<i>logical_filegroup</i> | @<i>logical_filegroup_var</i>}<br>      READ_WRITE_FILEGROUPS</pre>
<p>  Key:<br>
PARTIAL - Restore the primary filegroup and any specified secondary filegroup(s). This option implicitly selects the primary filegroup; specifying FILEGROUP = 'PRIMARY' is unnecessary. To restore a secondary filegroup,  use the FILE or FILEGROUP options.</p>
<p>DATABASE - The target database.<br>
  FROM <i>backup_device</i> - The backup device from which to restore.<br>
  CHECKSUM - verify all backup checksums (or fail)<br>
  NO_CHECKSUM - Disable  validation of checksums<br>
  FILE  - The backup set to be restored.<br>
  MEDIANAME - Specify the name for the media, check for a matching media name on the backup volume.<br>
  MOVE - The data or log file (logical name) should be moved by restoring it to the file location specified.<br>
  NORECOVERY- Do not roll back any uncommitted transactions. Use if applying  another tx log later.<br>
  REPLACE - Overwrite  any existing database with the same name.<br>
  RESTART - Restart a restore operation that has been interrupted.<br>
  RESTRICTED_USER - Restrict access to the newly restored db to the db_owner, dbcreator, or sysadmin roles.<br>
  UNLOAD - Automatically rewind and unload the backup tape when the backup is finished.<br>
  STATS - Display a message each time <i>n</i> percentage completes.<br>
  STOPATMARK - Recover to a marked transaction or log sequence number<br>
STOPBEFOREMARK - Recover to a marked transaction or log sequence number</p>
<p>Examples</p>
<pre>BACKUP LOG ss64 TO tailLogBackup WITH NORECOVERY, NO_TRUNCATE


RESTORE DATABASE ss64 FILEGROUP='Primary' FROM backup1 <br>   <b>WITH PARTIAL</b>, NORECOVERY
<br>RESTORE DATABASE ss64 FILEGROUP='MyFileGroup' FROM backup2 <br>   WITH NORECOVERY<br>RESTORE LOG ss64 FROM backup3 WITH NORECOVERY<br>RESTORE LOG ss64 FROM tailLogBackup WITH RECOVERY</pre>
<p class="quote"><i>"Wealth heaped on wealth, nor truth nor safety buys,<br>
  The dangers gather as the treasures rise"
- Samuel Johnson: The Vanity Of Human Wishes </i></p>
<p><b>Related commands:</b></p>
<p>   <a href="restore_full.html">Complete Restore</a> - an <i>Entire</i> Database from a Full database backup. <br>
  <a href="restore_files.html">Restore Files</a> - Files, Filegroups, or Pages<a href="restore_logs.html"><br>LOG Restore</a> - a Transaction Log<br>
  <a href="restore_snap.html">RESTORE DATABASE_SNAPSHOT</a>  <br>
  RESTORE FILELISTONLY - List  database and log files<br>
  RESTORE HEADERONLY - List backup header information<br>
  RESTORE VERIFYONLY  - Verify the backup but don't restore it<br>
  <a href="backup.html">BACKUP</a>  <br>
Equivalent Oracle command:  <a href="../ora/rman.html">RMAN</a> - Recovery Manager  </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

