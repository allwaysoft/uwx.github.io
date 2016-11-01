---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>StdOut.Write </h1> 
<p>Echo text to the screen (Stdout)</p>
<pre>Syntax 
      WScript.StdOut.Write("text string to display")

      WScript.StdOut.Write(strMyTextVariable)
</pre>
<p>Example</p>
<pre>  Set objStdOut = WScript.StdOut<br>  objStdOut.Write "User: "<br>  objStdOut.Write "Joe Smith"
  objStdOut.WriteBlankLines(1)
  objStdOut.Write "Procurement Dept"
</pre>
<p>Unlike the <a href="echo.html">Wscript.Echo</a> command, Stdout.Write allows you to write multiple separate items to the same line, use <span class="code">.WriteBlankLines(<i>n</i>)</span> to add newlines.</p>
<p class="quote"><i>“A truth that's told with bad intent, Beats all the lies you can invent” - William Blake</i></p>
<p><b>Related:</b></p>
<p><a href="echo.html">.Echo</a> <br>
Echo, popup - <a href="popup.html">.Popup</a><br>
<a href="msgbox.html">MsgBox</a> - Display a dialogue box message<br>
Equivalent Windows CMD command: <a href="../nt/echo.html">ECHO</a> - Display message on screen<br>
Equivalent PowerShell cmdlet: <a href="../ps/write-host.html">Write-Host</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stdoutwrite.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

