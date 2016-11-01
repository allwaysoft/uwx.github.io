---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Delete</h1>
<p>  Delete records from one or more of the tables listed in the FROM clause that satisfy the WHERE clause (SQL).</p>
<pre>Syntax
      DELETE [<i>table</i>.*] FROM <i>table</i> WHERE <i>criteria</i>

Key
   <i>table</i>     The name of the table from which records are deleted.

   <i>criteria</i>  An expression that determines which records to delete.
</pre>
<p><b>Examples</b></p>
<pre><span class="body">In SQL</span><br>DELETE * FROM Employees WHERE Title = 'Trainee';<br> <br><span class="body"> In VBA</span>
'Open a database<br>Set dbs = OpenDatabase("C:\demo\Northwind.mdb") <br>' Delete employee records where title is Trainee.     <br>dbs.Execute "DELETE * FROM Employees WHERE Title = 'Trainee';" <br>dbs.Close</pre>
<p class="quote"><i>“To finish a work? To finish a picture? What nonsense! To finish it means to be through with it, to kill it, to rid it of its soul, to give it its final blow the coup de grace for the painter as well as for the picture” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.<br>
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="delete.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

