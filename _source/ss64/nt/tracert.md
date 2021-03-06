---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TRACERT</h1> 
<p>Trace Route - Find the IP address of any remote host. TRACERT 
  is useful for troubleshooting large networks where several paths can be taken 
  to arrive at the same point, or where many intermediate systems (routers or 
bridges) are involved. </p>
<pre>Syntax<br>      TRACERT [<i>options</i>] <i>target_name</i>

Key
   <i>target_name</i>     The HTTP or UNC name of the host

Options:
    -d             Do not resolve addresses to hostnames.
                   (avoids performing a DNS lookup)

    -h <i>max_hops</i>    Maximum number of hops to search for target.(default=30)

    -j <i>host-list</i>   Trace route along given host-list. 
                   up to 9 hosts in dotted decimal notation, separated by spaces.

    -w <i>timeout</i>     Wait <i>timeout</i> milliseconds for each reply.</pre>
<p>The functionality of TRACERT is the same under all versions of 
  windows but the output is cosmetically improved under XP.</p>
<p>Tracert uses the IP TTL field and ICMP error messages to determine 
  the route from one host to another through a network. </p>
<p>Care must be 
    taken with tracert as it shows the optimal route, not necessarily 
    the actual route. To be accurate, it is possible to <b>ping</b> from a UNIX 
    machine back to the PC using the -R option to record the route taken - but only 
    if the particular network devices support it. </p>
<p>This diagnostic tool determines the path taken to a destination by sending ICMP Echo Request messages with varying Time to Live (TTL) values to the destination. </p>
<p><b>TTL (Time to Live) calculation</b><br>TTL is effectively a count of the (maximum) number of links to the destination host. Each router along the path decrements the TTL in an IP packet by at least 1 before forwarding it. </p>
<p>When the TTL on a packet reaches 0, the router is expected to return an ICMP <i>Time Exceeded</i> message to the source computer. </p>
<p>Tracert determines the path by sending the first Echo Request message with a TTL of 1 and incrementing the TTL by 1 on each subsequent transmission until either the target host responds or the maximum number of hops is reached. </p>
<p>This process relys on intermediate routers to return  ICMP <i>Time Exceeded</i> messages. However, some routers do not return <i>Time Exceeded </i>messages for packets with expired TTL values and are invisible to the tracert command. In this case, a row of asterisks (*) is displayed for that hop.</p>
<p><b>Firewalls<br>
  </b>Many firewalls will block ICMP traffic by default.
  If an attacker is able to forge ICMP redirect packets, he or she can alter the routing tables on the host and possibly subvert the security of the host by causing traffic to flow via a path you didn't intend. <br>
  <b><br>
  Examples</b></p>
<pre> TRACERT www.doubleclick.net

 TRACERT 123.45.67.89

 TRACERT local_server</pre>
<p><i class="quote">  Get your kicks on ROUTE 66 ~ Jack 
  Kerouac.</i><b><br>
  <br>
  Related:</b><br>
  <br>
  <a href="nslookup.html">NSLOOKUP</a> - Name server lookup <br>
  <a href="ping.html">PING</a> - Test a network connection<br>
  <a href="pathping.html">PATHPING</a> - Trace route and provide network latency and packet loss for each router and link in the path.<br>
  <a href="route.html">ROUTE</a> - Manipulate network routing tables <br>
  <br>
<a href="https://support.microsoft.com/kb/314868/">Q314868</a> - How to use TRACERT to troubleshoot TCP/IP<br>
  <a href="http://www.pc-help.org/trace.htm">TRACE.bat</a> - PCHelp's handy report on any given Internet address<br>
  <a href="http://www.tracert.com/">tracert.com</a> - trace routes from remote locations<br>
  Equivalent bash command (Linux): <a href="../bash/traceroute.html">traceroute</a> - Print the route packets take to network host.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tracert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

