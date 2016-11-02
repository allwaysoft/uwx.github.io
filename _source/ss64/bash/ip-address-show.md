---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip address</a> show | flush</h1> 
<p>Look at protocol addresses or flush protocol addresses.<br>
<span class="code">address</span> can be abbreviated to <span class="code">a</span> or <span class="code">addr</span></p>
<pre>Syntax
      <b>ip address</b> { show | flush } [ dev <i>STRING</i> ] [ scope <i>SCOPE-ID</i> ] [ to <i>PREFIX</i> ] [ <i>FLAG-LIST</i> ] [ label <i>PATTERN</i> ]

         IFADDR := <i>PREFIX</i> | <i>ADDR</i> peer <i>PREFIX</i> [ broadcast <i>ADDR</i> ] [ anycast <i>ADDR</i> ] [ label <i>STRING</i> ] [ scope <i>SCOPE-ID</i> ]

         SCOPE-ID := [ host | link | global | <i>NUMBER</i> ]

         FLAG-LIST := [ <i>FLAG-LIST</i> ] <i>FLAG</i>

         FLAG := [ permanent | dynamic | secondary | primary | tentative | deprecated ]

Key
   dev <i>NAME</i> (default)
      name of device. 
   scope <i>SCOPE_VAL</i>
      only list addresses with this scope. 
   to <i>PREFIX</i>
      only list addresses matching this prefix. 
   label <i>PATTERN</i>
      only list addresses with labels matching the PATTERN. PATTERN is a usual shell style pattern. 
   dynamic and permanent
      (IPv6 only) only list addresses installed due to stateless address configuration or
      only list permanent (not dynamic) addresses. 
   tentative
      (IPv6 only) only list addresses which did not pass duplicate address detection. 
   deprecated
      (IPv6 only) only list deprecated addresses. 
   primary and secondary
      only list primary (or secondary) addresses.
   -4  shortcut for -family inet. (IPv4)
   -6  shortcut for -family inet6. (IPv6)</pre>
<p><b>ip address flush</b> - flush protocol addresses.<br>
This command flushes the protocol addresses selected by some criteria.<br>
This command has the same arguments as show.<br>
The difference is that it does not run when no arguments are given.<br>
<br>
Warning: This command (and other flush commands described below) is pretty dangerous.<br>
If you make a mistake, it will not forgive it, but will cruelly purge all the addresses.<br>
<br>
With the -statistics option, the command becomes verbose.<br>
It prints out the number of deleted addresses and the number of rounds made to
flush the address list. If this option is given twice, ip addr flush also dumps all
the deleted addresses in the format described in the previous subsection. </p>
<p><b>Examples</b>:</p>
<p>List and show all ip address associated on on all network interfaces:<br>
<span class="code">$ 
ip addr</span><br>
or
<br>
<span class="code">$ 
ip a</span></p>
<p>List the eth0 interface <br>
<span class="code">$ 
ip a show eth0</span></p>
<p class="quote">“It is remarkable how easily and insensibly we fall into a particular route, and make a beaten track for ourselves” ~ Henry David Thoreau</p>
<p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ip-address-show.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

