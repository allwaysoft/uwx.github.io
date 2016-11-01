---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-Module</h1> 
<p>Remove modules from the current session.</p>
<pre>Syntax
      Remove-Module [-ModuleInfo] <i>PSModuleInfo</i>[] [-Force]
         [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Remove-Module [-Name] <i>String</i>[] [-Force]
         [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Force 
       Remove read-only modules. By default, Remove-Module removes only read-write modules.
       The ReadOnly and ReadWrite values are stored in AccessMode property of a module.

   -ModuleInfo <i>PSModuleInfo</i>[]
       Specifies the module objects to remove.
       Enter a variable that contains a module object (PSModuleInfo) or a command
       that gets a module object, such as a Get-Module command. You can also pipe
       module objects to Remove-Module.

   -Name <i>String</i>[]
       Specifies the names of modules to remove.  Wildcards are permitted.
       You can also pipe name strings to Remove-Module.

   -Confirm
       Prompt for confirmation before running the cmdlet.

   -WhatIf
       Show what would happen if the cmdlet runs. The cmdlet is not run.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If the module includes an assembly (.dll), all members that are implemented by the assembly are removed, but the      assembly is not unloaded.          </p>
<p>Remove-Module does not uninstall the module or delete it from the computer. It affects only the current       PowerShell session.</p>
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-Module:<span class="code"> <b>rmo</b></span></p>
<p><b>Examples</b></p>
<p>Remove the BitsTransfer module from the current session:</p>
<p><span class="code">PS C:\&gt; Remove-Module -Name BitsTransfer</span> <br>
  <br>
Remove all modules from the current session:</p>
<p class="code">PS C:\&gt; Get-Module | Remove-Module</p>
<p>Remove the BitsTransfer and PSDiagnostics modules from the current session:</p>
<p><span class="code">PS C:\&gt; "FileTransfer", "PSDiagnostics" | Remove-Module</span></p>
<p class="quote"><i>“If your project doesn't work, look for the part that you didn't think was important”</i><i> ~ Arthur Bloch</i></p>
<p><b>Related:</b></p>
<p><a href="get-module.html">Get-Module</a> -   Get the modules imported to the session<br>
<a href="import-module.html">Import-Module</a> -   Add a module to the session <br>
<a href="new-module.html">New-Module</a> -   Create a new dynamic module (only in memory) <br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-module.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

