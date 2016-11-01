---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Update (SQL) </h1>
<p> Change the existing field values in a table.</p>
<pre>Syntax
      UPDATE <i>table</i> SET <i>newvalue</i> WHERE <i>criteria</i>;

Key
  <i>table</i>     The name of the table to modify.

  <i>newvalue</i>  An expression that determines the value to be
            updated in a specific field in the table.

  <i>criteria</i>  An expression that determines which records
            will be updated.</pre>
<p>Multiple records can be updated together, or the criteria can limit the update to a single row.<br>
Several fields can be updated at the same time.</p>
<p><b>Example:</b></p>
<p class="code">UPDATE Orders <br>
SET OrderAmount = OrderAmount * 1.1, Freight = Freight * 0.9 <br>
WHERE ShipCountry = 'UK';</p>
<p class="quote"><i>“Even God cannot change the past” ~ Agathon</i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">Delete</a>  - Delete records.<br>
<a href="execute.html">Execute </a>(SQL/VBA) - Execute a procedure or run SQL.<br>
<a href="insert.html">Insert</a>  - Add records to a table (append query).<br>
<a href="select.html">Select</a>  - Retrieve data from one or more tables or queries.<br>
<a href="select-into.html">Select Into</a>  - Make-table query.<br>
<a href="select-subquery.html">Select-Subquery</a> - SubQuery<br>
<a href="transform.html">Transform</a> - Create a crosstab query.<br>
<a href="union.html">Union</a>  - Combine the results of two SQL queries.<br>
<a href="update.html">Update</a> - Update existing field values in a table.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="update.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

