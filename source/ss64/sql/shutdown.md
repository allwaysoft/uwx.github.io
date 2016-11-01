---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SHUTDOWN</h1>
<p>Immediately stop SQL Server.</p>
<pre>Syntax
      SHUTDOWN [WITH NOWAIT]
</pre>
<p>Issuing SHUTDOWN WITH NOWAIT  or directly stopping the msSqlServer service from the Windows control panel  will <b>not </b>perform a checkpoint. When the database is restarted, this will force a rollback operation to occur for any uncompleted transactions. </p>
<p>Example</p>
<pre>SHUTDOWN</pre>
<p class="quote"><i>"It is now safe to turn off your computer" ~ <a href="http://support.microsoft.com/?kbid=810903">Windows error message</a></i></p>
<p><b>Related commands:</b></p>
<p>  <a href="checkpoint.html">CHECKPOINT</a><br>
  <a href="database_a.html">ALTER DATABASE</a><br>
Equivalent Oracle command:  <a href="../ora/shutdown.html">SHUTDOWN</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

