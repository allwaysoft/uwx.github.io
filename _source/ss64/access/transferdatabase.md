---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.TransferDatabase</h1>
<p> Import or export data to/from another database.</p>
<pre>Syntax
      DoCmd.TransferDatabase(<i>TransferType, DatabaseType, DatabaseName,
                             ObjectType, Source, Destination,
                             StructureOnly, StoreLogin</i>)

Key
   <i>TransferType</i>   The type of transfer to make. <a href="acdatatransfertype.html">AcDataTransferType</a> 
                  default = acImport.

   <i>DatabaseType</i>   The type of Database to import from, export to, or link to:
                  Microsoft Access (default), Jet 2.x, Jet 3.x, dBase III, dBase IV,
                  dBase 5.0, Paradox 3.x, Paradox 4.x, Paradox 5.x, Paradox 7.x,
                  ODBC Database, WSS

   <i>DatabaseName</i>   The full name, including the path, of the other database.

   <i>ObjectType</i>     The type of object to import or export <a href="acobjecttype.html">AcObjectType</a>.

   <i>Source</i>         The name of the object whose data to import, export, or link.

   <i>Destination</i>    The name of the imported, exported, or linked object
                  in the destination database.

   <i>StructureOnly</i>  Use True (-1) to import or export only the structure of
                  a database table. Use <u>False</u> (0) to import or export the
                  structure of the table and its data.

   <i>StoreLogin</i>     Use True to store the login identification (ID) and password
                  for an ODBC database in the connection string for a linked
                  table from the database.
                  Use <u>False</u> to prevent storage of the login ID and password. </pre>
<p>Use TransferDatabase to import or export data between the current Access database and another database. </p>
<p>An alternative for Access databases is to link table(s). With a linked table, you have access to the table's data while the table itself remains in the other database.</p>
<p>You can import and export tables and SELECT queries between Access and other types of databases.  You can import and export any Access database object (Forms, Reports etc) if both databases are Access databases.</p>
<p>If you import a table from another Access database that's a linked table, the link is imported, not the table itself.</p>
<p><b>Example</b></p>
<p>'Import a report<br>
<span class="code"> DoCmd.TransferDatabase acImport, "Microsoft Access","C:\Demo\Demo.mdb", _<br>
acReport, "rptBookings", "rptBookingsJuly"</span></p>
<p class="quote"><i>“Traditionally, most of Australia's imports come from overseas” ~ Keppel Enderbery</i></p>
<p><b>Related:</b></p>
<p><a href="transfersqldatabase.html">TransferSQLDatabase</a> - Copy an entire SQL Server database.<br>
<a href="transferspreadsheet.html">TransferSpreadsheet</a> - Import or export data to/from a spreadsheet file.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="transferdatabase.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

