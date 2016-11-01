---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>keepOption Clause</code></h1> 
<p>How long to keep the backup and associated archived redo logs.<br>
  <br>
Syntax:</p>
<pre>     KEEP UNTIL TIME [=] '<i>date_string</i>' [LOGS | NOLOGS]

     KEEP FOREVER  [LOGS | NOLOGS]

     <u>NOKEEP</u>
</pre>
<p>Specifying LOGS will ensure  that all  the archived logs required to recover this backup (or copy ) will remain available for as long as the backup is available. </p>
<p>If you plan to restore and recover all data up until the current time then logs will be  required.</p>
<p>For a point in time backup e.g. to keep a historical record then use NOLOGS.</p>
<p>  NOLOGS is not valid if the backup is inconsistent.</p>
<p><span class="quote"><i>"It's what you learn after you know it all that counts" - John Wooden</i></span><br>
<br>
<b>Related Commands:</b><br>
<br>
 <a href="rman_backup.html">BACKUP</a> - Back up database files, archive logs, backups, or copies.
<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_keepOption.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

