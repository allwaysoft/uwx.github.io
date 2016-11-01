---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>Change Clause</code></h1> 
<p>Update the status of a backup or copy in the RMAN repository.<br>
  <br>
  Syntax:</p>
<pre> CHANGE {BACKUP | COPY} [OF <a href="rman_change.html#listObjList">listObjList</a>]
          [ <a href="rman_maintQualifier.html">maintQualifier</a> [<a href="rman_maintQualifier.html">maintQualifier</a>]…]
            { AVAILABLE | UNAVAILABLE | UNCATALOG | <a href="rman_keepOption.html">keepOption</a> } 
              [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…];

 CHANGE <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a>
     { AVAILABLE | UNAVAILABLE | UNCATALOG | <a href="rman_keepOption.html">keepOption</a> } 
        [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…];

 CHANGE <a href="rman_recordspecifier.html">recordSpec</a> [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]..
     { AVAILABLE | UNAVAILABLE | UNCATALOG | <a href="rman_keepOption.html">keepOption</a> } 
        [DEVICE TYPE <a href="rman_devicespecifier.html">deviceSpecifier</a> [, <a href="rman_devicespecifier.html">deviceSpecifier</a>]…];


   listObjList<a id="listObjList"></a>::=
      [ DATAFILE <a href="rman_datafile.html">datafileSpec</a> [, <a href="rman_datafile.html">datafileSpec</a>]… 
      | TABLESPACE ['] <i>tablespace_name</i> ['] [, ['] <i>tablespace_name</i> [']]… 
      | <a href="rman_archivelogRecordSpecifier.html">archivelogRecordSpecifier</a> 
      | DATABASE [SKIP TABLESPACE ['] <i>tablespace_name</i> [']
           [, ['] <i>tablespace_name</i> [']]…] 
      | CONTROLFILE
      | SPFILE
      ]…
</pre>
<p><b>Example</b></p>
<p>Change an ordinary backup into a long-term backup:</p>
<p class="code">CHANGE BACKUPSET 431 KEEP FOREVER NOLOGS;</p>
<p><i class="quote">“An essential aspect of creativity is not being afraid to fail” ~ Edwin Land </i><br><br>
<b>Related Commands:</b><br>
<br>
<a href="rman_crosscheck.html">CROSSCHECK</a> - Check whether backup items still exist. <br>
<a href="rman_delete.html">DELETE</a> - Delete backups from disk or tape <br>
EXIT - Exit the RMAN console <br>
<a href="rman_list.html">LIST</a> - List backups and copies <br>
<a href="rman_report.html">REPORT</a> - Report backup status: database, files, backups<br>
<a href="rman_run.html">RUN</a> - Some RMAN commands are only valid inside a RUN block.</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rman_change.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

