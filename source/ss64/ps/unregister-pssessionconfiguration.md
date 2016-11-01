---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Unregister-PSSessionConfiguration</h1> 
<p>Delete registered session configurations from the computer.<br>
This is an advanced cmdlet for system administrators to manage custom session configurations for their users.</p>
<pre>Syntax
      Unregister-PSSessionConfiguration [-Name] <i>string</i> 
         [-Force] [-NoServiceRestart]
            [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Name
       The names of session configurations to delete.
       Enter one or more configuration names. Wildcards are permitted.
       This parameter is required.

   -force
       Suppress all user prompts, and restarts the WinRM service without prompting.
       Restarting the service makes the configuration change effective.
     
       To prevent a restart and suppress the restart prompt, use -NoServiceRestart

   -NoServiceRestart
       Do not restart the WinRM service, and suppress the default restart prompt.
       Until WinRM is restarted, users can still use the unregistered session configuration,
       even though Get-PSSessionConfiguration does not find it.
        
       To restart the WinRM service manually, use <a href="restart-service.html">Restart-Service</a>.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> If you accidentally delete the default Microsoft.PowerShell or Microsoft.PowerShell32 session configurations, use  <a href="enable-pssessionconfiguration.html">Enable-PSRemoting</a> to restore them.</p>
<p><b>Examples</b></p>
<p>Delete  the MaintenanceShell session configuration from the computer, suppress user messages and restart the WinRM service: </p>
<pre>PS C:&gt; unregister-pssessionconfiguration -name MaintenanceShell -force</pre>
<p>Create a session on the local computer that uses the Maintenance
Shell configuration, this will fail if  the MaintenanceShell configuration has been deleted:</p>
<pre>PS C:&gt; new-pssession -configurationName MaintenanceShell
</pre>
<p>Delete all session configurations on the computer:</p>
<pre>PS C:&gt; unregister-pssessionconfiguration -name *</pre>
<p class="quote"><i>“Success is a lousy teacher. It seduces smart people into thinking they can't lose”  ~ Bill Gates</i></p>
<p><b>Related:</b></p>
<p><a href="get-pssessionconfiguration.html">Get-PSSessionConfiguration</a> - Get the registered PS session configuration<br> 
<a href="register-pssessionconfiguration.html">Register-PSSessionConfiguration</a> - Create and register a new PS session configuration</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unregister-pssessionconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

