---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Run a PowerShell script</h1>
<p>There are several ways to run a PowerShell script.</p>
<p>Before running any scripts on a new PowerShell installation, you must first set an appropriate <a href="set-executionpolicy.html">Execution Policy</a>, <br>
e.g. <span class="code">Set-ExecutionPolicy RemoteSigned</span></p>
<p>A PowerShell script is the equivalent of a Windows CMD or MS-DOS batch file, the file should be saved with a .ps1 extension, e.g. <span class="code">MyScript.ps1</span></p>
<h2>Call or Invoke a script to run it</h2>
<blockquote>
<p>The most common (default) way to run a script is by <i><a href="call.html">calling</a> </i>it:</p>
<p class="code"> PS C:\&gt; &amp; "C:\Belfry\My first Script.ps1"</p>
<p> If the path does not contain any spaces, then you can omit the quotes and the '<span class="code">&amp;</span>' operator </p>
<p class="code">PS C:\&gt; C:\Belfry\Myscript.ps1</p>
<p>If the script is in the current directory, you can omit the path but must  instead explicitly indicate the current directory using <span class="code">.\ </span>(or <span class="code">./</span> will also work) </p>
<p class="code">PS C:\&gt; .\Myscript.ps1</p>
<p>When you <i>invoke </i>a script using the syntax above, variables and functions defined in the script will disappear when the script ends.<sup>1</sup></p>
<p> An alternative which allows running a script (or command) on local or remote computers is <a href="invoke-command.html">Invoke-Command</a></p>
<p><span class="code">PS C:\&gt; invoke-command -filepath c:\scripts\test.ps1 -computerName Server64</span></p>
<p><sup>1</sup>unless they are explicitly defined as globals: <span class="code">Function SCOPE:GLOBAL</span> or <span class="code">Filter SCOPE:GLOBAL</span> or <span class="code">Set-Variable -scope "Global"</span></p>
</blockquote>
<h2>Run As Administrator (Elevated)</h2>
<blockquote>
<p>See the <a href="syntax-elevate.html">PowerShell elevation page</a> for ways of running a script or a PowerShell session "As admin"</p>
</blockquote>
<h2>Dot Sourcing</h2>
<blockquote>
<p>When you <i><a href="source.html">dot source</a> </i>a script, all variables and functions defined in the script will persist even when the script ends. </p>
<p>Run a script  by <i>dot-sourcing </i>it:</p>
<p class="code"> PS C:\&gt; . "C:\Belfry\My first Script.ps1"</p>
<p>Dot-sourcing a script in the current directory:</p>
<p class="code"> PS C:\&gt; . .\Myscript.ps1"</p>
</blockquote>
<h2>Run a CMD batch file </h2>
<blockquote>
<p>Run a  batch script from PowerShell:<br>
<span class="code"> PS C:\&gt; ./demo.cmd</span><br>
<br>
If the batch 
script contains any <i>internal</i> commands then it must be run by calling the CMD.exe shell and passing the batch file: <br>
<span class="code">PS C:\&gt; C:\windows\system32\cmd /c c:\batch\demo.cmd</span><br>
Note, this  works for <span class="code">.cmd</span> but not <span class="code">.bat</span> files.</p>
</blockquote>
<h2>Run a VBScript file </h2>
<blockquote>
<p>Run a vb script from PowerShell:<br>
<span class="code"> PS C:\&gt; cscript c:\batch\demo.vbs</span></p>
</blockquote>
<h2>The System Path</h2>
<blockquote>
<p>If you run a script (or even just enter a command) without specifying the fully qualified path name, PowerShell will search for it as follows: </p>
<ol>
<li> Currently defined aliases</li>
<li>Currently defined functions</li>
<li>Commands located in the system <a href="../nt/path.html">path</a>.</li>
</ol>
</blockquote>
<p class="quote"><i>#Yeah,  I'm gonna run to you, cause when the feelin's right I'm gonna stay all night, I'm gonna run to you# ~ Bryan Adams</i></p>
<p><b>Related:</b></p>
<p><a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="invoke-expression.html">Invoke-Expression</a> - Run a PowerShell expression.<br>
<a href="invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file (START)<a href="../nt/syntax-run.html"><br>
</a><a href="call.html">The call operator</a> (&amp;) - Execute a command, script or function<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable and its value<br>
<a href="syntax-functions.html">Functions</a> - Write a named block of code<br>
CMD Shell: 
<a href="../nt/syntax-run.html">Run a script from the CMD shell</a><br>
VBScript: 
<a href="../vb/syntax-run.html">Run a script from VBScript</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-run.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

