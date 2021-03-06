---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Recover Clause</code></h1>
<p>Perform media recovery from RMAN backups and copies.<br>
<br>
Syntax:</p>
<pre>   RECOVER [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…] 
               <a href="rman_recover.html#recoverObject">recoverObject</a> [<a href="rman_recover.html#recoverOptionList">recoverOptionList</a>];

   recoverObject<a id="recoverObject"></a>::=
     { DATABASE 
       [ <a href="rman_untilClause.html">untilClause</a>
       | [<a href="rman_untilClause.html">untilClause</a>] SKIP [FOREVER] TABLESPACE 
         ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]…
       ]
     | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]…
     | DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]…
     }

   recoverOptionList<a id="recoverOptionList"></a>::=
     { DELETE ARCHIVELOG [MAXSIZE {<i>integer</i> [K | M | G]}]
     | CHECK READONLY 
     | NOREDO 
     | { FROM TAG | ARCHIVELOG TAG } [=] ['] <i>tag_name</i> [']
     .
     .
     .
     }…

<b>Examples</b>
Restore and recover the whole database
 RMAN&gt; STARTUP FORCE MOUNT;
 RMAN&gt; RESTORE DATABASE;
 RMAN&gt; RECOVER DATABASE;
 RMAN&gt; ALTER DATABASE OPEN;
 
Restore and recover a tablespace
 RMAN&gt; SQL 'ALTER TABLESPACE <i>users</i> OFFLINE';
 RMAN&gt; RESTORE TABLESPACE <i>users</i>;
 RMAN&gt; RECOVER TABLESPACE <i>users</i>;
 RMAN&gt; SQL 'ALTER TABLESPACE <i>users</i> ONLINE';

Restore and recover a datafile
 RMAN&gt; SQL 'ALTER DATABASE DATAFILE 64 OFFLINE';
 RMAN&gt; RESTORE DATAFILE 64;
 RMAN&gt; RECOVER DATAFILE 64;
 RMAN&gt; SQL 'ALTER DATABASE DATAFILE 64 ONLINE';</pre>
<p>Steps for media recovery:</p>
<blockquote>
  <p> 1. Mount or open the database. <br>
    Mount the database when performing whole database
    recovery, or open the database when performing online tablespace recovery.<br>
    2. To perform incomplete recovery, use the SET UNTIL command to specify the
    time, SCN, or log sequence number at which recovery terminates. Alternatively,
    specify the UNTIL clause on the RESTORE and RECOVER commands.<br>
    3. Restore the necessary files with the RESTORE command.<br>
    4. Recover the datafiles with the RECOVER command.<br>
    5. Place the database in its normal state. For example, open it or bring recovered
  tablespaces online.</p>
</blockquote>
<p><i class="quote">“Faith does not consist in the belief that we are saved; it consists in the belief that we are loved” ~ Alexandre Vinet</i><b><br>
        <br>
    Related:<br>
    <br>
        </b> <a href="rman_backup.html">BACKUP</a> - Back up database files, archive
        logs, backups, or copies. <a href="rman_change.html"><br>
  CHANGE</a> - Update the status of a backup in the RMAN repository. <a href="rman_configure.html"><br>
  CONFIGURE</a> - Persistent RMAN settings. <a href="rman_crosscheck.html"><br>
  CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_list.html"><br>
  LIST</a> - List backups and copies <a href="rman_report.html"><br>
  REPORT</a> - Report backup status: database, files, backups <a href="rman_restore.html"><br>
  RESTORE</a> - Restore RMAN backups and copies. <a href="rman_run.html"><br>
  RUN</a> - Some RMAN commands are only valid inside a RUN block. <a href="rman_set.html"><br>
  SET</a> - Settings for the current RMAN session. <a href="rman_show.html"><br>
SHOW</a> - Display the current configuration</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_recover.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

