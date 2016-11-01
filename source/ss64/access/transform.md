---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Transform</h1>
<p> Create and run a crosstab query.</p>
<pre>Syntax
      TRANSFORM <i>aggFunction</i> <i>SelectStatement</i> PIVOT
         <i>pivotField</i> [IN (<i>value1</i>[, <i>value2</i>[, …]])]

Key
   <i>aggFunction</i>     An SQL aggregate function that operates on the selected data.

   <i>SelectStatement</i> A SELECT statement.

   <i>pivotField</i>      The field or expression used to create column headings
                   in the query's result set.

   <i>value1</i>, <i>value2</i>  Fixed values used to create column headings.</pre>
<p>If any rows or columns contain NULLs they will appear under a row/column as<span class="code"> &lt;&gt;</span> </p>
<p><b>Examples</b></p>
<p>'Return Purchase Dates as rows, ServicePack pivoted as columns and count the numbers of servers from the table T_Servers:</p>
<p class="code">TRANSFORM Count(T_servers.svr_Name) As CountServers<br>
SELECT T_Servers.svr_Purchase_Date<br>
FROM T_Servers<br>
GROUP BY T_Servers.svr_Purchase_Date<br>
PIVOT T_Servers.svr_os_Service_Pack;</p>
<p class="quote"><i>“Some painters transform the sun into a yellow spot; others transform a yellow spot into the sun” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a> - Delete records.<br>
<a href="execute.html">Execute </a>(SQL/VBA) - Execute a procedure or run SQL.<br>
<a href="insert.html">Insert</a> - Add records to a table (append query).<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
<a href="select.html">Select</a> - Retrieve data from one or more tables or queries.<br>
<a href="select-into.html">Select Into</a> - Make-table query.<br>
<a href="select-subquery.html">Select-Subquery</a> - SubQuery<br>
<a href="union.html">Union</a> - Combine the results of two SQL queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.<br>
<a href="http://support.microsoft.com/kb/304458">Q304458</a> - Create a crosstab query with multiple value fields</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="transform.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


