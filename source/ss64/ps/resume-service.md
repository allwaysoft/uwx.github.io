---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Resume-Service</h1> 
<p>Resume one or more suspended (paused) services.</p>
<pre>Syntax
      Resume-Service <b>{</b> [-name] <i>string[]
                    </i> | [-displayName] <i>string[]</i>
                     | [-inputObject ServiceController[]] <b>}</b>
                          [-include <i>string[]</i>] [-exclude <i>string[]</i>]
                             [-passthru] [-whatIf]
                                [-confirm] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       The service names to be resumed.

   -DisplayName <i>string</i>
       The display names to be resumed, wildcards are permitted.

   -inputObject <i>ServiceController</i>
       Restart the services represented by <i>ServiceController</i>.
       Enter a command, expression or variable contains the objects.

   -include <i>string</i>
       Resume only the specified services. Qualifies the -Name parameter.
       Wildcards , such as "s*" are permitted.

   -Exclude <i>string</i>
       Omit the specified services e.g. "*SS64*"
       Qualifies the -Name parameter, Wildcards are permitted.

   -PassThru 
        Pass the object created by Resume-Service along the pipeline. 

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>-ServiceName is an alias for -Name.</p>
<p><b>Examples</b></p>
<p>Resume the TapiSrv (Telephony) service:</p>
<p><span class="code">PS C:\&gt; resume-service tapiSrv </span><br>
<br>Resume all of the suspended (paused) services on the computer:</p>
<p class="code">PS C:\&gt; get-service | where-object {$_.Status -eq "Paused"} | resume-service -whatif </p>
<p>to actually run the above, remove the <span class="code">-whatif</span> parameter </p>
<p class="quote"><i>"I must down to the seas again, to the lonely sea and the sky,
And all I ask is a tall ship and a star to steer her by" ~ John Masefield (Sea Fever) </i></p>
<p><b>Related:</b><br>
<br><a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
Restart-Service</a> - Restart a stopped service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
<b> Windows cmd commands</b>: 
<a href="../nt/net.html">NET START</a> /
<a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="resume-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

