---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>PowerShell Prompt</h1>
<p>The default PowerShell prompt displays the current working directory.</p>
<p>To display the prompt definition:<br>
<span class="code">(Get-Command prompt).definition</span></p>
<p>The prompt function can be changed by simply creating a function called 'prompt' this can be just for the current session, or if <a href="syntax-profile.html">saved in your profile</a> will apply to all future sessions.</p>
<p>A simple prompt showing the current location:</p>
<p class="code">function prompt {     'PS ' + $(get-location) + '&gt; ' }</p>
<p>or using the <a href="syntax-automatic-variables.html">automatic variable</a> $pwd</p>
<p class="code">function prompt {     'PS ' + $pwd + '&gt; ' }</p>
<p>Display only the current folder instead of the full path (via <a href="http://social.technet.microsoft.com/Forums/windowsserver/en-US/4fb9f6ab-f23b-4a9c-9355-8a778c4a8de4/how-to-make-the-path-shorter-in-the-prompt?forum=winserverpowershell">Larry Weiss</a>)<br>
</p>
<p><span class="code">function prompt {     <br>
</span><span class="code">'PS ' + ($pwd -split '\\')[0]+' '+$(($pwd -split '\\')[-1] -join '\') + '&gt; '<br>
}</span></p>
<p>Display a different prompt when logged in as an Administrator, note this calculates the Administrator membership once (in the PowerShell profile) rather than every time the prompt() function is run:</p>
<p><span class="code">$Global:Admin=''<br> 
$CurrentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent() <br>
$principal = new-object System.Security.principal.windowsprincipal($CurrentUser)<br>
if ($principal.IsInRole("Administrators")) { $Admin='ADMIN ' }</span></p>
<p><span class="code">Function prompt { $Admin + "PS $(get-location)&gt;  " }</span></p>
<h2> Window Title</h2>
<p>The Window Title can also be modified as part of the prompt definition. By default this is the username followed by "Windows PowerShell"</p>
<p class="code">$host.ui.rawui.WindowTitle = "String you want to show on the title bar"</p>
<p>Display the current location in the title bar:</p>
<p class="code">$host.ui.rawui.WindowTitle = "PS $pwd"</p>
<p>To display the current Host settings including WindowTitle: <br>
$ 
<span class="code">(Get-Host).UI.RawUI</span></p>
<p class="quote"><i>“When my mother gets a prompt 'Do you want to download this?' she's going to say yes. It's disingenuous for Microsoft to give you all of these tools with which to hang yourself, and when you do, then say it's your fault” ~ </i>Bruce Schneier</p>
<p><b>Related:</b></p>
<p> <a href="syntax-functions.html">PowerShell Functions</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-prompt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

