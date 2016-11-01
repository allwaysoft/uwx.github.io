---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NVSPBIND.exe (Network VSP Bind - <a href="https://gallery.technet.microsoft.com/Hyper-V-Network-VSP-Bind-cf937850">download</a>) </h1> 
<p>Modify network bindings. Especially useful in Server Core environments with the Hyper-V role enabled. 
<br>
Windows 8 
/2008/2012 n.b. this is an 'unsupported' tool.</p><pre>Syntax
      NVSPBIND <i>option NIC protocol</i>

Options:
   /n  display NIC information only
   /u  unbind switch protocol from specified nic(s)
   /b  bind switch protocol to specified nic(s)
   /d  disable binding of specified protocol from specified nic(s)
   /e  enable binding of specified protocol to specified nic(s)
   /r  repair bindings on specified nic(s)
   /o  show NIC order for specified protocol
   /+  move specified NIC up in binding order for specified protocol
   /-  move specified NIC down in binding order for specified protocol
   /++ move specified NIC up to top of binding order for specified protocol
   /-- move specified NIC down to bottom of binding order for specified protocol</pre>
<p><b>Examples:</b></p>
<p>Obtain the GUID which uniquely identifies the adapter:<br>
<span class="code">C:\&gt;  nvspbind<br>
{F93642D9-9085-4EEF-9669154AD4391ED7}<br>
"pci\ven_8086&amp;dev_10c9&amp;subsys_a03c8086"<br>
"Intel(R) Gigabit ET Dual</span>...<br>
<br>
Unbind the protocol ms_server (the short name for <i>File and Printer Sharing for Microsoft Networks</i>) using the GUID: <br>
<span class="code">C:\&gt; nvspbind -d {F93642D9-9085-4EEF-9669154AD4391ED7} ms_server </span><br>
</p>
<p>Set the priority of the 'Wireless network connection' to the top of the binding order:<br>
<span class="code">C:\&gt; nvspbind.exe /++ "Wireless Network Connection" ms_tcpip</span></p>
<p>  <i class="quote"> "Talent is hitting a target no-one else can hit, genius is hitting a target no-one else can see" ~ Schopenhauer</i> <br>
<br>
<b>Related:</b></p>
<p><a href="netsh.html">NETSH</a> - Configure Network Interfaces, Windows Firewall &amp; Remote access<br>
NVSPSCRUB.js - Delete all  virtual adapters (and thus return physical)<br>
<a href="https://support.microsoft.com/kb/140859">Q140859</a> - Win NT TCP/IP Routing Basics <br>
<a href="route.html">ROUTE</a> - Manipulate network routing tables.<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nvspbind.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p><br>
  <br>
</p>


