---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>LOGOFF.exe (<a href="../links/windows.html#kits">Resource Kit</a>)</h1> 
<p>Log a user off.</p>
<pre>Syntax
      LOGOFF [/f] [/n] 

Key
   /f   Force running processes to close, but will ask for user confirmation.
        The user will not be asked to save unsaved data. 

   /n   Force running processes to close without confirmation. 
        The user will be prompted to save unsaved data.</pre>
<p>By default LOGOFF will ask for user confirmation and prompt to save unsaved data.</p>
<p><b>Windows security log events </b></p>
<p>Logon Event IDs 528 and 540 = successful logon</p>
<p>Logoff Event ID 538 = logoff </p>
<p> Logon and logoff events also specify a <span class="code">Logon Type </span>code:</p>
<blockquote>
<p>Logon Type 2 – Interactive - Log on at the local keyboard / screen (see the event description for a computer name).</p>
<p>Logon Type 3 – Network - connections to shared folders or printers, over-the-network logons, IIS logons( but not basic authentication)</p>
<p>Logon Type 4 – Batch - The Scheduled Task service  creates a new logon session for each task.</p>
<p>Logon Type 5 – Service - Each service is configured to run as a specified user account. </p>
<p>Logon Type 7 – Unlock- a password protected screen saver.</p>
<p>Logon Type 8 – NetworkCleartext - a network logon like logon type 3 but where the password was sent over the network in  clear text. </p>
<p>Logon Type 9 – NewCredentials - If you use  <a href="runas.html">RunAs /netonly</a>   and records the logon event with logon type 2.</p>
<p>Logon Type 10 – RemoteInteractive - Terminal Services, Remote Desktop or Remote Assistance.</p>
<p>Logon Type 11 – CachedInteractive - mobile users not connected to the  network connecting with cached credentials.</p>
</blockquote>
<p> <i class="quote">“The man who is tired of London is tired of looking for a parking space” ~ Paul Theroux </i><br>
<br>
<b> Related:</b><br>
<br>
<a href="shutdown.html">SHUTDOWN</a> - Shutdown the computer -  can also logoff a user.<br>
<a href="http://www.sysinternals.com/Utilities/PsShutdown.html">psShutdown</a> - SysInternals</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="logoff.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
