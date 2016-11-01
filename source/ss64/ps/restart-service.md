---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Restart-Service</h1> 
<p>Stop and then restart one or more services.</p>
<pre>Syntax
      Restart-Service <b>{</b> [-name] <i>string[]
                     </i> | [-displayName] <i>string[]</i>
                      | [-inputObject <i>ServiceController[]</i>] <b>}</b>
                           [-force] [-include <i>string[]</i>] [-exclude <i>string[]</i>]
                              [-passthru] [-whatIf]
                                 [-confirm] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
       The service names to be restarted.

   -displayName <i>string</i>
       The display names to be restarted, wildcards are permitted.

   -inputObject <i>ServiceController</i>
       Restart the services represented by <i>ServiceController</i>.
       Enter a command, expression or variable containing the object(s).

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -Force will stop and restart a
       service that has dependent services.

   -include <i>string</i>
       Restart only the specified services. Qualifies the -Name parameter.
       Wildcards , such as "s*" are permitted.

   -exclude <i>string</i>
       Omit the specified services e.g. "*SS64*"
       Qualifies the -Name parameter, Wildcards are permitted.

   -passThru 
        Pass the object created by Restart-Service along the pipeline. 

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Restart the spooler (printing) service:</p>
<p><span class="code">PS C:\&gt; restart-service spooler -force </span><br>
<br>Find all the network services on the computer (starting with "net...") and restart any that are stopped:</p>
<p class="code">PS C:\&gt; get-service net* | where {$_.Status -eq "Stopped"} | restart-service</p>
<p class="quote"><i>“I am not sure I should have dared to start; but I am sure that I should not have dared to stop” ~ Winston Churchill</i></p>
<p><b>Related:</b><br>
<br>
<a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
</a><a href="resume-service.html">
Resume-Service</a> - Resume a suspended service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
Windows cmd commands: 
<a href="../nt/net.html">NET START</a> /
<a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="restart-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

