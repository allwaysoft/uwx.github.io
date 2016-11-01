---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip monitor</a></h1>
<p>State monitoring, monitor the state of devices, addresses and routes continuously.</p>
<pre>Syntax
      <b>ip monitor</b> [ all | <i>LISTofOBJECTS</i> ]

Key
   <i>LISTofOBJECTS</i> is the list of object types that we want to monitor.
   It may contain link, address and route.
   If no file argument is given, ip opens RTNETLINK, listens on it and dumps state
   changes in the format described in previous sections.</pre>
<p> If a file name is given, it does not listen on RTNETLINK, but opens the file containing RTNETLINK messages saved in binary format and dumps them. Such a history file can be generated with the rtmon utility. This utility has a command line syntax similar to ip monitor. Ideally, rtmon should be started before the first network configuration command is issued. For example if you insert:<br>
 <span class="code">rtmon file /var/log/rtmon.log </span><br>
in a startup script, you will be able to view the full history later.<br>
<br>
Certainly, it is possible to start rtmon at any time. It prepends the history with the state snapshot dumped at the moment of starting.<br>
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
<div id="bl" class="footer"><a href="ip-monitor.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

