---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ARP.exe</h1> 
<p>ARP - Address Resolution Protocol <br>
<br>Display and modify the IP-to-Physical address translation tables used by address resolution protocol. </p>
<pre>Syntax
   View the contents of the local ARP cache table 
      ARP -a [<i>ip_addr</i>] [-N <i>if_addr</i>]

   Add a static Arp entry for frequent accessed hosts 
      ARP -s <i>ip_addr</i> <i>eth_addr</i> [<i>if_addr</i>]

   Delete an entry 
      ARP -d <i>ip_addr</i> [<i>if_addr</i>]

Key
   -a           Display current ARP entries.
                Can include more than one network interface.
                If ip_addr is specified, the IP and Physical
                addresses for only the specified computer are displayed. 
   -g           Same as -a.

   -N <i>if_addr</i>   Display the ARP entries for the network interface specified
                by if_addr.

   -d <i>ip_addr</i>   Delete the host specified by ip_addr.
                -d *  will delete all hosts.

   -s           Add the host and associates the Internet address ip_addr
                with the Physical address eth_addr.  The Physical address is
                given as 6 hexadecimal bytes separated by hyphens. The entry
                is permanent.

   <i>eth_addr</i>     Specifies a physical address.

   <i>if_addr</i>      If present, this specifies the Internet address of the
                interface whose address translation table should be modified.
                If not present, the first applicable interface will be used.
</pre>
<p> If two hosts on the same sub-net cannot ping each other successfully, try running ARP -a to list the addresses on each computer to see if they have the correct MAC addresses.</p>
<p>A host's MAC address can be checked using <a href="ipconfig.html">IPCONFIG</a>.   If another host with a duplicate IP address exists on the network, the ARP cache 
  might have had the MAC address for the other computer placed in it. ARP -d is used to delete an entry that is incorrect.</p>
<p><b>Examples</b></p>
<p>Display the ARP cache tables for all interfaces:</p>
<p><span class="code">C:\&gt; arp -a</span></p>
<p>Display the ARP cache table for the interface on IP address 10.1.4.99:</p>
<p><span class="code">C:\&gt; arp -a -N 10.1.4.99</span></p>
<p>Add a static ARP cache entry on IP addr 10.1.4.77 to the physical address 00-AA-21-4A-2F-9A:</p>
<p><span class="code">C:\&gt; arp -s 10.1.4.77 00-AA-21-4A-2F-9A</span></p>
<p class="quote"><i>“One resolution I have made, and try always to keep, is this: To rise above little things” - John Burroughs</i> </p>
<p><b>Related:</b><br>
<br>
<a href="route.html">ROUTE</a> - Manipulate network routing tables<br>
<a href="https://support.microsoft.com/kb/199773">Q199773</a> - Behaviour of Gratuitous ARP <br>
<a href="https://support.microsoft.com/kb/140859">Q140859</a> - Win NT TCP/IP Routing Basics</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="arp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
