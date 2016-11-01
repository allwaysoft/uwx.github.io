---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC SHOW_STATISTICS</h1>
<p>Display the current distribution statistics for the specified target on the specified table.</p>
<pre>Syntax
      DBCC SHOW_STATISTICS ('<i>table</i>' | '<i>view</i>' , <i>target</i>)
         [WITH [NO_INFOMSGS] <i>option</i>  [, <i>option</i>...] ]
    
Options:
    STAT_HEADER
    DENSITY_VECTOR
    HISTOGRAM

Key:
   table / view - The table or indexed view for which to display stats
   target       - The column, index or statistics for which to display stats.
	NO_INFOMSGS  - Suppress all information messages (severity 0-10)
</pre>
<p>Specifying any of the 3 options will return only those statistics.</p>
<p>Example</p>
<pre>DBCC SHOW_STATISTICS ('MySchema.MyTable', MyIndex);<br>GO</pre>
<p class="quote"><i>"A lawyer who represents himself has a fool for a client." ~ proverb </i></p>
<p><b>Related:</b></p>
<p> <a href="stats_u.html">UPDATE STATISTICS</a><br>sp_createstats<br>
  sp_updatestats  <br>
 Equivalent Oracle commands: 
<a href="../orad/INDEX_STATS.html">INDEX_STATS</a>&nbsp;&nbsp;&nbsp;<a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_showstats.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

