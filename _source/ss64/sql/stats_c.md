---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE STATISTICS</h1>
<p>Create statistics  for one or more table columns in the current database.</p>
<pre>Syntax
      CREATE STATISTICS <i>statistics</i> 
         ON {<i>table</i> | <i>view</i>} (<i>column</i> [,...<i>n</i>] )
            [WITH <i>option</i>  [NORECOMPUTE] ];

   Options: 
           FULLSCAN 
           SAMPLE <i>number</i> {PERCENT | ROWS} 
           STATS_STREAM = <i>stats_stream</i> ] [,]  

Key
   statistics     The name of the statistics group to create
<i>   table/view</i>     The item for which statistics should be created
   column         The column(s) on which to create statistics. (not xml column) 
   FULLSCAN       Read all rows in table.
   SAMPLE         Read a percentage, or a specified random number of rows.
   NORECOMPUTE    Do not automatically recompute statistics.
</pre>
<p>   The statistics include a histogram and associated density groups (collections) over the  column(s).</p>
<p>Example</p>
<pre>CREATE STATISTICS MyStats<br>    ON MySchema.MyTable (ColID, Coltext)<br>    WITH SAMPLE 5 PERCENT;</pre>
<p> <span class="quote"><i> "There are lies, damned lies, and statistics" - Disraeli</i></span></p>
<p><b>Related commands:</b></p>
<p>  <a href="stats_d.html">DROP STATISTICS</a><br>
  <a href="dbcc_showstats.html">DBCC SHOW_STATISTICS</a>  <br>
Equivalent Oracle command: <a href="../ora/stats_assoc.html">ASSOCIATE STATISTICS</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

