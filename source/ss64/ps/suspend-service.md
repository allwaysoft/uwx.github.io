---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Suspend-Service</h1> 
<p>Get the access control list for a file or object.</p>
<pre>Syntax
      Suspend-Service <b>{</b> [-name] <i>string[]
                     </i> | [-displayName] <i>string[]</i>
                      | [-inputObject ServiceController[]] <b>}</b>
                           [-include <i>string[]</i>] [-exclude <i>string[]</i>]
                              [-passthru] [-whatIf]
                                 [-confirm] [<i>CommonParameters</i>]

Key
   -name <i>string</i>
       The service names to be suspended.

   -displayName <i>string</i>
       The display names to be suspended, wildcards are permitted.

   -inputObject <i>ServiceController</i>
       Suspend the services represented by <i>ServiceController</i>.
       Enter a command, expression or variable contains the objects.

   -include <i>string</i>
       Suspend only the specified services. Qualifies the -Name parameter.
       Wildcards , such as "s*" are permitted.

   -exclude <i>string</i>
       Omit the specified services e.g. "*SS64*"
       Qualifies the -Name parameter, Wildcards are permitted.

   -passThru 
       Pass the object created by Suspend-Service along the pipeline. 

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Suspend the Telnet service (Tlntsvr) service:</p>
<p><span class="code">PS C:\&gt; suspend-service -displayname "Telnet"</span><br>
  <br>
  Use the pipeline operator to pass an  object from Get-service to Suspend-service:</p>
<p class="code">PS C:\&gt; get-service schedule | suspend-service</p>
<p>Suspend all services that can be suspended, this is done by selecting only services with a value of "True" for the CanPauseAndContinue property:</p>
<p class="code">PS C:\&gt; get-service | where-object {$_.CanPauseAndContinue -eq "True"} | suspend-service -confirm</p>
<p class="quote"><i>“If you've spoken to a non-geek recently, you may have noticed that they have no idea what the difference is between "sleep" and "hibernate” ~ <a href="http://www.joelonsoftware.com/items/2006/11/21.html">Joel Spolsky</a></i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
Restart-Service</a> - Restart a stopped service <a href="resume-service.html"><br>
Resume-Service</a> - Resume a suspended service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <br>  
Equivalent Windows  command: <a href="../nt/net.html">NET START</a> / <a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="suspend-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

