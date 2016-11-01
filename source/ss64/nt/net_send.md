---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to send network 
  messages as follows:<br>
  <br>
  Network broadcast messages use "messaging names". A messaging name 
  can be the ComputerName, your UserName or any other name you add as part of 
  the NET NAME command line. <br>
  <br>

  To send a broadcast message to another user<br>
  <span class="code">NET SEND j_smith Meeting changed to 3 p.m</span><br>
  <br>
  To send a broadcast message to another machine<br>
  <span class="code">NET SEND mc_144 Meeting changed to 3 p.m</span><br>
  <br>
  To send a message to all users who have a session with the server<br>
  <span class="code">NET SEND /USERS This server will shut down in 5 minutes. </span><br>
  <br>
  To send a broadcast message to the whole domain<br>
  <span class="code">NET SEND * This server will shut down in 5 minutes.</span><br>
  <br>
  To send a broadcast message to another domain<br>
  <span class="code">NET SEND /DOMAIN[:other domainname] This server will shut down in 5 minutes.<br>
</span></p>
<p>Messaging names:</p>
<p>To add an additional messaging name (for receiving messages.) <br>
<span class="code">NET NAME extraname /ADD</span><br>
<br>
To remove a messaging name (n.b. it is not possible to remove the ComputerName with this command) <br>
<span class="code">NET NAME extraname /DELETE</span><br>
  <br>
  To use <i>NET SEND</i> the <a href="syntax-services.html">Messenger service</a> must be running, many organisations choose not to run this service.<br>
  <br>
  <b>Related:</b></p>
<p><a href="msg.html">MSG</a> - Send a message<br>
<a href="net.html">NET</a> - Manage network resources  <br>
<a href="mapisend.html">MAPISEND</a> - Send email from the command line<br>
<a href="https://support.microsoft.com/kb/330904">Q330904</a> - Messenger Service Spam</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_send.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

