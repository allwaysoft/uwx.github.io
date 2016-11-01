---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-DscLocalConfigurationManager</h1> 
<p>Get Local Configuration Manager settings, or meta-configuration, for the node. (PowerShell 4.0+)</p>
<pre>Syntax
      Get-DscLocalConfigurationManager [-AsJob] [-CimSession <i>CimSession</i>[]]
         [-ThrottleLimit Int32] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AsJob
       Run the cmdlet as a background job.
       Use this parameter to run commands that take a long time to complete. 
       The cmdlet immediately returns an object that represents the job and then displays the command prompt.
       You can continue to work in the session while the job completes. To manage the job, use the <a href="start-job.html">*-Job</a> cmdlets. 
       To get the job results, use <a href="receive-job.html">Receive-Job</a>. 
        
   -CimSession <i>CimSession</i>[]
       Run the cmdlet in a remote session or on a remote computer.
       Enter a computer name or a session object, such as the output of a New-CimSession or Get-CimSession.
       The default is the current session on the local computer.
        
   -ThrottleLimit <i>Int32</i>
       The maximum number of concurrent operations that can be established to run the cmdlet.
       If this parameter is omitted or a value of 0 is entered, then PowerShell calculates an optimum throttle 
       limit for the cmdlet based on the number of CIM cmdlets that are running on the computer.
       The throttle limit applies only to the current cmdlet, not to the session or to the computer.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If you do not specify a target computer,  Get-DscLocalConfigurationManager gets the configuration from the local computer.</p>
<p><b>Examples</b></p>
<p>Get the configuration for a specified computer:</p>
<p><span class="code">PS C:\&gt; $Session = New-CimSession –ComputerName "Server64" –Credential ACCOUNTS\JDoe<br>
PS C:\&gt; Get-DscLocalConfigurationManager  -CimSession $Session</span><br>
</p>
<p class="quote"><i>“It takes a very unusual mind to undertake the analysis of the obviouss” ~ Alfred North Whitehead</i></p><p><b>Related:</b></p>
<p><a href="get-dscconfiguration.html">Get-DscConfiguration</a> - Get the current config. of a node.<br>
<a href="get-dscresource.html">Get-DscResource</a> - Get Desired State Config. resources from a computer.<br>
<a href="start-dscconfiguration.html">Start-DscConfiguration</a> - Apply Desired State config to nodes.<br>
<a href="new-dscchecksum.html">New-DSCCheckSum</a> - Create checksum files for DSC docs/resources.<br> 
<a href="https://technet.microsoft.com/en-us/library/dn249912.aspx">TechNet</a> - Desired State Configuration Overview<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-dsclocalconfigurationmanager.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

