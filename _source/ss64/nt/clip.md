---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CLIP.exe (<a href="../links/windows.html#kits">Resource Kit </a>/ Windows 7)</h1>
<p> Copy the result of any command to the Windows clipboard.</p>
<pre>Syntax
      <i>command</i> | CLIP

      CLIP &lt; <i>filename</i>.txt
</pre>
<p> When using clip in a batch script you should warn the user that their clipboard is about to be overwritten.<b><br>
<br>
For Example:</b><br>
<br>
DIR | CLIP<b><br>
<br>
</b>DATE /t | CLIP<br>
<br>
<i class="quote">“The stupid neither forgive nor forget, the naive forgive and forget, the wise forgive but do not forget” ~ Thomas Szasz (The second sin)</i> <br>
<b><br>
Related:<br>
<br>
</b><a href="scriptit.html"> Script-It</a> - Control GUI applications<br>
<a href="set.html">SET</a> - Display, set, or remove Windows environment variables <br>
Powershell: Out-Clipboard (PowerShell Community Extension) <br>
Equivalent bash command (Linux):  <a href="http://www.vergenet.net/%7Econrad/software/xsel/">xsel</a> - get and set the contents of an X-window selection</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clip.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

