---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>EXPDP</h1> 
<p>Export data with Oracle Data Pump. <br>
  <br>
  Syntax:</p>
<pre>   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="Attach to existing job">ATTACH</abbr></b> [=[<i>schema_name</i>.]<i>job_name</i>]

   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="Export entire database">FULL</abbr></b>=Y <i>options</i>

   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="List of schemas to export">SCHEMAS</abbr></b>=<i>schema_name
     </i> [,<i>schema_name2</i>...] <i>options</i>

   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="A list of tables to export - one schema only">TABLES</abbr></b>=[<i>schema_name</i>.] <i>table_name</i> [:<i>partition_name</i>]
      [,<i>table_name2</i>...] <i>options</i>

   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="A list of tablespaces to export">TABLESPACES</abbr></b>=<i>tablespace_name</i>
      [,<i>tablespace_name2</i>...] <i>options</i>

   EXPDP <i>username</i>/<i>password</i>@<i>connect_string</i> <b><abbr title="List of tablespaces from which metadata will be unloaded">TRANSPORT_TABLESPACES</abbr></b>=<i>tablespace_name</i>
      [,<i>tablespace_name2</i>...] [TRANSPORT_FULL_CHECK={Y|N}] <i>options</i>

Options
  CONTENT    The data to unload: <u>ALL</u>, DATA_ONLY or METADATA_ONLY
  <abbr title="Utilize cluster resources and distribute workers across the Oracle RAC. 11g R2">CLUSTER</abbr>    Utilize cluster and distribute workers across the Oracle RAC. {Y | N }  
  COMPRESSION={METADATA_ONLY | NONE}
  COMPRESSION_ALGORITHM Specify the compression algorithm that should be used. Valid keyword values are: [BASIC], LOW, MEDIUM and HIGH.

  CONTENT={ALL | DATA_ONLY | METADATA_ONLY}
  <abbr title="Write XML datatype in CLOB format 11g Release 1">DATA_OPTIONS</abbr> XML_CLOBS
  <b>DIRECTORY</b>=<i>directory_object</i>
  DUMP<b>FILE</b>=[<i>directory_object</i>:]<i>file_name</i> [,[<i>directory_object</i>:]<i>file_name...</i>]
  ESTIMATE={ BLOCKS | STATISTICS}
  ESTIMATE_ONLY={Y|N}
  EXCLUDE={<i>object_type </i>[:<i>name_clause</i>]} [,EXCLUDE=...]
  <abbr title="11g R1">ENCRYPTION</abbr> { ALL | DATA_ONLY | METADATA_ONLY }
  ENCRYPTION_PASSWORD=<i>password</i>
  <abbr title="11g R1">ENCRYPTION_ALGORITHM</abbr> { AES128 | AES192 | AES256 }
  <abbr title="11g R1">ENCRYPTION_MODE</abbr> { DUAL | PASSWORD | <u>TRANSPARENT</u> }
  <b>FILE</b>SIZE=<i>number_of_bytes</i>
  FLASHBACK_SCN=<i>scn_value</i>
  FLASHBACK_TIME=<i>timestamp</i>
  HELP      Display Help messages (N).
  INCLUDE={<i>object_type </i>[:<i>name_clause</i>]} [,INCLUDE=...]
  JOB_NAME=<i>jobname_string</i>
  LOG<b>FILE</b>=[<i>directory_object</i>:]<i>file_name</i>
  NOLOG<b>FILE</b>={Y|N}
  NETWORK_LINK=<i>database_link</i>
  PARALLEL=<i>int</i>
  PAR<b>FILE</b>=[<i>directory_path</i>]<i>file_name</i>        The name of an export parameter file.
  QUERY=[schema_name.][table_name:]<i>query_clause</i>
  <abbr title="11g R1">REMAP_DATA</abbr>     Specify a data conversion function, e.g. REMAP_DATA=EMP.EMPNO:REMAPPKG.EMPNO
  <abbr title="11g R1">REUSE_DUMPFILES</abbr>      Overwrite destination dump file if it exists (<u>N</u>)
  SAMPLE=[schema_name.][table_name:]<i>sample_percent</i>
  <abbr title="Name of an active Service and associated resource group to constrain Oracle RAC resources. 11g R2">SERVICE_NAME</abbr>  Name of an active Service and associated resource group to constrain Oracle RAC resources.
  <abbr title="Edition to be used for extracting metadata. 11g R2">SOURCE_EDITION</abbr>  Edition to be used for extracting metadata.
  STATUS [=<i>int</i>]
  <abbr title="Transportable method - 11g R1">TRANSPORTABLE</abbr> { ALWAYS | <u>NEVER</u> }
  TRANSPORT_FULL_CHECK   Verify storage segments of all tables (N).
  TRANSPORT_TABLESPACES  List of tablespaces from which metadata will be unloaded.
  USERID=<i>username</i>   The username performing the export, don't confuse with SCHEMAS=<i>schema_name</i>.
  VERSION={COMPATIBLE | LATEST | <i>version_string</i>}
