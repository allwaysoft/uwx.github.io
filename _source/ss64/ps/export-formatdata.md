---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-FormatData</h1> 
<p>Save formatting data from the current session to a  file.</p>
<pre>Syntax
      Export-FormatData [-Force] [-IncludeScriptBlock] [-InputObject <i>ExtendedTypeDefinition</i>[]]
         [-NoClobber] [-Path <i>string</i>] [<i>CommonParameters</i>] 

Key:
   -Force
       Overwrite an existing output file, even if the file has the read-only attribute.

   -IncludeScriptBlock
       Include script blocks in the format data exported.
       Because script blocks contain code and can be used maliciously, they are not exported by default.

   -InputObject <i>ExtendedTypeDefinition</i>[]
       The format data objects to be exported.
       Enter a variable that contains the objects or a command that gets the objects,
       such as a Get-FormatData command.
       Objects can also be piped from Get-FormatData to Export-FormatData.

   -NoClobber
       Prevent the cmdlet from overwriting existing files.
       By default, Export-FormatData overwrites files without warning unless
       the file has the read-only attribute.

       To overwrite read-only files, use -Force.

   -Path <i>string</i>
       A location for the output file.
       Enter a path (optional) and filename with a <span class="code">format</span>.ps1xml file extension.
       The default path is the current directory.

       Export-FormatData will overwrite any existing file without warning unless
       the file has the read-only attribute.

       To overwrite read-only files, use -Force.
       To prevent files from being overwritten, use -NoClobber.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Export all of the format data in the session to the SS64.format.ps1xml file:</p>
<p class="code">PS C:&gt; get-formatdata -typename * | export-formatdata -path SS64.format.ps1xml -IncludeScriptBlock</p>
<p>Export the format data for the HelpInfoShort type to the Help.format.ps1xml file:</p>
<p class="code">PS C:&gt; $fdat = get-formatdata -typename helpinfoshort<br>
PS C:&gt; export-formatdata -inputObject $fdat -path E:\help.format.ps1xml -IncludeScriptBlock</p>
<p class="quote"><i>“Successful people are successful because they form the habits of doing those things that failures don't like to do” ~ Albert Gray</i></p>
<p><b>Related:</b></p>
<p><a href="get-formatdata.html">Get-FormatData</a> - Get the formatting data in the current session</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-formatdata.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

