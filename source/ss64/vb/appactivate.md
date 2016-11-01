---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.AppActivate </h1> 
<p>Activate a running command. </p>
<pre>Syntax 
     <i>objShell</i>.AppActivate <i>strApplicationTitle</i>

Key
   <i>objShell</i>   A WScript<a href="shell.html">.Shell</a> object

   <i>strApplicationTitle</i>  The name of the Application to activate</pre>
<p>The AppActivate method tries to activate an application whose title
is the nearest match to strApplicationTitle. </p>
<p>Example</p>
<p>Activate Notepad (assuming Notepad is already running).<br>
<br>   
<span class="code">Set objShell = CreateObject("WScript<a href="shell.html">.Shell</a>")<br>
objShell.AppActivate "notepad"</span></p>
<p class="quote"><i>“The odds against there being a bomb on a plane are a million to one, and against two bombs a million times a million to one. Next time you fly, cut the odds and take a bomb” ~ Benny Hill </i></p>
<p><b>Related:</b></p>
<p>Command, run command - <a href="run.html">.Run</a><br>
Equivalent Windows CMD command: <a href="../nt/start.html">START</a> - Start a program or command</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="appactivate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

