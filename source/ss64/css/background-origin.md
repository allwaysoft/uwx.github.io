---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-Origin</h1>
<p>The positioning area of a background image.</p>
<pre>Syntax
      background-origin: border-box | <u>padding-box</u> | content-box ;   </pre>
<blockquote>
<p> <span class="code">border-box</span> The background image fills the border <a href="syntax-box-model.html">box</a>.<span class="code"><br>
<u>padding-box</u></span> The background image fills the padding <a href="syntax-box-model.html">box</a>.<br>
<span class="code">content-box</span>. The background image fills the content <a href="syntax-box-model.html">box</a>.</p>
</blockquote>
<p>When set to <span class="code">border-box</span> then the edges of the image can be hidden underneath the  border.<br>
<span class="code">padding-box</span> is the default. </p>
<p>New in CSS3 is the ability to specify multiple background images. You can (optionally) specify the <span class="code">background-origin</span> for multiple images as a comma-separated list, these will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { background-origin: border-box; }<br>
    .ss64class { background-origin: padding-box; }</span><br>
    <span class="code">#SS64id { background-origin: content-box;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">padding:10px;
border: 10px dotted green;
background-repeat: no-repeat;
background-origin: content-box;
background-image: url('../images/smile.jpg');
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS background image. By default the background image fills the padding box.</div></td>
  </tr>
</tbody></table>
<p>(CSS3+) Browser Support:   IE9+, Firefox 4+, Opera, and  Safari 5+.</p>
<p class="quote"><i>“Fantasy, abandoned by reason, produces impossible monsters; united with it, she is the mother of the arts and the origin of marvels” ~ Goya quotes (Spanish artist)</i></p>
<p><b>Related:</b></p>
<p><a href="background-image.html">Background-Image</a> - The background image for an element.<br>
<a href="background-repeat.html">Background-Repeat</a> - How a background image will be repeated.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

