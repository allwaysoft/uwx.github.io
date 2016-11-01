---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>UAC (User Account Control) - Disable or Limit popup prompts</h1>
<p>To view or adjust the settings for UAC, type <span class="code">secpol.msc</span> into <a href="run.html">Start-Run</a> to open the <i>Local Security Policy </i>snap-in.</p>
<p> Expand the <i>Local Polices</i>→<i>Security Options</i> folder.</p>
<p> Scroll down to <br>
"User Account Control: Behaviour of the elevation prompt for administrator"</p>
<p>Double click and set to: "<span class="code">Elevate without prompting</span>".</p>
<p> Then <b>Restart</b> the computer.</p>
<blockquote>
<p><img src="uac.jpg" alt="Local security policy" width="755" height="221"></p>
</blockquote>
<p>Alternatively this can be set in the registry (then reboot to apply) <br>
<br>
<a href="regedit.html">Regedit</a> script:</p>
<pre>Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"ConsentPromptBehaviorAdmin"=dword:00000000</pre>
<p> Or with <a href="../ps/index.html">Powershell</a>:
</p><p class="code">PS HKLM:\&gt; <a href="../ps/new-itemproperty.html">New-ItemProperty</a> "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Value 00000000 -PropertyType "DWord" 
</p><p>Setting "Elevate without prompting' as above will not <i>completely </i>disable UAC, it just removes the annoying popup prompts.<br>
To  disable UAC entirely, disable the setting:<br>
<i>User Account Control: Run all administrators in Admin Approval Mode </i><br>
<span class="code">"EnableLUA"=dword:00000000</span><br>
This is not recommended as it will compromise security. </p>
<p class="quote"><i>“The secret of Happiness is Freedom, and the secret of Freedom, Courage” ~ Thucydides</i></p>
<p><b>Related</b>
</p><p><a href="syntax-elevate.html">Elevation</a> - Run with elevated permissions<b><br>
</b>Other <a href="http://technet.microsoft.com/en-us/library/dd835564%28WS.10%29.aspx">UAC Group Policy Settings</a> with Registry Keys.<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

