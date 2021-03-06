---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Autoexec commands</h1> 
<p>To run a command as soon as the <b>command prompt</b> is opened 
-<br>
<br>
HKLM\Software\Microsoft\Command Processor\AutoRun <br>
HKCU\Software\Microsoft\Command Processor\AutoRun<br>
<br>
To run a command <b>as soon as a user logs in</b> - <br>
<br>
The STARTUP folder (Start Menu)<br>
HKLM\Software\Microsoft\Windows\CurrentVersion\Run<br>
HKCU\Software\Microsoft\Windows\CurrentVersion\Run<br>
HKCU\Software\Microsoft\Windows NT\CurrentVersion\Windows\Run<br>
<br>
To run a command <b>as soon as the machine powers up</b>, (like AUTOEXEC.BAT 
in MS-DOS), use the Windows Task Scheduler - choosing the  option: 
</p><blockquote>
<p>Run a task:<br>
When my computer starts (before a user logs on)</p>
</blockquote>
<p><b>Autoexec.bat file</b>
</p><p>The autoexec.bat file was an MS-DOS feature. Under Windows there is a still a degree of backwards compatibility - if the file  (C:\autoexec.bat) exists, any SET statements within it will be parsed at boot time. <br>
Variables set in this way are not available to gui programs - they will be visible from the CMD prompt but don’t appear in the control panel. All other commands  in autoexec.bat will be ignored.
This behaviour is to allow old DOS applications to install correctly.
</p><h2>Scripts running at Windows startup </h2>
<p>To see exactly what is running (or running slowly) at windows startup/login, set the following registry key: 
</p><p class="code">[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\policies\system] <br>
"verbosestatus"=dword:00000001</p>
<h2>AutoRun</h2>
<p>In Windows 7/2008 R2, autorun events are (mostly) restricted to drives of type DRIVE_CDROM. The default behaviour is to invoke AutoPlay. The <span class="code">NoAutoRun</span> registry  entry can be used to disables the AutoPlay and/or AutoRun feature on individual drives. This can be set in the registry under  HKCU and/or   HKLM. (If both are set then HKLM will take priority.) </p>
<p>The <span class="code">NoDriveTypeAutoRun</span>  registry entry disables or enables the AutoRun feature on all drives of the <i>type</i> specified. It can be set in the registry under  HKCU and/or   HKLM. (If both are set then HKLM will take priority.) Values: <span class="code">0xFF</span>=Disable AutoRun on all types of drive, <span class="code">0x91</span>=Disable AutoRun on network drives, <span class="code">0x95</span>=Disable AutoRun on removable + network drives.</p>
<p>The <span class="code">NoDriveAutoRun</span> registry  entry disables or enables the AutoRun feature on individual <i>drives</i>. It can be set in the registry under  HKCU and/or   HKLM. (If both are set then HKLM will take priority.)
</p><p>In all cases the registry keys are set  under:<br>
<span class="code">\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer</span>
</p><p>The registry key <span class="code">HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2</span>  contains cached information about every removable device seen so far. This cache can bypass  the registry settings above which can leave a machine vulnerable. See <a href="https://support.microsoft.com/kb/967715">Q967715</a> for patches that address this issue. Alternatively the iniFileMapping method described below will  disable AutoRun completely.
</p><p>To effectively disable AutoRun in all versions of Microsoft Windows, import the following registry value (source: US-Cert <a href="http://www.us-cert.gov/cas/techalerts/TA09-020A.html">Alert TA09-020A</a>)  this applies to any autorun.inf in any location and on any drive:
</p><p class="code"> REGEDIT4<br>
  [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\IniFileMapping\Autorun.inf]<br>
@="@SYS:DoesNotExist"</p>
<p><i class="quote">“The real danger is not that machines will begin to think like men, but that men will begin to think like machines” ~ Sydney J. Harris</i>
</p><p><b>Related:</b></p><p><a href="sc.html">SC</a> - Service Control<br>
<a href="set.html">SET</a> - Display, set, or remove Windows  environment 
variables<br>
<a href="https://support.microsoft.com/kb/967715">Q967715</a> - How to disable the Autorun functionality in Windows<br>
<a href="https://support.microsoft.com/kb/137890">Q137890</a> - SRVANY - create a User-Defined Service<br>
<a href="https://support.microsoft.com/kb/243486">Q243486</a> - AutoExNT Run a Batch File before Logging on (Windows 2000)
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-autoexec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
