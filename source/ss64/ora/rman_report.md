---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Report Clause</code></h1>
<p>Report backup status: 
  database files, status of files and  backups (obsolete or
  unrecoverable.)<br>
  The REPORT command performs more complex analysis than <a href="rman_list.html">LIST</a>.  <br>
  <br>
  Syntax:</p>
<pre>   REPORT 
   { { NEED BACKUP [ { INCREMENTAL | DAYS } [=] <i>integer</i> 
                     | REDUNDANCY [=] <i>integer</i> 
                     | RECOVERY WINDOW OF <i>integer</i> DAYS)
                     ] 
     | UNRECOVERABLE
     } 
     <a href="rman_report.html#reportObject">reportObject</a> 
   | SCHEMA [<a href="rman_report.html#atClause">atClause</a>] 
   | OBSOLETE [<a href="rman_report.html#obsOperandList">obsOperandList</a>]
   }
   [ DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [,<a href="rman_devicespecifier.html">deviceSpecifier</a>]… ] 

   reportObject<a id="reportObject"></a>::=
     [ DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]… 
     | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]… 
     | DATABASE [SKIP TABLESPACE ['] <i>tablespace_name</i> [']
                  [, ['] <i>tablespace_name</i> [']]…]
     ]

   atClause<a id="atClause"></a>::=
     { AT TIME [=] '<i>date_string</i>'
     | AT SCN [=] <i>integer</i>
     | AT SEQUENCE [=] <i>integer</i> THREAD [=] <i>integer</i>
     }

   obsOperandList<a id="obsOperandList"></a>::= 
     [ REDUNDANCY [=] <i>integer</i> | RECOVERY WINDOW OF <i>integer</i> DAYS | ORPHAN ]…</pre>
<p><span class="quote"><i>"Our Constitution is in actual operation; everything appears to promise that it will last; but in this world nothing is certain but death and taxes" ~ Benjamin Franklin.</i></span><br>
<br>
<b>Related:</b><br>
<br>
<a href="rman_crosscheck.html">
CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_list.html"><br>
LIST</a> - List backups and copies <a href="rman_set.html"><br>
SET</a> - Settings for the current RMAN session. <a href="rman_show.html"><br>
SHOW</a> - Display the current configuration</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_report.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

