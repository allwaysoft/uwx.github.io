---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Crosscheck Clause</code></h1> 
<p>Check whether backup pieces, proxy copies, or disk copies
  still exist in comparison to the control file's repository.<br>
  <br>
Syntax:</p>
<pre>&nbsp; CROSSCHECK
    { 
      { BACKUP [OF <a href="rman_crosscheck.html#listObjList">listObjList</a>] 
      | COPY [OF <a href="rman_crosscheck.html#listObjList">listObjList</a>] 
      | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a> 
      } [<a href="rman_maintQualifier.html">maintQualifier</a> [<a href="rman_maintQualifier.html">maintQualifier</a>]…] 
    | <a href="rman_recordspecifier.html">recordSpec</a> [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…]
    };

   listObjList<a id="listObjList"></a>::=
      [ DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]… 
      | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]… 
      | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a> 
      | DATABASE [SKIP TABLESPACE ['] <i>tablespace_name</i> [']
           [, ['] <i>tablespace_name</i> [']]…] 
      | CONTROLFILE
      | SPFILE
      ]…</pre>
<p>Use <span class="code">RMAN Crosscheck</span> to check that files are in place ready for a restore. <br>To validate a  restore has worked, use the <a href="rman_restore.html">RMAN restore validate</a> command.</p>
<p><b>Examples:</b></p>
<p>Assuming  you have configured automatic channels:</p>
<p class="code">RMAN&gt; CROSSCHECK BACKUP;<br>
RMAN&gt; CROSSCHECK COPY;<br>
RMAN&gt; CROSSCHECK backup of database; <br>
RMAN&gt; CROSSCHECK backup of controlfile;<br>
RMAN&gt; CROSSCHECK archivelog all;</p>
<p>Query the media manager for
      the status of backup sets in a given date range:</p>
<p class="code">RMAN&gt; ALLOCATE CHANNEL FOR MAINTENANCE DEVICE TYPE sbt;<br>
RMAN&gt; CROSSCHECK BACKUP DEVICE TYPE sbt COMPLETED BETWEEN '01-AUG-04' AND
'31-DEC-04';</p>
<p><i>"Wealth heaped on wealth, nor truth nor safety buys,<br>
  The dangers gather as the treasures rise" - Samuel Johnson: The Vanity Of Human Wishes</i></p>
<p><b>    Related Commands:<br></b><a href="rman_change.html"><br>
  </a><a href="rman_restore.html">RMAN Restore Validate</a><a href="rman_change.html"><br>
RMAN CHANGE</a> - Update the status of a backup in the RMAN repository. <a href="rman_configure.html"><br>
  RMAN CONFIGURE</a> - Persistent RMAN settings. <a href="rman_delete.html"><br>
  RMAN DELETE</a> - Delete backups from disk or tape <br>
  <a href="rman_list.html">RMAN LIST</a> - List backups and copies <a href="rman_recover.html"><br>
  </a><a href="rman_report.html">
  RMAN REPORT</a> - Report backup status: database, files, backups <br>
  NLS_DATE_FORMAT <a href="syntax-initora.html">parameter</a></p>
<p><b>Related Views:</b></p>
<pre> RC_BACKUP_FILES V$BACKUP_FILES  RMAN backups and copies in the repository.
 RC_BACKUP_PIECE V$BACKUP_PIECE  Backup pieces</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_crosscheck.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><pre>&nbsp;</pre>



