---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip maddress</a></h1>
<p>Multicast addresses management.<br>
<span class="code">maddress</span> can be abbreviated to <span class="code">m</span> or <span class="code">maddr</span><br>
</p>
<p><span class="code">ip maddress add</span> - add a multicast address.<br>
<span class="code">ip maddress delete</span> - delete a multicast address.<br>
<span class="code">ip maddress show</span> - list multicast addresses.</p>
<pre>Syntax
      <b>ip maddr</b> [ add | del ] <i>MULTIADDR</i> dev <i>STRING</i>

      <b>ip maddr show</b> [ dev STRING ]

Key
   address <i>LLADDRESS</i> (default)
      The link layer multicast address.

   dev <i>NAME</i>
      The device to join/leave this multicast address.  </pre>
<p>These commands attach/detach a static link layer multicast address to listen on the interface. 
Note that it is impossible to join protocol multicast groups statically.
 This command only manages link layer addresses.<br>
</p>
<p class="quote">“Those who flee temptation generally leave a forwarding address” ~ Lane Olinghouse</p><p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ip-maddress.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

