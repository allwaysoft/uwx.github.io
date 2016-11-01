---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enable-PSBreakpoint</h1> 
<p>Disable a breakpoint (or several breakpoints) in the current console, for debugging a .ps1 script. </p>
<pre>Syntax
      Enable-PSBreakpoint [-Id] <i>Int32</i>[]
        [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]
    
      Enable-PSBreakpoint [-Breakpoint] <i>Breakpoint</i>[]
        [-PassThru] [-Confirm] [-WhatIf]  [<i>CommonParameters</i>]

Key
   -Breakpoint <i>Breakpoint</i>[]
        The breakpoints to enable. Enter a variable that contains breakpoint
        objects or a command that gets breakpoint objects, (Get-PSBreakpoint).
        You can also pipe breakpoint objects.

   -Id <i>Int32</i>[]
       Enable breakpoints with the specified breakpoint IDs.
       Enter the IDs or a variable that contains the IDs. 
       You cannot pipe IDs to Disable-PSBreakpoint.

   -PassThru
       Return an object representing the enabled breakpoints.
       By default, this cmdlet does not generate any output.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Enable-PSBreakpoint:<span class="code"> <b>ebp</b></span></p>
<p><b>Examples</b></p>
<p>Enable breakpoints id 0 and id 5: </p>
<pre>PS C:&gt; enable-psbreakpoint -id 0,5
</pre>
<p>Enable breakpoints 1 and 3:</p>
<pre>PS C:&gt; $bpoint = get-psbreakpoint -id 1, 3<br>PS C:&gt; enable-psbreakpoint -breakpoint $bpoint</pre>
<p>Create, disable and then enable a breakpoint  on the "ss64" variable in the script demo.ps1:</p>
<pre>PS C:&gt; $brk = set-psbreakpoint -script demo.ps1 -variable ss64
PS C:&gt; $brk | disable-psbreakpoint -passthru
...
PS C:&gt; $brk | enable-psbreakpoint -passthru</pre>
<p>Enable all breakpoints in the current console:</p>
<pre>PS C:&gt; get-psbreakpoint | enable-psbreakpoint</pre>
<p class="quote"><i>“The heart is the only broken instrument that works” ~ T. E. Kalem</i></p>
<p><b>Related:</b></p>
<p>  <a href="disable-psbreakpoint.html">Disable-PSBreakpoint</a> - Disable a breakpoint in the current console<br>
<a href="get-psbreakpoint.html">Get-PSBreakpoint</a> - Get the currently set breakpoints</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable-psbreakpoint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
