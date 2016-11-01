---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font-size-adjust</h1>
<p>Attempt to normalise the font size. This CSS property was a <a href="http://www.barrypearson.co.uk/articles/text/aspect_values.htm">not entirely successful</a> attempt to render two or more fonts so they would appear to be the same size. The adjustment is based on the fonts aspect ratio (a far from perfect measure for this purpose). In CSS 3 it no longer has to use the aspect value of the <b>first</b> font-family.</p>
<p>Examples:<br>
<span class="code">h1 { font-size-adjust: 0.5; }<br>
#ss64id { font-size-adjust: 0.45</span><span class="code">; }<br>
  .ss64class { 
  font-size-adjust: 0.62; }</span><br>
</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font-size-adjust: 0.5;</textarea></td>

    <td><div id="tryresult">
<p>Sans-Serif: A greater difference in legibility can be found within members of the same type family than between a serif and a sans-serif typeface.</p>
<p>
</p><div style="font-family: 'Times New Roman', Georgia, Times, serif">Serif: Factors such as x-height, counter size, letter spacing and stroke width  will affect readability.</div><p></p>
</div></td>
  </tr>
</tbody></table>
<p>(Dropped in CSS 2.1, reintroduced in CSS 3) Browser Support: Firefox only</p>
<p class="quote"><i>“Beauty itself is but the sensible image of the Infinite” ~ Francis Bacon</i></p>
<p><b>Related:</b></p>
<p><a href="font-family.html">font-family</a> - Font family for text<br>
  <a href="font-size.html">font-size</a> - Font size of text<br>
  <a href="font-style.html">font-style</a> - Font style for text<br>
  <a href="font-weight.html">font-weight</a> - Normal, bold, bolder<br>
<a href="font.html">font</a> - Shorthand to set the font properties above in one declaration</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font-size-adjust.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
