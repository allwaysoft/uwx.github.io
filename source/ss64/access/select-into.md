---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Select … Into </h1>
<p>  Make-table query.</p>
<pre>Syntax
      SELECT <i>field1</i>[, <i>field2</i>[, …]] INTO <i>newtable</i> [IN <i>externaldatabase</i>]
         <a href="from.html">FROM</a> <i>source</i>

Key
   <i>field1, field2</i>   The fields to be copied into the new table.

   <i>newtable</i>         The name of the table to be created.

   <i>externaldatabase</i> The path to an external database.

   <i>source</i>           The name of the existing table(s) or query from which
                    the records are selected.</pre>
<p>Use make-table queries to archive records or make backup copies of tables.</p>
<p class="code"> Dim dbs As Database <br>
<br>
Set dbs = OpenDatabase("Northwind.mdb") <br>
<br>
' Copy the Employees table to a new table, Emp_Backup. <br>
dbs.Execute "<b>SELECT</b> Employees.* <b>INTO</b> Emp_Backup FROM Employees;" <br><br>
dbs.Close </p>
<p class="quote"><i>“Be yourself always, express yourself, and have faith in yourself. Do not go out and look for a successful personality and duplicate him” ~ Bruce Lee</i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a> - Delete records.<br>
<a href="dcount.html">DCount</a> - Count the number of records in a table/query.<br>
<a href="execute.html">Execute</a>(SQL/VBA) - Execute a procedure or run SQL.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="union.html">Union</a> - Combine the results of two SQL queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

