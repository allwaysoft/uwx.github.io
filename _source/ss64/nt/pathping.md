---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PATHPING</h1>
<p>Trace route and provide network latency and packet loss for each router and link in the path. Combines the functionality of PING and TRACERT.</p>
<pre>Syntax
      PATHPING [-n] [-h <i>max_hops</i>] [-g <i>host_list</i>] [-p <i>period</i>]
         [-q <i>num_queries</i>] [-w <i>timeout</i>] [-i <i>IPAddress</i>] [-4 ] [-6 ][TargetName]

Key
   -g <i>host_list</i> - Loose source route along host-list.
   -h <i>max_hops </i> - Maximum number of hops to search for target.
   -i <i>address</i>   - Use the specified source address.
   -n           - Do not resolve addresses to hostnames.
   -p <i>period</i>    - Wait <i>period </i>milliseconds between pings.
   -q <i>num_queries </i>- Number of queries per hop.
   -w <i>timeout</i>   - Wait <i>timeout </i>milliseconds for each reply.
   -P    - Test for RSVP PATH connectivity.
   -R    - Test if each hop is RSVP aware.
   -T    - Test connectivity to each hop with Layer-2 priority tags.
   -4    - Force using IPv4.
   -6    - Force using IPv6.
</pre>
<p>PathPing is invaluable for determining which routers or subnets are having network problems - it displays the degree of packet loss at any given router or link.</p>
<p>Pathping sends multiple Echo Request messages to each router between a source and destination over a period of time and computes aggregate results based on the packets returned from each router. </p>
<p>Pathping performs the equivalent of the tracert command by identifying which routers are on the path. </p>
<p>To avoid network congestion and to minimize the effect of burst losses, pings should be sent at a sufficiently slow pace (not too frequently.) </p>
<p>When  -p is specified, pings are sent individually to each intermediate hop. When  -w is specified, multiple pings can be sent in parallel. It's therefore possible to choose a <i>Timeout</i> parameter that is less than the wait <i>Period</i> * Number of hops.</p>
<p><b>Firewalls<br>
</b>Like tracert PathPing uses  Internet Control Message Protocol (ICMP) over TCP/IP. Many firewalls will block ICMP traffic by default. If an attacker is able to forge ICMP redirect packets, he or she can alter the routing tables on the host and possibly subvert the security of the host by causing traffic to flow via a path you didn't intend.</p>
<p class="quote"><i>"The path changes, so too must the traveler" ~ Tarek Verena</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="browstat.html">BROWSTAT</a> - Get domain, browser and PDC info<br>
  <a href="ipconfig.html">IPCONFIG</a> - IP Configuration<br>
  <a href="netstat.html">NETSTAT</a> - Display networking statistics (TCP/IP) 
  <br>
  <a href="ping.html">PING</a> - Test a network connection<br>
  <a href="tracert.html">TRACERT</a> - Trace route to a remote host<br>
  Equivalent bash command (Linux): <a href="../bash/mtr.html">mtr</a> - Network diagnostics (traceroute/ping)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pathping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

