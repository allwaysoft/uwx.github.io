---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Script-it.exe (NT 4 Server)</h1>
<p>Control GUI applications - feed values into dialogue boxes, press 
  OK etc</p>
<pre>Syntax
      SCRIPTIT <i>script_file</i></pre>
<p> Script-It.exe is no longer available for download at Microsoft.com</p>
<p>An alternative is the freeware tool <a href="http://www.hiddensoft.com/autoit3/">AutoIt</a> </p>
<p>Originally for NT4 Server, although it does run (rather crankily)
  on more recent
OS's. Script-it works by recognising the <i>Window Title</i> of each
    open Application / Document / Dialogue box.<br>
  <br>
  The <i>script_file</i> is a .ini text file prepared in advance with all the keystrokes you want 
  to send to the appropriate Window.<br>
  <br>
  <b> Example Script file:</b><br>
  runwait=notepad.exe <br>
  Untitled - Notepad=Hello World <b><br>
  </b>run=calc.exe <b><br>
  <br>
  </b>This will launch an instance of Notepad and then send the string "Hello 
World", when notepad.exe is closed the script will run CALC.exe</p>
<p><i class="quote">"People in the West are always getting ready to live" ~ Chinese 
  proverb</i><br>
  <br>
  <b> Related:<br>
  <br>
</b> <a href="../vb/sendkeys.html">WshShell.SendKeys</a> - Send Keystrokes with VBS/WSH<br>
  <a href="clip.html"> CLIP</a> - Copy STDIN to the Windows clipboard.<br>
  The freeware tool AutoIt is available  from <a href="http://www.hiddensoft.com/autoit3/">hiddensoft.com/autoIt3/</a> 
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="scriptit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

