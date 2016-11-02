---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Insert</h1>
<p> Add records to a table (append query).</p>
<pre>Syntax

      INSERT INTO <i>target</i> [<b>(</b><i>field1</i>[, <i>field2</i>[, …]]<b>)</b>]
         VALUES <b>(</b><i>value1</i>[, <i>value2</i>[, …]<b>)</b>

   Multiple-record append:
      INSERT INTO <i>target</i> [<b>(</b><i>field1</i>[, <i>field2</i>[, …]]<b>)</b>] [IN <i>externaldatabase</i>] 
         SELECT [<i>source</i>.]<i>field1</i>[, <i>field2</i>[, …]
            FROM <i>tableexpression</i>

Key
   <i>target</i>          The table or query to append records to.

   <i>field1</i>, <i>field2</i>  Names of the fields to append data <i>to</i>, if following
                   a <i>target</i> argument, or the names of fields to obtain
                   data <i>from</i>, if following a <i>source</i> argument.

   <i>externaldatabase</i> The path to an external database file.

   <i>source</i>          The table or query to copy records from.

   <i>tableexpression</i> The table or tables from which records are inserted.
                   This argument can be a single table name or a
                   compound resulting from an INNER JOIN, LEFT JOIN,
                   or RIGHT JOIN operation or a saved query.

   <i>value1</i>, <i>value2</i>  The values to insert into the specific fields of
                   the new record. Each value is inserted into the
                   field that corresponds to the value's position in
                   the list: <i>value1</i> is inserted into <i>field1</i> of the new
                   record, <i>value2</i> into <i>field2</i>, and so on.
                   Separate values with a comma, and enclose text fields
                   in quotation marks (' ').</pre>
<p>If a value is  not specified for all columns in a table, the default value or Null is inserted for the missing columns.</p>
<p><b>Example</b></p>
<pre><span class="body">' In SQL</span>
   INSERT INTO Employees (FirstName, LastName, Title)
      VALUES ('Danny', 'Glover', 'Actor');
</pre>
<p>In VBS</p>
<pre> Dim dbs As Database<br> Set dbs = OpenDatabase("Northwind.mdb") <br>
 dbs.Execute " INSERT INTO Employees " _ <br>   &amp; "(FirstName,LastName, Title) VALUES " _ <br>   &amp; "('Danny', 'Glover', 'Actor');" <br> dbs.Close </pre>
<p class="quote"><i>“Never was anything great achieved without danger” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a> - Delete records.<br>
<a href="execute.html">Execute </a>(SQL/VBA) - Execute a procedure or run SQL.<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="select-into.html">Select Into</a> - Make-table query.<br>
<a href="sum.html">Sum</a> (SQL) - Add up the values in a query result set.<br>
<a href="update.html">Update</a> - Update existing field values in a table.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="insert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

