---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font-Smoothing</h1>
<p>Control the application of font anti-aliasing.</p>
<p>The proposed <span class="code">font-smooth</span> CSS property is not on the CSS standards track, presumably because it would make more sense to build these controls into the browser or OS than add them to every webpage. The primary reason to tweak font anti-aliasing is for <a href="http://noscope.com/2012/font-smoothing/">icon fonts</a> and there are vendor prefixes to support this.</p>
<pre>      <span class="code">-webkit-font-smoothing</span>: { none | <span class="code">antialiased</span> | <u>subpixel-antialiased</u>  ;}

      -moz-osx-font-smoothing: { <span class="code"><u>auto</u></span> | inherit | unset | grayscale |  ;}<br>
</pre>
<p><span class="code">subpixel-antialiased</span> - On most non-retina displays this will give the sharpest text.</p>
<p><span class="code">antialiased</span> -  Smooth the font on the level of the pixel, as opposed to the subpixel. Switching  from subpixel rendering to antialiasing for light text on dark backgrounds makes it look lighter.</p>
<p><span class="code">none</span> - Turn font smoothing off, show the text with jagged sharp edges.</p>
<p><span class="code">grayscale</span> - Render text with grayscale antialiasing,  as opposed to the subpixel. Switching  from subpixel rendering to antialiasing for light text on dark backgrounds makes it look lighter.</p>
<p><span class="code">auto</span> - Allow the browser to select an optimization for font smoothing, typically <span class="code">greyscale.</span></p>
<p><span class="code">inherit</span> - inherit from the parent element.</p>
<p>Mobile devices don’t use subpixel rendering due to having to suport both vertical and horizontal screen orientations. Chrome briefly removed and then <a href="http://lists.w3.org/Archives/Public/www-style/2012Oct/0014.html">re-instated</a> support for <span class="code">-webkit-font-smoothing</span> in 2012.</p>
<p>Examples:<br>
  <span class="code">h1 { -webkit-font-smoothing: antialiased;  }<br>
.ss64class { -webkit-font-smoothing: subpixel-antialiased; }</span><br>
    <span class="code">#SS64id { -moz-osx-font-smoothing: grayscale;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-font-smoothing: none;
</textarea></td>
    <td><div id="tryresult">Excellence is not an act but a habit. The things you do the most are the things you will do the best.</div></td>
  </tr>
</tbody></table>
<p>Though present in early (2002) drafts of CSS3 Fonts, <span class="code">font-smooth</span> has been removed from the specification and is currently not on the standard track. Browser Support:  Chrome / Safari / Gecko(OSX only).</p>
<p class="quote"><i>“It's never paid to bet against America. We come through things, but its not always a smooth ride” ~ Warren Buffett</i></p><p><b>Related:</b></p>
<p><a href="http://files.christophzillgens.com/webkit-font-smoothing.html">Examples of -webkit-font-smoothing</a><br>
<a href="http://blog.typekit.com/2010/10/15/type-rendering-operating-systems/">Adobe TypeKit blog</a> - Type rendering <br>
<span class="Limited"><a href="font-size-adjust.html">font-size-adjust</a> - Attempt to normalise the font size. CSS3</span><br>
font-feature-settings - Adjust Kerning</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font-smoothing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
