---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Escape</h1> 
<p>Encode a string of text, "escaping" all  characters that are not allowable in web url address strings.</p>
<pre>Syntax 
      Escape(<i>String</i>)

Key
   <i>String</i>    The string of text to convert to an encoded string for use with HTML data transfer.</pre>
<p>Note some web browsers will display URLs even without properly escaped characters. HTML with unescaped punctuation will fail <a href="http://validator.w3.org/">validation</a>. </p>
<p>Example</p>
<pre>Option Explicit</pre>
<p class="code">Dim strMessage <br>
strMessage = "Sample text with  (parenthesis) spaces &amp; " &amp; Chr(34) &amp; "quotes" &amp; Chr(34) </p>
<p class="code">MsgBox strMessage&amp; vbCR &amp; Escape(strMessage), 
vbOkOnly+vbInformation, "Demo"</p>
<p class="quote"><i>“Writing is a form of therapy; sometimes I wonder how all those, who do not write, compose, or paint can manage to escape the madness, the melancholia, the panic fear, which is inherent in a human condition” ~ </i>Graham Greene</p>
<p><b>Related:</b></p>
<p><a href="unescape.html">UnEscape</a> - Return Unicode characters from an escaped ASCII string</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="escape.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

