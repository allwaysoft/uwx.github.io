---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><script type="text/javascript">
function ApplyStyle(id) {
  var el = document.getElementById('@font-face');
  var newcss = document.getElementById('trycode').value;
  el.setAttribute('style', newcss);
}</script>
<h1>@Font-face</h1>
<p>Download and use a web font.</p>
<pre>Syntax
      @font-face <i>font-properties</i> ;</pre>
<blockquote>
<p>font-properties:<br>
<span class="code"> font-family: <i>fontFamilyName </i></span>The name of the font. [Required.]<br>
<span class="code">src: <i>URL </i></span>The URL(s) where the font should be downloaded from. [Required.]<br>
<span class="code">font-stretch: <i>stretch</i></span> How to stretch the font./* Not supported in Webkit*/<br>
<span class="code">font-style: <i>fontStyleName</i> </span>How to style the font. <span class="code">{<u>normal</u> | italic | oblique}</span><br>
<span class="code">font-weight: <i>fontWeight</i> </span>The boldness of the font.<span class="code"> {<u>normal</u> | bold  | 100  | 200  ... 800  | 900 }</span><br>
<span class="code">unicode-range: <i>unicode-range</i></span> A range of unicode characters supported by the font, prefixed by <span class="code">U+</span>.  default = <span class="code">"U+0-10FFFF"</span></p>
</blockquote>
<p>Valid options for stretch: <span class="code">{ <u>normal</u> | condensed  | ultra-condensed  | extra-condensed  | semi-condensed  | expanded  | semi-expanded  | extra-expanded  | ultra-expanded }</span> also<span class="code"> wider | narrower</span> are supported by IE 10.</p>
<p>To use @font-face you must host the font file yourself.<br>
The copyright on many standard fonts  will prevent their use as web-fonts.<br>
Font files should be hosted 
on the same domain/subdomain as the HTML.  Many web browsers will automatically block fonts hosted from a different domain to discourage the <a href="http://en.wikipedia.org/wiki/Hotlinking">hotlinking</a> of font files.<br>
</p>
<p>Examples:</p>
<pre>@font-face {
         font-family: Geo;
         font-style: normal;
         src: url(fonts/GeosansLight.ttf);
}

@font-face {
         font-family: Geo;
         font-style: oblique;
         src: url(fonts/GeosansLight-Oblique.ttf); 
}

.sampletext {
         font-family: Geo;
}</pre>

<p>(CSS 2) Browser Support: All major browsers,  but some browsers  have font-weight/<a href="http://en.wikipedia.org/wiki/ClearType">ClearType</a> rendering issues with some @fonts.<br>
</p>
<p class="quote"><i>“You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face… do the thing you think you cannot do” ~ Eleanor Roosevelt</i></p><p><b>Related:</b></p>
<p> <a href="http://www.fontsquirrel.com/">fontsquirrel</a> - A huge repository of free and unrestricted  fonts suitable for use with @font-face.<br>
Some hosted alternatives to @font-face are <a href="http://www.google.com/webfonts">Google/webfonts</a> (Free), <a href="http://html.adobe.com/edge/webfonts/">Adobe/webfonts</a> (Free) and <a href="https://typekit.com/">TypeKit</a> (Premium)<br>
<a href="font-family.html">font-family</a> - Font family for text.<br>
  <a href="font-size.html">font-size</a> - Font size of text.<br>
  <a href="font-style.html">font-style</a> - Font style for text.<br>
  <a href="font-weight.html">font-weight</a> - Normal, bold, bolder.<br>
<a href="font.html">font</a> - Shorthand to set the font properties above in one declaration.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font-face.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
