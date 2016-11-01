---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>ShellExecute method </h1> 
<p> Run a script or application in the Windows Shell. </p>
<pre>Syntax
      .ShellExecute "<i>application</i>", "<i>parameters</i>", "<i>dir</i>", "<i>verb</i>", <i>window</i>

      .ShellExecute <span class="code">'some program.exe'</span>, <span class="code">'"some parameters with spaces"'</span>, , "runas", 1</pre>
<pre>Key
   <i>application</i>   The file to execute (required)
   <i>parameters</i>    Arguments for the executable
   <i>dir</i>           Working directory
   <i>verb</i>          The operation to execute (runas/open/edit/print)
   <i>window</i>        View mode application window (normal=1, hide=0, 2=Min, 3=max, 4=restore, 5=current, 7=min/inactive, 10=default)</pre>
<p>Note the different  (double <span class="code">"</span> and single <span class="code">'</span> ) quotes that can be used to delimit paths with spaces.</p>
<p>The <span class="code">runas</span> verb is <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb762153(v=vs.85).aspx">undocumented</a> but can be used to elevate permissions. When a script is run with elevated permissions several aspects of the user environment may change: The <a href="../nt/cd.html">current directory</a>, the current TEMP folder and any mapped drives will be disconnected.</p>
<p>runas will fail if you are running in WOW64 (a 32 bit process on 64 bit windows) for example %systemroot%\syswow64\cmd.exe ... </p>
<p>The ShellExecute method is a member of the <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb774138%28v=vs.85%29.aspx">IShellDispatch2</a> object.</p>
<p><b>Examples</b></p>
<p>Run a batch script with <a href="syntax-elevate.html">elevated permissions</a>, flag=runas:<br>
<br>
<span class="code">Set objShell = CreateObject("<a href="shell.html">Shell</a>.Application")<br>
objShell.ShellExecute "<b>E:\demo\batchScript.cmd</b>", "", "", "runas", 1</span></p>
<p>Run a VBScript  with elevated permissions, flag=runas:</p>
<p class="code">Set objShell = CreateObject("Shell.Application")<br>
objShell.ShellExecute "<a href="cscript.html">cscript</a>", "<b>E:\demo\vbscript.vbs</b>", "", "runas", 1</p>
<p class="quote">“If you don't execute your ideas, they die” ~ Roger Von Oech</p>
<p><b>Related:</b></p>
<p><a href="syntax-elevate.html">Run with elevated permissions</a> - Script to run as Admin<br>
<a href="exec.html">.Exec</a> - Execute command, returning an object<br>
<a href="run.html">.Run</a> - Run a command<br>

<a href="http://www.joeware.net/freetools/">joeware.net</a> - CPAU (Create Process As User) like RunAs but with an options to encrypt the password.<br>
Equivalent CMD command: <a href="../nt/shellrunas.html">ShellRunAs</a> - Run a command under a different user account</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shellexecute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

