---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RESET SESSION / RWinSta</h1> 
<p> Reset (delete) a Remote Desktop Session.</p>
<pre>Syntax
      RESET SESSION {<i>SessionName</i> | <i>SessionID</i>} [/server:<i>ServerName</i>] [/v]

Key
   <i>SessionName</i> The name of the session that you want to reset.
               To determine the name, use <a href="query-session.html">query session
</a>
   <i>SessionID</i>   The ID of the session that you want to reset.

   /server:<i>ServerName</i>
               The Remote Desktop Host server containing the session to be reset.
               The default is the current RD Session Host server

   /?          Display help.</pre>
<p>Reset Session causes the device to close and then to reopen. Use reset session when the session malfunctions or when the session appears to be down. When you reset a session, the underlying hardware is reset and the drivers and data are reloaded and reinitialized. </p>
<p>Resetting a user's session without warning the user, can result in the loss of data at the session.</p>
<p>Only reset a session when it malfunctions or appears to have stopped responding.</p>
<p>You can always reset your own sessions, but you must have <span class="code">Full Control</span> access permission to reset another user's session. Users can also reset sessions of other users who log on with the same <b>name</b>. This is by design in version 4.0 of Terminal Server. To avoid this, give users unique logon names or deny access to the RESET SESSION utility.</p>
<p>RESET SESSION  is a synonym for AND replaces <span class="code">RWINSTA</span> from Citrix Winframe. It resets the subsystem hardware and software of the session to known initial values.</p>
<p>RDP Permissions are  set under:</p>
<p class="code">Terminal Services Configuration | Connections | Properties | Permissions | Advanced | Permissions</p>
<p><b>Examples</b></p>
<p>Reset the session designated rdp-tcp#6:</p>
<p class="code">C:\&gt; reset session rdp-tcp#6</p>
<p>Reset the session that uses session ID 3: </p>
<p class="code">C:\&gt; reset session 3</p>
<p class="quote"><i>“The crowds in the big towns, with their mild, knobby faces, their bad teeth and gentle manners solid breakfasts and gloomy Sundays, smoky towns and winding roads, green fields and red pillar boxes” ~ George Orwell</i></p>
<p>  <b>Related:</b></p>
<p><a href="query-session.html">Query Session</a> - Display all sessions (TS/Remote Desktop)<br>
<a href="query-termserver.html">Query TermServer</a> - List all servers (TS/Remote Desktop)<br>
<a href="logoff.html">LOGOFF</a> - Log a user off<br>
<a href="change.html">CHANGE</a> - Change Terminal Server Session properties<br>
<a href="mstsc.html">MSTSC</a> - Terminal Server Connection (Remote Desktop Protocol)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="reset-session.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
