---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Select</h1>
<p> Retrieve data from one or more tables or queries.</p>
<pre>Syntax
      SELECT [<i>predicate</i>] { * | <i>table</i>.* | [<i>table</i>.]<i>field1</i> [AS <i>alias1</i>]
         [, [<i>table</i>.]<i>field2</i> [AS <i>alias2</i>] [, …]]}
            <a href="from.html">FROM</a> <i>tableexpression</i> [, …] [IN <i>externaldatabase</i>]
              [WHERE… ] [GROUP BY… ] [HAVING… ]
                 [ORDER BY… ] [WITH OWNERACCESS OPTION]

Key
   <i>predicate</i>       Restrict the number of records returned.
                   One of: <u>ALL</u>, DISTINCT, DISTINCTROW, or TOP. 

    *              Return all fields from the table(s).

   <i>table</i>           The name of the table containing this field.

   <i>field1, field2</i>  The fields containing the data to be retrieved.
                   If more than one field is listed, they are
                   retrieved in the order listed.

   <i>alias1, alias2</i>  Names to use as column headers instead of
                   the original column names in table.

   <i>tableexpression</i>  The table or tables containing the data to retrieve.

   <i>externaldatabase</i> The database containing the tables in <i>tableexpression</i> 
                    if they are not in the current database.</pre>
<p>SELECT statements will not change data in the database.</p>
<p>Use an asterisk (*) to select all fields in a table: <span class="code">SELECT * FROM T_Employees;</span></p>
<p>If a field name is included in more than one table in the FROM clause, precede it with <span class="code"><i>table.</i></span> name.</p>
<p>For example if the ProductID is in both T_Products and T_Sales:</p>
<p class="code">SELECT T_Products.ProductID, T_Sales.qty<br>
FROM T_Products INNER JOIN T_Sales<br>
WHERE T_Products.ProductID = T_Sales.ProductID;</p>
<p> To return a different field name (and field object name), use the AS reserved word:</p>
<p><span class="code">SELECT T_Products.ProductName As PartName<br>
FROM T_Products</span></p>
<p>The As clause should also be used with aggregate functions (Sum, Count etc ) or any other queries that would return ambiguous or duplicate Field object names:</p>
<p class="code">SELECT Count(ProductID)
AS ProductCount<br> 
FROM T_Sales;</p>
<p class="quote"><i>“We don't pay taxes. Only the little people pay taxes” ~ <a href="http://en.wikipedia.org/wiki/Leona_Helmsley">Leona Helmsley</a></i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a> - Delete records.<br>
<a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="execute.html">Execute</a> (SQL/VBA) - Execute a procedure or run SQL.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<br>
<a href="select-into.html">Select Into</a> - Make-table query.<br>
<a href="select-subquery.html">Select-Subquery</a> - SubQuery<br>
<a href="transform.html">Transform</a> - Create a crosstab query.<br>
<a href="union.html">Union</a> - Combine the results of two SQL queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

