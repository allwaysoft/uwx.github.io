---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Recordset.MoveFirst / MoveLast / MoveNext / MovePrevious </h1>
<p> Move to a different record within a recordset.</p>
<pre>Syntax
      <i>expression</i>.MoveFirst

      <i>expression</i>.MoveLast

      <i>expression</i>.MoveNext

      <i>expression</i>.MovePrevious

Key
   <i>Criteria</i>   A String used to locate the record.
              Like the WHERE clause in an SQL statement,
              but without the word WHERE.
</pre>
<p> The Move methods move from record to record without applying a condition.</p>
<p> To find records that meet a specific condition — use a <span class="code"><a href="findfirst.html">Find</a></span> method to move from record to record. To locate a record in a table-type Recordset, use the Seek method. </p>
<p>If you move to another record without updating (with the Update method), your changes will be lost without warning.</p>
<p>When you open a Recordset, the first record is current and the BOF property is False. If the Recordset contains no records, the BOF property is True, and there is no current record.</p>
<p>If the first or last record is already current when you use MoveFirst or MoveLast, the current record doesn't change.</p>
<p>If recordset refers to a table-type Recordset (Microsoft Access workspaces only), movement follows the current index. You can set the current index by using the Index property. If you don't set the current index, the order of returned records is undefined.</p>
<p>You can't use the MoveFirst, MoveLast, and MovePrevious methods on a forward–only–type Recordset object.</p>
<p>To move the position of the current record in a Recordset object a specific number of records forward or backward, use the <a href="move.html">Move</a> method.</p>
<p><b>Example</b></p>
<p class="code">rstPatients.FindFirst "AdmissionDate &gt; #" 
&amp; Format(Me!txtAdmission, 'm-d-yy' ) &amp; "#"</p>
<p class="quote"><i>“Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="findfirst.html">FindFirst</a>/Last/Next/Previous Record<br>
<a href="move.html">.Move</a> - Move through a Recordset.<br>
<i>RecordSet</i>.Close - Close a recordset<br>
<a href="openrecordset.html">OpenRecordset</a> - Create a new Recordset<br>
<a href="rst-update.html">Update</a> - Save a recordset<br>
<a href="rst-cancelupdate.html">CancelUpdate</a> - Cancel recordset changes</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

