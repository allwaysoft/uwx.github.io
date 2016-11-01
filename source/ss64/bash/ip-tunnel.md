---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip tunnel</a></h1>
<p>Tunnel configuration. <span class="code">tunnel</span> can be abbreviated to <span class="code">t</span></p>
<p><span class="code">ip tunnel add</span> - add a new tunnel<br>
<span class="code">ip tunnel change</span> - change an existing tunnel <br>
<span class="code">ip tunnel delete</span> - destroy a tunnel<br>
<span class="code">ip tunnel prl</span> - potential router list (ISATAP only)<br>
<span class="code">ip tunnel show</span> - list tunnels</p>
<pre>Syntax
      <b>ip tunnel</b> { add | change | del | show | prl } [ <i>NAME</i> ] [ mode <i>MODE </i>] [ remote <i>ADDR </i>]
         [ local <i>ADDR</i> ] [ [i|o]seq ] [ [i|o]key <i>KEY </i>] [ [i|o]csum ] ] [ encaplimit <i>ELIM </i>] [ ttl <i>TTL </i>]
            [ tos <i>TOS</i> ] [ flowlabel <i>FLOWLABEL </i>] [ prl-default <i>ADDR </i>] [ prl-nodefault <i>ADDR </i>] [ prl-delete <i>ADDR</i> ]
               [ [no]pmtudisc ] [ dev <i>PHYS_DEV</i> ] [ dscp inherit ]

         MODE := { ipip | gre | sit | isatap | ip6ip6 | ipip6 | any }

         ADDR := { <i>IP_ADDRESS</i> | any }

         TOS := { <i>NUMBER</i> | inherit }

         ELIM := { none | 0..255 }

         TTL := { 1..255 | inherit }

         KEY := { <i>DOTTED_QUAD</i> | <i>NUMBER</i> }

         TIME := NUMBER[s|ms|us|ns|j]

Key
   name <i>NAME</i> (default)
      select the tunnel device name. 
   mode <i>MODE</i>
      set the tunnel mode. Available modes depend on the encapsulating address family.
      Modes for IPv4 encapsulation available: ipip, sit, isatap and gre.
      Modes for IPv6 encapsulation available: ip6ip6, ipip6 and any. 
   remote <i>ADDRESS</i>
      set the remote endpoint of the tunnel. 
   local <i>ADDRESS</i>
      set the fixed local address for tunneled packets. It must be an address on another interface of this host. 
   ttl <i>N</i>
      set a fixed TTL <i>N</i> on tunneled packets. <i>N</i> is a number in the range 1--255.
      0 is a special value meaning that packets inherit the TTL value.
      The default value for IPv4 tunnels is: inherit. The default value for IPv6 tunnels is: 64.

   tos <i>T</i>
   dsfield <i>T</i>
   tclass <i>T</i>
      set a fixed TOS (or traffic class in IPv6) <i>T</i> on tunneled packets.
      The default value is: inherit. 
   dev <i>NAME</i>
      bind the tunnel to the device <i>NAME</i> so that tunneled packets will only be routed
      via this device and will not be able to escape to another device when the route to endpoint changes. 
   nopmtudisc
      disable Path MTU Discovery on this tunnel.
      It is enabled by default. Note that a fixed ttl is incompatible with this
      option: tunnelling with a fixed ttl always makes pmtu discovery. 
   key <i>K</i>

   ikey <i>K</i>

   okey <i>K</i>
     ( only GRE tunnels ) use keyed GRE with key <i>K</i>. K is either a number or an
     IP address-like dotted quad. The key parameter sets the key to use in both directions.
     The ikey and okey parameters set different keys for input and output.
   csum, icsum, ocsum
      ( only GRE tunnels ) generate/require checksums for tunneled packets.
      The ocsum flag calculates checksums for outgoing packets.
      The icsum flag requires that all input packets have the correct checksum.
      The csum flag is equivalent to the combination icsum ocsum. 
   seq, iseq, oseq
      ( only GRE tunnels ) serialize packets. The oseq flag enables sequencing of
      outgoing packets. The iseq flag requires that all input packets are serialized.
      The seq flag is equivalent to the combination iseq oseq. It isn't work. Don't use it. 
   dscp inherit
      ( only IPv6 tunnels ) Inherit DS field between inner and outer header. 
   encaplim <i>ELIM</i>
      ( only IPv6 tunnels ) set a fixed encapsulation limit. Default is 4. 
   flowlabel <i>FLOWLABEL</i>
      ( only IPv6 tunnels ) set a fixed flowlabel. </pre>
<p> ip tunnel prl - potential router list (ISATAP only)<br>
</p>
<pre>   dev <i>NAME</i>
      mandatory device name. 
   prl-default <i>ADDR</i>
   prl-nodefault <i>ADDR</i>
   prl-delete <i>ADDR</i>
      Add or delete <i>ADDR</i> as a potential router or default router. </pre>
<p> ip tunnel show - list tunnels, This command has no arguments. </p>
<p>tunnel objects are tunnels, encapsulating packets in IP packets and then sending them over the IP infrastructure. The encapulating (or outer) address family is specified by the -f option. The default is IPv4. <br>
</p>
<p class="quote">“I felt as though I was driving in a tunnel. The whole circuit became a tunnel... I had reached such a high level of concentration that it was as if the car and I had become one. Together we were at the maximum. I was giving the car everything - and vice versa” ~ Ayrton Senna</p><p><b>Related:</b></p>
<p><a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ip-tunnel.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

