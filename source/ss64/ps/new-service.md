---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-Service</h1> 
<p>Create a new service, adds an entry in the registry and the service database.</p>
<pre>Syntax
      New-Service [-name] <i>string</i> [-binaryPathName] <i>string</i> 
          -displayName <i>string</i> [-description <i>string</i>] [-DependsOn <i>string</i>[]]
            [-startupType {<u>Automatic</u> | Manual | Disabled}] 
               [-credential <i>PSCredential</i>] [-dependsOn <i>string</i>[]] 
                  [-whatIf] [-confirm] [<i>CommonParameters</i>]

Key
   -name
       A name for the new Service. (required)
   
   -binaryPathName <i>string</i>
       The path to the executable file for the service.

   -displayName <i>string</i>
       The display name for the service.

   -description <i>string</i>
       A description of the service.

   -DependsOn <i>string</i>[]
       The names of other services upon which the new service depends.
       To enter multiple service names, use a comma to separate the names.

   -startupType <i>ServiceStartMode</i>
       Will the service start at system bootup: Automatic or Manual or Disabled

   -credential <i>PSCredential</i>
       Use a credential to validate access to the file. <i>Credential</i> represents
       a user-name, such as "User01" or "Domain01\User01", or a PSCredential
       object, such as the one retrieved by using the Get-Credential cmdlet.
       If you type a user name, you will be prompted for a password.

   -dependsOn <i>string</i>[]
       A comma-separated list Names of other services upon which
       the new service depends.

   -whatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Create a new entry in the registry and in the Service Database for "SS64service":</p>
<p><span class="code">PS C:\&gt; new-service SS64service "C:\WINDOWS\System32\svchost.exe -k netsvcs"</span><br>
<br>
<i class="quote">“Businesses planned for service are apt to succeed; businesses planned for profit are apt to fail” ~ Nicholas M. Butler</i></p>
<p><b>Related:</b><br>
<br><a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="restart-service.html">
Restart-Service</a> - Restart a stopped service <a href="resume-service.html"><br>
Resume-Service</a> - Resume a suspended service <a href="set-service.html"><br>
Set-Service</a> - Make and set changes to the properties of a service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
<a href="get-wmiobject.html">Get-WmiObject</a> win32_service -filter "name='SS64service'"<br>

Windows cmd command: <a href="../nt/net.html">NET START</a> / <a href="../nt/sc.html">SC</a> - Service Control</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

