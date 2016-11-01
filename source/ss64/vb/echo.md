---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Echo </h1> 
<p>Echo a text string to the screen (cscript) or a dialogue box (wscript) 
</p>
<pre>Syntax 
      WScript.Echo [Arg1] [,Arg2] [,Arg3] ... 

Key
   Arg1, Arg2, Arg3...  Optional string values to be displayed.</pre>
<p>If no arguments are provided a 
blank line is output.<br>
Echo is a wscript method.
</p>
<p><b>Examples</b></p>
<pre>  WScript.Echo "Hello"
  WScript.Echo

  Set objNet = WScript.CreateObject("WScript.Network")
  WScript.Echo "Your Computer Name is " &amp; objNet.ComputerName
  WScript.Echo "Your Username is " &amp; objNet.UserName

An alternative is to use Active Directory:

  Set objAD = CreateObject("ADSystemInfo")<br>  Wscript.Echo "Your Computer Name is " &amp; objAD.ComputerName<br>  Wscript.Echo "Your Username is " &amp; objAD.UserName 

ECHO can be suppressed by setting .Interactive to false
e.g.
  WScript.Echo("Hello")
  WScript.Interactive = false
  WScript.Echo("This wont display")
  WScript.Interactive = true
  WScript.Echo("This will display")</pre>
<p class="quote"><i>“Computer games don't affect kids; I mean if Pac-Man affected us as kids, we'd all be running around in darkened rooms, munching magic pills and listening to repetitive electronic music" ~ Kristian Wilson, Nintendo 
  Inc, 1989</i></p>
<p><b>Related:</b></p>
<p>Echo, popup - <a href="popup.html">.Popup</a><br>
 Echo text to screen or file - <a href="stdoutwrite.html">StdOut.Write</a> <br>
Equivalent Windows CMD command: <a href="../nt/echo.html">ECHO</a> - Display message on screen<br>
Equivalent  PowerShell cmdlet: <a href="../ps/write-host.html">Write-Host</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="echo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

