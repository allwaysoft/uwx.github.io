---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Vertical-align</h1>
<p>Set the vertical alignment of an element/image.</p>
<pre>Syntax
      vertical-align:  <i>length</i> | percentage | <u>baseline</u> | bottom | middle | sub | super | text-bottom | text-top | top | inherit ;</pre>
<blockquote>
<p><i class="code">length </i>-  A value in <span class="code">px, pt, em</span> or<span class="code"> %</span> that will raise or lower the box position (negative values move down)<br>
<span class="code">baseline</span> - Align the baseline of the element with the baseline of the parent element. (default)<br>
<span class="code">top</span> - Align the top of the element with the top of the tallest element on the line.<br>
<span class="code">bottom</span> - Align the bottom of the element with the lowest element on the line.<br>
<span class="code">middle</span> - Place the element in the middle of the parent element.<br>
<br>
<span class="code">super</span> - Align the element as if it were a <sup>super</sup>script.<br>
<span class="code">sub</span> - Align the element as if it were a <sub>sub</sub>script.<br>
<span class="code">text-bottom</span> - Align the bottom of the element with the bottom of the parent element's font.<br>
<span class="code">text-top</span> - Align the top of the element with the top of the parent element's font<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>vertical-align can be used to position  images within a block of text, or to position  text vertically within a table cell. For table cells only the options (<span class="code">top, bottom, middle, baseline</span>) are valid. This is equivalent to the old <span class="code">valign</span> property.</p>
<p>Examples:<br>
  <span class="code">h1 { vertical-align: 100px;  }<br>
    .ss64class { vertical-align: middle; }</span><br>
    <span class="code">#SS64id { vertical-align: text-bottom;  }</span>    <br>
<span class="code">td {vertical-align: top;}</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">vertical-align: -60px;
</textarea></td>
    <td><p>When an image is placed <img src="../images/smile.jpg" width="76" height="95" id="tryresult" alt="sample image"> inline with text, you can use CSS to adjust the vertical alignment. By default it will align with the bottom (baseline) of the text.</p></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers, IE 8+</p>
<p class="quote"><i>“I'm a tidy sort of bloke. I don't like chaos. I kept records in the record rack, tea in the tea caddy, and pot in the pot box” ~ George Harrison</i></p><p><b>Related:</b></p>
<p><a href="clip.html">clip</a> - Clip an absolutely positioned image/element.<br>
<a href="text-align.html">text-align</a> - Horizontal alignment of text.<br>
<a href="box-align.html">box-align</a> - Align the child elements of a box.<br>
<a href="background-position.html">Background-Position</a> - Starting position of a background image.<br>
<a href="http://css-tricks.com/centering-in-the-unknown/">Centering in the Unknown</a> - CSS Tricks<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="vertical-align.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

