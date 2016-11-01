---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-Csv</h1> 
<p>Export a PowerShell object to  a comma-separated values (CSV) file.</p>
<pre>Syntax
      Export-CSV [[-Delimiter] <i>char</i>] [-Path] <i>string</i> -InputObject <i>psobject</i>
        [-Encoding <i>string</i>] [-Force] [-NoClobber] [-NoTypeInformation]
           [-Confirm] [-WhatIf] [<i>CommonParameters</i>] 

      Export-CSV [-UseCulture] [-Path] <i>string</i> -InputObject <i>psobject</i> 
         [-Encoding <i>string</i>] [-Force] [-NoClobber] [-NoTypeInformation]
           [-Confirm] [-WhatIf] [<i>CommonParameters</i>] 

Key:
   -Delimiter <i>char</i>
       A delimiter to separate the property values.
       The default is a comma (,). Enter a character, such as a colon (:). 
       To specify a semicolon (;), enclose it in quotation marks.

   -Encoding string
       The encoding for the exported CSV file.
       Valid values are: Unicode, UTF7, UTF8, ASCII, UTF32, 
       BigEndian unicode, Default, and OEM. The default is ASCII.

   -Force
       Overwrite the file specified in path without prompting.

   -InputObject <i>psobject</i>
       The objects to export as CSV strings.
       Enter a variable that contains the objects or type a command or
       expression that gets the objects. You can also pipe objects to Export-CSV.

   -NoClobber 
       Do not overwrite (replace the contents) of an existing file.
       By default, Export-CSV will overwrite any existing file without warning.

   -NoTypeInformation
       Omit the type information from the CSV file.
       By default, the first line of the CSV file contains "#TYPE " 
       followed by the fully-qualified name of the type of the .NET Framework object.

   -Path <i>string</i>
       The path to the CSV output file. (required)

   -UseCulture
       Use the list separator for the current culture as the item delimiter.
       The default is a comma (,).

       This is useful in scripts that are being distributed to users worldwide.
       To find the list separator for a culture, use the following command:

         (<a href="get-culture.html">Get-Culture</a>).TextInfo.ListSeparator.
        
   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
       
   -confirm
       Prompt for confirmation before executing the command.
 
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Export-CSV:<span class="code"> <b>epcsv</b></span></p>
<p>To suppress the header type information, use the -notype parameter.</p>
<p><b>Examples</b></p>
<p>Select a few properties from the wmiprvse process and export them to a CSV format file:</p>
<p class="code">PS C:&gt; get-process wmiprvse | select-object basePriority,ID,SessionID,WorkingSet | export-csv -path data.csv</p>
<p>Export objects representing the processes on the computer to  Processes.csv (comma separated):</p>
<p class="code">PS C:&gt; get-process | export-csv E:\processes.csv </p>
<p>Export objects representing the processes on the computer to Processes.csv (semicolon separated):</p>
<p class="code">PS C:&gt; get-process | export-csv E:\processes.csv -Delimiter ";"</p>
<p>Export objects representing the processes on the computer and use <span class="code">-NoTypeInformation</span> to suppress the type information in the output file:</p>
<p class="code">PS C:&gt; get-process | export-csv E:\processes.csv -NoTypeInformation</p>
<p class="quote"><i>“Try not to become a man of success but rather to become a man of value” ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p> <a href="import-csv.html">import-csv</a> - Take values from a CSV list and send objects down the pipeline.<br>
<a href="export-clixml.html">export-clixml</a> - Produce a clixml representation of PowerShell objects<br>
<a href="import-clixml.html">import-clixml</a> - Import a clixml file and rebuild the PS object<br>
<a href="convertto-html.html">convertTo-Html</a> - Convert the input into an HTML table</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-csv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
