---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoCmd.ShowToolbar</h1>
<p> Display or hide a custom toolbar.</p>
<pre>Syntax
      DoCmd.ShowToolbar(<i>ToolbarName, Show</i>)

Key
   <i>ToolbarName</i>  The name of a custom toolbar.

   <i>Show</i>         acToolbarNo (2)          Hide the toolbar.
                acToolbarWhereApprop (1) Display the toolbar while
                                         in the appropriate view.
                acToolbarYes (0)         Display the toolbar. </pre>
<p>A form or report menu bar will take precedence over a global menu bar (<span class="code">Application.MenuBar</span>.)</p>
<p>If you replace the built-in menu bar with a custom one, Access will hide the built-in menu bar. <br>
Pressing <span class="code">Ctrl + F11</span> will toggle the display of the built-in menu bar.</p>
<p>The startup option "Allow Built-in Toolbars" will affect the availability of Built-in toolbars/Ribbon</p>
<p><b>Example</b></p>
<p class="code">DoCmd.ShowToolbar "Ribbon", acToolbarNo</p>
<p class="quote"><i>“Much of my work has come from being lazy. I didn't like writing programs” ~ John Backus (Think - IBM employee magazine)</i></p>
<p><b>Related:</b></p>
<p><a href="echo.html">Echo</a> - Turn screen updating on or off.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

