---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC UPDATEUSAGE</h1>
<p>Report and correct page and row count inaccuracies in catalog views, use this after upgrading a database.</p>
<pre>Syntax
      DBCC UPDATEUSAGE ( <i>database</i> 
         [, {<i>table </i>| <i>view</i>}  [,{<i>index</i>} ] ] )
            [WITH [ NO_INFOMSGS ] [ , ] [COUNT_ROWS ] ] 

 Key:
   <i>database</i>    - 'database_name' or database_id or 0 (current db)
   NO_INFOMSGS - Suppress all information messages.
   COUNT_ROWS  - Update the row count column.
</pre>
<p>The table/view and indexes may be specified by 'name' (in single quotes) or ID.</p>
<p>If 0 is specified, the current database will be used.</p>
<p>Example</p>
<pre>DBCC UPDATEUSAGE ('MyDatabase','MySchema.MyTable');<br>GO</pre>
<p class="quote"><i>“No matter how cynical you get, it is impossible to keep up” ~ Lily Tomlin </i></p>
<p><b>Related:</b></p>
<p> sp_spaceused<br>
  sys.sysindexes<br>
  <a href="stats_u.html">UPDATE STATISTICS</a><br>
  Equivalent Oracle command: <a href="../orad/DBA_TABLES.html">DBA_TABLES</a> - Rows in table ,  <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a> - Other column stats </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_updateusage.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

