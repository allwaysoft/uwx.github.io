---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NETSTAT.exe</h1> 
<p>Display current TCP/IP network connections and protocol statistics.</p>
<pre>Syntax
   NETSTAT [<i>options</i>] [-p <i>protocol</i>] [<i>interval</i>]<br>
Key<br>   -a   Display All connections and listening ports.
   -e   Display Ethernet statistics. (may be combined with -s)
   -n   Display addresses and port numbers in Numerical form.
   -r   Display the Routing table.
   -o   Display the Owning process ID associated with each connection.

   -b   Display the exe involved in creating each connection or listening port.<b>*</b>
   -v   Verbose - use in conjunction with -b, to display the sequence of<br>        components involved for all executables.

   -p <i>protocol
      </i>  Show only connections for the protocol specified; 
        can be any of: TCP, UDP, TCPv6 or UDPv6.  
        If used with the -s option then the following protocols
        can also be specified: IP, IPv6, ICMP,or ICMPv6. 

   -s   Display per-protocol statistics.  By default, statistics are
        shown for IP, IPv6, ICMP, ICMPv6, TCP, TCPv6, UDP, and UDPv6;
        (The v6 protocols are not available under 2k and NT4)
        The -p option can be used to display just a subset of these.

   <i>interval</i>     Redisplay statistics, pausing <i>interval </i>seconds between
                each display. (default=once only) Press CTRL+C to stop. </pre>
<p><b>*</b> Where available this will display the sequence of components involved in creating the connection or listening port. (Typically well-known executables which host
multiple independent components.) This option will display the executable name in [ ] at the bottom, with the component it called on top, repeated until TCP/IP is reached. The -b option
can be time-consuming and will fail unless you have sufficient permissions.</p>
<p><span class="quote"><i>"Once you're on the network, you can do a command called NetStat - Network Status - and it lists all the connections to that machine. There were hackers from Denmark, Italy, Germany, Turkey, Thailand ..." ~ <a href="http://www.guardian.co.uk/weekend/story/0,3605,1523143,00.html">Gary McKinnon</a></i></span><br>
<br>
<b>Related:</b><br>
<br>
Dommon.exe - GUI Domain Monitor<br>
<a href="browstat.html">BROWSTAT</a> - Get domain, browser and PDC info <br>
<a href="route.html">ROUTE</a> - Manipulate network routing tables.<br>
<a href="pathping.html">PATHPING</a> - IP trace utility <br>
<a href="ping.html">PING</a> - Test a network connection <br>
Equivalent bash command (Linux): trace - Find the IP address of a remote host</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

