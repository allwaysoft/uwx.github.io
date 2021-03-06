---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Start-DscConfiguration</h1> 
<p>Apply Desired State configuration to nodes. (PowerShell 4.0+)</p>
<pre>Syntax
      Start-DscConfiguration [[-ComputerName] <i>String</i>[]] [-Path] <i>String</i>
         [-Credential <pscredential>] [-Force] [-JobName <string>] [-ThrottleLimit <i>Int32</i>]
            [-Wait] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]
    
      Start-DscConfiguration [-Path] <i>String</i> [-Force] [-JobName <i>String</i>]
         [-ThrottleLimit <int32>] <b>-CimSession</b> <i>CimSession</i>[]
            [-Wait] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -CimSession <i>CimSession</i>[]
       Run the cmdlet in a remote session or on a remote computer.
       Enter a computer name or a session object, such as the output of a New-CimSession or
       Get-CimSession cmdlet. The default is the current session on the local computer.
        
   -ComputerName <i>String</i>[]
       Specify an array of computer names.
       The cmdlet publishes and applies the configuration in the location specified by the -Path parameter to
       these computers.
        
   -Credential <i>PSCredential</i>
       A user name and password, as a PSCredential object, for the target computer.
       To obtain a PSCredential object, use <a href="get-credential.html">Get-Credential</a>.
        
   -Force 
       Indicates that the cmdlet pushes configuration to computers.
       Some computers pull configuration data. If you do not specify this parameter and if the computer pulls
       its configuration, the configuration fails.
        
   -JobName <i>String</i>
       Specifies a friendly name for a job.
       If you specify this parameter, the cmdlet runs as a job, and it returns a Job object.
       By default, PowerShell assigns the name Job<i>N</i> where <i>N</i> is an integer.
       If you specify -Wait, do not specify -JobName.
        
   -Path <i>String</i>
       The file path of a folder that contains configuration settings files.
       The cmdlet publishes and applies this configuration to computers specified by -ComputerName.
        
   -ThrottleLimit <i>Int32</i>
       The maximum number of concurrent operations that can be established to run the cmdlet.
       If this parameter is omitted or a value of 0 is entered, then PowerShell calculates an optimum throttle
       limit for the cmdlet based on the number of CIM cmdlets that are running on the computer.
       The throttle limit applies only to the current cmdlet, not to the session or to the computer.

   -Wait
       Block the console until it completes all configuration tasks.
       If you specify this parameter, do not specify the JobName parameter.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</int32></string></pscredential></pre>
<p>Start-DscConfiguration  applies configuration to nodes. Specify which computers you want to apply      configuration to by specifying computer names or by using Common Information Model (CIM) sessions.          </p>
<p>By default, this cmdlet creates a <a href="start-job.html">job</a> and returns a Job object. </p>
<p> To use this cmdlet interactively, specify the -Wait parameter.          <br>
Specify the -Verbose parameter to see details of what the cmdlet does when it applies configuration settings.</p>
<p><b>Examples</b></p>
<p>Apply the configuration settings from C:\SS64\Configurations\ to  every computer that has      settings in that folder,returning Job objects for each target node:</p>
<p><span class="code">PS C:\&gt; Start-DscConfiguration -Path "C:\SS64\Configurations\"</span></p>
<p>Apply the configuration settings from C:\SS64\Configurations\ to the local computer:</p>
<p><span class="code">PS C:\&gt; Start-DscConfiguration -Path "C:\SS64\Configurations\" -Wait -Verbose</span><br>
<br>
Apply configuration settings by using a CIM session, New-CimSession will prompt for a password:</p>
<p class="code">PS C:\&gt; $Session = New-CimSession –ComputerName "Server64" –Credential ACCOUNTS\JDoe<br>
PS C:\&gt; Start-DscConfiguration -Path "C:\SS64\Configurations\" -CimSession $Session<br>
</p>
<p class="quote"><i>“Just like beautiful snowflakes swirling in the winter’s breath, no two were exactly alike…” ~   Alex Tatiyants (DevOps is Ruining My Craft)</i></p>
<p><b>Related:</b></p>
<p> <a href="get-dscconfiguration.html">Get-DscConfiguration</a> - Get the current config. of a node.<br>
 <a href="get-dscresource.html">Get-DscResource</a> - Get Desired State Config. resources from a computer.<br>
<a href="get-dsclocalconfigurationmanager.html">Get-DscLocalConfigurationManager</a> - Get Local Config Manager settings.<br>
<a href="new-dscchecksum.html">New-DSCCheckSum</a> - Create checksum files for DSC docs/resources.<br> 
<a href="https://technet.microsoft.com/en-us/library/dn249912.aspx">TechNet</a> - Desired State Configuration Overview<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="start-dscconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

