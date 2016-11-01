---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsPing (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Measure network performance. In addition to standard ICMP ping  functionality, PsPing can report the latency of connecting to TCP ports, the  latency of TCP round-trip communication between systems, and the TCP  bandwidth available to a connection between systems. Besides obtaining  min, max, and average values in 0.01ms resolution, you can also use PsPing to generate histograms of the results that are easy to import into a spreadsheet.</p>
<pre>Syntax (ICMP ping)
      psping [[-6]|[-4]] [-h [<i>buckets</i>]] [-i <i>interval</i>] [-l <i>requestsize</i>
        [-q] [-t|-n <i>count</i>] [-w <i>count</i>] <i>destination</i>

Key
   -h   Print histogram (default bucket count is 20).
   -i   Interval in seconds. Specify 0 for fast ping.
   -l   Request size.
   -n   Number of pings.
   -q   Don't output during pings.
   -t   Ping until stopped with Ctrl+C and type Ctrl+Break for statistics.
   -w   Warmup with the specified number of iterations (default is 1).
   -4   Force using IPv4.
   -6   Force using IPv6. For high-speed ping tests use -q and -i 0.
   -? I Usage for ICMP ping.

Syntax (TCP ping)
      psping [[-6]|[-4]] [-h [<i>buckets</i>]] [-i <i>interval</i>] [-l <i>requestsize</i>
         [-q] [-t|-n <i>count</i>] [-w <i>count</i>] <i>destination</i>:<i>destport
</i>Key
   -h   Print histogram (default bucket count is 20).
   -i   Interval in seconds. Specify 0 for fast ping.
   -l   Request size.
   -n   Number of pings.
   -q   Don't output during pings.
   -t   Ping until stopped with Ctrl+C and type Ctrl+Break for statistics.
   -w   Warmup with the specified number of iterations (default is 1).
   -4   Force using IPv4.
   -6   Force using IPv6. For high-speed ping tests use -q and -i 0.
   -? T Usage for TCP ping.

Syntax (TCP latency)
      server: psping [[-6]|[-4]] -s <i>source:sourceport</i> client: psping
         [[-6]|[-4]] [-h [buckets]] [-r] -l <i>requestsize</i>]
            -n <i>count</i> [-w <i>count</i>] <i>destination:destport</i>
Key
   -h   Print histogram (default bucket count is 20).
   -l   Request size.
   -n   Number of sends/receives.
   -r   Receive from the server instead of sending.
   -w   Warmup with the specified number of iterations (default is 5).
   -4   Force using IPv4.
   -6   Force using IPv6.
   -? L Usage for Latency test.
 The server can serve both latency and bandwidth tests and remains active until you terminate it with Control-C.

Syntax (TCP bandwidth)
      server: psping [[-6]|[-4]] -s <i>source:sourceport</i> client: psping
         [[-6]|[-4]] -b [-h [<i>buckets</i>]] [-r] -l <i>requestsize</i> -n <i>count</i> 
            [-i <i>outstanding</i>] [-w <i>count</i>] <i>destination:destport</i>
Key
   -b   Bandwidth test.
   -h   Print histogram (default bucket count is 20).
   -i   Number of outstanding I/Os (default is min of 16 and 2x CPU cores).
   -l   Request size.
   -n   Number of sends/receives.
   -r   Receive from the server instead of sending.
   -w   Warmup for the specified iterations (default is 2x CPU cores).
   -4   Force using IPv4.
   -6   Force using IPv6.
   -? B Usage for Bandwidth test.
 The server can serve both latency and bandwidth tests and remains active until you terminate it with Control-C.

   -accepteula Suppress the display of the license dialog.</pre>
<p>Installation: Copy PsPing onto your executable <a href="path.html">path</a>. Typing "psping" will display help.</p>
<p>When launched for the first time, PsPing will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsPing\EulaAccepted=0x01</span></p>
<p><b>Examples:</b><br><br>
Execute an ICMP ping test for 10 iterations with 3 warmup iterations:</p>
<p class="code">psping -n 10 -w 3 workstation64</p>
<p>To  execute a TCP connect test, specify the port number. The following  command executes connect attempts against the target as quickly as  possible, only printing a summary when finished with the 100 iterations  and 1 warmup iteration:</p>
<p class="code">psping -n 100 -i 0 -q workstation64:80</p>
<p>To  configure a server for latency and bandwidth tests, simply specify the  -s option and the source address and port the server will bind to:</p>
<p class="code">psping -s 10.5.2.2:5000</p>
<p>A  buffer size is required to perform a TCP latency test. This example  measures the round trip latency of sending an 8KB packet to the target  server, printing a histogram with 100 buckets when completed:</p>
<p class="code">psping -l 8192 -n 10000 -h 100 192.168.2.2:5000</p>
<p>This  is the same command except with a -b option, which executed against the  same server performs a bandwidth test. Note that the test must run for  at least one second after warmup for a histogram to generate:</p>
<p class="code">psping -b -l 8192 -n 10000 -h 100 192.168.2.2:5000</p>
<p class="quote"><i>“You may poke a man's fire after you've known him for seven years” ~ English Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="tracert.html">TRACERT</a> - Trace route to a remote host<br>
<a href="ipconfig.html">IPCONFIG</a> - IP Configuration<br>
<a href="pathping.html">PATHPING</a> - Trace route and provide network latency and packet loss for each router and link in the path.<br>
Powershell equivalent: <a href="../ps/test-connection.html">Test-Connection</a> - Ping one or more computers, <a href="../ps/syntax-psping.html">psp</a> function<br>
Equivalent bash command (Linux):
ping - Test a network connection</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="psping.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
