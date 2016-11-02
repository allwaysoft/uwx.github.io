---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>UnEscape</h1> 
<p>Return Unicode characters from an escaped ASCII string.</p>
<pre>Syntax 
      UnEscape(<i>String</i>)

Key
   <i>String</i>    The encoded string of text to convert to standard Ascii text.</pre>
<p>Example</p>
<p class="code">Option Explicit<br>Dim strMessage, strUnescaped <br>
<br>
strMessage = "Sample text with  (parenthesis) spaces &amp; " &amp; Chr(34) &amp; "quotes" &amp; Chr(34)<br>
MsgBox strMessage &amp; vbCR &amp; Escape(strMessage), 
vbOkOnly+vbInformation, "Demo"<br>
strUnEscaped = UnEscape (strMessage)<br>
MsgBox strUnEscaped &amp; vbCR &amp; Escape(strMessage), vbOkOnly+vbInformation, "UnEscaped"</p>
<p class="quote"><i>“Writing is a form of therapy; sometimes I wonder how all those, who do not write, compose, or paint can manage to escape the madness, the melancholia, the panic fear, which is inherent in a human condition” ~ </i>Graham Greene</p>
<p><b>Related:</b></p>
<p><a href="escape.html">Escape</a> -  Return only ASCII characters from a Unicode string.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

