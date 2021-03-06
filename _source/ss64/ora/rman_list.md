---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>LIST</code></h1>
<p>List the backups and copies recorded in the repository. Some options below require the Data Recovery Advisor introduced in 11g (List Failure, List Restore Point.)<br>
  <br>
  Syntax:</p>
<pre> LIST DB_UNIQUE_NAME ALL <br>
 LIST DB_UNIQUE_NAME OF DATABASE [['] <i>database_name</i> [']]

 LIST [EXPIRED]
     {<a href="rman_archivelogRecordSpecifier.html"><b>archivelog</b>RecordSpecifier</a>
       [ { {<a href="rman_maintQualifier.html">maintQualifier</a> | RECOVERABLE [<a href="rman_untilClause.html">untilClause</a>} }…] [forDbUniqueNameOption]

 LIST [EXPIRED]
     {<b>BACKUP</b> [OF <a href="rman_list.html#listObjectList">listObjectList</a>] [BY BACKUP] [VERBOSE] 
       [ { {<a href="rman_maintQualifier.html">maintQualifier</a> | RECOVERABLE [<a href="rman_untilClause.html">untilClause</a>} }…] [forDbUniqueNameOption]

 LIST [EXPIRED]
     {<b>BACKUP</b> [OF <a href="rman_list.html#listObjectList">listObjectList</a>] SUMMARY
       [ { {<a href="rman_maintQualifier.html">maintQualifier</a> | RECOVERABLE [<a href="rman_untilClause.html">untilClause</a>} }…] [forDbUniqueNameOption]

 LIST [EXPIRED]
     {<b>BACKUP</b> [OF <a href="rman_list.html#listObjectList">listObjectList</a>] BY { BACKUP SUMMARY | FILE }
       [ { {<a href="rman_maintQualifier.html">maintQualifier</a> | RECOVERABLE [<a href="rman_untilClause.html">untilClause</a>} }…] [forDbUniqueNameOption]

 LIST [EXPIRED]
     {<b>COPY</b> [OF <a href="rman_list.html#listObjectList">listObjectList</a>] 
       [ { {<a href="rman_maintQualifier.html">maintQualifier</a> | RECOVERABLE [<a href="rman_untilClause.html">untilClause</a>} }…] [forDbUniqueNameOption]

 LIST [EXPIRED] <i><a href="rman_recordspecifier.html">recordSpec</a></i> [forDbUniqueNameOption];

 LIST FAILURE [ {ALL | CRITICAL | HIGH | LOW | <i>failureNumber</i> [, <i>failureNumber</i>]…}
    [EXCLUDE FAILURE <i>failureNumber</i> [, <i>failureNumber</i>]…] [DETAIL]

 LIST FAILURE [CLOSED] [ {ALL | CRITICAL | HIGH | LOW | <i>failureNumber</i>} ]
    [EXCLUDE FAILURE <i>failureNumber</i> [, <i>failureNumber</i>]…] [DETAIL]

 LIST INCARNATION [OF DATABASE [['] <i>database_name</i> [']]]

 LIST RESTORE POINT <i>restore_point_name</i> [forDbUniqueNameOption]

 LIST RESTORE POINT ALL [forDbUniqueNameOption] <br>       <br> LIST ALL SCRIPT NAMES
<br> LIST GLOBAL SCRIPT NAMES


forDbUniqueNameOption<a id="forDbUniqueNameOption"></a>::=<br>  FOR DB_UNIQUE_NAME ALL<br>  FOR DB_UNIQUE_NAME '<i>db_unique_name</i>'

 listObjectList<a id="listObjectList"></a>::=
   [ DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]… 
   | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]…
   | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a> 
   | DATABASE [SKIP TABLESPACE ['] <i>tablespace_name</i> ['] 
     [, ['] <i>tablespace_name</i> [']]…] 
   | CONTROLFILE
   | SPFILE
   ]…

 listBackupOption<a id="listBackupOption"></a>::=
   [ [BY BACKUP] [VERBOSE]
   | SUMMARY
   | BY { BACKUP SUMMARY | FILE }
   ] </pre>
<p><b>Examples</b></p>
<p class="code">RMAN&gt; LIST ARCHIVELOG ALL;<br>
RMAN&gt; LIST BACKUP OF ARCHIVELOG ALL;<br>
RMAN&gt; LIST BACKUP;<br>
RMAN&gt; LIST BACKUP OF DATABASE;<br>
RMAN&gt; LIST BACKUP OF DATAFILE 1;<br>
RMAN&gt; LIST BACKUP SUMMARY;<br>
RMAN&gt; LIST INCARNATION;<br>
RMAN&gt; LIST BACKUP BY FILE;<br>
RMAN&gt; LIST COPY OF DATABASE ARCHIVELOG ALL;<br>
RMAN&gt; LIST COPY OF DATAFILE 1, 2, 3;<br>
RMAN&gt; LIST BACKUP OF DATAFILE 11 SUMMARY;<br>
RMAN&gt; LIST BACKUP OF ARCHIVELOG FROM SEQUENCE 1437;<br>
RMAN&gt; LIST CONTROLFILECOPY "/tmp/cntrlfile.copy";<br>
RMAN&gt; LIST BACKUPSET OF DATAFILE 1;<br>
RMAN&gt; LIST FAILURE;<br>
RMAN&gt; LIST FAILURE 641231 detail;</p>
<p><i>“I see no reason for recording the obvious” - Edward Weston</i></p>
<p><b>    Related Commands:</b><br><br>
<a href="rman_backup.html">BACKUP</a> - Back up database files, archive logs, backups, or copies.<br>
<a href="rman_change.html">CHANGE</a> - Update the status of a backup in the RMAN repository.<br>
<a href="rman_crosscheck.html">CROSSCHECK</a> - Check whether backup items still exist.<br>
<a href="rman_delete.html">DELETE</a> - Delete backups from disk or tape <br>
<a href="rman_report.html">REPORT</a> - Report backup status: database, files, backups<br>
<a href="rman_restore.html">RESTORE</a> - Restore RMAN backups and copies.<br>
<a href="rman_advise.html">ADVISE FAILURE</a> - Display repair options (11g Data Recovery Advisor)<br>
REPAIR FAILURE - Repair database failures (11g Data Recovery Advisor)</p>
<p><b>Related Views:</b></p>
<pre> RC_BACKUP_SET    <a href="../orav/V$BACKUP_SET.html">V$BACKUP_SET</a>    Backup sets
 RC_BACKUP_SPFILE V$BACKUP_SPFILE Server parameter files in backup sets
 RC_BACKUP_FILES  V$BACKUP_FILES  RMAN backups and copies in the repository.
 RC_BACKUP_PIECE  <a href="../orav/V$BACKUP_PIECE.html">V$BACKUP_PIECE</a>  Backup pieces

Datafiles:
 RC_TABLESPACE      <a href="../orav/V$TABLESPACE.html">V$TABLESPACE</a>      All tablespaces registered in the recovery catalog.
 RC_DATAFILE        <a href="../orav/V$DATAFILE.html">V$DATAFILE</a>        All datafiles registered in the recovery catalog
 RC_BACKUP_DATAFILE <a href="../orav/V$BACKUP_DATAFILE.html">V$BACKUP_DATAFILE</a> Datafiles in backup sets
 RC_DATAFILE_COPY   <a href="../orav/V$DATAFILE_COPY.html">V$DATAFILE_COPY</a>   Datafile image copies
 RC_PROXY_DATAFILE  <a href="../orav/V$PROXY_DATAFILE.html">V$PROXY_DATAFILE</a>  Datafile backups created by proxy copy

Control Files:
 RC_BACKUP_CONTROLFILE <a href="../orav/V$BACKUP_DATAFILE.html">V$BACKUP_DATAFILE</a> Control files in backup sets
 RC_PROXY_CONTROLFILE  <a href="../orav/V$PROXY_DATAFILE.html">V$PROXY_DATAFILE</a>  Control file backups created by proxy copy
 RC_CONTROLFILE_COPY   <a href="../orav/V$DATAFILE_COPY.html">V$DATAFILE_COPY</a>   Control file copies on disk</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_list.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