</pre>
<p> Options can be supplied as part of the EXPDP command line or within an export parameter file.<br>
On the command line, the Username (or USERID) must be the first parameter.<br>
</p>
<pre>Interactive mode options:
  ADD_FILE            Add dumpfile to dumpfile set.
                      ADD_FILE=dumpfile-name
  CONTINUE_CLIENT     Return to logging mode. Job will be re-started if idle.
  EXIT_CLIENT         Quit client session and leave job running.
  <abbr title="Default filesize (bytes) for subsequent ADD_FILE commands">FILESIZE</abbr>            Default filesize (bytes) for subsequent ADD_FILE commands.
  HELP                Summarize interactive commands.
  KILL_JOB            Detach and delete job.
  PARALLEL            Change the number of active workers for current job.
                      PARALLEL=.
  <abbr title="11g R1">REUSE_DUMPFILES</abbr>     Overwrite destination dump file if it exists (<u>N</u>)
  START_JOB           Start/resume current job.
  STATUS              Frequency (secs) job status is to be monitored where
                      the default (0) will show new status when available.
                      STATUS=[interval]
  STOP_JOB            Orderly shutdown of job execution and exits the client.
                      STOP_JOB=IMMEDIATE performs an immediate shutdown of the
                      Data Pump job.</pre>
<p>expdp is a server side utility used to unload database data into a set of OS files called a 'dump file set'. The dump file set can be imported only by the Data Pump Import utility <span class="code">impdb</span>. The dump file set can be imported on the same system or it can be moved to another system and loaded there. </p>
<p>The dump file set is made up of one or more disk files that contain table data, database object metadata, and control information. </p>
<p>The directory objects must be created  before running expdb.</p>
<p><b>Examples</b></p>
<p>Full export:</p>
<pre>CREATE OR REPLACE DIRECTORY export_dir AS '/u01/app/oracle/oradata/';
GRANT READ, WRITE ON DIRECTORY export_dir TO demouser;
EXPDB system/password@sid <b>full</b>=Y directory=export_dir dumpfile=ss64.dmp logfile=exp_ss64.log</pre>
<p>Export a single schema:</p>
<pre class="code">EXPDB system/password@sid <b>schemas</b>=SCOTT directory=export_dir dumpfile=ss64.dmp logfile=ss64.log
</pre>
<p>Export selected tables:</p>
<pre class="code">EXPDB system/password@sid <b>schemas</b>=SCOTT <b>include=TABLE</b>:"IN ('EMP', 'DEPT')" directory=export_dir dumpfile=ss64.dmp logfile=ss64.log</pre>
<p>Export all of a schema except for one table:</p>
<pre class="code">EXPDB system/password@sid <b>schemas</b>=SCOTT <b>exclude=TABLE</b>:"= 'DEPT'" directory=export_dir dumpfile=ss64.dmp logfile=ss64.log
</pre>
<p><i class="quote">"It's part of a trilogy, a musical trilogy that I'm doing in D minor  which I always find is really the saddest of all keys really, I don't know why but it makes people weep instantly..." ~ <a href="http://www.youtube.com/watch?v=NgViOqGJEvM">Spinal Tap</a></i><b><br>  
<br>
Related:</b>
</p><p><a href="impdp.html">impdp</a> - Import data with Oracle Data Pump.
<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

