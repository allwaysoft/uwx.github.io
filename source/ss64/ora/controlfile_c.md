---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE CONTROLFILE</h1> 
<p>Create a control file.<br>
  <br>
  Syntax:</p>
<p class="code">&nbsp;&nbsp;&nbsp;CREATE CONTROLFILE [REUSE] [SET] DATABASE <i>database</i><br>     
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGFILE [GROUP <i>int</i>] <a href="clause_filespec.html">filespec</a> <br>       
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[RESETLOGS | NORESETLOGS]<br>           
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATAFILE <a href="clause_filespec.html">filespec</a> <i>options</i> [CHARACTER SET <i>charset</i>]<br>
  <br>
  Options: <br>   
&nbsp;&nbsp;&nbsp;MAXDATAFILES <i>int</i><br>   
&nbsp;&nbsp;&nbsp;MAXLOGFILES <i>int</i><br>   
&nbsp;&nbsp;&nbsp;MAXLOGMEMBERS <i>int</i><br>
&nbsp;&nbsp;&nbsp;MAXLOGHISTORY <i>int</i><br>   
&nbsp;&nbsp;&nbsp;MAXINSTANCES <i>int</i><br>   
&nbsp;&nbsp;&nbsp;ARCHIVELOG | <u>NOARCHIVELOG</u><br>   
&nbsp;&nbsp;&nbsp;FORCE LOGGING</p>
<p>Several LOGFILE and/or DATAFILEs can be specified at once
    if separated with commas.</p>
<p>Do not include in the DATAFILE clause any datafiles in
  temporary or read-only tablespaces. You can add these 
to the database later.</p>
<p>Use this command to re-create a control
          file only if:</p>
<ul>
  <li>All copies of your existing control files have been lost
      through media failure.</li>
  <li>You want to change the name of the database.</li>
  <li>You want to
          change the maximum number of redo log file groups, redo log file<br>
    members, archived redo log files, datafiles, or instances that can concurrently<br>
    have the database mounted and open.</li>
</ul>
<p>Oracle recommend that you perform a<b> full backup of all database files</b>   before using this statement. (see the Oracle User-Managed Backup and Recovery Guide)</p>
<p>An alternative to  CREATE CONTROLFILE  is <br>
    <a href="database_a.html">ALTER DATABASE</a> BACKUP CONTROLFILE TO TRACE<br>
  this generates a new
  SQL script that can be used to re-create the controlfile. </p>
<p>Specify REUSE to indicate that existing control files identified  by the initialization<br>
  parameter CONTROL_FILES can be reused and overwritten.</p>
<p>Use SET DATABASE to change the name of the database.</p>
<p>Use the logfile_clause to specify ALL the redo log files for the database.</p>
<p>Specify RESETLOGS if you want Oracle to ignore the contents  of the files listed in the LOGFILE clause. The log files do not have to exist but each <i>redo_log_file_spec </i>in the LOGFILE clause must specify the SIZE parameter. Oracle will assign all online redo log file groups to thread 1 and will enable this thread for public use by any instance. You must then open the database using <a href="database_a.html">ALTER DATABASE RESETLOGS</a>.</p>
<p> NORESETLOGS will use all files in the LOGFILE clause as they were when the database was last open. These files must exist and must be the current online redo log files rather than restored backups.<br>
Oracle will reassign the redo log file groups to reenabled threads as previously assigned.</p>
<p>The FORCE LOGGING clause will put the database into  FORCE LOGGING mode after control file creation.<br>
<br>
<b>Related Commands:</b></p>
<p><a href="database_a.html">ALTER DATABASE</a> BACKUP CONTROLFILE TO TRACE</p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/GLOBAL_NAME.html">GLOBAL_NAME</a> <br>  
  <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br>
  <br>  
  <a href="../orav/V$CONTROLFILE.html">V$CONTROLFILE</a><br>  
  <a href="../orav/V$DATABASE.html">V$DATABASE</a><br>  
  <a href="../orav/V$DATAFILE.html">V$DATAFILE</a><br>  
  <a href="../orav/V$LOG.html">V$LOG</a><br>  
<a href="../orav/V$LOGFILE.html">V$LOGFILE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="controlfile_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

