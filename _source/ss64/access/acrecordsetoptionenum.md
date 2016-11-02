---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>acRecordsetOptionEnum</h1>
<table>
<tbody><tr><th>Name</th><th>Value</th><th>Description</th></tr>
<tr><td>dbAppendOnly</td>
<td>8</td>
<td>Allow a user to add new records to the dynaset, but prevent the user from reading existing records.</td>
</tr>
<tr><td>dbConsistent</td>
<td>32</td>
<td>Apply updates only to those fields that will not affect other records in the dynaset (dynaset- and snapshot-type only).</td>
</tr>
<tr><td>dbDenyRead</td>
<td>2</td>
<td>Prevent other users from reading Recordset records (table-type  only).</td>
</tr>
<tr><td>dbDenyWrite</td>
<td>1</td>
<td>Prevent other users from changing Recordset records.</td>
</tr>
<tr><td>dbExecDirect</td>
<td>2048</td>
<td>Execute the query without first calling the SQLPrepare ODBC function.</td>
</tr>
<tr><td>dbFailOnError</td>
<td>128</td>
<td>Roll back updates if an error occurs.</td>
</tr>
<tr><td>dbForwardOnly</td>
<td>256</td>
<td>Create a forward-only scrolling snapshot-type Recordset (snapshot-type only).</td>
</tr>
<tr><td>dbInconsistent</td>
<td>16</td>
<td>Apply updates to all dynaset fields, even if other records are affected (dynaset- and snapshot-type only).</td>
</tr>
<tr><td>dbReadOnly</td>
<td>4</td>
<td>Open the Recordset as read-only.</td>
</tr><tr><td>dbRunAsync</td>
<td>1024</td>
<td>Execute the query asynchronously.</td>
</tr>
<tr><td>dbSeeChanges</td>
<td>512</td>
<td>Generate a run-time error if another user is changing data you are editing (dynaset-type only).</td>
</tr>
<tr><td>dbSQLPassThrough</td>
<td>64</td>
<td>Send an SQL statement to an ODBC database (snapshot-type only).</td>
</tr></tbody></table>
<p class="quote"><i>“I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever” ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p><a href="openrecordset.html">OpenRecordset</a> - Create a new Recordset.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="acrecordsetoptionenum.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

