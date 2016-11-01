---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>WITH common_table_expression</h1>
<p>A temporary <i>named</i> result set, known as a common table expression (CTE). </p>
<pre>Syntax
      [ WITH <i>common_table_expression</i> [ ,...<i>n</i> ] ]

   common_table_expression:
        <i>expression</i> [( <i>column_name </i>[,...<i>n</i> ])]
          AS
            (<i>CTE_query_definition</i>)</pre>
<p>    This expression is derived from a simple query and defined within the execution scope of a single SELECT, INSERT, UPDATE, or DELETE statement. It must be followed by a single SELECT, INSERT, UPDATE, or DELETE statement that references some or all the same columns. </p>
<p>Example</p>
<pre>WITH InventorySales (Product, Sold) AS <br>(<br>    SELECT ProductID, COUNT(*) AS Sold<br>    FROM Inventory.Sales<br>    GROUP BY ProductID<br>) <br>SELECT SUM(Sold) AS [number of sales made]<br>FROM InventorySales</pre>
<p class="quote"><i>"A chic type, a rough type, an odd type - but never a stereotype"
~ Jean-Michel Jarre </i></p>
<p><b>Related commands:</b></p>
<p>  <span class="body"><a href="select.html">SELECT</a><br>
    <a href="insert.html">INSERT</a><br>
    <a href="update.html">UPDATE</a><br>
  <a href="delete.html">DELETE</a></span><br>
  <br>
<b>Equivalent Oracle command</b>:</p>
<p><a href="../ora/table_c.html">CREATE TABLE</a> (Temporary)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_with_common_te.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

