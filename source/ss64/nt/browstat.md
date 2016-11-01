---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>BROWSTAT.exe (<a href="../links/windows.html#kits">NT4/2000 Resource Kit</a>)</h1>
<p>Get NetBIOS browser and PDC information. <br>
NetBIOS was deprecated in Windows 2000 and above, BROWSTAT is not supported on Server 2008 R2.</p> 
<pre>Syntax
      BROWSTAT <i>option</i>

Options:

 BROWSTAT Dumpnet
 BROWSTAT dn                  : Display the transports bound to browser

 BROWSTAT GetPdc <i>Transport Domain</i>
 BROWSTAT gp <i>Transport Domain</i> : List the PDC name (via NetBIOS)

 BROWSTAT GetMaster <i>Transport Domain</i> 
 BROWSTAT gm <i>Transport Domain</i> : List the remote Master Browser name(via NetBIOS)

 BROWSTAT Getblist <i>Transport</i>        
 BROWSTAT gb <i>Transport</i>        : List the backup DNS Servers.

 BROWSTAT ListWfw
 BROWSTAT wfw                 : WindowsForWorkgroups servers running browser.

 BROWSTAT Stats \\<i>ServerName</i>    
 BROWSTAT sts \\<i>ServerName</i>    : List all browser statistics

 BROWSTAT Status              : Display Transport,Primary DNS
 BROWSTAT sta                   and Backup DNS servers.

 BROWSTAT Status -v <i>domain</i>    : Verbose Status Display
 BROWSTAT sta -v <i>domain</i>         include Server OS and active browsers.

 BROWSTAT Tickle
 BROWSTAT Tic                 : Force remote master to stop.

 BROWSTAT Elect
 BROWSTAT el                  : Force election on remote domain

 BROWSTAT View <i>Transport</i>
 BROWSTAT vw <i>Transport</i>
 BROWSTAT vw <i>Transport ‹domain›</i>
 BROWSTAT vw <i>Transport \\Server</i>
 BROWSTAT vw <i>Transport \\‹Server›</i> /DOMAIN ‹<i>DomainToQuery</i>›
</pre>
<p>The VIEW options can enumerate server services running across a server or domain. Other Browstat features will only work only within a single
network subnet. To span subnets/routers
across a domain, run browstat via <a href="psexec.html">psexec</a>.<br>
<br>
In the list displays, the following flags are used:</p>
<pre> W  = <i>Workstation</i>             NT  = Windows NT
 S  = Server                  W95 = Windows95
SQL = SQLServer               WFW = WindowsForWorkgroups
SS  = StandardServer          MFPN= MS Netware
PDC = PrimaryDomainController NV  = Novell
BDC = BackupDomainController  XN  = Xenix

TS  = Time Source
MBC = Member Server
PQ  = Print Queue Server
DL  = Dial-in Server
AFP = AFP Server
OSF = OSF Server
VMS = VMS Server

PBR = Potential Browser
BBR = Backup Browser,
MBR = Master Browser
DMB = DomainMaster Browser
DFS = Distributed File System</pre>
<p><b>Examples</b></p>
<p>Display transports:</p>
<p class="code">C:\&gt;browstat dn<br>
<br>
List of transports currently bound to the browser<br>
<br>
1 \Device\NetBT_Tcpip_{B1AFFCA2-6410-4644-9FE7-BA6C274FD4F3} </p>
<p>List the backup DNS servers for transport #1:</p>
<p class="code">C:\&gt;browstat gb 1
</p>
<p class="code">Browser: \\PC00096<br>
Browser: \\PC00082
</p>
<p>List Print queues for transport #1: <br>
<br>
<span class="code">C:\&gt; BROWSTAT vw 1 |find "PQ"</span></p>
<p class="quote"><i> “If your experiment needs statistics, you ought to have done a better experiment” - Ernest Rutherford</i></p>
<p><b>  Related:<br>
  </b><br>
  <a href="https://support.microsoft.com/kb/188305">Q188305</a> - Troubleshooting
   the Browser Service<br>
  DNSSTAT - DNS Statistics<br>
  <a href="netstat.html">NETSTAT</a> - Display networking statistics (TCP/IP) <br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="browstat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

