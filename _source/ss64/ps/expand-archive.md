---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Expand-Archive (PowerShell 5+)</h1> 
<p>Extract files from an archive (zipped) file.</p>
<pre>Syntax
      Expand-Archive [<b>-Path</b>] <i>String</i> [-DestinationPath] <i>String</i> [-Force]
            [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Expand-Archive [-DestinationPath] <i>String</i> <b>-LiteralPath</b> <i>String</i> [-Force]
            [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

key
   -DestinationPath <i>String</i>
       The path to the folder in which you want to save the extracted files.

   -LiteralPath <i>String</i>[]
       The path to an archive file..
       Unlike the -Path parameter, the value of -LiteralPath is used exactly as it is typed.
       No characters are interpreted as wildcards. If the path includes escape characters,
       enclose each escape character in single quotation marks, to instruct PowerShell not to
       interpret any characters as escape sequences.

   -Path <i>String</i>[]
       The path to the archive file.

   -Force
       Force the extraction of files from an archive file.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Extract the contents of an archive:</p>
<p><span class="code">C:\PS&gt; Expand-Archive -LiteralPath <b>C:\output\new.Zip</b> -DestinationPath C:\Restored </span></p>
<p>Extract the contents of an archive in the <a href="set-location.html">current</a> folder:</p>
<p><span class="code"> C:\PS&gt; Expand-Archive -Path <b>new.Zip</b> -DestinationPath C:\Restored</span><br>
</p>
<p class="quote"><i>“You go away for a long time and return a different person - you never come all the way back” ~ Paul Theroux</i></p>
<p><b>Related:</b><br>
<br>
<a href="compress-archive.html">Compress-Archive</a> - Create a new archive/zipped file</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="expand-archive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

