---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Set Clause</code></h1>
<p>Settings that apply only to the current RMAN session.<br>
  <br>
Syntax:</p>
<pre>   SET { <a href="rman_set.html#set_rman_option">set_rman_option</a> [;] | <a href="rman_set.html#set_run_option">set_run_option</a>; }

   set_rman_option<a id="set_rman_option"></a>::=
     { ECHO { ON | OFF }
     | DBID [=] <i>integer</i>
     | CONTROLFILE AUTOBACKUP FORMAT FOR DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> TO 
     'frmt_string'

   set_run_option<a id="set_run_option"></a>::=
     { NEWNAME FOR DATAFILE <a href="rman_datafile.html">datafileSpec</a> TO { '<i>filename</i>' | NEW }
     | ARCHIVELOG DESTINATION TO '<i>log_archive_dest</i>'
     | <a href="rman_untilClause.html">untilClause</a>
     | COMMAND ID TO '<i>string</i>'
     | CONTROLFILE AUTOBACKUP FORMAT FOR DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> TO 
     '<i>frmt_string</i>'
     .
     .
     .
     }</pre>
<p>  <b>Key</b></p>
<p>ECHO - Controls whether RMAN commands are displayed in the
    message log. </p>
<p>DBID - A unique 32-bit identification number computed when the
  database is created. RMAN displays the DBID upon connection to the target database.
You can obtain the DBID by querying <a href="../orav/V$DATABASE.html">V$DATABASE</a> or RC_DATABASE.</p>
<p>NEWNAME FOR DATAFILE - The default name for all subsequent RESTORE
or SWITCH commands that affect the specified datafile.</p>
<p>MAXCORRUPT FOR DATAFILE - A limit on the number of previously
undetected physical block corruptions that Oracle will allow in the datafile(s)</p>
<p>AUTOLOCATE - Force RMAN to automatically discover which nodes
  of an Oracle Real Application Clusters configuration contain the backups that
you want to restore.</p>
<p><b>Related Commands:</b><br>
<br>
<a href="rman_change.html">
CHANGE</a> - Update the status of a backup in the RMAN repository. <a href="rman_configure.html"><br>
CONFIGURE</a> - Persistent RMAN settings. <a href="rman_list.html"><br>
LIST</a> - List backups and copies <a href="rman_report.html"><br>
REPORT</a> - Report backup status: database, files, backups <a href="rman_show.html"><br>
SHOW</a> - Display the current configuration</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_set.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

