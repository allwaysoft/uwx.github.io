---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem -->
<h1> LoggedOn </h1>
<p>Find the User logged on to a physical box </p>
<p class="code">Get-WmiObject -Class Win32_ComputerSystem | Select-object -ExpandProperty UserName</p>
<p>Or an alternative strategy for servers or any machine where multiple users could be logged in at the same time - find the owners of Explorer.exe processes. The Windows desktop is an Explorer.exe process.</p>
<pre>Get-WmiObject -Class Win32_Process -Filter 'Name="explorer.exe"'  |
  ForEach-Object {
    $owner = $_.GetOwner()
    '{0}\{1}' -f  $owner.Domain, $owner.User
  } | 
  Sort-Object -Unique</pre>
<p>To run this against a remote machine, add the <span class="code">Get-WmiObject -computername <i>computer</i></span> option.</p>
<p>Finding Locked Out Accounts:</p>
<p class="code">search-adaccount -u -l | ft name,lastlogondate -auto</p>
<p class="quote"><i>“Sometimes only one person is missing and the whole world seems depopulated“ ~ Alphonse de Lamartine</i></p>
<p><b>Related:</b></p>
<p><a href="get-wmiobject.html">Get-WmiObject</a> - Get WMI class information<br>
<a href="http://social.technet.microsoft.com/wiki/contents/articles/4585.account-locked-out-troubleshooting-eventcombmt.aspx">EventCombMT</a> - Account Locked Out Troubleshooting<br>
<a href="syntax-lastlogon.html">LastLogon</a> - Find when an account last logged in.<br>
<a href="syntax-expiry.html">Password expiry</a> - Reminder email for account passwords about to expire.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

