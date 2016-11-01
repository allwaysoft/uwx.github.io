---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Background-attachment</h1>
<p>Set the position of a background image relative to the rest of the page. </p>
<pre>Syntax
      background-attachment: <u>scroll</u> | fixed | local | inherit ;</pre>
<blockquote>
<p><span class="code"><u>scroll</u></span> - The background image scrolls with the rest of the page (default).<br>
<span class="code">Fixed</span> - Position the image relative to the entire window.<br>
<span class="code">local</span> - The background image scrolls with the element. <br>
<span class="code">inherit</span> - inherit from the parent element</p>
</blockquote>
<p>When background-attachment is set to <span class="code">fixed</span>, then the image (if it's small and set to not repeat) can scroll outside the containing DIV and  become invisible. Test your layout by resizing the web browser.</p>
<p>New in CSS3 is the ability to specify multiple background images. You can (optionally) specify the <span class="code">background-attachment</span> for multiple images as a comma-separated list, these will then be applied (in order) to each of the images specified by <a href="background-image.html">background-image</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { background-attachment: fixed; }<br>
  </span><span class="code">
  .ss64class { 
  background-attachment: inherit; }</span><br>
  <span class="code">#ss64id { background-attachment: scroll</span><span class="code">; }</span>  <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">background-image: url('../images/smile.jpg');
background-attachment: fixed;
background-repeat: repeat;
background-position: center center; 
</textarea></td>

    <td><div id="tryresult">This is a sample of text that can be given a CSS background. This is a sample of text that can be given a CSS background. This is a sample of text that can be given a CSS background. This is a sample of text that can be given a CSS background.</div></td>
  </tr>
</tbody></table>
<p> (CSS 1) Browser Support: All major browsers.</p>
<p class="quote"><i>“Something is wrong here, and it's more than easy access to guns or violence on TV. It's about lack of love and attachment to loving people early in life ~ Rob Reiner</i></p>
<p><b>Related:</b></p>
<p><a href="background-color.html">Background-Color</a> - The background color of an element.<br>
  <a href="background-image.html">Background-Image</a> - The background image for an element.<br>
  <a href="background-position.html">Background-Position</a> - Starting position of a background image.<br>
  <a href="background-repeat.html">Background-Repeat</a> - How a background image will be repeated.<br>
<a href="background.html"><b> background</b></a> - A shorthand property for the  properties above</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
