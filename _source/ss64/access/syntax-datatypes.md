---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Microsoft Access - Number Data Types</h1>
<table> <tbody><tr> 
<th>Data Type </th>
<th>Description</th>
<th>Decimal precision</th>
<th>Storage size</th>
</tr>
<tr><td>Byte</td> 
<td>Numbers from 0 to 255 (no fractions).<br>
Use Number | Byte  in preference to <a href="http://allenbrowne.com/NoYesNo.html">Yes/No</a> (True=-1, False=0) </td> <td>None</td> <td>1 byte</td> </tr> <tr> <td>Decimal</td> 
<td> Numbers from -10^28-1 through 10^28-1 (.mdb)</td> <td>28</td> <td>12bytes</td> </tr> <tr> <td>Integer</td> 
<td>Numbers from -32,768 to 32,767 (no fractions).</td> <td>None</td> <td>2 bytes</td> </tr> <tr> <td>Long Integer</td> 
<td>(Default) Numbers from -2,147,483,648 to 2,147,483,647 (no fractions).</td> <td>None</td> <td>4 bytes</td> </tr> <tr> <td>Single</td> 
<td>Numbers from<br>
 -3.402823E38 to -1.401298E-45 <br> for negative values and from<br> 1.401298E-45 to 3.402823E38 for positive values.</td> <td>7</td> <td>4 bytes</td> </tr> <tr> <td>Double</td> 
<td>Numbers from<br>
 -1.79769313486231E308 to -4.94065645841247E–324 <br> for negative values and from <br> 4.94065645841247E-324 to  1.79769313486231E308 for positive values.</td> <td>15</td> <td>8 bytes</td> </tr> <tr> <td>Replication ID</td> <td>Globally unique identifier (GUID)</td> <td>N/A</td> <td>16 bytes</td> </tr> </tbody></table>

<p><b><br>
SQL Server</b></p>
<p>If an Access database is upsized to SQL Server, Yes/No fields (tickboxes) will be converted to <span class="code">bit</span> fields. These will give an error in Access if any row contains a NULL: <i>This record has been changed by another user since you started editing it. If you save the record, you will overwrite the changes the other user made</i>. <br>
To resolve this, assign a default value of <span class="code">(0)</span> on all bit fields and update any existing rows to either 0 or 1.</p>
<p><b>Related:</b></p>
<p><a href="http://msdn.microsoft.com/en-us/library/ee691831%28office.14%29.aspx">Compatibility Between the 32-bit and 64-bit Versions of Office 2010</a> - MSDN </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-datatypes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

