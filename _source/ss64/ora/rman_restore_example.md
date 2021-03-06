---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Restore Example </code></h1>
<p>There are many ways to restore a database using an RMAN backup - this example assumes you are performing a Disaster-Recovery restore of all data and recovering the entire database with the same SID and the same disk/tablespace layout. </p>
<p>You will need  the following information: </p>
<p>Database SID: ________ </p>
<p>Database SYS password: ________</p>
<p>Disk layout and sizes: ________</p>
<p>Database ID (DBID): ________</p>
<p>There are  5 steps to   recover the database:</p>
<blockquote>
<p> 1) Create a new (empty) database instance<br>
2) Mount the  instance <br>
3) Restore the datafiles<br>
4) Recover the database<br>
5) Reset the logs</p>
</blockquote>
<p>1) Create a new (empty) database instance</p>
<blockquote>
<p>Configure the new server with same disk layout as the original database - if necessary use Symbolic Links (or in Windows use disk manager to re-assign drive letters.) </p>
<p>Ensure you have enough disk space for both the backup files plus the restored database files. </p>
<p>Create a new database with the database configuration assistant (DBCA) and set the SYS password and global <span class="code">database_name </span>to the same as the original database.</p>
<p>If the database to be restored is in archive log mode, set the <span class="code">LOG_ARCHIVE_FORMAT</span> parameter to match the setting in the original database. </p>
<p>The ORAPWD utility can also be used to change the SYS password.</p>
<p>Set the environment variable NLS_LANG for your character set - <br>
<span class="code">NLS_LANG=American_America.WE8ISO8859P1</span></p>
</blockquote>
<p>2) &nbsp;Mount the empty instance</p>
<blockquote>
<p class="code">SQL&gt; Shutdown immediate;<br>
SQL&gt; Startup mount;</p>
<p>or specifying the pfile explicitly:</p>
<p class="code">SQL&gt; CREATE PFILE='C:\oracle\Database\initLive.ora' FROM SPFILE;<br>
SQL&gt; Shutdown immediate;<br>
SQL&gt; Startup mount pfile=C:\oracle\Database\initLive.ora</p>
</blockquote>
<p>3) Restore the datafiles</p>
<blockquote>
<p>In this case we have copied the RMAN backup files and archive logs to R:\Rman\</p>
<p>Change the dbid to match that of the database being restored </p>
<p class="code">RMAN&gt; SET dbid = 477771234;</p>
<p class="code">RMAN&gt; run {<br>
ALLOCATE CHANNEL disk1 DEVICE TYPE DISK FORMAT 'R:\Rman\%U';<br>
restore database;<br>
}</p>
<p> At this point the datafiles and&nbsp;tablespaces will be re-created. For a large database it can take a long time to restore each tablespace - for better performance during a restore place the RMAN backup files on a separate disk to the Oracle datafiles to reduce disk contention. </p>
</blockquote>
<p>4) Recover the database </p>

<blockquote>
<p class="code">SQL&gt; Recover from 'L:\oradata\live' database until cancel using backup controlfile;<br>
SQL&gt; cancel</p>
</blockquote>
<p>5) Reset the logs</p>
<blockquote>
<p><span class="code">SQL&gt; alter database open resetlogs;</span></p>
<p>This will update all current datafiles and online redo logs and all subsequent archived redo logs with a new RESETLOGS SCN and time stamp.</p>
<p>As soon as you have done a resetlogs <b>run a full backup</b>, this is important as should you suffer a second failure you will not be able to perform a second recovery because after resetting the logs the SCN numbers will no longer match any older backup files. </p>
</blockquote>
<p>Notes:</p>
<p>The DBID can be retrieved in several places, if the database is running: <span class="code">Select dbid from V$DATABASE; </span></p>
<p> The RMAN client displays the dbid at startup when connecting to a database:</p>
<p>Copyright (c) 1995, 2003, Oracle. All rights reserved.<br>connected to target database: RDBMS (DBID=<span class="code">7776644123</span>)<br>
<br>
The default filename format for an RMAN controlfile autobackup is <span class="code">c-IIIIIIIIII-YYYYMMDD-QQ</span>, where: <span class="code">IIIIIIIIII</span> is the DBID.</p>
<p><i>“This only is denied even to God: the power to undo the past” - Agathon</i><b><br>
      <br>
  Related Commands:<br>
<br>
</b> <a href="rman_backup.html">BACKUP</a> - Back up database files, archive logs, backups, or copies. <br>
<a href="rman_crosscheck.html">CROSSCHECK</a> - Check whether backup items still exist. <br>
<a href="rman_list.html">LIST</a> - List backups and copies <br>
<a href="rman_recover.html">RECOVER</a> - Perform media recovery from RMAN backups and copies. <br>
<a href="rman_restore.html">RESTORE</a> - Restore RMAN backups and copies.<br>
<a href="rman_report.html">REPORT</a> - Report backup status: database, files, backups <br>
<a href="rman_run.html">RUN</a> - Some RMAN commands are only valid inside a RUN block. <br>
<a href="rman_set.html">SET</a> - Settings for the current RMAN session. <br>
<a href="rman_show.html">SHOW</a> - Display the current configuration</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

