---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ifup / ifdown</h1> 
<p>Bring a network interface up or down </p>
<pre>Syntax
      ifup [<i>options</i>] -a | <i>IFACE</i>...
     
      ifdown [<i>options</i>] -a|IFACE...

Options
   -a, --all       If given to ifup, affect all interfaces marked auto.
                   Interfaces are brought up in the order in which they are defined in /etc/network/interfaces.

                   If given to ifdown, affect all defined interfaces.
                   Interfaces are brought down in the order in which they are currently listed in the state file.
                   Only interfaces defined in /etc/network/interfaces will be brought down.

   --force         Force configuration or deconfiguration of the interface.

   --allow=<i>CLASS</i>   Only allow interfaces listed in an allow-CLASS line in /etc/network/interfaces
                   to be acted upon.
   -i <i>FILE</i>
   --interfaces=<i>FILE
               </i>    Read interface definitions from FILE instead of from /etc/network/interfaces.

   -n, --no-act    Don't configure any interfaces or run any "up" or "down" commands.

   --no-mappings   Don't run any mappings. See interfaces for more information about the mapping feature.

   -v, --verbose   Show commands as they are executed.

   -h, --help      Display help for ifup

   -V, --version   Show copyright and version information.
</pre>
<p><b>Examples</b></p>
<p>Bring up all the interfaces defined with auto in /etc/network/interfaces</p>
<p class="code">ifup -a</p>
<p>Bring up interface eth0</p>
<p class="code">ifup eth0</p>
<p>Bring down all interfaces that are currently up.</p>
<p class="code">ifdown -a</p>
<p><i class="quote">"Either I'm dead or my watch has stopped" ~ Groucho Marx's last words</i></p>
<p><b>Related:</b></p>
<p>ifplugd - A link detection daemon for ethernet devices <br>
<a href="logout.html">logout</a> - Exit a login shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ifup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

