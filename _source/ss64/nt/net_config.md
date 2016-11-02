---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to manage network resources as follows: <br>
<br>
<b>Managing Network configuration<a id="network"></a></b><br>
<br>To add a computer to the domain<br>
<span class="code">NET COMPUTER \\<i>ComputerName</i> /ADD</span><br>
This command is only available from the Server and is best run from the Primary Domain Controller (PDC)<br>
<br>
To remove a computer from the domain<br>
<span class="code">NET COMPUTER \\<i>ComputerName</i> /DEL</span><br>
This command is only available from the Server and is best run from the Primary Domain Controller (PDC)<br>
<br>
Change the idle session timeout (default = 15 minutes)<br>
<span class="code">NET CONFIG SERVER /Autodisconnect:<i>mm</i></span><br>
<br>
To disable idle timeouts altogether<br>
<span class="code">NET CONFIG SERVER /Autodisconnect:-1</span><br>
Note this can reduce overall performance - see related KB articles below.<br>
<br>
To hide a machine from Network Neighbourhood, by not sending announcements to domain browsers you will  reduce NETBIOS network traffic, (if still enabled.)<br>
<span class="code">NET CONFIG SERVER /hidden:yes</span><br>
Before using the /hidden option see <a href="https://support.microsoft.com/kb/128167">Q128167</a> 
</p><p>Change the comment displayed in My Computer (detail view)<br>
<span class="code">NET CONFIG SERVER /Srvcomment:"YourText"</span><br>
Before using the /<span class="code">Srvcomment</span> option see <a href="https://support.microsoft.com/kb/128167">Q128167</a><br>
<br>
Display or change the Workstation Service communication device settings<br>
<span class="code">NET CONFIG WORKSTATION /?</span><br>
<br>
Display statistics, (these commands work on both servers and workstations)<br>
<span class="code">NET STATISTICS WORKSTATION</span><br>
This can be abbreviated to <span class="code">NET STATS WORK</span><br>
<br>
<span class="code">NET STATISTICS SERVER</span><br>
This can be abbreviated to <span class="code">NET STATS SVR</span> and includes information on system uptime (statistics since..)<br>
<br>
<b>Related:</b><br>
<br>
<a href="mode.html">MODE</a> - Configure a system device<br>
<a href="sc.html">SC</a> - Service Control<br>
<a href="https://support.microsoft.com/kb/555737">Q555737</a> - How to find system uptime.<br>
<a href="https://support.microsoft.com/kb/138365">Q138365</a> - Autodisconnect
(Red cross)<br>
<a href="https://support.microsoft.com/kb/305355">Q305355</a> - Drive disconnected,
and a red "X" appears  <br>
Equivalent bash command (Linux): <a href="../bash/uname.html">uname</a> - Print system information</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

