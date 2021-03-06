---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SC.exe</h1> 
<p> Service Control - Create, Start, Stop, Query or
Delete any Windows <a href="syntax-services.html">SERVICE</a>. 
 The command <i>options</i> for SC are case sensitive.</p>
<pre>Syntax
      SC [\\<i>server</i>] [<i>command</i>] [<i>service_name</i>] [<i>Options</i>]

Key
   <i>server</i>       : The machine where the service is running

   <i>service_name</i> : The KeyName of the service, this is often but not always
                  the same as the DisplayName shown in Control Panel, Services.
                  You can get the KeyName by running: 
                     SC GetKeyName &lt;DisplayName&gt;

   <i>command</i>s:
          <b>query</b>  [<i>qryOpt</i>]   Show status
          queryEx [<i>qryOpt</i>]  Show extended info - pid, flags
          GetDisplayName    Show the DisplayName
          GetKeyName        Show the ServiceKeyName
          EnumDepend        Show Dependencies
          qc                Show config - dependencies, full path etc
          <b>start</b>          START a service.
          <b>stop</b>           STOP a service
          pause          PAUSE a service.
          continue       CONTINUE a service.
          create         Create a service. (add it to the registry)
          <b>config</b>         permanently change the service configuration
          delete         Delete a service (from the registry)
          control        Send a control to a service
          interrogate    Send an INTERROGATE control request to a service
          Qdescription   Query the description of a service
          description    Change the description of a service
          Qfailure       Query the actions taken by a service upon failure
          failure        Change the actions taken by a service upon failure
          sdShow         Display a service's security descriptor using SDDL
          SdSet          Sets a service's security descriptor using SDDL

   <i>qryOpt</i>:
          type= driver|service|all
                         Query specific types of service
          state= active|inactive|all
                         Query services in a particular state only
          bufsize= <i>bytes</i> 
          ri= <i>resume_index_number</i> (default=0)
          group= <i>groupname</i>
                         Query services in a particular group

   <i>Misc command</i>s that don’t require a service name:
          SC  QueryLock  Query the LockStatus for the ServiceManager Database.
                         this will show if a service request is running
          SC  Lock       Lock the Service Database
          SC  BOOT       Values are {ok | bad} Indicates whether to save  
                         the last restart configuration as the `last-known-good`
                         restart configuration
   Options
     The CREATE and CONFIG commands allow additional service options to be set
     e.g. to disable a service: SC config "Name of Service" start= disabled
     see the built-in help for more: 'SC create' and 'SC config'</pre>
<p>Note the <span class="code">qryOpt</span> options above are case sensitive - they must be entered in lower case, also the position of spaces and = must be exactly as shown.</p>
<p>The SC command duplicates some aspects of the <a href="net.html">NET</a> command but adds the ability to create a service.<br> 
SC query will display if a service is running, giving output  like this: </p>
<pre>        SERVICE_NAME       : messenger
        TYPE               : 20  WIN32_SHARE_PROCESS
        STATE              : 4  RUNNING
                                (STOPPABLE,NOT_PAUSABLE,ACCEPTS_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        CHECKPOINT         : 0x0
        WAIT_HINT          : 0x0</pre>
<p>To retrieve specific information from SC's output, <a href="syntax-redirection.html">pipe</a>  into <a href="find.html">FIND</a> or <a href="findstr.html">FindStr</a><br>
  e.g.</p>
<pre>  C:\&gt; SC query messenger | FIND "STATE" | FIND "STOPPED"

  C:\&gt; SC query messenger | FIND "STATE" | FIND "RUNNING"</pre>
<p>The statements above  will return an %ERRORLEVEL% = 1 if the text is not found </p>
<p> <span class="code">IF errorlevel 1 GOTO :my_subroutine</span><b><br>
</b><br>
The <a href="net.html">NET</a> START command can be used in a similar way to 
check if a service is running:</p>
<pre>   NET START | FIND "Service name" &gt; nul
   IF errorlevel 1 ECHO The service is not running</pre>
<p> The service control manager will normally wait up to 30 seconds to allow a service to start, you can modify this time (30,000 milliseconds) in the registry</p>
<p class="code">HKLM\SYSTEM\CurrentControlSet\Control<br>
ServicesPipeTimeout 
(REG_DWORD)</p>
<p>Some options  only take effect at the point when the service is started 
e.g. the <span class="code">SC config</span> command allows the executable  of a service to be changed. When the service next starts up it will run the new executable. Config changes  requires the current user to have “permission to configure the service”. </p>
<p><b>Examples:</b></p>
<pre> SC GetKeyName "task scheduler"
 SC GetDisplayName schedule 
 SC start schedule
 SC QUERY schedule
 SC CONFIG "Schedule" start= disabled
 SC QUERY type= driver
 SC QUERY state= all |findstr "DISPLAY_NAME STATE" &gt;svc_installed.txt 
 SC \\myServer CONFIG myService obj= LocalSystem password= mypassword
 SC CONFIG MyService binPath=c:\myprogram.exe obj=".\LocalSystem" password=""
</pre>
<p> Enable remote registry access on computer64:<br>
</p>
<pre> SC \\computer64 config remoteregistry start= auto
 SC \\computer64 start remoteregistry</pre>
<p>Watch out for extra spaces: <br>
<span class="code">SC QUERY state= all</span> Works <br>
<span class="code">SC QUERY state =all</span> Fails! <br>
<br>
<i class="quote">“There is always room at the top” ~ Daniel Webster </i> <br>
<br>
<b>Related:</b><br><br>
 DELSRV - Delete a service <br>
INSTSRV - Install a service (run under a specific account)<br>
<a href="net.html">NET</a> - manage network resources<br>
<a href="psservice.html">PsService</a> - View and control services<br>
 Svcmon - Monitor services and raise an alert if they stop. (<a href="../links/windows.html#kits">Win 2K ResKit</a>) <br>
Svcacls - Service ACL Editor (<a href="../links/windows.html#kits">Win 2K ResKit</a>)<br>
<a href="subinacl.html">SUBINACL</a> - Set service permissions <span class="code"></span><br>
<a href="wmic.html">WMIC SERVICE</a> - WMI access to services<br>  
<a href="syntax-services.html">List of Windows Services</a> <br>
<a href="https://support.microsoft.com/kb/251192">Q251192</a> - Create a Windows Service using SC<br>
<a href="https://support.microsoft.com/kb/166819">Q166819</a> - Control Services Remotely<br>
<a href="https://support.microsoft.com/kb/170738">Q170738</a> - Debug a Windows  Service<br>
Powershell: <a href="../ps/get-service.html">Get-Service</a> - Get a list of services<br>
Equivalent bash command (Linux): <a href="../bash/nice.html">nice</a> - Change job scheduling priority</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

