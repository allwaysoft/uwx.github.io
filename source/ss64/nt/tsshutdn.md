---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TsShutDn (XP/2003 Terminal Services)</h1> 
<p>Remotely shut down or reboot a terminal server. If the computer supports software control of AC power this command can be used to power off the server.</p>
<pre>Syntax
      TSSHUTDN [<i>WaitTime</i>] [/server:<i>ServerName</i>] [/reboot] [/powerdown]
         [/delay:<i>LogOffDelay</i>] [/v]

Key
   <i>WaitTime</i>   An amount of time (in seconds) to wait after notifying users before logging off
              all users from their sessions. Default = 60 seconds.

   /server    The terminal server to shut down.
              If unspecified, the current terminal server is shut down.

   /reboot    Reboot the terminal server after user sessions are ended.

   /powerdown Turn off the terminal server if the computer supports software control of AC power.

   /delay     The amount of time to wait after logging off users from their sessions,
              before ending all processes and shutting down the terminal server.
              Default = 30 seconds.

   /v         Display verbose information about the actions being performed.

   /?         Display help.</pre>
<p> You must have administrative privileges run tsshutdn.</p>
<p> Using <span class="code">Start Menu | ShutDown </span>  is not recommended for shutting down a terminal server as that method does not notify users before ending their sessions.</p>
<p> All connected sessions are notified. Sessions that have applications with open files will prompt the user to save the files. After initiating the logoff command, tsshutdn waits a specified interval, before ending all processes.</p>
<p> Tsshutdn does not reboot the terminal server unless the /reboot option is specified.</p>
<p><b>Examples</b></p>
<p> End all client sessions 60 seconds after notification, and then 30 seconds after all  the users are logged off, shutdown the current terminal server:<br>
<br>
<span class="code">TSSHUTDN /v</span><br>
<br>
End all client sessions 5 minutes after notification, and then  1 minute after all  the users are logged off, shutdown and restart the terminal server: </p>
<p class="code"> TSSHUTDN 300 /reboot /delay:60 /v</p>
<p>On the terminal server named "Server64", end all client sessions 2 minutes after notification, and then 20 seconds after all  the users are logged off, shutdown and restart the terminal server:</p>
<p class="code">TSSHUTDN 120 /server:server64 /delay:20 /v</p>
<p>TsShutDn is available only on XP and Windows 2003 (32 or 64 bit) as part of a Terminal Services install.</p>
<p class="quote"><i> “Perhaps I'm old and tired, but I always think that the chances of finding out what really is going on are so absurdly remote that the only thing to do is to say hang the sense of it and just keep yourself occupied” ~ Douglas Adams</i></p>
<p><b> Related:</b><br>
<br>
<a href="psshutdown.html">PsShutdown</a> - SysInternals command line tool<br>
<a href="shutdown.html">SHUTDOWN</a> - Shutdown the computer</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

