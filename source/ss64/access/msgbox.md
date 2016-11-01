---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>MsgBox</h1>
<p>  Display a popup message. </p>
<pre>Syntax
      MsgBox(<i>prompt</i> [, <i>buttons</i> ] [, <i>title</i> ]
        [, <i>helpfile</i> ] [, <i>context</i> ] )

Key
   <i>prompt</i>  The message to display. up to ~1024 characters.
           You can separate the lines using a carriage return character <a href="chr.html">Chr</a>(13),
           a linefeed character <a href="chr.html">Chr</a>(10), or both (<a href="chr.html">Chr</a>(13) &amp; <a href="chr.html">Chr</a>(10)) between each line.

   <i>buttons</i> The buttons and icons to display <a href="acmsgboxstyle.html">acMsgBoxStyle</a>.
           If you omit <i>buttons</i>, the default is 0 (OK button).

   <i>title</i>   String to display in the title bar.

<i>   helpfile</i> Optional string expression that identifies the Help file.
            If <i>helpfile</i> is provided, <i>context</i> must also be provided.

   <i>context</i> Optional numeric expression that is the Help context number
           assigned to the appropriate Help topic by the Help author.
           If context is provided, <i>helpfile</i> must also be provided.</pre>
<p>If you specify the <i>helpfile</i> and <i>context</i> arguments when you are using the MsgBox function, you must also include the vbMsgBoxHelpButton built-in constant in the buttons argument so that a Help button will be displayed. </p>
<p>A system beep might also be produced, this is determined by the button style/icon (<a href="acmsgboxstyle.html">acMsgBoxStyle</a>) if no button icon is added then no system beep will be produced.</p>
<p><b>Examples</b></p>
<pre>MsgBox Prompt:="You must enter a valid date.", _<br>       Buttons:=vbMsgBoxHelpButton, _<br>       HelpFile:=strAppPath &amp; "\sample.chm", _<br>       Context:="2002"

Msgbox "You must enter a valid date.", vbOKCancel, "SS64 Demo Msgbox"</pre>
<p class="quote"><i>“People who know little are usually great talkers, while men who know much say little” ~ Jean Jacques Rousseau</i></p>
<p><b>Related:</b></p>
<p><a href="inputbox.html">InputBox</a> - Prompt for user input.<br>
<a href="http://support.microsoft.com/kb/242889">Q242889</a> - MsgBox Function Ignores At Sign (@) Formatting</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

