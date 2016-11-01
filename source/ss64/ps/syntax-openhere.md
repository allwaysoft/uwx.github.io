---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Open PowerShell Window Here</h1>
<p>To open a PowerShell window from any folder in Windows Explorer use the registry script below</p>
<pre>Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\Directory\shell\PSOpenHere]
@="PowerShell Here"
[HKEY_CLASSES_ROOT\Directory\shell\PSOpenHere\command]
@="C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\powershell.exe -NoExit -Command Set-Location -LiteralPath '%L'"</pre>
<p>Alternatively this can also be setup directly in PowerShell with the script below,  by default there is no HKEY_CLASSES_ROOT alias in PowerShell so we have to directly address the same key under HKLM:\SOFTWARE\Classes. </p>
<pre># OpenHere.ps1
# Write registry keys to add a 'PowerShell Here' option to the Windows Explorer right click menu.
   
# Create (or overwrite) the key and populate the value to appear in the menu.
   
$pspath = "$PSHome\powershell.exe -Noexit -Nologo"
New-Item HKLM:\SOFTWARE\Classes\Directory\shell\PSOpenHere -force 
Set-Item HKLM:\SOFTWARE\Classes\Directory\shell\PSOpenHere "PowerShell Here"
New-item HKLM:\SOFTWARE\Classes\Directory\shell\PSOpenHere\command -force
Set-item HKLM:\SOFTWARE\Classes\Directory\shell\PSOpenHere\command "$pspath -Command Set-Location '%L'"

  # An alternative to start PowerShell and set the console title to 'PowerShell'
  # [Microsoft.Win32.Registry]::SetValue("HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell\PSOpenHere\command","","$pspath -Command Set-Location '%L' ;`$Host.UI.RawUI.WindowTitle = 'PowerShell'",[Microsoft.Win32.RegistryValueKind]::ExpandString)
</pre>
<p>  The command <a href="set-location.html">Set-Location</a> '%L' is used to set the current directory.</p>
<p> Scott Hanselman also has a <a href="http://www.hanselman.com/blog/IntroducingPowerShellPromptHere.aspx">PowerShell Prompt Here .inf</a> installer that will do the same thing</p>
<p class="quote"><i>“Let yourself be open and life will be easier. A spoon of salt in a glass of water makes the water undrinkable. A spoon of salt in a lake is almost unnoticed” ~ Buddha</i></p>
<p><b>Related:</b></p>
<p><a href="set-location.html">Set-Location</a> - Set the current working location.<br>
<a href="http://www.hanselman.com/blog/IntroducingPowerShellPromptHere.aspx">PowerShell Prompt Here</a> - PowerToy from Scott Hanselman<br>
<a href="http://www.burgaud.com/open-command-window-here/">Open Command Window</a> - Various Shell options, André Burgaud<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-openhere.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


