---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE Database </h1>
<p>Revert to a Database Snapshot:</p>
<pre>   RESTORE DATABASE { <i>database</i> | @<i>database_name_var</i> } 
         FROM DATABASE_SNAPSHOT = <i>database_snapshot</i></pre>
<p>  This will restore  the snapshot (to the same server/database/schema name.)</p>
<p>Example</p>
<pre>USE master  <br>RESTORE DATABASE ss64Database FROM DATABASE_SNAPSHOT = 'ss64_snapshot01';<br>GO</pre>
<p class="quote"><i>"There is no safety in numbers, or in anything else" - James Thurber</i></p>
<p><b>Related commands:</b></p>
<p> <a href="restore_full.html">Complete Restore</a> - an <i>Entire</i> Database from a Full database backup. <a href="restore_partial.html"><br>
Partial Restore</a> - part of database/point in time <a href="restore_files.html"><br>
Restore Files</a> - Files, Filegroups, or Pages <br>
<a href="restore_logs.html">LOG Restore</a> - a Transaction Log<br>

RESTORE FILELISTONLY - List  database and log files<br>
  RESTORE VERIFYONLY  - Verify the backup but don't restore it<br>
Equivalent Oracle command:  <a href="../ora/rman.html">RMAN</a> - Recovery Manager</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

