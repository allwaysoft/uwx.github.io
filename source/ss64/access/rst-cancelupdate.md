---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Recordset.CancelUpdate</h1>
<p> Cancel any pending updates for a Recordset object.</p>
<pre>Syntax
      expression.CancelUpdate(<i>UpdateType</i>)

Key
   <i>UpdateType</i>  The type of update, as specified in Settings 
               (ODBCDirect workspaces only).

</pre>
<p>Use the CancelUpdate method to cancel any pending updates resulting from an Edit or AddNew operation. </p>
<p>If a user invokes the Edit or AddNew method and hasn't yet invoked the Update method, then the changes can be cancelled. The EditMode property of the Recordset will show if there is a pending operation that can be canceled.</p>
<p><b>Example</b></p>
<pre>Dim db As Database
Dim rst As Recordset

Set dbs = OpenDatabase("Northwind.mdb")
Set rst = dbsNorthwind.OpenRecordset("Employees", dbOpenDynaset)
      
With rst
   .AddNew
   !FirstName = "Fred"
   !LastName = "Bloggs"
   <b>.CancelUpdate</b>
End With</pre>
<p class="quote"><i>“Even God cannot change the past” ~ Agathon</i></p>
<p><b>Related:</b></p>
<p><a href="rst-update.html">Update</a> - Save a recordset.<br>
<a href="openrecordset.html">OpenRecordset</a> - Create a new Recordset<br>
<a href="addnew.html">AddNew</a> - Add a new record to a recordset.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="rst-cancelupdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

