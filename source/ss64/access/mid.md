---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Mid</h1>
<p>  Extract a substring from a string, starting at a given position.</p>
<pre>Syntax
      Mid(<i>string</i>, <i>start_position</i>, [<i>number_of_chars</i>])

Key
   <i>string</i>         The text string or string <a href="stringexpression.html">expression</a>.

 <i>start_position</i>   The start character in the string.
                  The first character is 1.

 <i>number_of_chars</i>  The number of characters to extract.
                  default= all characters after <i>start_position</i>.
</pre>
<p> The Mid() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Mid()</span> will return a Variant, you can also use <span class="code">Mid$()</span> to return a String. <br>
You should use <span class="code">Mid()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p>Use the MidB function with byte data contained in a string. Instead of specifying the number of characters to return, <i>length</i> specifies the number of bytes.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Mid("The world is everlasting",5,5)<br>
</span>Returns <span class="code">"world"</span></p>
<p class="quote"><i>“Love's dominion, like a king's, admits of no partition” ~ Ovid</i></p>
<p><b>Related:</b></p>
<p><a href="left.html">Left</a> - Extract a substring from a string<br>
<a href="right.html">Right</a> - Extract a substring from a string</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

