---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>&amp;</h1> 
<p>The call <a href="syntax-operators.html">operator</a> (&amp;) allows you to execute a command, script or function. </p>
<p>Many times you can  execute a command by just typing its name, but this will only run if the command is in the environment path. Also if the command (or the path) contains a space then this will fail. Surrounding a command with quotes will make PowerShell treat it as a string, so in addition to quotes, use the &amp; call operator to force PowerShell to treat the string as a command to be executed. </p>
<pre>Syntax
      <b>&amp;</b> "[<i>path</i>] <i>command"</i> [<i>arguments</i>]

Key:
    <i>command</i>   An executable filename (.exe), script or function.

   <i>arguments</i>  The call operator will only handle a single command.
              Any arguments may follow the called command.

              If you are calling a non-PowerShell command/utility then the command 
              and any arguments should only be surrounded in quotes if needed 
              due to spaces/long filenames:

              &amp; "C:\batch\someutil.exe" test 123 "long path to\some file.txt" </pre>
<p>One consequence of the <a href="http://rkeithhill.wordpress.com/2007/11/24/effective-powershell-item-10-understanding-powershell-parsing-modes/">rules</a> for expression parsing  is that if you want to execute an EXE or script whose name starts with a number you have to quote the name and use the call operator.</p>
<h2>Precedence of commands:</h2>
<blockquote>
<pre> Alias &gt; Function &gt; Filter &gt; Cmdlet &gt; Application &gt; ExternalScript &gt; Script
   Highest priority .................................... Lowest priority </pre>
<p>If you need to run a specific type of command which may not be the highest priority use <a href="get-command.html">Get-Command</a>. For example if you have an external command called Ping and a function also called ping, normally the function will be run as it has higher priority, <span class="code">Get-Command -commandType Application Ping</span> will return the external application instead.</p>
</blockquote>
<h2>Script blocks<a id="scriptblocks"></a></h2>
<blockquote>
<p>Several commands, statements or expressions (a script block) can be stored in a variable: <span class="code">$myVar = { <i>Scriptblock</i> } </span><br>
Then execute the script using <span class="code">&amp;</span> <br>
<span class="code">PS C:\&gt; &amp; $myVar<br>
</span>or even without the variable<span class="code">: <br>
PS C:\&gt; &amp; {<i>Scriptblock</i>}<br>
</span><br>
This usage (calling a script block) is similar to using <a href="invoke-expression.html">Invoke-Expression</a> to run a set of commands but has a key difference in that the <span class="code">&amp;</span> call operator will create an additional <a href="syntax-scopes.html">scope</a>, while Invoke-Expression will not. </p>
</blockquote>
<p>In PowerShell 1.0 and 2.0, commands that start with a number e.g. <span class="code">7z.exe</span> will only be executed if you use the command invocation operator <span class="code">&amp;</span></p>
<h2>EchoArgs</h2>
<blockquote>
<p>EchoArgs is a simple utility that spits out the arguments it receives. This is very useful for testing, just replace the program name in your script with EchoArgs.exe to see which parameters are being passed.<br>
EchoArgs is part of the <a href="../links/pslinks.html">PowerShell Community Extensions</a>, but you can download a copy of <a href="EchoArgs.exe">EchoArgs.exe</a> right here.</p>
</blockquote>
<h2>Dot-Sourcing</h2>
<blockquote>
<p>Invoking a command (either directly or with the call operator) will create a child scope that will be thrown away when the command exits. If the command/script changes a global variable those changes will be lost when the scope ends. <br>
To avoid this and preserve any changes made to global variables you can '<a href="source.html">dot</a>' the script which will execute the script in the current <a href="syntax-scopes.html">scope</a>.<br>
<span class="code">PS C:\&gt; <b>.</b> C:\scripts\myscript.ps1<br>
</span><span class="code">PS C:\&gt; <b>.</b> ./script64.ps1</span></p>
</blockquote>
<p><b>Examples</b></p>
<pre>PS C:\&gt; <b>&amp; </b>"C:\Program files\mycommand.exe"

PS C:\&gt; $prog = "C:\Program files\mycommand.exe"
PS C:\&gt; <b>&amp; </b>$prog

PS C:\&gt; $myPing = <a href="get-command.html">Get-Command</a> -commandType Application Ping.exe
PS C:\&gt; <b>&amp; </b>$myPing

PS C:\&gt; $i = 2
PS C:\&gt; $scriptblock = { $i=5; echo $i }
PS C:\&gt; <b>&amp;</b> $scriptblock                    # Displays 5
PS C:\&gt; $i                                # Displays 2

PS C:\&gt; $textblock = ' $i=5; echo $i '
PS C:\&gt; invoke-expression $textblock      # Displays 5
PS C:\&gt; $i                                # Displays 5</pre>

<p><i class="quote">#You went away, And I wonder where you will stay, My little runaway, Run, run, run, run, runaway# ~ Dell Shannon</i></p>
<p><b>Related:</b></p>
<p><a href="get-command.html">Get-Command</a> - Retrieve basic information about a command.<br>
<a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="invoke-expression.html">Invoke-Expression</a> - Run a PowerShell expression.<br>
<a href="invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file (START)<br>
<a href="start-process.html">Start-Process</a> -  Start one or more processes, optionally as a specific user.<br>
<span class="code"><a href="stop-parsing.html">--%</a></span> - Stop parsing input as PowerShell commands.<br>
<a href="source.html">. (source)</a> - Run a command script in the current shell (persist variables and functions)<br>
<a href="syntax-operators.html">PowerShell Operators</a> - SubExpressions Syntax<br>
<a href="syntax-run.html">Run a PowerShell script</a> - Syntax<br>
<a href="https://rkeithhill.wordpress.com/2007/11/24/effective-powershell-item-10-understanding-powershell-parsing-modes/">Keith Hill's blog</a> - Command parsing mode vs Expression parsing mode.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="call.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

