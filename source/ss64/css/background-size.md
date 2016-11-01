---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-Size</h1>
<p>Size or resize  a background image.</p>
<pre>Syntax
      background-size: <span class="code"><i>Width</i> [<i>height</i>]</span><i> </i>| cover | contain ;</pre>
<blockquote>
<p><span class="code"><i>Width</i> [<i>height</i>]</span>    - Set a fixed  size for the background image.<br> 
The values can be set in <span class="code">px, pt, em</span> or<span class="code"> % </span>(percentage of the parent element).   If only one value is given, the height is set to the default "<span class="code">auto</span>".<br>
<span class="code"><br>
cover</span> - Scale the background image to completely cover the background area even if some parts of the image are pushed out of view.</p>
<p><span class="code">contain</span> - Scale the background image so that  its full width and  height are contained within the content area, this will not fill the background area unless the proportions match.<br>
</p>
</blockquote>
<p>New in CSS3 is the ability to specify multiple background images. You can (optionally) specify the <span class="code">background-size</span> for multiple images as a comma-separated list, these will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { background-size: 300px 150px; }<br>
    .ss64class { background-size: 100% 100%; }</span><br>
    <span class="code">#SS64id { background-size: contain;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background-repeat: no-repeat;
background-size: 76px 95px;
background-image: url('../images/smile.jpg');
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS background image. <br>
To avoid distortion the background size must match<br>
the actual dimensions of the image.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:   IE9+, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">Firefox 4+</a>, Opera, and  Safari 5+.</p>
<p class="quote"><i>“I've learned that our background and circumstances may have influenced who we are, but we are responsible for who we become” ~ James Rhinehart</i></p>
<p><b>Related:</b></p>
<p><a href="background-image.html">Background-Image</a> - The background image for an element.<br>
  <br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

