---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Image</h1>
<p>Specify an image as the border around a div element:</p>
<pre>      border-image:<i> ImageSource Slice Width Outset Repeat</i>;</pre>
<p>border-image  is a shorthand property for setting all the following CSS3 properties</p>
<pre>border-image-source  Use an image as a border.           url('...') or <u>none</u>
border-image-slice   Inward offsets of the image-border. <i>number</i> | % | fill;
border-image-width   Width of the image-border.          <i>number </i>| % | auto;
border-image-outset  Extend the image beyond the border. <i>number</i>
border-image-repeat  Repeat, round or stretch the image. <u>stretch</u> | repeat | round;</pre>
<p>Default:<span class="code"> none 100% 100% stretch</span></p>
<p>The <span class="code"><a href="border-style.html">border-style</a></span> property must be set for the border-image properties to have any effect. If the size of the image is not the same as the combined size of the borders (plus the element itself) then it will either be stretched or tiled &amp; repeated according to the image-repeat property.</p>
<p>Examples:<br>
  <span class="code">h1 { border-image: url('../images/grad.png') 100% auto ; }<br>
    .ss64class { border-image: thick; }</span><br>
    <span class="code">#SS64id { border-image: 2em;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 30px solid ;
border-image: url('../images/flag.png') 30 30 round;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border image. The size of the border and the size of the border image will determine how the result appears on screen.</div></td>
  </tr>
</tbody></table>
<p>Sample flag.png image:<br>
<img src="../images/flag.png" width="90" height="90" alt="Flag sample image"></p>
<p>Browser Support: (CSS3) Firefox, Safari, Chrome, IE11.<br>
None of the major web browsers support the individual (non-shortcut) properties.<br>
</p>
<p class="quote"><i>“Growing up, I never imagined a girl from a border town could one day become a governor” ~ Susana Martinez</i></p><p><b>Related:</b></p>
<p><a href="border-color.html">border-color</a> - Color of the four borders.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-image.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
