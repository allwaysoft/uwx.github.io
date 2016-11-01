---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ARCHIVE Clause</h1> 
<p>Make changes to Archive Log mode - called by ALTER SYSTEM. <br>
  <br>
  Syntax:</p>
<pre>   ARCHIVE LOG [THREAD <i>int</i>] <i>options</i></pre>
<p> options: <br>
  The options used with this command can be either</p>
<pre>    STOP</pre>
<p> OR any combination of the following</p>
<pre>    START
    ALL
    NEXT
    SEQUENCE <i>int</i>
    CHANGE <i>int</i>
    CURRENT
    GROUP <i>int</i>
    LOGFILE '<i>filename</i>'
    TO '<i>location</i>'
</pre>
<p><b> Related Commands:</b></p>
<p><a href="syntax-archivelog.html">Starting ARCHIVELOG mode </a><br>
<a href="system_a.html">ALTER SYSTEM</a> ARCHIVE LOG STOP<br>
<a href="system_a.html">ALTER SYSTEM</a> ARCHIVE LOG START <br>
These commands start/stop auto archiving (equivalent to init.ora: LOG_ARCHIVE_START=TRUE) </p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orav/V$ARCHIVE.html">V$ARCHIVE</a><br> 
<a href="../orav/V$ARCHIVED_LOG.html">V$ARCHIVED_LOG</a><br> 
<a href="../orav/V$ARCHIVE_DEST.html">V$ARCHIVE_DEST</a><br> 
<a href="../orav/V$ARCHIVE_PROCESSES.html">V$ARCHIVE_PROCESSES</a><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

