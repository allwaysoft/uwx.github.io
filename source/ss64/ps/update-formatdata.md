---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Update-FormatData</h1> 
<p>Update the formatting data in the current session.</p>
<pre>Syntax
      Update-FormatData [[-appendPath] <i>string</i>[]]
         [-prependPath <i>string</i>[]]
            [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AppendPath <i>string</i>[]
       Add the specified formatting files to the session.

       Path to additional .ps1xml format files to be loaded. 
       These files will be processed in the order they are 
       specified and <b>after</b> the built-in files are loaded.

   -PrependPath <i>string</i>[]
       Add the specified formatting files to the session.

       Path to additional .ps1xml format files to be loaded.
       These files will be processed in the order they are 
       specified and <b>before</b> the built-in files are loaded.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Update-FormatData  reloads the formatting data from formatting files into the current session. This cmdlet lets you update the formatting data without restarting PowerShell.<br>
<br>
Without parameters, Update-FormatData will reload the formatting files.<br>
<br>
Formatting files are text files in XML format with the <span class="code">format.ps1xml</span> file name extension. The formatting data in the files defines the display of Microsoft .NET Framework objects in the session. <br>
<br>
When  PowerShell starts, it loads the format data from the formatting files in the PowerShell installation directory ($pshome) into the session. Use Update-FormatData to reload the formatting data into the current session without restarting PowerShell.</p>
<p><b>Examples</b></p>
<p>Update the shell format configuration  from the built-in files:</p>
<p><span class="code">PS C:\&gt; update-formatdata</span><br>
  <br>
  Update the shell format configuration from the built-in files plus two additional files:</p>
<p class="code">PS C:\&gt; update-typedata -prependpath RedFormat.format.Ps1xml,GreyFormat.format.Ps1xml</p>
<p class="quote"><i>“Clothes and manners do not make the man; but, when he is made, they greatly improve his appearance” ~ Henry Ward Beecher</i></p>
<p><b>Related:</b><br>
  <br>
<a href="update-typedata.html">Update-Typedata</a> - Update the types.mshxml file in the Microsoft Shell</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="update-formatdata.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

