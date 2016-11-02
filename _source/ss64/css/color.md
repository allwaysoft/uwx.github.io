---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Color</h1> 
<p> 
In CSS, a color can be specified in several ways, and can apply not just to text but also <a href="border-color.html">borders</a>, ALT text, <a href="list-style.html">bullet points</a> and ordered lists.</p>
<h2> A HEX color value </h2>
<p>  Syntax<br>
<span class="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: #<i>RRGGBB</i>;</span> </p>
<blockquote>
<p>where <span class="code"><i>RR</i></span> (red), <span class="code"><i>GG</i></span> (green) and <span class="code"><i>BB</i></span> (blue) are <a href="../colour.html">hex color numbers</a> ranging  between <span class="code">0</span> and <span class="code">FF</span>.<br>
e.g. &nbsp;<span class="code">color: #ffffff; &nbsp;&nbsp;/* pure white */</span></p>
</blockquote>
<h2>An RGB color value</h2>
<p>  Syntax<br>
<span class="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: rgb(<i>red,green,blue</i>)</span>; </p>
<blockquote>
<p>Where each parameter (red, green, and blue) can be an integer between 0 and 255 or a percentage value (from 0% to 100%).<br>
e.g. <span class="code">color: rgb(255,0,0)</span>;</p>
</blockquote>
<h2>  A Color Name</h2>
<blockquote>
<p><a href="http://www.w3.org/TR/css3-color/#svg-color">Full list of the Extended color keywords</a> supported by popular browsers (W3.org) <br>
e.g. <span class="code">color: red</span>;</p>
</blockquote>
<p>In addition to the above there is a new RGBA color format,  only supported by more recent web browsers (IE9+, Firefox 3+, Chrome, Safari,  Opera 10+):</p>
<blockquote>
<h2>An RGBA value color </h2>
<p>  Syntax<br>
  <span class="code">color: rgba(<i>red,green,blue,alpha</i>);</span> <br>
 The  <span class="code"><i>alpha</i></span> channel specifies the opacity of the object, a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
<p> RGBA sets the opacity value only for a single element. unlike <a href="opacity.html">opacity</a> which sets the opacity  for an element and all of its children.<br>
To deal with older browsers that don't understand RGBA, specify a simple color as a fallback before the RGBA rule:<br>
<span class="code">color: red;<br>
color: rgba(255,0,0,0.5)</span>;<br>
</p>
</blockquote>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">color: #008800;</textarea></td>
    <td><div id="tryresult">This is a line of sample text we can apply CSS colors to. The background color will also affect the perception and readability of color text.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers.</p>
<p class="quote"><i>“Speed kills colour... the gyroscope, when turning at full speed, shows up gray” ~ Paul Morand</i></p>
<p><b>Related:</b></p>
<p><a href="background-color.html">Background-Color</a><br>
<a href="../colour.html">Color chooser</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

