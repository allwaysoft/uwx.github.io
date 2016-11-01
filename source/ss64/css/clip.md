---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Clip</h1>
<p>Clip an <a href="position.html">absolutely</a> positioned image/element.</p>
<pre>Syntax
      clip: <i>shape</i> | <u>auto</u> | inherit ;</pre>
<blockquote>
<p><i><span class="code">shape</span></i> - The rectangular area to clip:  <span class="code">rect (<i>top, right, bottom, left</i>)</span>in the units <span class="code">px, pt, em</span> or <span class="code">auto</span><br>
<span class="code">auto</span> - Don't clip. (default)<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>If the value given for <span class="code">top</span> is greater than 0 then the top side will be clipped.<br>
If the value given for <span class="code">right</span> is less than the width of the image/element the right side will be clipped.<br>
If the value given for <span class="code">bottom</span> is less than the height of the image/element the bottom side will be clipped.<br>
If the value given for <span class="code">left</span> is greater than 0 then the left side will be clipped.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { clip: rect(10px,auto,auto,auto);  }<br>
    .ss64class { clip: rect(0,300px,auto,50px); }</span><br>
    <span class="code">#SS64id { clip: rect(25px,auto,auto,0);  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">position: absolute;
clip: rect(30px,auto,95px,15px);
</textarea></td>
    <td><p>This sample text includes an inline image: <img src="../images/smile.jpg" width="76" height="95" id="tryresult" alt="sample image"> the CSS clip property will determine how much of the image to display on screen. This will only affect images that have an absolute position.</p>
</td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“...to photograph is to frame, and to frame is to exclude” ~ </i><i>Susan Sontag </i></p>
<p><b>Related:</b></p>
<p><a href="position.html">position</a> - Positioning method for an element. (static, relative, absolute or fixed)<br>
<a href="vertical-align.html">vertical-align</a> - Vertical alignment of an image/element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clip.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

