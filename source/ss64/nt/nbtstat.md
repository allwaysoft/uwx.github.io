---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NBTSTAT.exe</h1> 
<p>Display protocol statistics and current TCP/IP connections using 
NBT (NetBIOS over TCP/IP). </p>
<pre>Syntax
   By Name
      NBTSTAT -a <i>Remote_host_Name</i> [<i>options</i>] [<i>interval</i>] 

   By IP address
      NBTSTAT -A <i>IP_address</i> [<i>options</i>] [<i>interval</i>]

Key
  -a   (adapter status) List the remote machine's name table given its name
  -A   (Adapter status) List the remote machine's name table given its IP address
  -c   (cache)          List NBT's cache of remote [machine] names
                        and their IP addresses
  -n   (names)          List local NetBIOS names.
  -r   (resolved)       List names resolved by broadcast and via WINS
  -R   (Reload)         Purge and reloads the remote cache name table
  -S   (Sessions)       List sessions table with the destination IP addresses
  -s   (sessions)       List sessions table converting destination IP
                        addresses to computer NETBIOS names.
  -RR  (ReleaseRefresh) Send Name Release packets to WINS and then, starts Refresh

  interval              Redisplay selected statistics, pausing interval seconds
                        between each display. Press Ctrl+C to stop redisplaying
                        statistics.</pre>
<p class="quote"><i>“I could prove God statistically” ~ George Gallup </i></p>
<p><b>Related:</b><br>
<a href="ipconfig.html"><br>
IPCONFIG</a> - IP Configuration<br>
<a href="netstat.html">NETSTAT</a> - Display networking statistics (TCP/IP) 
<br>
<a href="ping.html">PING</a> - Test a network connection<br>
<a href="tracert.html">TRACERT</a> - Trace route to a remote host<br>
<a href="https://support.microsoft.com/kb/163409">Q163409</a> - The 16th character 
is a NetBIOS suffix<br>
<a href="https://support.microsoft.com/kb/119493">Q119493</a> - NetBIOS over 
TCP/IP Name Resolution <br>
<a href="https://support.microsoft.com/kb/314053">Q314053</a> - TCP/IP and 
NBT Configuration Parameters<br>
Equivalent bash command (Linux): trace - Find the IP address of a remote host</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nbtstat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

