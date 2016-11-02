---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Test-ComputerSecureChannel</h1> 
<p>Test and repair the secure channel between the local computer and its domain.</p>
<pre>Syntax
      Test-ComputerSecureChannel [-Repair] [-Server <i>string</i>]
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Repair
       Remove and then rebuild the secure channel established by the
       NetLogon service. Use this parameter to try to restore a connection
       that has failed the test (returned "False".)<br>        <br>       To use this parameter, the current user must be a member of
       the Administrators group on the local computer.<br>        <br>   -Server <i>string
</i>       Use the specified domain controller to run the command.
       If this parameter is omitted, Test-ComputerSecureChannel selects
       a default domain controller for the operation.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Test-ComputerSecureChannel  verifies that the secure channel between the local computer and its domain is
working correctly by checking the status of its trust relationships. If a connection fails, use the -Repair
parameter to try to restore it. <br>
<br>
Test-ComputerSecureChannel returns "True" if the secure channel is working correctly and "False" if it is not. This
result lets you use the cmdlet in conditional statements in functions and scripts. To get more detailed test results, use the <span class="code">-Verbose</span> parameter.<br>
<br>
This cmdlet works much like <a href="../nt/netdom.html">NetDom.exe</a>. Both NetDom and Test-ComputerSecureChannel use the NetLogon service to perform the actions.</p>
<p><b>Example</b></p>
<p>Test the secure channel between the local computer and the domain to which it is joined:</p>
<p><span class="code">PS C:&gt; test-computersecurechannel</span></p>
<p>Use Test-ComputerSecureChannel to test a connection before running a script that requires
the connection:</p>
<p><span class="code">PS C:&gt; if (!(test-computersecurechannel)) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{write-host "Connection failed. Reconnect and retry."}<br>
else { &amp;(.\collectserverdata.ps1) }</span></p>
<p>Use <a href="invoke-command.html">Invoke-Command</a> to run a Reset-ComputerMachinePassword command on the Server64 remote computer.</p>
<p><span class="code">PS C:&gt; invoke-command -computername Server64 -scriptblock {reset-computermachinepassword}</span></p>
<p class="quote"><i>“Life is thickly sown with thorns, and I know no other remedy than to pass quickly through them. The longer we dwell on our misfortunes, the greater is their power to harm us” ~ Voltaire</i></p>
<p><b>Related:</b></p>
<p> 
<a href="restart-computer.html">Restart-Computer</a> - Restart the operating system on a computer<br>
<a href="test-connection.html">Test-Connection</a> - Ping one or more computers</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="test-computersecurechannel.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

