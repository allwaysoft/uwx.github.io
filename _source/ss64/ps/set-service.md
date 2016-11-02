---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-Service</h1> 
<p>Change the start mode/properties/status of a service.</p>
<pre>Syntax
      Set-Service [-name] <i>string</i>[] [ -displayName <i>string</i> ]
         [-description <i>string</i>] [-startupType <b>{ </b>Automatic | Manual | Disabled <b>}</b>]
              [-Status <i>string</i>] [-ComputerName <i>string</i>[]] [-PassThru]
                 [-whatIf] [-confirm] [<i>CommonParameters</i>]

      Set-Service [-InputObject <i>ServiceController</i>] [ -displayName <i>string</i> ]
         [-description <i>string</i>] [-startupType <b>{ </b>Automatic | Manual | Disabled <b>}</b>]
              [-Status <i>string</i>] [-ComputerName <i>string</i>[]] [-PassThru]
                 [-whatIf] [-confirm] [<i>CommonParameters</i>]
key
   -Name
       Service name(s) to change. Wildcards are not permitted. 
       The service name may be piped.

   -DisplayName <i>string</i>
       A new display name for the Service. 

   -Description <i>string</i>
       A new description for the service.

   -ComputerName <i>string</i>[]
       Specify one or more computers. The default is the local computer. 
       Type the NetBIOS name, an IP address, or a fully qualified domain name
       of a remote computer.
       To specify the local computer, type the computer name, a dot (.), or "localhost".

       This parameter does not rely on PowerShell remoting.

   -InputObject <i>ServiceController</i>
       A ServiceController object that represents the service to be changed.
       Enter a variable that contains the object, or type a command or
       expression that gets the object, such as a Get-Service command.
       May be piped.

   -StartupType <i>ServiceStartMode</i>
       Change the starting mode of the service: Automatic or Manual or Disabled

   -Status <i>string</i><br>        Start, stop, or suspend (pause) the service.  Valid values are:<br>        <br>         Running  Start the service.<br>         Stopped  Stop the service.<br>         Paused   Suspend the service.

   -PassThru
       Return objects that represent the services changed.

   -WhatIf
       Describe what would happen if you executed the command without
       actually executing the command.

   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Set the start type of the <span class="code">sysmonlog</span> service to automatic:</p>
<p><span class="code">PS C:\&gt; set-service sysmonlog -startuptype automatic</span><br>
  <br>
Display the start type of all services on the computer:</p>
<p class="code">PS C:\&gt; get-wmiobject win32_service | format-table Name, StartMode -autosize</p>
<p>Display the start type of the telnet service on the computer:</p>
<p class="code">PS C:\&gt; get-wmiobject win32_service | where {$_.Name -eq "tlntsvr"}</p>
<p>Change the display name of the lanmanworkstation service to "LanMan Workstation". (The default is "Workstation".):</p>
<p class="code">PS C:\&gt; set-service -name lanmanworkstation -DisplayName "LanMan Workstation"</p>
<p>Change the description of the Task Scheduler service on the machine <span class="code">Server64</span>:</p>
<p class="code">PS C:\&gt; set-service -name Schedule -computername Server64 -description "Configures and schedules tasks."<br>
    
    PS C:\&gt; get-wmiobject win32_service -computername Server64 | where-object {$_.Name -eq "Schedule"} | format-list Name, Description</p>
<p class="quote"><i>“The best way to find yourself is to lose yourself in the service of others” ~ Mahatma Gandhi</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-service.html">Get-Service</a> - Get a list of services<br>
<a href="new-service.html">New-Service</a> - Create a new service <a href="restart-service.html"><br>
Restart-Service</a> - Restart a stopped service <a href="resume-service.html"><br>
Resume-Service</a> - Resume a suspended service <a href="start-service.html"><br>
Start-Service</a> - Start a stopped service <a href="stop-service.html"><br>
Stop-Service</a> - Stop a running service <a href="suspend-service.html"><br>
Suspend-Service</a> - Suspend a running service<br>
Equivalent Windows  commands: <a href="../nt/net.html">NET START</a> / <a href="../nt/sc.html">SC</a> - Start/Stop Service</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

