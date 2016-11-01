---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Union</h1>
<p> Combine the results of two (or more) SQL queries.</p>
<pre>Syntax
      [TABLE] <i>query1</i> 
         UNION [ALL] [TABLE] <i>query2</i>
           [UNION [ALL] [TABLE] <i>queryn</i> [ … ]]

Key
  <i>query1-n</i>    A <a href="select.html">SELECT</a> statement, the name of a stored query,
              or the name of a stored table preceded by the TABLE keyword. </pre>
<p>A UNION SQL statement  can merge the results of two or more queries, tables, and SELECT statements, in any combination. </p>
<p>The <span class="code">ALL</span> predicate will return all records including any duplicates. This will also make the query run faster. By default duplicates are not returned. </p>
<p>All queries in a UNION operation must request the same number of fields.</p>
<p>Use aliases only in the first SELECT statement - aliases are ignored in all but the first select. In the ORDER BY clause, refer to fields by what they are called in the first SELECT statement.</p>
<p><b>Example:</b></p>
<p class="code">Select supplier_id, supplier_name<br>
From suppliers<br>
UNION<br>
Select company_id, company_name<br>
From companies<br>
ORDER BY supplier_name;</p>
<p class="quote"><i>“Eventually, all things merge into one, and a river runs through it. The river was cut by the world's great flood and runs over rocks from the basement of time. On some of the rocks are timeless raindrops. Under the rocks are the words, and some of the words are theirs. I am haunted by waters” ~  Norman Maclean</i></p>
<p><b>Related:</b></p>
<p><a href="avg.html">Avg()</a> - Average<br>
<a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="delete.html">D</a><a href="delete.html">elete</a> - Delete records.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="max.html">Max()</a> - Return the maximum value from a query.<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="select-into.html">Select Into</a> - Make-table query.<br>
<a href="select-subquery.html">Select-Subquery</a> - SubQuery<br>
<a href="transform.html">Transform</a> - Create a crosstab query.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="union.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

