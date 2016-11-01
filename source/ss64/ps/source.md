---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>. (source or dot operator) </h1> 
<p>When you dot source a script (or scriptblock), all variables and functions defined in the script (or scriptblock) will persist in the shell when the script ends.</p>
<pre>Syntax
      . <var>filename</var> [<var>arguments</var>]

Key
   filename    The path and filename of the script to run.

   arguments   Any arguments for the script.</pre>
<p>When a script is  Dot-Sourced in the current <a href="syntax-scopes.html">scope</a>, any      functions, aliases, and variables that the script creates become available     in the current scope. </p>
<p>To dot-source a library script in the <a href="http://blogs.msdn.com/b/powershell/archive/2007/06/19/get-scriptdirectory.aspx">same directory</a> as the currently running script, we can use the <span class="code">$MyInvocation</span> <a href="syntax-automatic-variables.html">Automatic Variable</a> to work out the directory (we can't always assume this will be the current directory): </p>
<p><span class="code">function Get-ScriptDirectory <br>
{<br>
&nbsp;$Invocation = (Get-Variable MyInvocation -Scope 1).Value<br>
&nbsp;Split-Path $Invocation.MyCommand.Path<br>
}<br>
</span>In PowerShell 3 and above this can be simplified to:<span class="code"><br>
&nbsp;. "$PSScriptRoot\scripttorun.ps1" </span></p>
<p>To start <a href="powershell.html">PowerShell</a> and dot source a script:</p>
<p><span class="code">powershell -command ". c:\demo\script.ps1" </span><br>
or<br>
<span class="code">powershell -file c:\demo\script.ps1</span></p>
<p>In contrast, if you use the <a href="call.html">call operator</a> (&amp;) to run a function or script, it is <b>not</b> added to the current scope.</p>
<p><b>Examples</b></p>
<p>Dot sourcing a script:<br>
<span class="code"> PS C:\&gt; . C:\scripts\myscript.ps1<br>
<br>
</span>Dot sourcing a script in the current directory:<span class="code"><br>
PS C:\&gt; . ./script64.ps1</span></p>
<p>Contrast these two snippets of PowerShell using scriptblocks: <span class="code"><br>
PS C:\&gt; $n = 1;&amp;{$n = 2};$n<br>
1 <br>
PS C:\&gt; $n = 1;.{$n = 2};$n<br>
2</span></p>
<p class="quote"><i>#If dogs run free, why not me, 
Across the swamp of time?, 
My mind weaves a symphony, And tapestry of rhyme# ~ Bob Dylan </i></p>
<p><b>Related:</b></p>
<p><a href="call.html">&amp; Call Operator</a> - execute a command, script or function.<br>
<a href="syntax-operators.html">PowerShell Operators</a> - Syntax<br>
<a href="syntax-run.html">Run a PowerShell script</a> - Syntax<br>
<a href="invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="source.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
