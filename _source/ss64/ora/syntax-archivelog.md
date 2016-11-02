---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>ARCHIVELOG mode</h1> 
<p> Any Oracle database that contains important data should be running in ARCHIVELOG mode. Running in Archive log mode enables you to take hot backups and perform point-in-time recovery.<br>
</p>
<p>Alter the database to run in Archivelog mode: <b>Standard edition</b>, single node instance:</p>
<pre>ALTER SYSTEM SET log_archive_start=TRUE SCOPE=spfile;
ALTER SYSTEM SET log_archive_dest='<b>/u01/oradata/MYSID/archive/</b>' SCOPE=spfile;
ALTER SYSTEM SET log_archive_format='arch_%t_%s.arc' SCOPE=spfile;
SHUTDOWN IMMEDIATE;
STARTUP MOUNT;
ARCHIVE LOG <a href="clause_archive.html">START</a>;
<a href="database_a.html">ALTER DATABASE</a> ARCHIVELOG;
ALTER DATABASE OPEN;
alter system switch logfile;
</pre>
<p>Alter the database to run in Archivelog mode: <b>Enterprise edition</b>, single node instance</p>
<pre>ALTER SYSTEM SET log_archive_start=TRUE SCOPE=spfile;
ALTER SYSTEM SET log_archive_dest_1='location=<b>/u01/oradata/MYSID/archive/</b>' SCOPE=spfile;
ALTER SYSTEM SET log_archive_format='arch_%t_%s.arc' SCOPE=spfile;
SHUTDOWN IMMEDIATE;
STARTUP MOUNT;
ARCHIVE LOG <a href="clause_archive.html">START</a>;
<a href="database_a.html">ALTER DATABASE</a> ARCHIVELOG;
ALTER DATABASE OPEN;
alter system switch logfile;
</pre>
<p>Alter the database to run in Archivelog mode: <b>Enterprise edition</b>, multiple node instance - Real Application Clusters (RAC)</p>
<pre>ALTER SYSTEM SET log_archive_start=TRUE SCOPE=spfile;
ALTER SYSTEM SET log_archive_dest_1='LOCATION=<b>/u01/oradata/MYSID/archive/</b> MANDATORY' SCOPE=spfile;
ALTER SYSTEM SET log_archive_dest_2='LOCATION=<b>/raid2/oracle/admin/MYSID/arch</b> OPTIONAL' scope=spfile;
ALTER SYSTEM SET log_archive_format='arch_%t_%s.arc' SCOPE=spfile;
alter system switch logfile;

-- First take down the cluster
ALTER SYSTEM SET cluster_database=FALSE SCOPE=spfile;
srvctl stop database -d <b>MYSID</b>

STARTUP MOUNT;
ARCHIVE LOG <a href="clause_archive.html">START</a>;
<a href="database_a.html">ALTER DATABASE</a> ARCHIVELOG;

--startup the cluster again
ALTER SYSTEM SET cluster_database=TRUE SCOPE=spfile;
SHUTDOWN IMMEDIATE;
srvctl start database -d <b>MYSID</b></pre>
<p>In all the commands above, adjust the path and database SID (shown in <b>bold</b>) to match your environment. </p>
<p>The following variables can be used in  log_archive_format:</p>
<p><span class="code">%s </span>Log sequence number<span class="code"><br>
%t </span>Thread number<span class="code"><br>
%a </span>Activation ID<span class="code"><br>
%d </span>Database ID<br>
<span class="code">%r </span>Resetlogs ID - will ensure unique names are constructed for the archived log files across multiple incarnations of the database.</p>
<p>Using uppercase letters  (for example, %S) will make the value fixed length and padded to the left with zeros: <span class="code">00064</span></p>
<h2>NOARCHIVELOG</h2>
<p>There are times when Archive log mode is not needed, for example a development environment is unlikely to need Archivelog mode - you are more likely to be concerned with backing up <i>code </i>than backing up the <i>data</i>.</p>
<p>Be aware that if a disk failure occurs while in NOARCHIVELOG mode, you can only restore the database to the point of the most recent full database backup.</p>
<p>To switch back from archivelog to noarchivelog mode, just repeat the relevant steps above specifying: <span class="code">ALTER DATABASE NOARCHIVELOG;</span></p>
<p><b>Related</b><br>
  <br>
<span class="code">select log_mode from <a href="../orav/V$DATABASE.html">v$database</a>;</span> - Display the current Archive log mode</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-archivelog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

