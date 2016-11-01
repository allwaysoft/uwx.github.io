---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-PSBreakpoint</h1> 
<p>Disable a breakpoint (or several breakpoints) in the current console, for debugging a .ps1 script. </p>
<pre>Syntax
      Disable-PSBreakpoint [-Id] <i>Int32</i>[]
        [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]
    
      Disable-PSBreakpoint [-Breakpoint] <i>Breakpoint</i>[]
        [-PassThru] [-Confirm] [-WhatIf]  [<i>CommonParameters</i>]

Key
   -Breakpoint <i>Breakpoint</i>[]
        The breakpoints to disable. Enter a variable that contains breakpoint
        objects or a command that gets breakpoint objects, (Get-PSBreakpoint).
        You can also pipe breakpoint objects.

   -Id <i>Int32</i>[]
       Disable breakpoints with the specified breakpoint IDs.
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
<p> Standard <a href="get-alias.html">Aliases</a> for Disable-PSBreakpoint:<span class="code"> <b>dbp</b></span></p>
<p><b>Examples</b></p>
<p>Disable breakpoint ID 0: </p>
<pre>PS C:&gt; disable-psbreakpoint -id 0</pre>
<p>Create a new, disabled breakpoint:</p>
<pre>PS C:&gt; disable-psbreakpoint -breakpoint ($brk = set-psbreakpoint -script c:\myscript.ps1 -line 25)
PS C:&gt; $brk</pre>
<p>Disable all breakpoints in the current console:</p>
<pre>PS C:&gt; get-psbreakpoint | disable-psbreakpoint</pre>
<p class="quote"><i>“The heart is the only broken instrument that works” ~ T. E. Kalem</i></p>
<p><b>Related:</b></p>
<p>  <a href="enable-psbreakpoint.html">EnablePSBreakpoint</a>   -   Enable breakpoints in the current console<br>
<a href="get-psbreakpoint.html">Get-PSBreakpoint</a> - Get the currently set breakpoints.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disable-psbreakpoint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

