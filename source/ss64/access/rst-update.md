---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Recordset.Update</h1>
<p> Save the current record and any changes you've made to it. </p>
<pre>Syntax
      expression.Update(<i>UpdateType</i>, <i>Force</i>)

Key
   <i>UpdateType</i>  The type of update, as specified in Settings 
               (ODBCDirect workspaces only).

   <i>Force</i>       Force the changes into the database, regardless
               of whether the underlying data has been changed
               by another user. True / <u>False</u>
               (ODBCDirect workspaces only).</pre>
<p> To add, edit, or delete a record, there must be a unique index on the record in the underlying data source. If not, a "Permission denied" or "Invalid argument" error will occur.</p>
<p>If you move to another record,  close or cancel the recordset without performing an <span class="code">update </span>then all changes to the current record will be lost. </p>
<p>In an  Access workspace, when the Recordset object's LockEdits property setting is True (pessimistically locked) in a multiuser environment, the record remains locked from the time Edit is used until the Update method is executed or the edit is canceled. If the LockEdits property setting is False (optimistically locked), the record is locked and compared with the pre-edited record just before it is updated in the database. </p>
<p>If the record has changed since you used the Edit method, the Update operation fails.  Access database engine-connected ODBC and installable ISAM databases always use optimistic locking. To continue the Update operation with your changes, use the Update method again. To revert to the record as the other user changed it, refresh the current record by using Move 0.</p>
<p><b>Example</b></p>
<pre>Dim db As Database
Dim rst As Recordset

Set dbs = OpenDatabase("Northwind.mdb")
Set rst = dbsNorthwind.OpenRecordset("Employees", dbOpenDynaset)
      
With rst
   .AddNew
   !FirstName = "Fred"
   !LastName = "Bloggs"
   <b>.Update</b>
End With</pre>
<p class="quote"><i>“Even God cannot change the past” ~ Agathon</i></p>
<p><b>Related:</b></p>
<p><a href="movefirst.html">MoveFirst</a>/Last/Next/Previous Record<br>
<a href="openrecordset.html">OpenRecordset</a> - Create a new Recordset<br>
<a href="rst-cancelupdate.html">CancelUpdate</a> - Cancel recordset changes</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

