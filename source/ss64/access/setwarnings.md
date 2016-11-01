---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.SetWarnings</h1>
<p> Turn system messages on or off.</p>
<pre>Syntax
      DoCmd.SetWarnings(<i>WarningsOn</i>)

Key
   <i>WarningsOn</i>    Use True (-1) to turn on the display of system messages
                 and False (0) to turn them off.</pre>
<p>If system messages are turned off in Visual Basic, they must be turned back on, or they will remain off, even if the user presses CTRL+BREAK or Visual Basic encounters a breakpoint. </p>
<p>You can create a macro that turns the display of system messages on and then assign that macro to a key combination. You could then use the macro to restore system messages if they have been turned off in Visual Basic.</p>
<p><b>Example</b></p>
<p class="code">DoCmd.SetWarnings False</p>
<p class="quote"><i>“The aim of science is not to open the door to infinite wisdom but to set a limit to infinite error” ~ Bertolt Brecht (Life of Galileo)</i></p>
<p><b>Related:</b></p>
<p><a href="echo.html">Echo</a> - Turn screen updating on or off.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="setwarnings.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

