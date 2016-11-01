---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Stop-Service</h1> 
<p>Stop one or more running services.</p>
<pre>Syntax
      Stop-Service <b>{</b> [-name] <i>string[]
                  </i> | [-displayName] <i>string[]</i>
                   | [-inputObject ServiceController[]] <b>}</b>
                        [-include <i>string[]</i>] [-exclude <i>string[]</i>]
                           [-force] [-passthru] [-whatIf]
                              [-confirm] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
       The service names to be stopped.

   -displayName <i>string</i>
       The display names to be stopped, wildcards are permitted.

   -inputObject <i>ServiceController</i>
       Stop the services represented by <i>ServiceController</i>.
       Enter a command, expression or variable contains the objects.

   -include <i>string</i>
       Stop only the specified services. qualifies the Name parameter.
       Wildcards , such as "s*" are permitted.

   -exclude <i>string</i>
       Omit the specified services e.g. "*SS64*"
       Qualifies the -Name parameter, Wildcards are permitted.

   -force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -Force will stop a service
       that has dependent services.

   -passThru 
        Pass the object created by Stop-Service along the pipeline. 

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Standard <a href="get-alias.html">Aliases</a> for Stop-Service:<b><span class="code"> spsv</span></b></p>
<p><span class="code">-ServiceName</span> is an alias for -Name.</p>
<p><b>Examples</b></p>
<p>Stop the Performance Logs and Alerts (SysmonLog) service on the local computer.:</p>
<p><span class="code">PS C:\&gt; stop-service sysmonlog</span><br><br>
Use <span class="code">-force</span> to stop a service that has dependent services, the first command below lists the dependant services of iis:</p>
<p class="code">PS C:\&gt; get-service iisadmin | format-list -property name, dependentservices<br>
PS C:\&gt; stop-service iisadmin -force -confirm</p>
<p class="quote"><i>“It [the Cheshire Cat] vanished quite slowly, beginning with the end of the tail, and ending with the grin, which remained some time after the rest of it had gone” ~ Lewis Carroll </i></p>
<p><b>Related:</b><br>
<br>
<a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
Restart-Service</a> - Restart a stopped service <a href="resume-service.html"><br>
Resume-Service</a> - Resume a suspended service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
Windows cmd command: <a href="../nt/net.html">NET START</a> / <a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stop-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

