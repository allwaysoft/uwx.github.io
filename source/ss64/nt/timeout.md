---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TIMEOUT.exe (Windows 7/2008 and XP <a href="../links/windows.html#kits">Resource Kit</a>)</h1>
<p> Delay execution for a few seconds or minutes, for use within a batch file.</p>
<pre>Syntax
      TIMEOUT <i>delay</i> [/nobreak] 

Key
   <i>delay</i>  Delay in seconds (between -1 and 100000) to wait before continuing. 
          The value -1 causes the computer to wait indefinitely for a keystroke 
          (like the PAUSE command)

   /nobreak
          Ignore user key strokes. (Windows 7 or greater)</pre>
<p>Timeout will pause command execution for a number of seconds, 
after which it continues without requiring a user keystroke. If the user does 
press a key at any point, execution will resume immediately. 
</p><p><b>Alternative</b><br>
A delay can also be produced by the <a href="ping.html">PING</a> command with a loopback address, there is a delay of 1 second between each consecutive ping. In tests PING consumes less processor  time than Sleep.exe or Timeout.exe, this allows other processes to run in the background. The PING command can only be interrupted  with Ctrl-C. Source:  <a href="https://groups.google.com/forum/#!msg/alt.msdos.batch.nt/nSRpfQE-lko/WEWG9aCfSoAJ">Clay Calvert</a> (usenet 2001.)<br>
<br>
e.g. for a delay of 40 seconds:<br>
<span class="code">PING -n 41 127.0.0.1&gt;nul</span><br>
<br>
<i class="quote">“It is awful work this love and prevents all a mans projects of good or glory” ~ Lord Byron </i><br>
<b><br>
Related:</b><br>
<br>
<a href="pause.html">PAUSE</a> - Suspend processing of a batch file and display a message<br>
<a href="sleep.html">SLEEP</a> - Delay execution for a few seconds/minutes (for use within a batch file.)<br>
<a href="waitfor.html">WAITFOR</a> - Wait for or send a signal.<br>

Powershell: <a href="../ps/start-sleep.html">Start-Sleep</a> - Suspend shell, script, or runspace activity (sleep)<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
