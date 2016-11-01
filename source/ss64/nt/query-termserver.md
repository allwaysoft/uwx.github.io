---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Query Termserver / Qappsrv</h1> 
<p>Display a list of all Terminal server or a Remote Desktop Session Host (RD Session Host) servers on the network.</p>
<pre>Syntax
      QUERY TERMSERVER [<i>ServerName</i>] [/domain:<i>Domain</i>] [/address] [/continue]

Key
   <i>ServerName</i>     The RD Session Host server name.

   /domain:<i>Domain</i> The domain to query for terminal servers.
                  default = current domain.

   /address       Display the network and node addresses for each server.

   /continue      Don't pause after each screen of information is displayed.

   /?             Display help.</pre>
<p> Qappsrv is a synonym for QUERY TERMSERVER</p>
<p>QUERY TERMSERVER returns the following information:</p>
<ul>
<li>The name of the server</li>
<li>The network (and node address if the /address option is used) </li>
</ul>
<p><b>Examples</b></p>
<p>Display  information about all RD Session Host servers on the network:</p>
<p class="code">C:\&gt; query termserver </p>
<p>Display   information about the RD Session Host server named Server64: </p>
<p class="code">C:\&gt; query termserver Server64</p>
<p>Display  the network and node address for the RD Session Host server named Server64: </p>
<p class="code">C:\&gt; query termserver Server64 /address </p>
<p class="quote"><i>“Big machines are the awe-inspiring cathedrals of the 20th century” - Daniel Kleppner</i></p>
<p>  <b>Related:</b></p>
<p><a href="query-process.html">Query Process</a> - Display processes (TS/Remote Desktop)<br>
<a href="query-session.html">Query Session</a> - Display all sessions (TS/Remote Desktop)<br> 
<a href="query-user.html">Query User</a> - Display user sessions (TS/Remote Desktop)<br>  
<a href="tsshutdn.html">TSSHUTDN</a> - Remotely shut down or reboot a terminal server<br>
<a href="change.html">CHANGE</a> - Change Terminal Server Session properties<br>
<a href="mstsc.html">MSTSC</a> - Terminal Server Connection (Remote Desktop Protocol)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
