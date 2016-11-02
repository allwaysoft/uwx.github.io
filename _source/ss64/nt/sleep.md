---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SLEEP.exe (<a href="../links/windows.html#kits">2003 Resource Kit</a>)</h1>
<p> Delay execution for a few seconds/minutes (for use within a batch file.)
</p><pre>Syntax
      SLEEP <i>time</i>

Key
   <i>time</i>  The number of seconds to pause</pre>
<p><b>Example</b><br>
Pause for 10 seconds before running the next command in a batch file: <br>
<br>
<span class="code">SLEEP 10</span><br>
<br>
<b>Alternative</b><br>
A  delay can also be produced by the <a href="ping.html">PING</a> command with a loopback address (127.0.0.1), in tests this consumes less processor time than Sleep.exe or Timeout.exe:<br>
<br>
e.g. for a delay of 30 seconds:<br>
<span class="code">PING -n 31 127.0.0.1&gt;nul </span></p>
<p>See <a href="https://groups.google.com/forum/#!msg/alt.msdos.batch.nt/nSRpfQE-lko/WEWG9aCfSoAJ">Clay Calvert's</a> newsgroup posting for a full explanation of this technique.<br>
<br>
<i class="quote">“O sleep, O gentle sleep, nature's soft nurse, how have I frighted thee, that thou no more wilt weigh my eyelids down, and steep my senses in forgetfulness” ~   Shakespeare (Henry IV)</i></p>
<p><b>Related:<br>
<br>
</b><a href="timeout.html">TIMEOUT</a> - Delay execution for a few seconds/minutes (for use within a batch file.)<br>
WAIT - the same as sleep but with noises<br>
<a href="waitfor.html">WAITFOR</a> - Wait for or send a signal.<br>
<a href="../vb/sleep.html">WScript.Sleep</a> - Sleep<br>
Powershell: <a href="../ps/start-sleep.html">Start-Sleep</a> - Suspend shell, script, or runspace activity (sleep) <br>
Equivalent bash command:<a href="../bash/sleep.html"> sleep</a> - Delay for a specified time</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
