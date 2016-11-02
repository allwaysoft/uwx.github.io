---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Top</h1>
<p>Set the top edge of an element relative to its normal position (<span class="code">relative</span> positioning) or relative to the top edge of its container (<span class="code">absolute</span> or <span class="code">fixed</span> positioning)</p>
<pre>Syntax
      top: <i>length</i> | <i>percentage</i> | auto | inherit ;</pre>
<blockquote>
<p><span class="code">Length</span> - A positive number will move  the element up, a negative number down.<br>
<span class="code">percentage</span> - Set the bottom edge position as a percentage of the containing element. Negative values are allowed.<br>
<span class="code">Auto</span> - 
Let the browser calculate the bottom edge position.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>If  a top value is applied to an element with a Absolute or Fixed position, it will be placed relative to the top of the document (or non-static parent element.)<br>
If both a top and bottom value are applied to a relatively positioned element, only the top value will be honored.</p>
<p>An alternative (CSS3 only) is to use <a href="transform.html">transform translate()</a> that  will  "nudge" the element from it's current position which is perfect for moving an item; adding motion; rather than setting its initial position.</p>
<p>Examples:<br>
  <span class="code">h1 { position: relative; top: 25px; }<br>
    .ss64class { position: absolute; top: -2em; }</span><br>
    <span class="code">#SS64id { position: relative; top: 25pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
position: absolute;
top: 300px;
left: 300px;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the position of the text DIV.</div></td>
  </tr>
</tbody></table>
<p>Browser Support: CSS 2 supported in all major browsers.</p>
<p class="quote"><i>“There is no top. There are always further heights to reach”     ~ Jascha Heifetz</i></p><p><b>Related:</b></p>
<p> <a href="bottom.html">bottom</a> - Bottom position of a positioned element<br>
<a href="left.html">left</a> - Left position of a positioned element<br>
<a href="right.html">right</a> - Right position of a positioned element<br>
<a href="transform.html">transform translate(), translateX(),  translateY()</a> - Apply a 2D or 3D transformation to an element. CSS3<br>
<a href="position.html">position</a> - Positioning method  for an element (static, relative, absolute or fixed)</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="top.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

