---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-PSSessionConfiguration</h1> 
<p>Change the properties of a registered session configuration.</p>
<pre>Syntax
      Set-PSSessionConfiguration [-AssemblyName] <i>string</i> [-ConfigurationTypeName] <i>string</i>
         [-Name] <i>string</i> [-ApplicationBase <i>string</i>] [-Force]
            [-MaximumReceivedDataSizePerCommandMB <i>double</i>] [-MaximumReceivedObjectSizeMB <i>double</i>]
               [-NoServiceRestart] [-SecurityDescriptorSDDL <i>string</i>]
                  [-ShowSecurityDescriptorUI] [-StartupScript <i>string</i>]
                     [-ThreadApartmentState {STA | MTA | Unknown}]
                        [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}]
                           [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -ApplicationBase <i>string</i>
       Change the path to the assembly file (*.dll) that is specified in the value of
       the AssemblyName parameter.
        
   -AssemblyName <i>string</i>
       Specify a different assembly file for the configuration.
       Enter the path (optional) and file name of an assembly (.dll) file that
       defines the configuration type. 
        
       If you enter only the name, you can enter the path in the value of the ApplicationBase parameter.
        
   -ConfigurationTypeName <i>string</i>
       A different configuration type for the configuration.
       The type that you specify must implement the
       System.Management.Automation.Remoting.PSSessionConfiguration class.
        
       If "$null" or an empty string is entered, the DefaultRemotePowerShellConfiguration class
       is used for the session configuration.
        
   -Force
       Suppress all user prompts, and restart the WinRM service without prompting.
       Restarting the service makes the configuration change effective.
        
       To prevent a restart and suppress the restart prompt, use the -NoServiceRestart parameter.
        
   -MaximumReceivedDataSizePerCommandMB <i>double</i>
       Change the limit on the amount of data that can be sent to this computer in
       any single remote command. Enter the data size in megabytes (MB). The default is 50 MB.
        
       If a data size limit is defined in the configuration type that is specified in the
        -ConfigurationTypeName parameter, the limit in the configuration type is used and the
       value of this parameter is ignored.
        
   -MaximumReceivedObjectSizeMB <i>double</i>
       Change the limits on the amount of data that can be sent to this computer in any single
       object. Enter the data size in megabytes (MB). The default is 10 MB.
        
       If an object size limit is defined in the configuration type that is specified in the
        -ConfigurationTypeName parameter, the limit in the configuration type is used and the
       value of this parameter is ignored.
        
   -Name <i>string</i>
       The name of the session configuration to be changed. 
       This parameter cannot be used to change the name of the session configuration.
        
   -NoServiceRestart
       Do not restart the WinRM service, and suppress the prompt to restart the service.
        
       By default, Set-PSSessionConfiguration will prompt to restart the WinRM service, 
       this makes the new session configuration effective.
        
       To restart the WinRM service without prompting, use the -Force parameter.
       To restart the WinRM service manually, use the <a href="restart-service.html">Restart-Service</a> cmdlet.
        
   -SecurityDescriptorSDDL <i>string</i>
       Specify a different Security Descriptor Definition Language (SDDL) string for the configuration. 
        
       This string determines the permissions that are required to use the new session configuration.
       To use a session configuration in a session, users must have at least
       "Execute(Invoke)" permission for the configuration.
        
       To use the default security descriptor for the configuration, enter an empty
       string ("") or a value of $null. The default is the root SDDL in the WSMan: drive.
        
       If the security descriptor is complex, consider using the ShowSecurityDescriptorUI
       parameter instead of this one. You cannot use both parameters in the same command.
        
   -ShowSecurityDescriptorUI
       Display a property sheet that helps you to create a new SDDL for the session configuration.
       The property sheet appears after you enter the Set-PSSessionConfiguration command and
       then restart the WinRM service.
        
       When setting the permissions to the configuration, remember that users must have
       at least "Execute(Invoke)" permission to use the session configuration in a session.
        
       You cannot use the SecurityDescriptorSDDL parameter and this parameter in the same command.
        
   -StartupScript <i>string</i>
       Add or change the startup script for the configuration.
       Enter the fully qualified path to a PowerShell script. The specified script runs in
       the new session that uses the session configuration.  
        
       To delete a startup script from a session configuration, enter an empty string ("") or a value of $null.
        
       You can use a startup script to further configure the user's session.
       If the script generates an error (even a non-terminating error), the session is not
       created and the user's New-PSSession command fails.
        
   -ThreadApartmentState <i>ApartmentState</i>
       Change the apartment state setting for the threads in the session.
       Valid values are STA, MTA and <u>Unknown</u>.
        
   -ThreadOptions <i>PSThreadOptions</i>
       Change the thread options setting in the configuration.
       This setting defines how threads are created and used when a command is executed
       in the session. Valid values are Default, ReuseThread, <u>UseCurrentThread</u>, and
       UseNewThread. 

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> <b>Examples</b></p>
<p>Change the thread apartment state in the MaintenanceShell configuration to STA: </p>
<pre>PS C:&gt; Set-pssessionconfiguration -name MaintenanceShell -threadApartmentState STA</pre>
<p>Create and then change a session configuration:</p>
<pre>PS C:&gt; Register-pssessionconfiguration -name AdminShell -assemblyName c:\shells\AdminShell.dll -configurationType AdminClass
PS C:&gt; set-pssessionconfiguration -name AdminShell -startupScript AdminConfig.ps1<br>PS C:&gt; set-pssessionconfiguration -name AdminShell -startupScript $null</pre>
<p class="quote"><i>"All of Western logic is based upon the law of
contradiction -- if two things contradict, then
at least one of them is false. But Islamic logic
is dualistic; two things can contradict each
other and both are true" ~ Bill Warner</i></p>
<p><b>Related:</b></p>
<p>   <a href="enable-pssessionconfiguration.html">Enable-PSSessionConfiguration</a> - Enable PS session configuration <br>
<a href="register-pssessionconfiguration.html">Register-PSSessionConfiguration</a> - Create and register a new PS session configuration</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-pssessionconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

