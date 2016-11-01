---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TSDISCON.exe</h1> 
<p>Disconnect a Remote Desktop Session.</p>
<pre>Syntax
      tsdiscon [<i>SessionID</i> | <i>SessionName</i>] [/server:<i>ServerName</i>] [/v]

Key
   SessionId    The ID of the session to disconnect.

   SessionName  The name of the session to disconnect.

   ServerName   The terminal server containING the session to disconnect.
                Default=the current RD Session Host server.

   /v           Display verbose information.

   /?           Display help at the command prompt.</pre>
<p>  You must have Full Control permission or Disconnect special access permission to disconnect another user from a session.</p>
<p> If no session ID or session name is specified, tsdiscon disconnects the current session. Any applications that were running when you disconnected the session are automatically running when you reconnect to that session with no loss of data. </p>
<p>Use reset session to end the running applications of the disconnected session, but be aware that this might result in loss of data at the session. The <span class="code">/server</span> parameter is required only if you use tsdiscon from a remote server. The console session cannot be disconnected.</p>
<p><b>Examples</b></p>
<p>Disconnect the current session:</p>
<p><span class="code">C:\&gt; tsdiscon</span></p>
<p>Disconnect session 10:</p>
<p><span class="code">C:\&gt; tsdiscon 10</span></p>
<p>Disconnect the session named TERM64:</p>
<p><span class="code">C:\&gt; tsdiscon TERM64</span></p>
<p class="quote"><i>“One final paragraph of advice:  Do not burn yourselves out.  Be as I am - a reluctant enthusiast…a part time crusader, a half-hearted fanatic.  Save the other half of yourselves and your lives for pleasure and adventure.  It is not enough to fight for the land; it is even more important to enjoy it.  While you can.  While it’s still here.” ~ Edward Abbey</i> </p>
<p><b>Related:</b><br>
<br>
<a href="mstsc.html">MSTSC</a> - Terminal Server Connection (Remote Desktop Protocol)<br>
<a href="tsshutdn.html">TSSHUTDN</a> - Remotely shut down or reboot a terminal server<br>
<a href="query-session.html">QUERY session</a> - List TS sessions <br>
<a href="https://support.microsoft.com/kb/321705">Q321705</a> - 
Disconnect a TS Session using  TSDISCON
<br>
<a href="http://superuser.com/questions/401283/display-user-selection-screen-tsdiscon-exe-instead-of-lock-screen-after-screen">SuperUser</a> - Display User Selection screen  instead of lock screen after screensaver inactivity
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tsdiscon.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>
