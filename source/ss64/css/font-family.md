---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font-Family</h1>
<p>Set a prioritized list of font family names and/or generic font family names for the text of an element. </p>
<pre>Syntax
      font-family: <i>font1,font2,font3</i>...,<i>GenericFont</i> ;
      font-family: inherit ;</pre>
<p>The user agent/browser will display the text using the first font in the list which is available. To guarantee that at least one of the fonts will be     available, a generic family name should  be added as the last value in the     list. (A generic font will automatically select a suitable installed font.)</p>
<p>Generic family names:</p>
<blockquote>
<p><span class="code">cursive</span> &nbsp;A cursive script font, <span style="font-family: cursive">an example of cursive script</span>.<br>
  <span class="code">fantasy</span> &nbsp;A special, decorative font (CSS2.1+) <span style="font-family: fantasy">an example of fantasy</span>.<br>
  <span class="code">monospace</span> &nbsp;A monospaced font, <span style="font-family: monospace">an example of monospace</span>.<br>
  <span class="code">sans-serif</span> &nbsp;A font without serifs (like Arial) <span style="font-family: sans-serif">an example of sans-serif</span>.<br>
<span class="code">serif</span> &nbsp;A font with serifs (like Times) <span style="font-family: serif">an example of serif.</span></p>
<p><span class="code">inherit</span> Inherit from the parent element.<br>
<span class="code">-apple-system</span> Display the system font, Apple Safari only</p>
</blockquote>
<p> If a font name includes spaces then surround the "full name" with quotes. From the CSS 2.1 spec: <i>To avoid mistakes in escaping, it is recommended to quote font family names that contain white space, digits, or punctuation characters other than hyphens</i>.  Generic font-families, such as <span class="code">monospace</span> should not be quoted.</p>
<p>  Family names, being CSS keywords, are always case insensitive. Font family names can be case sensitive on some early operating systems, the CSS 3 specification requires that font-names be treated case-insensitively.</p>
<p> The on screen appearance of a font can also be affected by OS font smoothing and ClearType.
</p>
<p>Examples:<br>
<span class="code">h1 { font-family: Helvetica,Verdana,sans-serif ;}<br>
#ss64id { font-family: "Courier New", monospace;</span><span class="code"> }<br>
  .ss64class { 
  font-family: Palatino, "Palatino Linotype", Georgia, Times, serif; }</span><br>
</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font-family: "Apple Chancery", "Georgia", serif;</textarea></td>

    <td><div id="tryresult">
<p>The 'Try It' control will change the appearance of this text. </p>
<p>A greater difference in legibility can be found within members of the same type family than between a serif and a sans-serif typeface. Factors such as x-height, counter size, letter spacing and stroke width  will affect readability.<br>
<br>
Possibly ambiguous characters: <br>
|!1lIi<br>
0Oo<br>
,.;:_-=+`'"<br> 
(){}[]</p>
</div></td>
  </tr>
</tbody></table>
<p> (CSS1) Browser Support: All major browsers</p>
<p class="quote"><i>“A man cannot leave a better legacy to the world than a well-educated family”  ~ Thomas Scott </i></p><p><b>Related:</b></p>
<p><a href="http://css-tricks.com/snippets/css/font-stacks/">Font Stacks</a> - CSS Tricks.<br>
<a href="http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html">Common fonts</a> - for all versions of Windows &amp; OS X<br>
<a href="font-size.html">font-size</a> - Font size of text.<br>
<a href="font-style.html">font-style</a> - Font style for text.<br>
<a href="font-variant.html">font-variant</a> - Whether or not text should be displayed in a small-caps font.<br>
<a href="font-weight.html">font-weight</a> - Normal, bold, bolder.<br>
<a href="font.html"><b>font</b></a> - Shorthand to set the font properties above in one declaration.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
