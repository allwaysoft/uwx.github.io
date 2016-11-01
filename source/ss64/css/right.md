---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Right</h1>
<p>Set the right edge of an element relative to its normal position (<span class="code">relative</span> positioning) or relative to the right edge of its container (<span class="code">absolute</span> or <span class="code">fixed</span> positioning)</p>
<pre>Syntax
      right: <i>length</i> | <i>percentage</i> | auto | inherit ;
</pre>
<blockquote>
<p><span class="code"><i>length</i></span> - A positive number will move the element to the left, a negative number right.<br>
<span class="code"><i>percentage</i></span> - Set the right edge  as a percentage of the containing element. Negative values are allowed <br>
<span class="code">auto</span> - Let the user agent (web browser) calculate the right edge position.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>An alternative (CSS3 only) is to use <a href="transform.html">transform translate()</a> that  will  "nudge" the element from it's current position which is perfect for moving an item; adding motion; rather than setting its initial position.</p>
<p>Examples:<br>
  <span class="code">h1 { position: relative; right: 25px; }<br>
    .ss64class { position: absolute; right: -2em; }</span><br>
    <span class="code">#SS64id { position: relative; right: 25pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
position: absolute;
top: 200px;
right: 200px;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the position of the text DIV.</div></td>
  </tr>
</tbody></table>
<p>Browser Support: CSS 2 supported in all major browsers.</p>
<p class="quote"><i>“Happiness makes up in height what it lacks in length”   ~ Robert Frost</i></p><p><b>Related:</b></p>
<p> <a href="bottom.html">bottom</a> - Bottom position of a positioned element<br>
<a href="top.html">top</a> - Top position of a positioned element<br>
<a href="left.html">left</a> - Left position of a positioned element<br>
<a href="transform.html">transform translate(), translateX(),  translateY()</a> - Apply a 2D or 3D transformation to an element. CSS3<br>
<a href="position.html">position</a> - Positioning method  for an element (static, relative, absolute or fixed)</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="right.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

