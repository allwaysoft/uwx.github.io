---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1><a href="ip.html">ip neighbour</a></h1>
<p>Neighbour/arp tables management. <br>
<span class="code">neighbour</span> can be abbreviated to <span class="code">n</span> or <span class="code">neigh</span></p>
<p> <span class="code">ip neighbour add</span> - Add a new neighbour entry <br>
<span class="code">ip neighbour change</span> - Change an existing entry<br>
<span class="code">ip neighbour replace</span> - Add a new entry or change an existing one<br>
<span class="code">ip neighbour delete</span> - Delete a neighbour entry<br>
<span class="code">ip neighbour flush</span> - Flush neighbour entries<br>
<span class="code">ip neighbour show</span> - List neighbour entries</p>
<pre>Syntax
      <b>ip neighbour</b> { add | del | change | replace } { <i>ADDR</i> [ lladdr <i>LLADDR</i> ]
                  [ nud { permanent | noarp | stale | reachable } ] | proxy <i>ADDR</i> } [ dev <i>DEV</i> ]

      <b>ip neighbour</b> { show | flush } [ to <i>PREFIX</i> ] [ dev <i>DEV</i> ] [ nud <i>STATE</i> ]

Key
   to <i>ADDRESS</i> (default)
      The protocol address of the neighbour. It is either an IPv4 or IPv6 address. 
   dev <i>NAME</i>
      The interface to which this neighbour is attached. 
   lladdr <i>LLADDRESS</i>
      The link layer address of the neighbour. LLADDRESS can also be null. 
   nud <i>NUD_STATE</i>
      the state of the neighbour entry. nud is an abbreviation for 'Neighbour Unreachability Detection'.
      for 'ip neigh show' this option may be given more than once.
      (If this option is absent, ip lists all entries except for none and noarp.)
      The state can take one of the following values: 
         permanent - the neighbour entry is valid forever and can be only be removed administratively.
         noarp - the neighbour entry is valid.
                 No attempts to validate this entry will be made but it can be removed when its lifetime expires.
         reachable - the neighbour entry is valid until the reachability timeout expires.
         stale - the neighbour entry is valid but suspicious.
                 This option to ip neigh does not change the neighbour state if it was
                 valid and the address is not changed by this command.
         all  -  List all states (ip neigh show only)</pre>
<p>Warning: Attempts to delete or manually change a noarp entry created by the kernel may result in unpredictable behaviour. Particularly, the kernel may try to resolve this address even on a NOARP interface or if the address is multicast or broadcast.</p>
<p>The arguments for 'del' are the same as with 'add', except that lladdr and nud are ignored.
flush has the same arguments as show. The differences are that it does not run
 when no arguments are given, and that the default neighbour states to be flushed do not include permanent and noarp.</p>
<p>With the <span class="code">-statistics</span> option, the command becomes verbose. It prints out the number of deleted neighbours and the number of rounds made to flush the neighbour table. If the option is given twice, <span class="code">ip neigh flush</span> also dumps all the deleted neighbours. </p>
<p>Neighbour objects establish bindings between protocol addresses and link layer addresses for hosts sharing the same link. Neighbour entries are organized into tables. The IPv4 neighbour table is known by another name - the ARP table.</p>
<p>The corresponding commands display neighbour bindings and  properties, add new neighbour entries and delete old ones.</p>
<p><b>Examples</b>:</p>
<p>List neighbour entries:<br>
<span class="code">$ ip neighbour show</span></p>
<p>Invalidate or delete an ARP entry for the neighbour 192.168.6.4 on the device eth1:<br>
<span class="code">$ ip neighbour del 192.168.6.4 dev eth1 </span></p>
<p>Add a permanent ARP entry for neighbour 192.168.6.4 on  device eth0:<br>
<span class="code">$ 
ip neighbour add 192.168.6.4 lladdr aa:bb:cc:dd:ee:ff dev eth0 nud permanent<br>
</span></p>
<p>Flush the neighbour/arp tables:<br>
<span class="code">$ ip neighbour  flush <a href="ip.html">-s -s</a> 192.168.6.4</span><br>
</p>
<p class="quote">“It is remarkable how easily and insensibly we fall into a particular route, and make a beaten track for ourselves” ~ Henry David Thoreau</p>
<p><b>Related:</b></p>
<p>arp - address resolution display and control<br>
<a href="ip.html">ip</a> - Routing, devices and tunnels<br>
Equivalent Windows  command: <a href="../nt/route.html">ROUTE</a> - Manipulate network routing tables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ip-neighbour.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

