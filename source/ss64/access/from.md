---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>From</h1>
<p> Specify the table(s) to be used in an SQL query.</p>
<pre>Syntax
      SELECT <i>column</i>(s) FROM <i>table1</i> <a href="join.html">INNER JOIN</a> <i>table2</i> 
         ON <i>table1.field1 compopr table2.field2</i>

Key
   <i>table1, table2</i>   The tables from which records are combined.

   <i>field1, field2</i>   The fields to be joined.
                    The fields must be of the same data type and
                    contain the same kind of data, but they 
                    do not need to have the same name.

   compopr          Any relational comparison operator:
                     =  &lt;  &gt;  &lt;=  &gt;=  or  &lt;&gt;</pre>
<p><b>Example</b></p>
<pre><span class="body">' In SQL</span>
SELECT CategoryName, ProductName <br>FROM Categories INNER JOIN Products <br>ON Categories.CategoryID = Products.CategoryID;</pre>
<p class="quote"><i>“Never was anything great achieved without danger” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p><a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="avg.html">Avg</a> (SQL) - Average<br>

<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
Min</a> (SQL) - Return the minimum value from a query.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="from.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

