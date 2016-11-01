---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Application.Echo</h1>
<p> Turn screen updating on or off.</p>
<pre>Syntax
      Application.Echo(<i>EchoOn</i>, <i>StatusBarText</i>)

Key
   <i>EchoOn</i>      Use True (default) to repaint the screen and False to turn it off.

   StatusBarText
               Text to display in the status bar when repainting is turned on or off.</pre>
<p> Complex Visual Basic code will run faster if you turn off screen repainting until the procedure has finished running. Echo Off can also be used to hide changes that the user should not see.</p>
<p>The Echo method does not suppress the display of modal dialog boxes, such as error messages, or pop-up forms, such as property sheets.</p>
<p>When screen repainting is off, the screen won't show any changes, even if the user presses CTRL+BREAK or Visual Basic encounters a breakpoint. If you  try to step through the code, you won't be able to see progress through the code or any other visual cues, however, the code will continue to execute.</p>
<p>For debugging purposes, you can create a macro that turns repainting on and then assign the macro to a key combination.</p>
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
<p class="quote">“The only thing that helps me pass the time away; is knowing I'll be back at Echo Beach some day” ~ Martha and the Muffins</p>
<p><b>Related:</b></p>
<p><a href="hourglass.html">Hourglass</a> - Display the hourglass icon<br>
DoCmd.RepaintObject<br>
<a href="setwarnings.html">SetWarnings</a> - Turn system messages on or off.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

