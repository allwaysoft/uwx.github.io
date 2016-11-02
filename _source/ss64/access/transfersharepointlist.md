---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.TransferSharePointList</h1>
<p> Import  or link data from a SharePoint Foundation site.</p>
<pre>Syntax
      DoCmd.TransferSharePointList(<i>TransferType, SiteAddress, ListID, ViewID, TableName, GetLookupDisplayValues</i>)

Key
   <i>TransferType</i>  The type of transfer to make. <a href="acsharepointlisttransfertype.html">AcSharePointListTransferType</a>

   <i>SiteAddress</i>   The full path of the SharePoint site.

   <i>ListID</i>        The name or GUID of the list to be transferred.

   <i>ViewID</i>        The GUID of the view for the list you want to use.
                 Leave this argument blank to transfer all rows and columns in the list.

   <i>TableName</i>     The name you want displayed for the table or linked table in Access.

   <i>GetLookupDisplayValues
 </i>                Whether to transfer display values for Lookup fields instead of the ID used to perform the lookup. </pre>
<p>A GUID is a unique hexadecimal identifier for a list or a view. A GUID must be entered in the following format, where each "F" is a hexadecimal number (0 through 9 or A through F).    <span class="code">{FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF}</span></p>
<p>If you specify a nonexistent list or view, no error occurs, and no data is transferred. </p>
<p>In SharePoint: View | 'Modify this View' will reveal the list and view GUIDs in the browser's address bar </p>
<p>The HTML encoding must be reversed to use the GUID with TransferSharePointList</p>
<blockquote>
<p>{ (left brace) is represented by   %7B <br>
- (hyphen) is represented by %2D <br>
} (right brace)  is represented by %7D <br>
</p>
</blockquote>
<p class="quote"><i>“Traditionally, most of Australia's imports come from overseas” ~ Keppel Enderbery</i></p>
<p><b>Related:</b></p>
<p><a href="transfersqldatabase.html">TransferSQLDatabase</a> - Copy an entire SQL Server database.<br>
<a href="transferspreadsheet.html">TransferSpreadsheet</a> - Import or export data to/from a spreadsheet file.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="transfersharepointlist.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

