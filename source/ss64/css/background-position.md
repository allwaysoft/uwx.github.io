---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-position</h1>
<p>Starting position of a background image.</p>
<pre>Syntax
      background-position: <i>HorizontalPosition VerticalPosition</i> ;
      background-position: inherit ;</pre>
<blockquote>
<p><span class="code">HorizontalPosition</span> - A value in pixels, % or ems or   <span class="code">left, right</span> or <span class="code">center</span>.<br>
<span class="code">VerticalPosition</span> - A value in pixels, % or ems or <span class="code">top, bottom</span> or <span class="code">center</span>.<br>
<span class="code">inherit</span> - inherit from a parent element.</p>
</blockquote>
<p>0% is the same as left or top<br>
100% is the same as right or bottom.</p>
<p> New in CSS3 is the ability to specify multiple background images. Specify the positions for multiple images as a comma-separated list, these positions will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.</p>
<pre>Examples:
h1 { background-position: 25px 100px; }
.ss64class { background-position: left top; }
#ss64id { 
  background-image: url('../images/grad.png');
  background-repeat: no-repeat;
  background-position: top right;
 }
</pre>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background-image: url('../images/smile.jpg'),url('../images/frown.jpg');
background-repeat: repeat-y;
background-position: left,right; </textarea></td>

    <td><div id="tryresult">This is a sample of text with a CSS background image. New in CSS3 is the ability to specify multiple background images. Specify multiple images as a comma-separated list.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers.</p>
<p class="quote"><i>“Social progress can be measured by the social position of the female sex” ~ Karl Marx</i></p>
<p><b>Related:</b></p>
<p><a href="background-attachment.html">Background-Attachment</a> - Position of a background image relative to the page.<br>
  <a href="background-color.html">Background-Color</a> - The background color of an element.<br>
  <a href="background-image.html">Background-Image</a> - The background image for an element.<br>
  <a href="background-repeat.html">Background-Repeat</a> - How a background image will be repeated.<br>
<a href="background.html"><b> background</b></a> - A shorthand  for the  background properties.
<!-- #BeginLibraryItem "/Library/foot_css.lbi" --></p><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="background-position.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>


