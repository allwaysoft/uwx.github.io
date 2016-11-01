---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>z-index</h1>
<p> Z-index is used to position a CSS box along the z axis, perpendicular to the display.Wherever two boxes overlap, the box with the largest z-index will appear on top.</p>
<pre>Syntax
      z-index: <i>index</i> | auto | inherit ;</pre>
<blockquote>
<p><i class="code">index</i> - A positive or negative integer, or 0.<br>
<span class="code">auto</span> - The browser default.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>z-index  will only affect CSS boxes if they have a <a href="position.html">position</a> value of <span class="code">absolute</span>, <span class="code">fixed</span>, or <span class="code">relative</span>. </p>
<p>Examples:<br>
  <span class="code">body { z-index: -8; }<br>
    .ss64class { z-index: auto; }</span><br>
    <span class="code">#SS64id { z-index: 1;  }</span><br>
</p>
<div id="ontop"></div>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">position: absolute;
z-index: 1;
border-style: solid;
border-color: green;</textarea></td>

    <td><div id="tryresult">The Z-index of the pink box is the default (0), if the z-index of this text is made larger than 0 then it will appear on top.</div></td>
  </tr>
</tbody></table>

<p>Browser Support: (CSS2+)  buggy in IE 8</p>
<p class="quote"><i>“The business of the advertiser is to see that we go about our business with some magic spell or tune or slogan throbbing quietly in the background of our minds”  ~ Marshall McLuhan</i></p>
<p><b>Related:</b></p>
<p><a href="position.html">position</a> - Positioning method for an element<br>
<a href="http://www.tjkdesign.com/articles/z-index/teach_yourself_how_elements_stack.asp">z-index stacking demo</a> from tjkdesign </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="z-index.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

