---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip addrlabel</a></h1>
<p>IPv6 address label is used for address selection described in RFC 3484. Precedence is managed by userspace, and only label is stored in kernel. <span class="code">addrlabel</span> can be abbreviated to <span class="code">addrl</span></p>
<p><span class="code">ip addrlabel add</span> - add an address label.<br>
<span class="code">ip addrlabel del</span> - delete an address label (label is not required)<br>
<span class="code">ip addrlabel list</span> - list address labels<br>
<span class="code">ip addrlabel flush</span> - flush address labels</p>
<pre>Syntax
      <b>ip addrlabel</b> { add | del } prefix <i>PREFIX</i> [ dev <i>DEV</i> ] [ label <i>NUMBER</i> ]

      <b>ip addrlabel</b> { list | flush }

Key
   prefix <i>PREFIX</i>

   dev <i>DEV</i>
      The outgoing interface. 

   label NUMBER
      The label for the prefix. 0xffffffff is reserved. </pre>
<p><b>ip addrlabel flush</b> - flushes the contents of address labels and  does not restore default settings.<br>
<br>
Warning: This command (and other flush commands) is pretty dangerous.<br>
If you make a mistake, it will not forgive it, but will cruelly purge all the addresses.<br>
</p>
<p class="quote">“It is remarkable how easily and insensibly we fall into a particular route, and make a beaten track for ourselves” ~ Henry David Thoreau</p>
<p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

