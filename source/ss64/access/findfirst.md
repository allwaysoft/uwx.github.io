---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Recordset.FindFirst / FindLast / FindNext / FindPrevious </h1>
<p> Find records within a recordset.</p>
<pre>Syntax
      <i>expression</i>.FindFirst(<i>Criteria</i>)

      <i>expression</i>.FindLast(<i>Criteria</i>)

      <i>expression</i>.FindNext(<i>Criteria</i>)

      <i>expression</i>.FindPrevious(<i>Criteria</i>)

Key
   <i>Criteria</i>   A String used to locate the record.
              Like the WHERE clause in an SQL statement,
              but without the word WHERE.
</pre>
<p> The Find methods locate a record in a dynaset- or snapshot-type Recordset object that satisfy the specified criteria and make that record the current record.</p>
<p> To include all the records in your search — not just those that meet a specific condition — use a <span class="code">Move</span> method to move from record to record. To locate a record in a table-type Recordset, use the Seek method. </p>
<p>You can follow a Find operation with a Move operation.</p>
<p>Always check the value of the <span class="code">NoMatch</span> property to determine whether the Find operation has succeeded. If the search succeeds, NoMatch is False. If it fails, NoMatch is True and the current record isn't defined. In this case, you must position the current record pointer back to a valid record.</p>
<p>Using the Find methods with an ODBC-accessed recordsets can be inefficient. Rephrasing your criteria to locate a specific record will be faster, especially when working with large recordsets.</p>
<p>To improve performance, use SQL queries with customized ORDER BY or WHERE clauses, parameter queries, or QueryDef objects that retrieve specific indexed records.</p>
<p>Use the U.S. date format (month-day-year) when  searching for fields containing dates</p>
<p><b>Example</b></p>
<p class="code">rstPatients.FindFirst "AdmissionDate &gt; #" 
&amp; Format(Me!txtAdmission, 'm-d-yy' ) &amp; "#"</p>
<p class="quote"><i>“A bad beginning makes a bad ending” ~ Euripides</i></p>
<p><b>Related:</b></p>
<p><a href="movefirst.html">MoveFirst</a>/Last/Next/Previous Record<br>
<a href="move.html">.Move</a> - Move through a Recordset<br>
<i>RecordSet</i>.Close - Close a recordset<br>
<a href="rst-update.html">Update</a> - Save a recordset<br>
<a href="rst-cancelupdate.html">CancelUpdate</a> - Cancel recordset changes</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="findfirst.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

