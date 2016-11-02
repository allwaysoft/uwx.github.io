---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC DROPCLEANBUFFERS</h1>
<p>Remove all clean buffers from the buffer pool.</p>
<pre>Syntax
      DBCC DROPCLEANBUFFERS [WITH NO_INFOMSGS]


Key:
   WITH NO_INFOMSGS - Suppress all information messages.

</pre>
<p>This command is useful  to test queries with a cold buffer cache without shutting down and restarting the server.</p>
<p>To produce a 'cold' buffer cache with all dirty pages written to disk, first use CHECKPOINT. </p>
<p class="quote"><i># Why can't I ease your doubtful mind,
  and melt your cold, cold heart # ~ Hank Williams</i></p>
<p><b>Related:</b></p>
<p> <a href="checkpoint.html">CHECKPOINT</a><br>
  <a href="dbcc_free.html">DBCC FREE...</a> CACHE  <br>
Equivalent Oracle command:  <a href="../ora/system_a.html">ALTER SYSTEM</a> FLUSH SHARED POOL</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_dropclean.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

