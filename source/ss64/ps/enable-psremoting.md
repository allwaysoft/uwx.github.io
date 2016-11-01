---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enable-PSRemoting</h1> 
<p> Configure the computer to receive remote commands. Run PowerShell commands on remote computers.</p>
<pre>Syntax
      Enable-PSRemoting [-Force] [-SkipNetworkProfileCheck]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key:
   -Force
       Suppress all user prompts. By default, you are prompted to confirm each operation.

   -SkipNetworkProfileCheck
       Enable remoting on client versions of Windows when the computer is on a public network.
       This parameter enables a firewall rule for public networks that allows remote access only from
       computers in the same local subnet.
       This parameter has no effect on server versions of Windows, which, by default, have a
       local subnet firewall rule for public networks. If the local subnet firewall rule is disabled on
       a server version of Windows, Enable-PSRemoting re-enables it, regardless of the value of this parameter.
       To remove the local subnet restriction and enable remote access from all locations on public networks,
       use the  Set-NetFirewallRule cmdlet in the NetSecurity module.  (PowerShell 3.0+)

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Enable-PSRemoting configures a computer to receive  PowerShell remote commands sent with  WS-Management technology.</p>
<p>To run this cmdlet, start PowerShell with the "<a href="syntax-elevate.html">Run as administrator</a>" option.</p>
<p>PS Remoting only needs to be enabled once on each computer that will <i>receive </i>commands. <br>
Computers that only <i>send</i> commands do not need to have PS Remoting enabled; because the configuration activates listeners (and starts the WinRM <a href="../nt/syntax-services.html">service</a>), it is prudent to run it only where needed.</p>
<p>To run a command on the remote system, use <a href="invoke-command.html">Invoke-Command</a> or <a href="enter-pssession.html">Enter-PSSession</a> for multiple commands.</p>
<p>On systems that have both  PowerShell 3.0 and the PowerShell 2.0 engine, do not use      PowerShell 2.0 to run the Enable-PSRemoting or Disable-PSRemoting cmdlets.</p>
<p> If the computers aren’t on a domain, you will also need to setup trustedhosts for the Workgroup:<br>
<span class="code">Set-Item wsman:\localhost\client\trustedhosts *<br>
</span>or to trust specific machines:<span class="code"><br>
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "<i>workstation64,server5</i>"<br>
Get-Item WSMan:\localhost\Client\TrustedHosts</span></p>
<p><b>Examples</b></p>
<p>Configure the local computer to receive remote commands:</p>
<p><span class="code">PS C:\&gt; Enable-PSRemoting</span> </p>
<p>Configure the computer to receive remote commands &amp; suppress user prompts:</p>
<p><span class="code">PS C:\&gt; Enable-PSRemoting -Force</span></p>
<p>Configure the remote computer workstation64 to receive remote commands, via psexec. If you are running this from an account which is NOT a domain administrator, then specify the username/password of an account with admin rights to the remote machine:</p>
<pre>PS C:\&gt; <a href="../nt/psexec.html">psexec</a> \\workstation64 -u adminUser64 -p pa$$w0rd -h -d powershell.exe "enable-psremoting -force"
</pre>
<p>Test that the computer computer64 is setup to receive remote commands:</p>
<p class="code">PS C:\&gt; Test-WsMan workstation64</p>
<p class="quote"><i>“He who lies hid in remote places is a law unto himself” ~ Publilius Syrus</i></p><p><b>Related:</b></p>
<p><a href="disable-psremoting.html">Disable-PSRemoting</a> - Prevent remote users from running commands on the local computer.<br>
<a href="test-wsman.html">Test-WSMan</a> - Test if a computer is setup to receive remote commands via the  WinRM service.<br>
<a href="invoke-command.html">Invoke-Command</a> - Run commands on local and remote computers.<br>
<a href="../nt/winrm.html">WINRM</a> - Windows Remote Management </p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable-psremoting.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

