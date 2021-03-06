---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PSBreakpoint</h1> 
<p>Get the breakpoints that are set in the current session, for debugging a .ps1 script.</p>
<pre>Syntax
      Get-PSBreakpoint [[-Script] <i>string</i>[]] [<i>CommonParameters</i>]
    
      Get-PSBreakpoint -Command <i>string</i>[] [-Script <i>string</i>[]] [<i>CommonParameters</i>]
    
      Get-PSBreakpoint [-Id] <i>Int32</i>[] [<i>CommonParameters</i>]
    
      Get-PSBreakpoint [-Type] <i>BreakpointType</i>[] [-Script <i>string</i>[]] [<i>CommonParameters</i>]
    
      Get-PSBreakpoint -Variable <i>string</i>[] [-Script <i>string</i>[]]  [<i>CommonParameters</i>]

Key
   -Command <i>string</i>[]
       Get command breakpoints that are set on the specified command names.
       Enter the command names, such as the name of a cmdlet or function.

   -Id <i>Int32</i>[]
       Get the breakpoints with the specified breakpoint IDs.
       Enter the IDs in a comma-separated list. 
       You can pipe breakpoint IDs to Get-PSBreakpoint.

   -Script <i>string</i>[]
        Get only the breakpoints in the specified scripts.
        Enter the  path (optional) and names of one or more script 
        files. The default location is the current directory.
        
    -Type <i>BreakpointType</i>[]
        Get only breakpoints of the specified types.
        Enter one or more types. Valid values are Line, Command, 
        and Variable. You can also pipe breakpoint types to Get-PSBreakpoint.
        
    -Variable <i>string</i>[]
        Get variable breakpoints that are set on the specified variable names. 
        Enter the variable names without dollar signs.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Get-PSBreakpoint:<span class="code"> <b>gbp</b></span></p>
<p>A breakpoint is a point in a command or script where execution stops temporarily so that you can examine the instructions.</p>
<p><b>Examples</b></p>
<p>Get all breakpoints set on all scripts and functions in the current session: </p>
<pre>PS C:&gt; get-psbreakpoint</pre>
<p>Get the breakpoint with breakpoint ID 2:</p>
<pre>PS C:&gt; get-psbreakpoint -Id 2</pre>
<p>Get a breakpoint on the ss64 function in demo.ps1 by piping a breakpoint ID:</p>
<pre>PS C:&gt; $brk = set-psbreakpoint -script demo.ps1 -function ss64<br>PS C:&gt; $brk.Id | get-psbreakpoint
</pre>
<p>Get all breakpoints for the scripts Demo1 and Demo2.ps1:</p>
<pre>PS C:&gt; get-psbreakpoint -script Demo1.ps1, Demo2.ps1
</pre>
<p>Get all breakpoints that are set on Read-Host or Write-Host commands in the Demo1.ps1 file:</p>
<pre>PS C:&gt; get-psbreakpoint -command Read-Host, Write-Host -script Demo1.ps1
</pre>
<p>Get  all the <i>Command </i>breakpoints in Demo1.ps1:</p>
<pre>PS C:&gt; get-psbreakpoint -type Command -script Demo1.ps1</pre>
<p>Get breakpoints that are set on the <span class="code">$var1</span> and <span class="code">$var2</span> variables in the current session.:</p>
<pre>PS C:&gt; get-psbreakpoint -variable var1, var2</pre>
<p>Get all <i>line</i> and <i>variable</i> breakpoints in Demo1.ps1:</p>
<pre>PS C:&gt; get-psbreakpoint -type line, variable -script Demo1.ps1</pre>
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

