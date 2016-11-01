---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Run Clause</code></h1>
<p>Combine several RMAN commands into a single task, if any one
  command fails RMAN uses some  intelligent logic and can abort
  the remainder of the combined task.<br>
  <br>
  Syntax:</p>
<pre>   RUN { 
     …
   }


<b>Example
</b>
RUN<br>{<br>  ALLOCATE CHANNEL dev1 DEVICE TYPE DISK FORMAT '/fs1/%U';<br>  ALLOCATE CHANNEL dev2 DEVICE TYPE DISK FORMAT '/fs2/%U'; <br>  BACKUP <br>    (TABLESPACE system,finance,marketing FILESPERSET 20)<br>    (DATAFILE 62,63,64);<br>}
</pre>
<p>Some  commands are only valid inside a RUN block e.g. HOST
  commands and RMAN script commands - see the documentation for more on RMAN
  scripting.</p>
<p><span class="quote"><i>"In today's economy there are no experts, no 'best and brighest' with all the answers. It's up to each one of us. <br>
The only way to screw up is to not try anything" ~ Tom Peters</i></span><br>
<br>
<b>Related Commands:</b><br>
<br>
<a href="rman_backup.html">BACKUP</a> - Back up database files, archive logs, backups, or copies. <a href="rman_crosscheck.html"><br>
CROSSCHECK</a> - Check whether backup items still exist. <a href="rman_delete.html"><br>
DELETE</a> - Delete backups from disk or tape <a href="rman_recover.html"><br>
RECOVER</a> - Perform media recovery from RMAN backups and copies. <a href="rman_restore.html"><br>
RESTORE</a> - Restore RMAN backups and copies.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_run.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
