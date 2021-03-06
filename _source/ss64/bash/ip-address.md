---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip address</a> add | del</h1> 
<p>The ip address add and del commands, add new addresses or delete old ones.<br> 
<span class="code">address</span> can be abbreviated to <span class="code">a</span> or <span class="code">addr</span><br>
<br>
<span class="code">ip address add</span> - Add new protocol address.<br>
<span class="code">ip address delete</span> - Delete protocol address<br>
<br>
The device name is a required argument. The rest are optional. If no arguments are given, the first address is added/deleted.</p>
<pre>Syntax
      <b>ip address</b> { add | del } <i>IFADDR</i> dev <i>STRING</i>

Key
   dev <i>NAME</i>
      The name of the device to add the address to. 
   local <i>ADDRESS</i> (default)
      The address of the interface. The format of the address depends on the protocol.
      It is a dotted quad for IP and a sequence of hexadecimal halfwords separated by colons for IPv6.
      The ADDRESS may be followed by a slash and a decimal number which encodes the network prefix length. 
   peer <i>ADDRESS</i>
      The address of the remote endpoint for pointopoint interfaces.
      Again, the ADDRESS may be followed by a slash and a decimal number, encoding the network prefix
      length. If a peer address is specified, the local address cannot have a prefix length.
      The network prefix is associated with the peer rather than with the local address. 
   broadcast <i>ADDRESS</i>
      The broadcast address on the interface.
      It is possible to use the special symbols '+' and '-' instead of the broadcast address.
      In this case, the broadcast address is derived by setting/resetting the host bits of the interface prefix. 
   label <i>NAME</i>
      Each address may be tagged with a label string.
      In order to preserve compatibility with Linux-2.0 net aliases, this string must coincide
      with the name of the device or must be prefixed with the device name followed by colon. 
   scope <i>SCOPE_VALUE</i>
      The scope of the area where this address is valid.
      The available scopes are listed in file /etc/iproute2/rt_scopes.
      Predefined scope values are: 

         global - the address is globally valid.
         site - (IPv6 only) the address is site local, i.e. it is valid inside this site.
         link - the address is link local, i.e. it is valid only on this device.
         host - the address is valid only inside this host.</pre>
<p>The address is a protocol (IP or IPv6) address attached to a network device. Each device must have at least one address to use the corresponding protocol. It is possible to have several different addresses attached to one device. These addresses are not discriminated, so that the term alias is not quite appropriate for them and we do not use it in this document. </p>
<p><b>Examples</b>:</p>
<p>List and show all ip address associated on on all network interfaces:<br>
<span class="code">$ 
ip address</span><br>
or just<br>
<span class="code">$ ip a</span></p>
<p>Remove and flush all IP v4 addresses on all the Ethernet interfaces:</p>
<p class="code">$ ip -4 address flush label "eth*"</p>
<p>Assign the IP address 192.168.1.200/255.255.255.0 to device eth0:</p>
<p class="code"> $ ip address add 192.168.1.200/255.255.255.0 dev eth0</p>
<p>Delete the IP address 192.168.1.200/255.255.255.0 from device eth0: </p>
<p class="code">$ ip address del 192.168.1.200/255.255.255.0 dev eth0</p>
<p class="quote">“It is remarkable how easily and insensibly we fall into a particular route, and make a beaten track for ourselves” ~ Henry David Thoreau</p>
<p><b>Related:</b></p>
<p>
<a href="ip.html">ip</a> - Routing, devices and tunnels<br>
<a href="ifconfig.html">ifconfig</a> - Configure a network interface.<br>
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

