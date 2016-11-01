---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>LOGTIME.exe (<a href="../links/windows.html#kits">2003 Resource kit</a>)</h1>
<p> Create logtime.txt and add the date, time and a message.</p>
<pre>Syntax
      LOGTIME <i>text_string</i>

Key
   <i>text_string</i> : The message to add to the log file. </pre>
<p> The date is stored in the US mm/dd/yy format.<br>
<br>
Sample batch file: <br>
<br>
<span class="code">LOGTIME "begin import program" <br>
import.exe <br>
LOGTIME "end import program" </span><b><br>
<br>
</b>An alternative command is<br>
<span class="code">ECHO: | DATE | FIND /i "curre"&gt;&gt;C:\Install_log.txt</span><b><br>
</b><i><br>
<span class="quote">“You can always tell that an organisation is on the skids when it changes it's name, and pays a lot of money for consultants to invent some ghastly new corporate identity” ~ Baroness Helena Kennedy</span></i><br>
<br>
<b> Related:<br>
</b><a href="echo.html"><br>
ECHO</a> - Display message on screen<br>
<a href="date.html">DATE</a> /T - Display or set the date<br>
<a href="touch.html">TOUCH</a> - Change file timestamps <br>
Timethis - Time how long it takes the system to run a command. (<a href="../links/windows.html#kits">Win 2K ResKit</a>) <br>
Uptime - Time since last reboot. (<a href="../links/windows.html#kits">Win 2K 
ResKit</a>) </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="logtime.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

