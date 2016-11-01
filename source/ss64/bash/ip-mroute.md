---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip mroute</a></h1>
<p>Multicast routing cache management - 
list mroute cache entries.<br>
<span class="code">mroute</span> can be abbreviated to <span class="code">mr</span></p>
<pre>Syntax
      <b>ip mroute show</b> [ <i>PREFIX</i> ] [ from <i>PREFIX</i> ] [ iif <i>DEVICE</i> ]

Key
   to <i>PREFIX</i> (default)
      the prefix selecting the destination multicast addresses to list. 
   iif <i>NAME</i>
      The interface on which multicast packets are received. 
   from <i>PREFIX</i>
      The prefix selecting the IP source addresses of the multicast route. </pre>
<p>mroute objects are multicast routing cache entries created by a user level mrouting daemon (f.e. pimd or mrouted ). Due to the limitations of the current interface to the multicast routing engine, it is impossible to change mroute objects administratively, so we may only display them. This limitation will be removed in the future. <br>
</p>
<p class="quote">“I can't change the direction of the wind, but I can adjust my sails to always reach my destination” ~ Jimmy Dean</p><p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ip-mroute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

