---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>IPCONFIG</h1> 
<p>Configure IP (Internet Protocol configuration)</p>
<pre>Syntax

   IPCONFIG /all          Display full configuration information.

   IPCONFIG /release [<i>adapter</i>]
                          Release the IP address for the specified adapter.

   IPCONFIG /renew [<i>adapter</i>]
                          Renew the IP address for the specified adapter.

   IPCONFIG /flushdns     Purge the DNS Resolver cache.

   IPCONFIG /registerdns  Refresh all DHCP leases and re-register DNS names.

   IPCONFIG /displaydns   Display the contents of the DNS Resolver Cache.

   IPCONFIG /showclassid <i>adapter</i>
                          Display all the DHCP class IDs allowed for <i>adapter</i>.

   IPCONFIG /setclassid <i>adapter</i> [<i>classid</i>]
                          Modify the dhcp class id.</pre>
<p>If the Adapter name contains spaces, use quotes: "Adapter Name"<br>
Wildcard characters * and ? are allowed, see the examples below<br>
<br>
The default is to display only the IP address, subnet mask and default gateway for each adapter bound to TCP/IP.<br>
<br>
For Release and Renew, if no adapter name is specified, then the IP address leases for all adapters bound to TCP/IP will be released or renewed.<br>
<br>
For <span class="code">setclassid</span>, if no CLASS ID is specified, then the CLASS ID is removed.</p>
<p>DHCP User Classes allow additional or modified DHCP options to be applied to a subset of computers  on the network, as identified by a CLASS ID. For example, a different gateway, DNS server, or lease time. <br>
This requires configuring the CLASS ID appropriately on the  DHCP server. see <a href="https://tools.ietf.org/html/rfc3004">RFC 3004</a></p>
<p><b>Examples:</b><br>
</p>
<p>Show detailed information<br>
<span class="code">C:\&gt; ipconfig /all</span></p>
<p>Release and Renew all adapters: <br>
<span class="code">ipconfig /release<br>
ipconfig /renew</span></p>
<p>Renew any connection that has a 
name starting with EL:<br>
<span class="code">ipconfig /renew EL*</span><br>
<br>
Release all  connections matching *Con*,
eg. "Local Area Connection 1" or "Local Area Connection 2":<br>
<span class="code">ipconfig /release *Con*</span><br>
<br>
Set the DHCP class ID for the named adapter to TEST:<br>
<span class="code"> ipconfig /setclassid "Local Area Connection" TEST</span></p>
<p class="quote"><i>“Life is a grand adventure - or it is nothing” ~ Helen Keller</i></p>
<p><b>Related:</b><br>
<br>
<a href="browstat.html">BROWSTAT</a> - Get domain, browser and PDC info.<br>
<a href="netstat.html">NETSTAT</a> - Display networking statistics (TCP/IP)<br>
<a href="netsh.html">NETSH</a> - Configure interfaces, routing protocols, filters, 
routes, RRAS.<br>
<a href="pathping.html">PATHPING</a> - IP trace utility.<br>
<a href="ping.html">PING</a> - Test a network connection .<br>
<a href="https://support.microsoft.com/kb/192064">Q192064</a> -
Locate multiple preferred logon servers.<br>
<a href="https://support.microsoft.com/kb/813878">Q813878</a> - How to block
specific network protocols and ports.<br>
<a href="https://support.microsoft.com/kb/313190">Q313190</a>  - Use IPSec
IP Filter Lists<br>
<a href="https://technet.microsoft.com/en-us/magazine/2005.01.howitworksdns.aspx">TechNet Domain Name System</a> - How DNS works.<br>
<a href="http://www.ipchicken.com/">ipchicken</a> - Display your current IP.<br>
Equivalent bash command (Linux):  lookupd -flushcache, <a href="../bash/ifconfig.html">ifconfig</a> - IP configuration.<br>
Equivalent bash command (OS X): ipconfig / <a href="../osx/dscacheutil.html">dscacheutil</a> - View IP config / Query / flush the Directory Service cache.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

