---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-DscConfiguration</h1> 
<p>Get the current configuration of the node. (PowerShell 4.0+)</p>
<pre>Syntax
      Get-DscConfiguration [-AsJob] [-CimSession <i>CimSession</i>[]]
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
<p>If you do not specify a target computer,  Get-DscConfiguration gets the configuration from the local computer.</p>
<p><b>Examples</b></p>
<p>Get the configuration for a specified computer:</p>
<p><span class="code">PS C:\&gt; $Session = New-CimSession –ComputerName "Server64" –Credential ACCOUNTS\JDoe<br>
PS C:\&gt; Get-DscConfiguration  -CimSession $Session</span><br>
</p>
<p class="quote"><i>“Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death” ~ Anais Nin</i></p><p><b>Related:</b></p>
<p> <a href="get-dscresource.html">Get-DscResource</a> - Get Desired State Config. resources from a computer.<br>
<a href="start-dscconfiguration.html">Start-DscConfiguration</a> - Apply Desired State config to nodes.<br>
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
<div id="bl" class="footer"><a href="get-dscconfiguration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

