---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP TABLE</h1>
<p>Remove one or more tables.</p>
<pre>Syntax
      DROP TABLE <i>database</i>. [<i>schema</i>].<i>table</i> [,...n ] [;]
      DROP TABLE [schema.] <i>table</i> [,...n ] [; ]

Key<i>
   table</i>    The table to be dropped
</pre>
<p>    Drop Table will delete all data, indexes, triggers, constraints, and permissions for the table(s). <br>
Views and stored procedures that reference the table should be  dropped with DROP VIEW/ PROCEDURE. </p>
<p>Examples</p>
<pre>DROP TABLE MyTable1;
DROP TABLE MyDB.dbo.MyTable2 ;
DROP TABLE #MyTempTable;</pre>
<p class="quote"><i>"I've had a wonderful time, but this wasn't it." - Groucho Marx</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="table_c.html">CREATE TABLE</a><br>
  <a href="table_a.html">ALTER TABLE</a><br>
Equivalent Oracle command:  <a href="../ora/table_d.html">DROP TABLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

