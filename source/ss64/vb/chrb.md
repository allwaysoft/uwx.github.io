---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>ChrB</h1> 
<p>Return the string character for <i>ChrCode</i> (Byte code.) With the rise of Unicode there is now rarely any need to use ChrB(). </p>
<pre>Syntax
      ChrB (<i>ChrCode</i>)</pre>
<p><span class="code">ChrB (65)</span> will return A </p>
<p>The ChrB function is used with byte data contained in a string. Instead of returning a character, which may be one or two bytes, ChrB always returns a single byte.</p>
<p>The behavior of the ChrB function depends on the byte ordering of the hardware platform, and the number of bytes used to represent Unicode characters in the system software. The function will produce different results on each supported operating system. Use with caution. The described behavior pertains to the Win32 version.</p>

<p>Example</p>
<p class="code">Dim strDemo<br> strDemo = ChrB (65)<br>
&gt; A </p>
<p class="quote"><i>“You can easily judge the character of a man by how he treats those who can do nothing for him” ~ James D. Miles</i></p>
<p>Related:</p>
<p><a href="chr.html">Chr</a> -  Return the string character for <i>ChrCode</i> (ASCII code)<br>
<a href="chrw.html">ChrW</a> -  Return the string character for <i>ChrCode</i> (Unicode/DBCS)</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chrb.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

