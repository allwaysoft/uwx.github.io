---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Query Process / QPROCESS </h1> 
<p>Display information about processes.</p>
<pre>Syntax
      QUERY PROCESS * [/server:<i>ServerName</i>]

      QUERY PROCESS <i>ProgramName</i> [/server:<i>ServerName</i>]

      QUERY PROCESS <i>ProcessID</i> [/server:<i>ServerName</i>]

      QUERY PROCESS <i>SessionName</i> [/server:<i>ServerName</i>]

      QUERY PROCESS /id:<i>nn</i> [/server:<i>ServerName</i>]

Key
   *           List the processes for all sessions.

   ProcessID   The numeric ID identifying the process that you want to query.

   UserName    The name of the user whose processes you want to list.

   <i>SessionName</i> The name of the session whose processes you want to list.

   /id:<i>nn</i>      The ID of the session whose processes you want to list.

   <i>ProgramName</i> The name of the program whose processes you want to query.
               The .exe extension is required.

   /server:<i>ServerName
              </i> The Remote Desktop Session Host server whose processes
               you want to list.
               default = server where you are currently logged on.

   /?          Display help.</pre>
<p> QPROCESS is a synonym for QUERY PROCESS. </p>
<p>QUERY PROCESS returns the following information:</p>
<ul>
<li>The user who owns the process</li>
<li>The session that owns the process</li>
<li>The ID of the session</li>
<li>The name of the process - only the first 12 letters.</li>
<li>The ID of the process</li>
</ul>
<p>If you do not specify a process with <i>UserName</i>, <i>SessionName</i>, or <i>SessionID</i>, then QUERY PROCESS will return only the processes that belong to the current user.  When information for multiple processes is returned, a greater than <span class="code">&gt;</span> symbol is displayed before each process that belongs to the current session.</p>
<p>Administrators have full access to all query process functions.</p>
<p><b>Examples</b></p>
<p>Display information about the processes being used by all sessions:</p>
<p class="code">C:\&gt; query process * </p>
<p>Display  information about the processes being used by session ID 2: </p>
<p class="code">C:\&gt; query process /ID:2</p>
<p class="quote"><i>“Oh, what's going on, What's going on, Ya, what's going on, Ah, what's going on” - Marvin Gaye
(What's Going On Lyrics)</i></p>
<p>  <b>Related:</b></p>
<p><a href="tasklist.html">TASKLIST</a> - List running applications and services<br>
<a href="query-session.html">Query Session</a> - Display all sessions (TS/Remote Desktop)<br>
<a href="query-termserver.html">Query TermServer</a> - List all servers (TS/Remote Desktop)<br>
<a href="query-user.html">Query User</a> - Display user sessions (TS/Remote Desktop)<br>
<a href="pslist.html">PsList</a> - List detailed information about processes<br>  
<a href="tsshutdn.html">TSSHUTDN</a> - Remotely shut down or reboot a terminal server<br>
<a href="change.html">CHANGE</a> - Change Terminal Server Session properties<br>
<a href="mstsc.html">MSTSC</a> - Terminal Server Connection (Remote Desktop Protocol)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="query-process.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
