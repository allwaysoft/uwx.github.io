---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to manage services 
as follows: </p>
<pre>Syntax
      NET START [<i>service</i>]
      NET STOP [<i>service</i>]
      NET PAUSE [<i>service</i>]
      NET CONTINUE [<i>service</i>] 
   
Key
   <i>service</i> : The service name as shown in Control Panel, Services</pre>
<p>To list the basic  Services:</p>
<blockquote> 
  <p>NET HELP SERVICES </p>
</blockquote>
<p>To list the <i>running</i>  Services:</p>
<blockquote>
  <p>NET START </p>
</blockquote>
<h2>Error/return codes</h2>
<p>The NET command does not return the documented <a href="http://msdn.microsoft.com/en-gb/library/windows/desktop/aa393660%28v=vs.85%29.aspx">Win32_Service class</a> return codes (Service Not Active,Service Request Timeout, etc) and for many errors will simply return Errorlevel 2.</p>
<p>It will however echo  its own errors on screen:</p>
<p>"The service table is locked. More help is available 
  by typing NET HELPMSG 2180"<br>
"The service table is full. More help is available 
  by typing NET HELPMSG 2181"<br>
"The requested service has already been started. More help is available 
  by typing NET HELPMSG 2182"<br>
"The service name is invalid. More help is available 
  by typing NET HELPMSG 2185"<br>
"The service is not responding to the control function. 
NET HELPMSG 2186" <br>
"The service control is busy. 
NET HELPMSG 2187" <br>
"Invalid service program name. 
NET HELPMSG 2188" <br>
"The service could not be controlled in its present state. More help is available 
  by typing NET HELPMSG 2189" <br>
"The service ended abnormally. More help is available 
  by typing NET HELPMSG 2190" <br>
"The requested pause or stop is not valid for this service. More help is available 
  by typing NET HELPMSG 2191"<br>
"could not find service name. More help is available 
  by typing NET HELPMSG 2192"<br>
  "service control dispatcher pipe read failed. More help is available 
  by typing NET HELPMSG 2193"<br>
"A thread for the new service could not be created. More help is available 
  by typing NET HELPMSG 2194"<br>
<br>
  You can detect these  errors by searching the output text with an 'old school' FIND command as follows:<br>
  <br>
  <span class="code">NET START alerter 2&gt;&amp;1|FIND "2182" <br>
  IF errorlevel 1 goto :sub_already_started</span><br>
</p>
<p><b>Related:</b><br>
  <br>
  <span class="body"><a href="net.html">NET</a> - Manage network resources</span>  <br>
  <a href="sc.html">  </a><a href="mode.html">MODE</a> - Configure a system device<br>
  <a href="sc.html">SC</a> - Service Control<br>
<a href="psservice.html">PsService</a> - View and control services<br>
  <a href="wmic.html">WMIC SERVICE</a> - WMI access to services.<br>
  <a href="syntax-services.html">List of Windows Services</a> <br>
Powershell: <br>
<a href="../ps/get-service.html">Get-Service</a> - Get a list of services<br> 
<a href="../ps/new-service.html">New-Service</a> - Create a new service<br> 
<a href="../ps/restart-service.html">Restart-Service</a> - Stop and then restart a service<br> 
<a href="../ps/resume-service.html">Resume-Service</a> - Resume a suspended service<br> 
<a href="../ps/set-service.html">Set-Service</a> - Change the start mode/properties of a service<br> 
<a href="../ps/start-service.html">Start-Service</a> - Start a stopped service<br> 
<a href="../ps/stop-service.html">Stop-Service</a> - Stop a running service<br>
Equivalent bash command (Linux): start-stop-daemon - start and stop system daemon programs </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_service.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

