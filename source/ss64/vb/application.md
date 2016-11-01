---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem -->
<h1>The wscript.Application object</h1> 
<p>Provides access to any Application, opening a folder will open Windows Explorer.</p>
<pre>Syntax 
      Set objApp = <a href="createobject.html">CreateObject</a>("Wscript.Application") 

Methods

   <a href="browseforfolder.html">.BrowseForFolder</a>(0, <i>strPrompt, Options, strRoot</i>)
   .Open "\\servername\folder\"
</pre>
<p><b> Examples</b></p>
<pre>Dim objApp
Set objApp = WScript.CreateObject("WScript.Application")
objApp<b>.open</b> "\\Server64\folder1"<br>
</pre>
<p class="quote"><i>“It is possible to store the mind with a million facts and still be entirely uneducated” ~ Alec Bourne</i></p>
<p><b>Related:</b></p>
<p><a href="shell.html">Shell.Application</a> objects/methods<br>
</p>
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="application.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

