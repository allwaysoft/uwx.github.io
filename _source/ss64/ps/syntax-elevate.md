---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Run with elevated permissions</h1>
<p>Some PowerShell cmdlets and Windows commands such as REG ADD and SUBINACL have to be run from an elevated prompt, there are several ways of doing this.</p>
<p>It is possible to right click Powershell.exe (or it's Start menu shortcut) and run it 'As Admin'.<br>
Shortcuts can be edited to always run as Admin - <span class="code">Properties | Shortcut | Advanced</span> then tick "Run as administrator".</p>
<p>To elevate a script from a (non-elevated) PowerShell command line :</p>
<p class="code">PS C:\&gt; <a href="start-process.html">Start-Process</a> powershell -ArgumentList '-noprofile -file MyScript.ps1' <b>-verb RunAs</b></p>
<p>A set of commands can also be saved in a <a href="../nt/syntax-variables.html">scriptblock variable</a>, and then passed to a new (elevated) PowerShell session:</p>
<pre>Start-Process -FilePath powershell.exe -ArgumentList $code <b>-verb RunAs</b> -WorkingDirectory C:</pre>
<p>To run an entire PowerShell session 'As Admin' from an existing PowerShell (non-elevated) session:</p>
<p class="code">PS&gt; <a href="start-process.html">Start-Process</a> powershell.exe <b>-Verb runAs</b></p>
<p>If you use <a href="invoke-command.html">Invoke-Command</a> to run a script or command on a remote computer, then it will not run elevated even if the local session is.  This is because any prompt for elevation will happen on the remote machine in a non-interactive session and so will fail. </p>
<p>Using <a href="enter-pssession.html">Enter-PSSession</a> to start a whole new session will support elevation if you specify <a href="https://blogs.msdn.microsoft.com/powershell/2008/06/05/credssp-for-second-hop-remoting/">CredSSP</a>, which enables  the delegation of user credentials:</p>
<p class="code">New-PSSession ss64dom.com -Auth CredSSP -cred ss64dom\user64</p>
<h2> Testing for Elevation</h2>
<blockquote>
<p>A function that will return $True if the current session is running elevated or $False if not:</p>
<pre>function isadmin
 {
 # Returns true/false
   ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
 }</pre>
<p>To ensure a script is only run As Admin, add this to the beginning</p>
<pre>If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))
 {    
  <a href="write-output.html">Echo</a> "This script needs to be run As Admin"
  <a href="break.html">Break</a>
 }</pre>
<p>In PowerShell v4.0 the above can be simplified by using a <a href="https://technet.microsoft.com/en-us/library/hh847765.aspx">#Requires</a> statement:<br>
<span class="code">#Requires -RunAsAdministrator</span></p>
</blockquote>
<h2>Scheduled Tasks</h2>
<blockquote>
<p>If a <a href="scheduler.html">scheduled task</a> invokes a  UAC prompt, then the  task may fail to run unattended, to prevent this make sure that you select the 'Run With Highest Privileges' check box, (or run <span class="code"><a href="set-scheduledjoboption.html">Set-ScheduledJobOption</a> -RunElevated</span> )</p>
<p><img src="../nt/elevate.png" width="203" height="94" alt="Elevate Scheduled task"></p>
<p>When a script is run with elevated permissions several aspects of the user environment will change: The <a href="set-location.html">current directory</a>, the current TEMP folder and any mapped drives will be disconnected.</p>
</blockquote>
<h2>Windows Explorer Context Menu</h2>
<blockquote>
<p>To add a "Run as Administrator" context menu for .ps1 files, run this from an elevated PowerShell prompt:</p>
<pre><span class="code">PS C:\&gt; </span>New-Item -Path "Registry::HKEY_CLASSES_ROOT\Microsoft.PowershellScript.1\Shell\runas\command" `
 -Force -Name '' -Value '"c:\windows\system32\windowspowershell\v1.0\powershell.exe" -noexit "%1"'</pre>
</blockquote>
<p class="quote"><i class="quote">“Winners make a habit of manufacturing their own positive expectations in advance  of the event” ~ Brian Tracy</i></p>
<p><b>Related:</b></p>
<p>VBScript: <a href="../vb/syntax-elevate.html">Run with Elevated Permissions</a> <br>
<a href="http://code.kliu.org/misc/elevate/">elevate</a> - Command-Line UAC Elevation Utility</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-elevate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

