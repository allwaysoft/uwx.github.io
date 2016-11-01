---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC SQLPERF</h1>
<p>Display transaction-log space statistics. Reset wait and latch statistics.</p>
<pre>Syntax
      DBCC SQLPERF ( <i>Option </i>) [WITH NO_INFOMSGS ]
     
Options:
   LOGSPACE<br>   'sys.dm_os_latch_stats' , CLEAR <br>   'sys.dm_os_wait_stats' , CLEAR

Key:
   LOGSPACE          - Monitor log space, indicates when to back up or truncate the tx log.
   dm_os_latch_stats - Reset the latch statistics.
   dm_os_wait_stats  - Reset the wait statistics.
	NO_INFOMSGS       - Suppress all information messages (severity 0-10)
</pre>
<p>Example</p>
<pre>DBCC SQLPERF(LOGSPACE)<br>GO</pre>
<p class="quote"><i>“If you happen to be one of the fretful minority... never force an idea; you'll abort it if you do. Be patient and you'll give birth to it when the time is
ripe. Learn to wait” ~ Robert A. Heinlein</i></p>
<p><b>Related commands:</b></p>
<p> 
  sp_spaceused<br>
  sys.dm_os_latch_stats<br>
  sys.dm_os_wait_stats  <br>
 Equivalent Oracle commands: 
<a href="../orav/V$LOG.html">V$LOG</a> and  <a href="../orav/V$LOGFILE.html">V$LOGFILE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_sqlperf.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

