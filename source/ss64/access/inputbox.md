---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>InputBox()</h1>
<p>  Prompt the user for input and store the result in a variable. </p>
<pre>Syntax
      <i>ResultVariable</i> = InputBox (<i>prompt</i> [, <i>title</i> ] [, <i>default</i> ]
                         [, <i>xpos</i> ] [, <i>ypos</i> ] [, <i>helpfile</i> ] [, <i>context</i> ] )

Key
   <i>prompt</i>  The message to display. up to ~1024 characters.
           You can separate the lines using a carriage return character <a href="chr.html">Chr</a>(13),
           a linefeed character <a href="chr.html">Chr</a>(10), or both (<a href="chr.html">Chr</a>(13) &amp; <a href="chr.html">Chr</a>(10)) between each line.

   <i>title</i>   String to display in the title bar

   <i>default</i> The default response if no other input is provided.
           If you omit <i>default</i>, the text box is displayed empty.

   <i>xpos</i>    Optional numeric expression that specifies, in twips,
           the horizontal distance of the left edge of the dialog
           box from the left edge of the screen.
           If omitted, the dialog box is horizontally centered.

   <i>ypos</i>    Optional numeric expression that specifies, in twips,
           the vertical distance of the upper edge of the dialog
           box from the top of the screen.
           If omitted, the dialog box is vertically positioned
           approximately one-third of the way down the screen.

   <i>helpfile</i> Optional string expression that identifies the Help file.
            If <i>helpfile</i> is provided, <i>context</i> must also be provided.

   <i>context</i> Optional numeric expression that is the Help context number
           assigned to the appropriate Help topic by the Help author.
           If <i>context</i> is provided, <i>helpfile</i> must also be provided.</pre>
<p>If you specify the <i>helpfile</i> and <i>context</i> arguments, a Help button will be automatically  added to the dialog box. </p>
<p><b>Examples</b></p>
<pre>MyResult = InputBox (Prompt:="Enter data", _<br>           HelpFile:="C:\Help\sample.chm", _<br>           Context:="2001")

MyResult2 = InputBox ("Enter the order date", "Demo input box")</pre>
<p class="quote"><i>“People who know little are usually great talkers, while men who know much say little” ~ Jean Jacques Rousseau</i></p>
<p><b>Related:</b></p>
<p><a href="msgbox.html">MsgBox</a> - Display a message in a dialogue box.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="inputbox.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

