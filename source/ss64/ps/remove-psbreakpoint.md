---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-PSBreakpoint</h1> 
<p>Delete breakpoints from the current console.</p>
<pre>Syntax
      Remove-PSBreakpoint [-Id] <i>Int32</i>[]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Remove-PSBreakpoint [-Breakpoint] <i>Breakpoint</i>[]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Breakpoint <i>Breakpoint</i>[]
       The breakpoints to delete.
       Enter a variable that contains breakpoint objects or a command that
       gets breakpoint objects, such as a Get-PSBreakpoint command.
       (May be piped)<br>        <br>   -Id Int32[]
       Delete breakpoints with the specified breakpoint IDs.

   -Confirm
       Prompt for confirmation before executing the command.<br>        <br>   -WhatIf
       Describes what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Remove-PSBreakpoint:<span class="code"> rbp</span></p>
<p>A breakpoint is a point in a command or script where execution stops temporarily so that you can examine the instructions.</p>
<p><b>Examples</b></p>
<p>Delete all of the breakpoints in the current console: </p>
<pre>PS C:&gt; get-breakpoint | remove-breakpoint</pre>
<p>Use the Set-PSBreakpoint cmdlet to create a breakpoint on the SS64 variable in the demo.ps1 script. Then,  save the breakpoint object in the $brk variable and use this to delete the new breakpoint:</p>
<pre>PS C:&gt; $brk = set-psbreakpoint -script demo.ps1 -variable SS64<br>PS C:&gt; $brk | remove-psbreakpoint</pre>
<p>Get a breakpoint on the ss64 function in demo.ps1 by piping a breakpoint ID:</p>
<pre>PS C:&gt; $brk = set-psbreakpoint -script demo.ps1 -function ss64<br>PS C:&gt; $brk.Id | get-psbreakpoint
</pre>
<p>Delete the breakpoint with breakpoint ID 5:</p>
<pre>PS C:&gt; remove-psbreakpoint -id 5</pre>
<p>A function to delete all of the breakpoints in the current console. To save the function permanently, add it to your <a href="syntax-profile.html">PowerShell profile</a>:</p>
<pre>PS C:&gt; function del-psb { get-psbreakpoint | remove-psbreakpoint }</pre>
<p class="quote"><i>“Better bend than break” ~ Scottish Proverb</i></p>
<p><b>Related:</b></p>
<p>  <a href="enable-psbreakpoint.html">Enable-PSBreakpoint</a>   -   Enable breakpoints in the current console</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

