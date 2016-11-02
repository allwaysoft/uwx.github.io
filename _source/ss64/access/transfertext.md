---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.TransferText</h1>
<p> Import or export data to/from a text file (Delimited, fixed width or HTML).</p>
<pre>Syntax
      DoCmd.TransferText(<i>TransferType, SpecificationName, TableName,
                            FileName, HasFieldNames, HTMLTableName, CodePage</i>)

Key
<i>   TransferType</i>    The type of transfer to make. <a href="actexttransfertype.html">AcTextTransferType</a>

  <i>SpecificationName</i> The name of an import or export specification
                   previously created and saved in the database.
                   For a fixed-width text file, either specify an
                   argument or use a schema.ini file, stored in the
                   same folder as the imported, linked, or exported
                   text file.
        (To create a schema file, use the text import/export wizard.)

                   For delimited text files and Word mail merge files,
                   you can leave this argument blank to select the
                   default import/export specifications.

   <i>TableName</i>       The full pathname, of the text file to import from,
                   export to, or link to.

   <i>FileName</i>        The full pathname of the file to output to.

   <i>HasFieldNames</i>   Use True (-1) to use the first row of the text file
                   as field names when importing, exporting, or linking.
                   Use <u>False</u> (0) to treat the first row of the text file
                   as normal data.
                   This argument is ignored for Word mail merge data files,
                   which must always contain the field names in the first row.<i>

   HTMLTableName</i>   The name of the table or list in the HTML file to
                   import or link. (string)
                   This argument is ignored unless the TransferType argument
                   is set to acImportHTML or acLinkHTML.
                   If left blank, the first table or list in the HTML file
                   is imported or linked.
                   The name of the table or list in the HTML file is
                   determined by the text specified by the &lt;CAPTION&gt; tag,
                   If there's no &lt;CAPTION&gt; tag, the name is determined by the
                   text specified by the &lt;TITLE&gt; tag. If more than one table
                   or list has the same name, Access distinguishes them by
                   adding a number to the end of each table or list name;
                   for example, Employees1 and Employees2.

   <i>CodePage</i>        A Long value indicating the character set of the code page.</pre>
<p>Use TransferText to import or export text between the current Access database or Access project (.adp) and a text file. You can also link the data in a text file to the current Access database.</p>
<p><b>Examples</b></p>
<p><span class="code"></span>'Output the T_Patients table as a delimited text file <span class="code"><br>
DoCmd.TransferText acExportDelim, "Standard Output", _ <br>
"T_Patients", "C:\demo\patients.txt"</span></p>
<p class="quote"><i>“An Asian can't help but love China and take pride in it. China doesn't export tanks and men. It exports dignity and respect” ~ Norodom Sihanouk</i></p>
<p><b>Related:</b></p>
<p><a href="outputto.html">OutputTo</a> - Export to a Text/CSV/Spreadsheet file.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

