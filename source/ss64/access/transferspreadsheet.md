---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.TransferSpreadsheet</h1>
<p> Import or export data to/from a spreadsheet file.</p>
<pre>Syntax
      DoCmd.TransferSpreadsheet(<i><a href="acdatatransfertype.html">TransferType</a>, <a href="acspreadsheettype.html">SpreadsheetType</a>,
                     TableName, FileName, HasFieldNames, Range, UseOA</i>)

Key
   <i>TransferType</i>    The type of transfer to make. <a href="acdatatransfertype.html">AcDataTransferType</a> 
                   default = acImport.

   <i>SpreadsheetType</i> The type of spreadsheet to import from, export to, or link to.
                   <a href="acspreadsheettype.html">AcSpreadSheetType</a>

   <i>TableName</i>      The name of the Access table.
                  For exporting, this can be a select query.

   <i>FileName</i>       The file name and path of the spreadsheet.

   <i>HasFieldNames</i>  Use True (–1) to use the first row of the
                  spreadsheet as field names when importing or linking.
                  default= False (0) treat the first row as normal data.

                  When exporting, field names are always inserted into
                  the first row of the spreadsheet.

   <i>Range</i>          A valid range of cells or the name of a range
                  in the spreadsheet. This argument is valid only for importing.
                  default=entire spreadsheet.

   UseOA          This argument is not supported..</pre>
<p>With a linked Excel spreadsheet, you can view and edit the spreadsheet data with Access while still allowing access to the data from Excel.</p>
<p>When Access data is exported to a spreadsheet, the field names are always inserted into the first row.</p>
<p><b>Examples</b></p>
<p class="code">DoCmd.TransferSpreadsheet acExport, acSpreadsheetTypeExcel9, _<br>
"T_Employees", "F:\Demo\Employees.xls", True</p>
<p class="code">DoCmd.TransferSpreadsheet acExport, acSpreadsheetTypeExcel12Xml, _<br>
"T_Employees", "F:\Demo\Employees.xlsx", True</p>
<p>or from  PowerShell:<br>
<br>
<span class="code">$acExport = 1<br>
$acSpreadsheetTypeExcel9 = 8<br>
<br>
$db = New-Object -Comobject Access.Application<br>
$db.OpenCurrentDatabase("F:\Demo\Test.mdb")<br>
$db.DoCmd.TransferSpreadsheet($acExport, $acSpreadsheetTypeExcel9, "T_Sales", `<br>
"C:\work\Sales.xls", $True)<br>
$db.Quit()</span></p>
<p class="quote"><i>“Traditionally, most of Australia's imports come from overseas” ~ Keppel Enderbery</i></p>
<p><b>Related:</b><br>
<br>
<a href="http://www.accessmvp.com/KDSnell/EXCEL_Import.htm">Importing Excel workbooks</a> - MVPS Examples<br>
<a href="transferdatabase.html">TransferDatabase</a> - Import or export data to/from another database.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

