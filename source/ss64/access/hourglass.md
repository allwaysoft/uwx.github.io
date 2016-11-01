---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.Hourglass</h1>
<p>Display an hourglass (busy mouse pointer).</p>
<pre>Syntax
      DoCmd.Hourglass True

      DoCmd.Hourglass False</pre>
<p>True (–1) will display the hourglass icon.<br>
False (0) will  display the normal mouse pointer.</p>
<p><b>Example</b></p>
<p class="code">' Open the Patients form minimized. <br>
Application.Echo False <br>
DoCmd.Hourglass True<br>
<br>
DoCmd.OpenForm "frmPatients", acNormal <br>
DoCmd.Minimize <br>
<br>
Application.Echo True <br>
DoCmd.Hourglass False </p>
<p class="quote">“The only thing that helps me pass the time away; is knowing I'll be back at Echo Beach some day” ~&nbsp;Martha and the Muffins</p>
<p><b>Related:</b></p>
<p><a href="echo.html">Echo</a> - Turn screen updating on or off.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

