---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Export-Console</h1> 
<p>Export the   current console configuration to a file so that you can reuse or share it. The console configuration saved will include snap-ins and console  properties. The file can then be specified when PowerShell is <a href="powershell.html">opened</a>  making the snap-in available immediately.</p>
<pre>Syntax
      Export-Console [[-path] <i>string</i>] [-Force] [-NoClobber]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key:
   -Path <i>string
</i>       The path to the console file (*.psc1).

       If you type only a file name, Export-Console creates a file (with the ".psc1" extension) 
       in the current directory.

       This parameter is required unless you have opened PowerShell with the PSConsoleFile parameter
       or exported a console file during the current session.
       It is also required when you use the NoClobber parameter to prevent the current console file
       from being overwritten.

       If you omit -path, Export-Console will overwrite the console file that was used 
       most recently in this session. The path to the most recently used console file is stored in
       the $ConsoleFileName automatic variable. For more information, see about_Automatic_Variables.

   -force
       Overwrite the data in a console file without warning, even if the file
       has the read-only attribute. The read-only attribute is changed and is not
       reset when the command completes.

    -noClobber
       Do not overwrite the contents of an existing file.
       The default is to overwrite without warning.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.
       
   -confirm
       Prompt for confirmation before executing the command.
 
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  If you type only a filename as the Path, PowerShell will create a (.psc1) file in the current directory.</p>
<p>If Export-Console is run repeatedly in the same session, then  -Path may be omitted, in this case Export-Console will overwrite the last console file written to.</p>
<p><b>Examples</b></p>
<p>Export the current console configuration:</p>
<p><span class="code">PS C:&gt;export-console -path $pshome\Consoles\ConsoleS1.psc1</span><br>
  <br>
  The $pshome variable holds the path to the  PowerShell home (installation) folder.</p>
<p>Start a Windows PowerShell session with a set of stored console settings:</p>
<p class="code">PS C:&gt;powershell.exe -PsConsoleFile $pshome\Consoles\ConsoleS1.psc1</p>
<p class="quote"><i>"Love all. Trust a few. Do wrong to none" ~ William Shakespeare</i></p>
<p><b>Related:</b></p>
<p>  <a href="add-pssnapin.html">add-PSSnapIn</a> - Add snap-ins to the console<br>
<a href="get-pssnapin.html">get-PSSnapin</a> - List PowerShell snap-ins on this computer <br>
<a href="remove-pssnapin.html">Remove-PSSnapin</a> - Remove PowerShell snap-ins from the console</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="export-console.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

