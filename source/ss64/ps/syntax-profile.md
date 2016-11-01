---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>$Profile - profile.ps1 </h1>
<p>Configure the PowerShell environment.<br>
The PowerShell $Profile is run automatically when the shell session is started, it can be used to run scripts and set variables. </p>
<p>The <span class="code">$profile </span>automatic variable will show the location of your Profile.ps1 file:<br>
<span class="code">PS &gt; "$Profile"</span></p>
<p><span class="code"></span>To edit the profile with notepad:<span class="code"><br>
</span><span class="code">PS &gt; notepad $Profile</span></p>
<p>To reload the profile into the current session:<span class="code"><br>
</span><span class="code">PS &gt; .$Profile</span></p>
<p>By default, the profile file does not exist, even though PowerShell has a filename for it, the file can be created using <a href="new-item.html">New-Item</a> or notepad.</p>
<p>The search order of commands is Alias &gt; Function &gt; Cmdlet</p>
<p>Functions defined in  $Profile will take precedence over built-in cmdlets with the same name. However to replace an Alias you must first remove the built-in Alias with <span class="code"><a href="remove-item.html">Remove-Item</a></span>. The built-in aliases are 'sticky', unless they are removed from every session (by adding a <span class="code">Remove-Item</span> command to  $Profile) then they will re-appear the next time you start PowerShell. </p>
<p>Below are a few functions you may want to add to your $Profile:</p>
<blockquote>
<p><a href="syntax-cd.html"> 'CD -' function</a> - quickly change directory/location </p>
<p>List all local drives, listing only drives with &gt; 1 MB of free space excludes any unmounted
drives.<br>
<span class="code">function drives{gdr -p FileSystem |where {$_.free -gt 1MB}}</span></p>
<p><a href="http://blogs.msdn.com/powershell/archive/2006/07/01/perserving-command-history-across-sessions.aspx">Perserve Command History Across Sessions</a></p>
<p>Change background color on  all elevated command prompts (from<a href="http://www.ilovepowershell.com/profile-trick-how-to-set-administrator-mode-background-color/"> ilovepowershell.com</a>):</p>
<p class="code">if ($host.UI.RawUI.WindowTitle -match "Administrator")<br>
{$host.UI.RawUI.BackgroundColor = "DarkRed";<br>
$Host.UI.RawUI.ForegroundColor = "White"}</p>
<p>Add the word "Administrator" to the title bar of all elevated command prompts (from<a href="http://www.leastprivilege.com/AdminTitleBarForPowerShell.aspx"> leastprivilege.com</a>):<br>
<span class="code">$id = [System.Security.Principal.WindowsIdentity]::GetCurrent()
$p = New-Object System.Security.Principal.WindowsPrincipal($id)
if ($p.IsInRole([System.Security.Principal.WindowsBuiltInRole]::Administrator))
{$Host.UI.RawUI.WindowTitle = "Administrator: " + $Host.UI.RawUI.WindowTitle}</span></p>

</blockquote>
<p>PowerShell may also be configured for multiple power users, there are 4 locations where you can store a Profile.ps1 file:</p>
<p> 1. "All users" profile "&lt;Installation Directory&gt;\profile.ps1"<br>
2. "All users," host-specific profile "&lt;Installation Directory&gt;\Microsoft.PowerShell_profile.ps1"<br>
3. Current user profile "&lt;My Documents&gt;\WindowsPowerShell\profile.ps1"<br>
4. Current User, host-specific profile"&lt;My Documents&gt;\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"</p>
<p>These are loaded in order 1,2,3,4 it is possible to redefine the same function in the different $profile files.</p>
<p class="quote"><i>“O Marvelous! what new configuration will come next? I am bewildered with multiplicity” ~     William Carlos Williams, American poet (1883-1963)</i></p>
<p><b>Related:</b></p>
<p><a href="http://dotfiles.org/">dotfiles.org</a> - Share startup files<br>
<a href="http://mshforfun.blogspot.com/2006/05/perfect-prompt-for-windows-powershell.html">Custom PowerShell Prompts</a> - PowerShell For Fun </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-profile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

