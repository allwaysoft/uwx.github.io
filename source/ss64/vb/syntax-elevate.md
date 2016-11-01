---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Run with elevated permissions</h1>
<p>To run a script 'As Admin' (with elevated permissions) using VBscript can be done by simply running <a href="shellexecute.html">ShellExecute</a> and setting the <span class="code">runas</span> flag. This can be used to run an executable, or to run an entire script (batch file or VBScript) with elevated permissions.</p>
<p>Below is a Batch file that will check if it is running elevated, and if not will prompt for elevation by creating and executing a two line VBScript (~ElevateMe.vbs) the VBScript is created on the fly with a couple of Echo statements:</p>
<pre>@Echo Off
Setlocal
:: First check if we are running As Admin/Elevated
FSUTIL dirty query %SystemDrive% &gt;nul
if %errorlevel% EQU 0 goto START

::Create and run a temporary VBScript to elevate this batch file
   Set _batchFile=%~f0
   Set _Args=%*
   :: double up any quotes
   Set _batchFile=""%_batchFile:"=%""
   Set _Args=%_Args:"=""%

   Echo Set UAC = CreateObject^("Shell.Application"^) &gt; "%temp%\~ElevateMe.vbs"
   Echo UAC.ShellExecute "cmd", "/c ""%_batchFile% %_Args%""", "", "runas", 1 &gt;&gt; "%temp%\~ElevateMe.vbs"

   cscript "%temp%\~ElevateMe.vbs" 
   Exit /B

:START
:: set the current directory to the batch file location
cd /d %~dp0
:: Place the code which requires Admin/elevation below
Echo We are now running as admin [%1] [%2]
pause</pre>
<h2>Testing for Elevation</h2>
<p>Testing if the current session is elevated  can be done with the FSUTIL command (via <a href="http://stackoverflow.com/a/21295806/1720814">StackOverflow</a>).</p>
<pre>FSUTIL dirty query %SystemDrive% &gt;nul
If %errorLevel% NEQ 0 (
   Echo Failure, please rerun this script from an elevated command prompt. Exiting...
   Ping 127.0.0.1 3&gt;&amp;1 &gt; nul
   Exit /B 1
) 
Echo Success: this script is running elevated.</pre>
<p>When a script is run with elevated permissions several aspects of the user environment will change: The <a href="../nt/cd.html">current directory</a>, the current TEMP folder and any mapped drives will be disconnected.</p>
<p class="quote"><i>“It is impossible to genuinely elevate yourself by pushing another person lower” - Guy Finley</i></p>
<p><b>Related</b></p>
<p><a href="shellexecute.html">.ShellExecute</a> - Run a script/application in the Windows Shell (elevated)<br>
PowerShell: <a href="../ps/syntax-elevate.html">Run with Elevated Permissions</a><br>
<a href="http://code.kliu.org/misc/elevate/">elevate</a> - Command-Line UAC Elevation Utility<br>
<a href="http://blogs.technet.com/b/elevationpowertoys/">Elevation blog</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-elevate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

