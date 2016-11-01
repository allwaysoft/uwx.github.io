---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to manage Network 
  Print jobs and Network Time as follows: <br>
  <br>
  The NET TIME command requires the `server' service to be running on the machine 
  that is serving the time.<br>
  <br>
  Display the time at this computer plus the <a href="date.html">DATE</a> in US 
  Format<br>
  <span class="code">NET TIME \\%ComputerName%</span><br>
  <br>
  Display the date and time from another computer<br>
  <span class="code">NET TIME \\machinename</span><br>
  <br>
  Display the date and time from the logonserver<br>
  <span class="code">NET TIME %LOGONSERVER%</span><br>
  <br>
  Display the time from the domain timeserver<br>
  <span class="code">NET TIME /DOMAIN</span><br>
  <br>
  Display the time from another domain<br>
<span class="code">NET TIME /DOMAIN:domainname</span></p>
<p>Define the time server for your domain<br>
  <span class="code">NET TIME /setsntp:<i>ServerName.DomainName</i>.com</span></p>
<p>List the time server(s) for your domain<br>
  <span class="code">NET TIME /querysntp</span></p>
<p> Synchronise the computer's clock with that of the domain. <br>
  <span class="code">NET TIME /DOMAIN /SET /Y</span><br>
  <br>
  Synchronise the computer's clock with a different domain. <br>
  <span class="code">NET TIME /DOMAIN:domainname /SET</span><br>
  <br>
  Synchronise the computer's clock with that of another computer<br>
  <span class="code">NET TIME \\servername /SET /YES</span><br>
  Also see the "w32tm" command<br>
  <br>
  Synchronise the computer's clock with a time server in a different domain. <br>
  <span class="code">NET TIME /RTSDOMAIN:domainname /SET</span></p>
<p>  <b>Related:</b><br>
  <br>
  <a href="net.html">NET</a> - Manage network resources<a href="con2prt.html">.<br>
</a><a href="prncnfg.html">PRNCNFG</a> - configure or rename a printer.<br>
  PRNJOBS - Pause, resume, cancel, or list print jobs.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
  VB Script: <a href="../vb/addprinterconnection.html">Add printer connection</a> <br>
  VB Script: <a href="../vb/enumprinterconnections.html">List printers</a> <br>
  VB Script: <a href="../vb/setdefaultprinter.html">Set default printer</a><br>
  Equivalent bash command (Linux): <a href="../bash/lpc.html">lpc</a> - Line printer control program
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_time.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

