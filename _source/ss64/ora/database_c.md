---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE DATABASE</h1> 
<p>Create a database.<br>
  <br>
  Syntax:</p>
<pre>   CREATE DATABASE database_name <i>options</i></pre>
<p>Options:</p>
<pre>   DATAFILE <a href="clause_filespec.html">filespec</a> AUTOEXTEND OFF
   DATAFILE <a href="clause_filespec.html">filespec</a> AUTOEXTEND ON [NEXT <i>int</i> K | M] [MAXSIZE <i>int</i> K | M]
   MAXDATAFILES <i>int</i>
   EXTENT MANAGEMENT LOCAL
   DEFAULT TEMPORARY TABLESPACE <i>tablespace</i> [TEMPFILE <a href="clause_filespec.html">filespec</a>] [EXTENT MANAGEMENT LOCAL] [UNIFORM [SIZE <i>int</i> K | M]]
   UNDO TABLESPACE <i>tablespace</i> [DATAFILE <a href="clause_filespec.html">filespec</a>]
   LOGFILE [GROUP <i>int</i>] <a href="clause_filespec.html">filespec</a>
   MAXLOGFILES <i>int</i>
   MAXLOGMEMBERS <i>int</i>
   MAXLOGHISTORY <i>int</i>
   MAXINSTANCES <i>int</i>
   ARCHIVELOG | <u>NOARCHIVELOG</u>
   CONTROLFILE REUSE
   CHARACTER SET <i>charset</i>
   NATIONAL CHARACTER SET <i>charset</i>
   SET TIMEZONE = '<i>time_zone_region</i>'
   SET TIMEZONE = '{+|-} hh:mm'
   FORCE LOGGING
   USER SYS IDENTIFIED BY password
   USER SYSTEM IDENTIFIED BY password
</pre>
<p>If more than one DATAFILE or LOGFILE is to be specified - several 'filespecs' can be included in one clause separated with commas e.g. DATAFILE filespec1, filespec2, filespec3</p>
<p>If you do not specify both system passwords, Oracle will create the default
  passwords "change_on_install" for SYS and "manager" for SYSTEM.</p>
<p>After creating the database, you can change  between ARCHIVELOG mode and NOARCHIVELOG
mode with the <a href="database_a.html">ALTER DATABASE</a> statement.</p>
<pre>Example
-- Create a database with the SID of MyDemo and char set WE8ISO8859P1
connect SYS/change_on_install as SYSDBA
set echo on
spool CreateDB.log
startup nomount pfile="E:\oradata\MyDemo\scripts\init.ora";

CREATE DATABASE MyDemo
MAXDATAFILES 100
DATAFILE 'E:\OraData\MyDemo\SYS1.dbf' SIZE 250 M
EXTENT MANAGEMENT LOCAL
DEFAULT TEMPORARY TABLESPACE temp TEMPFILE 'E:\OraData\MyDemo\TEMP.dbf' SIZE 50 M<br>UNDO TABLESPACE "UndoTbs1" DATAFILE 'E:\OraData\MyDemo\UNDO.dbf' SIZE 200 M
CHARACTER SET WE8ISO8859P1
LOGFILE 'E:\OraData\MyDemo\rbs01.dbf' SIZE 2M,
'E:\OraData\MyDemo\rbs02.dbf' SIZE 2M,
'E:\OraData\MyDemo\rbs03.dbf' SIZE 2M,
'E:\OraData\MyDemo\rbs04.dbf' SIZE 2M,
'E:\OraData\MyDemo\rbs05.dbf' SIZE 2M;

==

LOGFILE GROUP 1 ('E:\oradata\MyDemo\redo01.log') SIZE 102400K,
GROUP 2 ('E:\oradata\MyDemo\redo02.log') SIZE 102400K,
GROUP 3 ('E:\oradata\MyDemo\redo03.log') SIZE 102400K;
</pre>
<p><b> Related Commands:</b></p>
<p>DATABASE - <a href="database_a.html">ALTER DATABASE</a></p>
<p><b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/GLOBAL_NAME.html">GLOBAL_NAME</a> <br>  
&nbsp;<a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br>  
&nbsp;<a href="../orav/V$CONTROLFILE.html">V$CONTROLFILE</a><br>  
&nbsp;<a href="../orav/V$DATABASE.html">V$DATABASE</a><br>  
&nbsp;<a href="../orav/V$DATAFILE.html">V$DATAFILE</a><br>  
&nbsp;<a href="../orav/V$LOG.html">V$LOG</a><br>  
&nbsp;<a href="../orav/V$LOGFILE.html">V$LOGFILE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="database_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

