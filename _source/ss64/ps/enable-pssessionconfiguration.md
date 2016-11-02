---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enable-PSSessionConfiguration</h1> 
<p>Enable session configurations on the local computer.</p>
<p>To allow all users of the computer to use remoting, use <span class="code"><a href="enable-psremoting.html">Enable-PSRemoting</a></span>. 
This is an advanced cmdlet designed for use by system administrators to manage custom session configurations for their users.</p>
<pre>Syntax
      Enable-PSSessionConfiguration  [[-Name] <i>String</i>[]]
        [-Force] [-SecurityDescriptorSddl <i>String</i>] [-SkipNetworkProfileCheck]
           [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Name
       The names of session configurations to enable.
       Enter one or more configuration names. Wildcards are permitted.
       You can also pipe a string containing a configuration name or a session configuration object.

   -force
       Suppress all user prompts.
       By default, you are prompted to confirm each operation.

   -SecurityDescriptorSddl
       Replace the security descriptor on the session configuration with the specified security
       descriptor. If you omit this parameter, Enable-PSSessionConfiguration just deletes the
       "deny all" item from the security descriptor.

   -SkipNetworkProfileCheck
       Enable the session configuration when the computer is on a public network.
       Enables a firewall rule for public networks that allows remote access  only from computers in
       the same local subnet. By default, Enable-PSSessionConfiguration fails on a public network.
       This parameter is designed for client versions of Windows. (PowerShell 3.0+)

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> To run this cmdlet, requires starting PowerShell in elevated mode "Run as administrator"</p>
<p><span class="code">Enable-PSSessionConfiguration</span> removes the "Deny_All" setting from the security descriptor of the affected session      configurations, turns on the listener that accepts requests on any IP address, and restarts the WinRM service.      </p>
<p>Beginning in  PowerShell 3.0, <span class="code">Enable-PSSessionConfiguration</span> also sets the value of the Enabled property of      the session configuration (WSMan:\&lt;computer&gt;\PlugIn\&lt;SessionConfigurationName&gt;\Enabled) to "True". However,       it does not remove or change the "Network_Deny_All" (AccessMode=Local) security      descriptor setting that allows only users of the local computer to use to the session configuration.</p>
<p> <b>Examples</b></p>
<p>Re-enable the default PowerShell  session configuration on the computer:<br>
<span class="code">PS C:&gt; Enable-PSSessionConfiguration</span></p>
<p>Re-enable the MaintenanceShell and AdminShell session configurations on the computer:<br>
<span class="code">PS C:&gt; Enable-PSSessionConfiguration -name MaintenanceShell, AdminShell</span><br>
<br>
Re-enable all session configurations on the computer. <br>
The two commands are equivalent, so you can use either one:<br>
<span class="code">PS C:\&gt; Enable-PSSessionConfiguration -name *<br>
PS C:\&gt; Get-PSSessionConfiguration | Enable-PSSessionConfiguration</span></p>
<p class="quote"><i>“Absence diminishes mediocre passions and increases great ones, as the wind blows out candles and fans fires” ~ La Rochefoucauld</i></p>
<p><b>Related:</b></p>
<p>  <a href="disable-pssessionconfiguration.html">Disable-PSSessionConfiguration</a> - Deny access to PS session configuration<a href="get-pssessionconfiguration.html"><br>
Get-PSSessionConfiguration</a> - Get the registered PS session configuration<br>
<a href="enable-psremoting.html">Enable-PSRemoting</a> - Allow the computer to receive remote commands</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable-pssessionconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

