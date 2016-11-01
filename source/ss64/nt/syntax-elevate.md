---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Run with elevated permissions </h1>
<blockquote>
<p>The CMD shell, <a href="start.html">START</a> and <a href="runas.html">RUNAS</a> commands have no built-in options to elevate or run commands 'As Admin'</p>
<p> It is possible to right click CMD.exe (or it's Start menu shortcut) and run it As Admin.<br>
Shortcuts can be edited to always run as Admin - <span class="code">Properties | Shortcut | Advanced</span> then tick "Run as administrator".</p>
<p>To elevate from the command line will require running either <a href="../vb/syntax-elevate.html">VBScript</a> or <a href="../ps/syntax-elevate.html">PowerShell</a>, this does not have to involve completely rewriting existing scripts,  you can use a couple of lines of either VBScript or PowerShell to launch an elevated CMD.exe and that will run a batch file elevated.</p>
<p>Another approach is to use a third party utility that will elevate permissions.</p>
</blockquote>
<h2>Testing for Elevation</h2>
<blockquote>
<p>Testing if the current session is elevated  can be done with the FSUTIL command (via <a href="http://stackoverflow.com/a/21295806/1720814">StackOverflow</a>) or SFC. <br>
Note that you don't even have to pass a drive letter to <a href="fsutil.html">FSUTIL</a>, it will  set an errorlevel without reading any drive information.</p>
<pre>fsutil dirty query &gt;nul
If %errorLevel% NEQ 0 (
   Echo Failure, please rerun this script from an elevated command prompt. Exiting...
   Ping 127.0.0.1 3&gt;&amp;1 &gt; nul
   Exit /B 1
) 
Echo Success: this script is running elevated.</pre>
<p>When a script is run with elevated permissions several aspects of the user environment will change: The <a href="cd.html">current directory</a>, the current TEMP folder and any mapped drives will be disconnected.</p>
</blockquote>
<h2>Run without Elevation</h2>
<blockquote>
<p>In some cases you may wish to run an application without elevation, this will restrict what the application can do.</p>
<p>The undocumented <a href="syntax-variables.html#undocumented">environment</a> variable <span class="code">__COMPAT_LAYER</span> can be used to lower  the ExecutionLevel to <span class="code">RunAsInvoker</span></p>
<p class="code">@Echo Off<br>
SETLOCAL<br>
Set __COMPAT_LAYER=RunAsInvoker <br>
regedit.exe</p>
<p>The example above will run <a href="regedit.html">REGEDIT</a> using the user's native permissions,   attempting to modify any protected area of the registry (such as HKLM) within this session will produce an error.</p></blockquote>
<h2>Scheduled Tasks</h2>
<blockquote>
<p>If a scheduled task invokes a  UAC prompt, then the  task will fail to run unattended, to prevent this make sure to select the 'Run With Highest Privileges' check box:</p>
<p><img src="elevate.png" width="203" height="94" alt="Elevate Scheduled task"></p>
</blockquote>
<p class="quote"><i>“A man in public life expects to be sneered at – it is the fault of his elevated situation, and not of himself” ~ Charles Dickens</i></p>
<p><b>Related</b>
</p><p><a href="syntax-uac.html">UAC</a> (User Account Control) - Disable or Limit popup prompts<br>
PowerShell: <a href="../ps/syntax-elevate.html">Run with Elevated Permissions</a><br>
VBScript: <a href="../vb/syntax-elevate.html">Run with Elevated Permissions</a><br>
<a href="http://ss64.org/viewtopic.php?id=1491">SS64 Forum thread</a> on UAC detection.<br>
<a href="http://code.kliu.org/misc/elevate/">elevate</a> - Command-Line UAC Elevation Utility<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-elevate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

