---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Recordset.Move</h1>
<p> Move the position of the current record in a Recordset object.</p>
<pre>Syntax
      <i>expression</i>.Move(<i>Rows</i>, <i>StartBookmark</i>)

Key
   <i>Rows</i>          The number of rows the position will move.
                 If <i>rows</i> is greater than 0, the position is
                 moved forward (toward the end of the file). 
                 If <i>rows</i> is less than 0, the position is moved
                 backward (toward the beginning of the file).
      
   <i>StartBookmark</i> A bookmark. Begin the move relative to this
                 bookmark instead of the current record.</pre>
<p> The Move methods move from record to record without applying a condition.</p>
<p> Attemting to move past either  BOF or EOF will raise an error, you can trap this error with <span class="code">If .BOF Then</span>…</p>
<p>On a forward-only-type Recordset object, the <i>rows</i> argument must be a positive integer and bookmarks aren't allowed. This means you can only move forward.</p>
<p>To make the first, last, next, or previous record in a Recordset the current record, use either the MoveFirst, MoveLast, MoveNext, or MovePrevious method.</p>
<p><b>Example</b></p>
<pre>Dim db As Database
Dim rst As Recordset

Set dbs = OpenDatabase("Northwind.mdb")
Set rst = dbsNorthwind.OpenRecordset("Employees", dbOpenDynaset)
      
With rst
   ' Populate recordset.<br>   .MoveLast<br>   .MoveFirst

   ' Move to the 10,000th record
   .Move 10000
   .Close
End With</pre>
<p class="quote"><i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="findfirst.html">FindFirst</a>/Last/Next/Previous Record<br>
<a href="movefirst.html">MoveFirst</a>/Last/Next/Previous Record<br>
<i>RecordSet</i>.Close - Close a recordset<br>
<a href="rst-update.html">Update</a> - Save a recordset<br>
<a href="rst-cancelupdate.html">CancelUpdate</a> - Cancel recordset changes</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="move.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

