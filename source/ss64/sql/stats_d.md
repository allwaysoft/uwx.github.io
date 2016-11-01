---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP STATISTICS</h1>
<p>Drop statistics in the current database (for one or more collections within the  table)</p>
<pre>Syntax
      DROP STATISTICS <i>table.statistics</i> [ ,...n ]
      DROP STATISTICS <i>view.statistics</i> [ ,...n ]
	  
Key<i>
   table/view</i>     The item for which statistics should be dropped
   <i>statistics</i>     The name of the statistics group to drop</pre>
<p>   To drop statistics on an index, drop and rebuild the  index.</p>
<p>Example</p>
<pre>DROP STATISTICS Music.ArtistTbl.ArtistStats, Sales.SalesTbl.SalesStats;</pre>
<p> <span class="quote"><i>"There are lies, damned lies, and statistics" ~ Disraeli</i></span></p>
<p><b>Related commands:</b></p>
<p>  <a href="stats_c.html">CREATE STATISTICS</a><br>
Equivalent Oracle command:  <a href="../ora/stats_dis.html">DISSASSOCIATE STATISTICS</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stats_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

