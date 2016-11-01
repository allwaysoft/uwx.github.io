---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Delete</code></h1> 
<p>Delete backups (and copies) from disk or tape, and update
  the RMAN repository.</p>
<p>  Syntax:</p>
<pre>   DELETE [FORCE] [NOPROMPT] 
    { [EXPIRED] 
     { 
       { BACKUP [OF <a href="#listObjectList">listObjectList</a>]
       | COPY   [OF <a href="#listObjectList">listObectjList</a>] 
       | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a>
       } [<a href="rman_maintQualifier.html">maintQualifier</a> [<a href="rman_maintQualifier.html">maintQualifier</a>]…]
     | <a href="rman_recordspecifier.html">recordSpec</a> [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…] 
     }
   | OBSOLETE [<a href="#obsOperandList">obsOperandList</a>]
     [DEVICE TYPE (<a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…]
   };

 obsOperandList<a id="obsOperandList"></a>::=
     [ REDUNDANCY [=] <i>integer</i> | RECOVERY WINDOW OF <i>integer</i> DAYS | ORPHAN ]… 

 listObjectList<a id="listObjectList"></a>::=
   [ DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]… 
   | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]… 
   | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a> 
   | DATABASE [SKIP TABLESPACE ['] <i>tablespace_name</i> ['] 
     [, ['] <i>tablespace_name</i> [']]…] 
   | CONTROLFILE
   | SPFILE
   ]…</pre>

<p><b>Examples</b></p>
<pre> RMAN&gt; CONFIGURE CHANNEL DEVICE TYPE sbt;
 RMAN&gt; CROSSCHECK BACKUP OF TABLESPACE user_data COMPLETED BEFORE 'SYSDATE-14';</pre>
<pre> RMAN&gt; DELETE NOPROMPT EXPIRED BACKUP OF TABLESPACE user_data COMPLETED BEFORE 'SYSDATE-14';
 RMAN&gt; DELETE BACKUP OF DATABASE LIKE '/tmp%';
 RMAN&gt; DELETE ARCHIVELOG ALL BACKED UP 2 TIMES TO DEVICE TYPE sbt;
 RMAN&gt; DELETE BACKUPSET 101, 102, 103;
 RMAN&gt; DELETE CONTROLFILECOPY '/tmp/cntrlfile.copy';
 RMAN&gt; DELETE BACKUP OF SPFILE TABLESPACE users DEVICE TYPE sbt;</pre>
<p>Delete backups and copies (and archived redo logs ) that will not be needed to perform any possible recovery of the database to any point in the last 7 days.<br>
<code> DELETE NOPROMPT OBSOLETE RECOVERY WINDOW OF 7 DAYS;</code></p>
<p><i>“Rejection is the greatest aphrodisiac” - Madonna</i><br><br>
<b>Related Commands:</b><br><br>
<a href="rman_change.html">CHANGE</a> - Update the status of a backup in the RMAN repository. <br>
<a href="rman_configure.html">CONFIGURE</a> - Persistent RMAN settings. <br>
<a href="rman_crosscheck.html">CROSSCHECK</a> - Check whether backup items still exist. <br>
<a href="rman_list.html">LIST</a> - List backups and copies <br>
<a href="rman_report.html">REPORT</a> - Report backup status: database, files, backups <br>
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

