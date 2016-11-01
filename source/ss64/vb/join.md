---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Join</h1> 
<p> Combine a number of substrings contained in a list (array) into a single string value.</p>
<pre>Syntax
      Join(list[, <i>delimiter</i>])

Key
   list       A one-dimensional array containing substrings to be joined.

   <i>delimiter</i>  A string character used to separate the substrings in the
              returned string. If omitted, the space character (" ") is used.
              If delimiter is a zero-length string, all items in the list are
              concatenated with no delimiters.</pre>
<p><b>Example</b></p>
<p>join the substrings of MyArray:</p>
<p class="code">Dim MyString<br>Dim MyArray(3)</p>
<p class="code">MyArray(0) = "Mr."<br>MyArray(1) = "John "<br>MyArray(2) = "Doe "<br>MyArray(3) = "III"</p>
<p><span class="code">MyString = Join(MyArray)</span> ' MyString contains "Mr. John Doe III".</p>
<p class="quote"><i>“There's zero correlation between being the best talker and having the best ideas” ~ <a href="http://www.ted.com/talks/susan_cain_the_power_of_introverts.html">Susan Cain</a></i></p>
<p><b>Related:</b></p>
<p><a href="array.html">Array</a> - Add values to an Array variable<br>
<a href="split.html">Split</a> - Parse a string of delimited values into an array</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="join.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

