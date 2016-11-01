---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CLS</h1> 
<p>Clear the screen.</p>
<pre>Syntax
      CLS</pre>
<p>If CLS is redirected to file, console or executed through FOR /F it will print a line feed character (<a href="../ascii.html">ASCII</a> 10).</p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the screen is successfully cleared <a href="errorlevel.html">%ERRORLEVEL%</a> = <i>unchanged</i> (this is a bug)<br>
If a bad switch is given = 1</p>
</blockquote>
<p><b>Example</b></p>
<p><span class="code"> Echo Hello<br>
</span><span class="code">CLS<br>
Echo You didnt see that
</span></p>
<p>CLS is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>“Let me be clear: America wants a strong, peaceful, and prosperous Russia” ~ Barack Obama</i></p>
<p><span class="body"> </span> <b>Related:</b></p>
<p><a href="echo.html">ECHO</a> - Display message on screen<br>
Powershell: <a href="../ps/clear-host.html">Clear-Host</a> - Clear the screen<br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
