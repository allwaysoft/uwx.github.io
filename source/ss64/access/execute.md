---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Execute</h1>
<p>  In SQL the Execute command invokes the execution of a procedure. In VBA the Execute method runs an action query or executes an SQL statement.</p>
<pre>Syntax
  SQL:
      EXECUTE procedure [<i>param1</i>[, <i>param2</i>[, …]]
  VBA:
      <i>expression</i>.Execute(<i>Query</i>, <i>Options</i>)

Key
   <i>procedure</i>         The name of the procedure to be executed.

   <i>param1</i>, <i>param2</i>,   Values for the parameters defined by the procedure.

   <i>query</i>             The SQL query to run

   <i>Options</i>           How to run the query:
                     dbDenyWrite, <u>dbInconsistent</u>, dbConsistent,
                     dbSQLPassThrough, dbFailOnError, dbSeeChanges,
                     dbRunAsync, dbExecDirect
</pre>
<p>When running against a linked SQL server table specify the option dbSeeChanges, this will avoid the error: '<i>You must use the dbSeeChanges option with OpenRecordsetwhen accessing a SQL server table that has an IDENTITY column</i>' </p>
<p><b>Example</b></p>
<pre><span class="body">' In VBA</span>
'Open a database
Set dbs = OpenDatabase("C:\demo\Northwind.mdb")
' Delete employee records where title is Trainee.
dbs.Execute ("DELETE * FROM Employees WHERE Title = 'Trainee';" , dbFailOnError Or dbSeeChanges)
dbs.Close </pre>
<p class="quote"><i>“Never was anything great achieved without danger” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a> - Delete records.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="execute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

