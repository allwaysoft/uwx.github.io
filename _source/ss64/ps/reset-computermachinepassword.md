---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Reset-ComputerMachinePassword</h1> 
<p>Reset the machine account password for the computer.</p>
<pre>Syntax
      Reset-ComputerMachinePassword [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Server <i>string</i><br>       The name of a domain controller to use when setting the machine account password. <br>       This parameter is optional.
       If you omit this parameter, a domain controller is chosen to service the command.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Reset-ComputerMachinePassword  changes the machine account password that the computers use to authenticate to the domain controllers in the domain. You can use it to reset the password of the local computer.</p>
<p><b>Example</b></p>
<p>Reset the machine password for the local computer using the credentials of the current user:</p>
<p><span class="code">PS C:&gt; Reset-ComputerMachinePassword</span></p>
<p>Reset the machine password of the local computer using the DC64 domain controller:</p>
<p><span class="code">PS C:&gt; Reset-ComputerMachinePassword -server DC64</span></p>
<p>Use <a href="invoke-command.html">Invoke-Command</a> to run a Reset-ComputerMachinePassword command on the Server64 remote computer.</p>
<p><span class="code">PS C:&gt; invoke-command -computername Server64 -scriptblock {reset-computermachinepassword}</span></p>
<p class="quote"><i>“Life is thickly sown with thorns, and I know no other remedy than to pass quickly through them. The longer we dwell on our misfortunes, the greater is their power to harm us” ~ Voltaire</i></p>
<p><b>Related:</b></p>
<p> 
<a href="restart-computer.html">Restart-Computer</a> - Restart the operating system on a computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

