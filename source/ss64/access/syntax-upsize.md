---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem --><h1>Upsize an Access database to SQL Server</h1>
<p>To upsize an access database to SQL Server (or Oracle, Postgres etc) there are several steps to perform:</p>
<ul>
<li>Create a new server side database.</li>
<li>Create an ODBC connection on your client that connects to the new database.</li>
<li>Create the Tables and Columns with matching names and equivalent datatypes.</li>
<li>Add any data into the new tables.
</li>
<li>Add indexes, primary keys and default values.</li>
<li>Delete the old Access tables and link to the new server side ones (take a backup first)</li>
<li>Test thoroughly including edits and deletes.</li>
</ul>
<p>There are several tools which can automate some of the steps above.</p>
<ul>
<li>The built-in Access export tool - this can create and populate the server side tables, and is probably the easiest method.</li>
<li>The <a href="http://blogs.msdn.com/b/ssma/archive/2011/01/29/access-to-sql-server-migration-how-to-use-ssma.aspx">SQL Server Migration Assistant for Access</a> (SSMA)</li>
<li>For Oracle upsizing - <a href="http://www.oracle.com/technetwork/database/migration/omwb-getstarted-093461.html">Oracle SQL Developer Migration Workbench</a></li>
</ul>
<p>One pre-requisite for a sucessfull upsize is having compatible Table and Column names, if the database was built using a sensible <a href="syntax-naming.html">naming convention</a>, this won't be a problem. At a minimum it will involve removing any spaces and punctuation from the names. Both Access and SQL Server have a number of 'reserved words' that should not be used for table or column names.</p>
<p>In the SQL upsizing wizard, choose 'Use Declarative Referential Integrity (DRI)', for relationships rather than triggers. Don't allow the wizard to add timestamp columns unless you have a specific plan for using them.</p>
<h2>Data Types</h2>
<p>By default Access Text fields	will be converted to Nvarchar, if you don't require unicode these can be changed to plain Varchar.</p>
<p>Access YES/NO columns will be converted to SQL  	bit or tinyint columns, it is essential that these have a default value<br>
e.g. <span class="code">(0)</span> as Access will not be able to interpret any NULLs.</p>
<p>It is worth checking dates in Access for typos like 214 instead of 2014, as these will not be accepted by SQL server.</p>
<p>Supported date ranges</p>

<p>Access:  Jan 1, 100 AD to Dec 31, 9999 AD (9,899 year range)<br>
SQL Server (datetime)1753 AD to Dec 31, 9999 AD (8,246 year range)<br>
SQL Server (smalldatetime) 1 Jan 1900 to 6 Jun 2079 AD (179 year range)<br>
Oracle: 14712 BC to Dec 31, 9999 AD (24,711 year range)</p>

<blockquote>
<table cols="2">
<caption>Data Types</caption>
<tbody><tr>
<th>MS Access (Jet)</th>
<th>SQL Server</th>
</tr>

<tr>
<td>Binary(size)</td>
<td>Varbinary(size)</td>
</tr>
<tr>
<td>Byte</td>
<td>Tinyint</td>
</tr>
<tr>
<td>Currency</td>
<td>Money</td>
</tr>
<tr>
<td>Date</td>
<td>Datetime</td>
</tr>
<tr>
<td>Decimal</td>
<td>Float</td>
</tr>
<tr>
<td>Double</td>
<td>Float</td>
</tr>
<tr>
<td>GUID</td>
<td>Uniqueidentifier</td>
</tr>
<tr>
<td>Integer</td>
<td>Smallint</td>
</tr>
<tr>
<td>Long Integer</td>
<td>Integer</td>
</tr>
<tr>
<td>LongBinary</td>
<td>Varbinary(max)</td>
</tr>
<tr>
<td>Memo</td>
<td>Nvarchar(max), Varchar(max)*</td>
</tr>
<tr>
<td>Single</td>
<td>Real</td>
</tr>
<tr>
<td>Text(size)</td>
<td>Nvarchar(size), Varchar(size)*</td>
</tr>
<tr>
<td>Yes/No</td>
<td>Bit, Tinyint</td>
</tr>
</tbody></table></blockquote>
<h2>OpenRecordset</h2>
<p>If your VBA code opens any recordsets, you must use the dbSeeChanges option with <a href="openrecordset.html">OpenRecordset</a> when accessing a SQL Server linked table.</p>
<h2>Renaming linked tables</h2>
<p>Rename linked tables to remove the DBO_ prefix, instead of renaming tables manually, create a form with a command button and add this code to the OnClick event:</p>
<pre>Dim strSQL As String
Dim db As Database
Dim rs As Recordset
 
' Select the Linked tables to rename
strSQL = "SELECT Name FROM MSysObjects WHERE (((Left([Name],4))='dbo_') AND (MSysObjects.Type) IN (4,6) );"
' MSysObjects.Type values:
' 1 = Local Table
' 4 = ODBC Linked Table
' 6 = Access Linked Table
 
Set db = CurrentDb()
Set rs = db.OpenRecordset(strSQL)
 
If rs.EOF = False Then
    rs.MoveFirst
    Do Until rs.EOF
        'rename starting at the 5th character
        DoCmd.Rename Mid(rs!Name, 5, 100), acTable, rs!Name
        rs.MoveNext
    Loop
    rs.Close
End If</pre>
<p>Note that the script above, only <i>reads</i> from the MSysObjects table, the rename is done using <a href="rename.html">docmd.rename</a>. <br>
Performing updates on system tables is not supported or recommended.</p>
<p class="quote"><i>“The only meaningful definition of a “generalist” is a specialist who can relate his own small area to the universe of knowledge” ~ Peter Drucker</i></p>
<p><b>Related Links:</b></p>
<p><a href="http://www.ssw.com.au/ssw/upsizingpro/">SSW Upsizing Pro</a> - Commercial tool for automatic upsizing.<br>
<a href="http://support.microsoft.com/kb/286335">Q286335</a> - Access reserved words <br>
<a href="http://msdn.microsoft.com/en-us/library/ms189822.aspx">SQL Server reserved words</a> </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-upsize.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

