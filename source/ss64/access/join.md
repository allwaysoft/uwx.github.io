---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Join</h1>
<p> Combine source table records,  used within an SQL <a href="from.html">FROM</a> clause.</p>
<pre>Syntax
      ... FROM table1 LEFT JOIN <i>table2</i>
         ON <i>table1.field1</i> <i>compopr table2.field2</i>

      ... FROM table1 RIGHT JOIN <i>table2</i>
         ON <i>table1.field1</i> <i>compopr table2.field2</i>

      ... FROM table1 INNER JOIN <i>table2</i>
         ON <i>table1.field1</i> <i>compopr table2.field2</i>

Key
   <i>table1, table2</i>   The tables from which records are combined.

   <i>field1, field2</i>   The fields to be joined.
                    The fields must be of the same data type and
                    contain the same kind of data, but they 
                    do not need to have the same name.

   compopr          Any relational comparison operator:
                     =  &lt;  &gt;  &lt;=  &gt;=  or  &lt;&gt;</pre>
<p>The INNER JOIN is the most common type of join. Inner joins combine records from two tables whenever there are matching values in  both tables.</p>
<p>The LEFT JOIN operation will create a left outer join. This will include all the records from <span class="code">table1</span> (left), even if there are no matching values for records in <span class="code">table2</span> (right).</p>
<p>The RIGHT JOIN operation will create a right outer join. This will include all of the records from <span class="code">table2</span> (right) of two tables, even if there are no matching values for records in <span class="code">table1</span> (left).</p>
<p>You can join any two numeric fields of like types. For example, you can join on AutoNumber and Long fields because they are like types. However, you cannot join Single and Double types of fields.</p>
<p><b>Example</b></p>
<pre><span class="body">' In SQL</span>
SELECT CategoryName, ProductName
FROM Categories LEFT JOIN Products
ON Categories.CategoryID = Products.CategoryID;</pre>
<p class="quote"><i>“When making a fire people like to join you, when cleaning the ashes you are often alone” ~ African Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="avg.html">Avg</a> (SQL) - Average<br>

<a href="max.html">Max</a> (SQL) - Return the maximum value from a query.<a href="min.html"><br>
Min</a> (SQL) - Return the minimum value from a query.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="join.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

