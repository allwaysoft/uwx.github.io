---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PAUSE</h1> 
<p>Pause the execution of a batch file</p>
<pre>Syntax
      PAUSE</pre>
<p> Displays the message "Press any key to continue . . ."<br>
  <br>
To suppress the message:<br> 
<span class="code">PAUSE &gt;nul</span></p>
<p>To display a different  message:<br>
<span class="code">Echo
Pulse cualquier tecla para continuar<br>
PAUSE &gt;nul</span></p>
<p>Execution of a batch script can also be paused by pressing <span class="code">CTRL-S</span> (or the <span class="code">Pause|Break</span> key) on the keyboard, this also works for pausing a single command such as a long DIR /s listing.<br>
Pressing any key will resume the operation.</p>
<p>PAUSE is an <a href="syntax-internal.html">internal</a> command.<br>
  <br>
  <i class="quote">“Advertising may be described as the science of arresting the human intelligence long enough to get money from it” - Stephen Leacock </i> </p>
<p><b>Related:</b><br>
<br>
<a href="sleep.html">SLEEP</a> - Wait for x seconds<br>
TIMEOUT - Delay that allows the user to press a key and continue immediately.<br>
PowerShell: Pause <br>
Equivalent bash command (Linux): <a href="../bash/read.html">read -p</a> "press any key to continue" or ctrl-z &amp; <a href="../bash/fg.html">fg</a> </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pause.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
