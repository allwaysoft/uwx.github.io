---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>ping</h1> 
<p>Test a network connection. When using ping for fault isolation, it should first be run on the local host, to verify that the local network interface is up and running. Then, hosts and gateways further and further away should be `pinged'.</p>
<pre>Syntax<br>      ping [<i>options</i>] <i>destination_host</i>

Options

   -c <i>count</i>   Stop after sending (and receiving) <i>count</i> ECHO_RESPONSE packets.

   -d         Debug, Set the SO_DEBUG option on the socket being used.

   -f         Flood ping, output packets as fast as they come back or 100 times per second.

   -i <i>wait</i>    Set an interval of <i>wait </i>seconds between sending each packet. default=one second.
              (incompatible with -f)

   -l <i>preload</i> If preload is specified, ping sends that many packets as fast as
              possible before falling into its normal mode of behavior.

   -n         Numeric output only. No attempt will be made to lookup symbolic
              names for host addresses.
   -p <i>pattern</i>
              Specify up to 16 `pad' bytes to fill out the packet sent.
              This is useful for diagnosing data-dependent problems in a
              network. eg, `-p ff' will fill the packet sent with all ones.

   -q         Quiet output. Only display the summary lines at startup time and when finished.
 
   -R         Record route. Includes the RECORD_ROUTE option in the ECHO_REQUEST packet and
              display the route buffer on returned packets.
              Note that the IP header is only large enough for nine such routes.
              Many hosts ignore or discard this option.
 
   -r         Bypass the normal routing tables and send directly to a host on an attached network.
              If the host is not on a directly-attached network, an error is returned.
              This option can be used to ping a local host through an interface that has no route through it
              (e.g., after the interface was dropped by routed(8)).

   -s <i>packetsize</i>  The number of data bytes to be sent.
                  The default is 56, which translates into 64 ICMP data bytes when combined with
                  the 8 bytes of ICMP header data.
   -v         Verbose output. ICMP packets other than ECHO_RESPONSE that are received are listed.
</pre>
<p> Ping is intended for use in network testing, measurement and management. Because of the load it can impose on the network, it is unwise to use ping during normal operations or from automated scripts. </p>
<p><b>Flood Ping</b><br>
For every ECHO_REQUEST sent a period `.' is printed, while for every ECHO_REPLY received a backspace is printed. This provides a rapid display of how many packets are being dropped. Only the super-user can use this option. This can be very hard on a network and should be used with caution.</p>
<p>Round-trip times and packet loss statistics are computed. If duplicate packets are received, they are not included in the packet loss calculation, although the round trip time of these packets is used in calculating the minimum/average/maximum round-trip time numbers. When the specified number of packets have been sent (and received) or if the program is terminated with a SIGINT, a brief summary is displayed.</p>
<p>Flood pinging is not recommended in general, and flood pinging the broadcast address should only be done under very controlled conditions.</p>
<p><b>ICMP Packet Details</b><br>
An IP header without options is 20 bytes. An ICMP ECHO_REQUEST packet contains an additional 8 bytes worth of ICMP header followed by an arbitrary amount of data. When a packetsize is given, this indicated the size of this extra piece of data (the default is 56). Thus the amount of data received inside of an IP packet of type ICMP ECHO_REPLY will always be 8 bytes more than the requested data space (the ICMP header).</p>
<p> If the data space is at least eight bytes large, ping uses the first eight bytes of this space to include a timestamp which it uses in the computation of round trip times. If less than eight bytes of pad are specified, no round trip times are given.</p>
<p><b>Duplicate and Damaged Packets</b><br>
Ping will report duplicate and damaged packets. <br>
Duplicate packets  are rarely; if ever; a good sign, although the presence of low levels of duplicates might not always be cause for alarm.<br>
Damaged packets are a serious cause for alarm and often indicate broken hardware somewhere in the ping packet's path (in the network or in the hosts).</p>
<p><b>Different Data Patterns</b><br>
The (inter)network layer should never treat packets differently depending on the data contained in the data portion. Unfortunately, data-dependent<br>
problems have been known to sneak into networks and remain undetected for long periods of time. If you have a data-dependent problem you will probably 
have to do a lot of testing to find it. If you manage to find a file that either can't be sent across the network or that takes much longer to transfer than other similar length files. You can then examine this file for repeated patterns that you can test using the -p option of ping.
</p><p><b>TTL Details</b><br>
The <a href="http://en.wikipedia.org/wiki/Time_to_live">Time To Live</a>, (TTL) value of an IP packet represents the maximum number of IP routers that the packet can go through before being thrown away. In current practice you can expect each router in the Internet to decrement the TTL field by exactly one.</p>
<p> The TCP/IP specification states that the TTL field for TCP packets should be set to 60, but many systems use smaller values (4.3 BSD uses 30, 4.2 used 15).</p>
<p> The maximum possible value of this field is 255, and most Unix systems set the TTL field of ICMP ECHO_REQUEST packets to 255. This is why you will find you can `ping' some hosts, but not reach them with telnet(1) or <a href="ftp.html">ftp</a>.</p>
<p> In normal operation ping prints the ttl value from the packet it receives. When a remote system receives a ping packet, it can do one of three things with the TTL field in its response:</p>
<ul>
<li> Not change it; this is what Berkeley Unix systems did before the 4.3BSD-Tahoe release. In this case the TTL value in the received packet will be 255 minus the number of routers in the round-trip path.</li>
<li> Set it to 255; this is what current Berkeley Unix systems do. In this case the TTL value in the received packet will be 255 minus the number of routers in the path from the remote system to the pinging host.</li>
<li> Set it to some other value. Some machines use the same value for ICMP packets that they use for TCP packets, for example either 30 or 60. Others can  use completely wild values.</li>
</ul>
<p class="quote"> <i>"There's a Nong Nang Ning,
Where the trees go Ping!" ~ Spike Milligan </i> </p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/ping.8.html">ping man page</a> - Apple.com<br>
netstat - show network status<br>
ifconfig - configure network interface parameters<br>
routed - network RIP and router discovery routing daemon</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
