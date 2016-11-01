---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>RGB</h1>
<p>Return a Long whole number representing an RGB color value. </p>
<pre>Syntax<span class="code">
      RGB (<i>red,green,blue</i>)

Key
   red    Red component Variant(integer) 0-255
   green  green component Variant(integer) 0-255
   blue   blue component Variant(integer) 0-255</span></pre>
<p>Convert a hex-format color  to RGB Long:</p>
<pre>Function HexToLongRGB(strHexVal As String) As Long
    Dim intRed As Integer
    Dim intGreen As Integer
    Dim intBlue As Integer

    intRed = CLng("&amp;H" &amp; Left$(strHexVal, 2))
    intGreen = CLng("&amp;H" &amp; Mid$(strHexVal, 3, 2))
    intBlue = CLng("&amp;H" &amp; Right$(strHexVal, 2))

    HexToLongRGB = RGB(intRed, intGreen, intBlue)

End Function</pre>
<p class="quote"><i>“You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes” ~ The Matrix</i></p>
<p> <b>Related:</b></p>
<p> <a href="syntax-color.html">Syntax - color</a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="rgb.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

