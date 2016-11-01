---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Query User / QUSER </h1> 
<p> Display information about user sessions on a Terminal server or a Remote Desktop Session Host (RD Session Host) server.</p>
<pre>Syntax
      QUERY USER [/server:<i>ServerName</i>]

      QUERY USER <i>UserName</i> [/server:<i>ServerName</i>]

      QUERY USER [<i>SessionName</i> | <i>SessionID</i>] [/server:<i>ServerName</i>]

Key
   <i>UserName</i>    The logon username of the user whose sessions you want to query.

   <i>SessionName</i> The name of the session that you want to query.

   <i>SessionID</i>   The ID of the session that you want to query.

   /server:<i>ServerName</i>
               The Remote Desktop Session Host server to query.
               The default is the current server.

   /?          Display help.</pre>
<p> QUSER is a synonym for QUERY USER </p>
<p>Query User returns the following information:</p>
<ul>
<li> The name of the user</li>
<li>The name of the session on the RD Session Host server</li>
<li>The session ID</li>
<li>The state of the session (active or disconnected)</li>
<li> The idle time (the number of minutes since the last keystroke or mouse movement at the session)</li>
<li> The date and time the user logged on</li>
</ul>
<p>If you do not specify a user by using <i>UserName</i>, <i>SessionName</i>, or <i>SessionID</i>, a list of all users who are logged on to the server is returned. Alternatively,  use <a href="query-session.html">query session</a> to display a list of all sessions on the server. When information for multiple users is returned, a greater than <span class="code">&gt;</span> symbol is displayed before the current session.</p>
<p>A user can always query the session to which the user is currently logged on. To query other sessions, the user must have <span class="code">Query Information</span> special access permission.</p>
<p>The <span class="code">User Access</span> permission type grants the following special permissions: <span class="code">Query Information</span>, <span class="code">Logon</span>, and <span class="code">Connect</span>. These special permissions allow a user to: Log on to a session on the terminal server. Query information about a session. Send messages to other user sessions. Connect to another session.</p>
<p>Permissions are  set under:</p>
<p class="code">Terminal Services Configuration | Connections | Properties | Permissions | Advanced | Permissions</p>
<h2>Powershell</h2>
<p>When running quser under powershell it is useful to split the output into rich objects, this can be done with a regex and convertFrom-Csv (via <a href="http://powershell.com/cs/blogs/tips/archive/2014/01/14/finding-logged-on-user.aspx">PowerShell.com</a>):</p>
<p><span class="code">(quser) -replace '\s{2,}', ',' | ConvertFrom-Csv<br>
<br>
</span>Alternatively the script <a href="http://gallery.technet.microsoft.com/scriptcenter/Get-LoggedOnUser-Gathers-7cbe93ea">Get-LoggedOnUser.ps1</a> will also show disconnected sessions.</p>
<p><b>Examples</b></p>
<p>Display information about all users logged on the system:</p>
<p class="code">C:\&gt; query user</p>
<p>Display information about the user ursula on server64: </p>
<p class="code">C:\&gt; quser ursula /server:Server64</p>
<p class="quote"><i>“The crowds in the big towns, with their mild, knobby faces, their bad teeth and gentle manners solid breakfasts and gloomy Sundays, smoky towns and winding roads, green fields and red pillar boxes” - George Orwell</i></p>
<p>  <b>Related:</b></p>
<p><a href="query-process.html">Query Process</a> - Display processes (TS/Remote Desktop)<br>
<a href="query-session.html">Query Session</a> - Display all sessions (TS/Remote Desktop)<br>
<a href="query-termserver.html">Query TermServer</a> - List all servers (TS/Remote Desktop)<br>

<a href="reset-session.html">Reset Session</a> - Delete a Remote Desktop Session<br>
<a href="logoff.html">LOGOFF</a> - Log a user off<br>
<a href="tsshutdn.html">TSSHUTDN</a> - Remotely shut down or reboot a terminal server<br>
<a href="change.html">CHANGE</a> - Change Terminal Server Session properties<br>
<a href="mstsc.html">MSTSC</a> - Terminal Server Connection (Remote Desktop Protocol)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="query-user.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
