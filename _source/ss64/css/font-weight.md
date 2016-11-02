---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font-weight</h1>
<p>The thickness (or heaviness) of a font.</p>
<pre>Syntax
      font-weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | lighter | normal | bold | bolder | inherit ;</pre>
<blockquote>
<p><span class="code">100</span> = light,  <span class="code">400</span> = normal,<span class="code"> 700</span> = bold.<br>
<span class="code">Bolder</span> - Set a font weight that’s darker than that inherited from the parent element.<br>
<span class="code">Lighter</span> - Set a font weight that’s lighter than that inherited from the parent element.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { font-weight: bold ; }<br>
#ss64id { font-weight: lighter</span><span class="code">; }<br>
.ss64class { font-weight: normal; }</span><br>
</p>

<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font-weight: lighter;</textarea></td>
    <td><div id="tryresult">Bold text is used to provide extra emphasis and is often used for warning labels or highlighting key items.<br>
There can still be times when using a &lt;B&gt; or &lt;I&gt; HTML tag to indicate visual formatting will be the most efficient solution.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers  but other than Firefox and Safari/Webkit, support for numeric values is poor (some only recognise 400 or 700.)</p>
<p class="quote"><i>“From birth, man carries the weight of gravity on his shoulders. He is bolted to earth. But man has only to sink beneath the surface and he is free” ~ Jacques Cousteau</i></p><p><b>Related:</b></p>
<p><a href="font-family.html">font-family</a> - Font family for text<br>
<a href="font-size.html">font-size</a> - Font size of text<br>
<a href="font-style.html">font-style</a> - Font style for text<br>
<a href="font-variant.html">font-variant</a> - Whether or not text should be displayed in a small-caps font<br>
<a href="font.html">font</a> - Shorthand to set the font properties above in one declaration<br>
<a href="opacity.html">opacity</a> - Opacity level for an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font-weight.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
