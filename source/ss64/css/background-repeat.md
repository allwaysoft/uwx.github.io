---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-repeat</h1>
<p>How a background image will be repeated.</p>
<pre>Syntax
      background-repeat: repeat | repeat-x | repeat-y | no-repeat | space | round | inherit ;</pre>
<blockquote>
<p><span class="code"><u>repeat</u></span> - The background image will be repeated both vertically and horizontally. (default)<br>
<span class="code">repeat-x</span> - The background image will be repeated only horizontally.<br>
<span class="code">repeat-y</span> - The background image will be repeated only vertically.<br>
<span class="code">no-repeat</span> - The background-image will not be repeated.<br>
<span class="code">space</span> - Space the image out evenly across the width and height of the element. (CSS 3 only)<br>
<span class="code">round</span> - Scale the image until it can repeat throughout the element without being cut off. (CSS 3 only)<br>
<span class="code">inherit</span> - Inherit from the parent element.</p>
</blockquote>
<p>New in CSS3 is the ability to specify multiple background images. You can (optionally) specify the background-repeat for multiple images as a comma-separated list, these will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.<br>
</p>
<p>Examples:<br>
<span class="code">H1 {
background-repeat: repeat-x; }<br>
 #ss64id
{

background-repeat: no-repeat;
}</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background-image: url('../images/grad.png');
background-repeat: repeat-x;</textarea></td>

    <td><div id="tryresult">This is a sample of text with a CSS background image. By default The background image will be repeated both vertically and horizontally. This is often used to provide a tiled wallpaper effect.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers.  The two new values in CSS 3 have limited support: IE9 + Opera 10.5</p>
<p class="quote"><i>“The ear tends to be lazy, craves the familiar and is shocked by the unexpected; the eye, on the other hand, tends to be impatient, craves the novel and is bored by repetition” ~ W. H. Auden</i></p>
<p><b>Related:</b></p>
<p><a href="background-attachment.html">Background-Attachment</a> - Position of a background image relative to the page.<br>
  <a href="background-color.html">Background-Color</a> - The background color of an element.<br>
  <a href="background-image.html">Background-Image</a> - The background image for an element.<br>
  <a href="background-position.html">Background-Position</a> - Starting position of a background image.<br>
<a href="background.html"><b> background</b></a> - A shorthand  for the  background properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="background-repeat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


