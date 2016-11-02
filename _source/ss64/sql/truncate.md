---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>TRUNCATE TABLE</h1>
<p>Remove all rows from a table. Truncate does not log  row deletions in the transaction log.</p>
<pre>Syntax

      TRUNCATE TABLE  [<i>schema</i>.] <i>table </i>[;]

      TRUNCATE TABLE  [<i>database</i>.[<i>schema</i>].] <i>table</i> [;]
   </pre>
<p>    TRUNCATE TABLE will remove all rows from a table, but retains the table structure (columns, constraints, indexes etc.)</p>
<p>Example</p>
<pre>TRUNCATE TABLE MySchema.MyTable;<br>GO</pre>
<p class="quote"><i>"At a good table we may go to school" - Thomas Fuller</i></p>
<p><b>Related commands:</b></p>
<p><span class="body"><a href="delete.html">DELETE</a> - Remove rows one at a time and record an entry in the transaction log for each. <br>
    <a href="table_d.html">DROP TABLE</a> - Remove the table definition in addition to its data</span><br>
Equivalent Oracle command:  <a href="../ora/truncate.html">TRUNCATE TABLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="truncate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

