---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Show clause</code></h1>
<p>Display the currently enabled <code><a href="rman_configure.html">CONFIGURE</a></code> commands.<br>
  <br>
Syntax:</p>
<pre>   SHOW 
   { RETENTION POLICY 
   | [DEFAULT] DEVICE TYPE 
   | [AUXILIARY] CHANNEL [FOR DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a>] 
   | MAXSETSIZE 
   | { DATAFILE | ARCHIVELOG } BACKUP COPIES 
   | BACKUP OPTIMIZATION 
   | SNAPSHOT CONTROLFILE NAME 
   | AUXNAME 
   | EXCLUDE
   | CONTROLFILE AUTOBACKUP [FORMAT] 
   | ALL
   };</pre>
<p><b>Examples</b></p>
<p><code>SHOW RETENTION POLICY;<br>
</code><code>SHOW DEVICE TYPE;<br>
  SHOW DEFAULT DEVICE TYPE;<br>
  SHOW CHANNEL;<br>
</code><code>SHOW MAXSETSIZE;</code></p>
<p><code>  SHOW ALL;</code> </p>
<p><b>Related Commands:</b><br>
<br>
<a href="rman_change.html">
CHANGE</a> - Update the status of a backup in the RMAN repository. <a href="rman_configure.html"><br>
CONFIGURE</a> - Persistent RMAN settings. <a href="rman_crosscheck.html"><br>
CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_delete.html"><br>
</a><a href="rman_list.html">
LIST</a> - List backups and copies <a href="rman_report.html"><br>
REPORT</a> - Report backup status: database, files, backups <a href="rman_set.html"><br>
SET</a> - Settings for the current RMAN session.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_show.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

