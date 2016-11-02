---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Overflow-y</h1>
<p>Whether to clip the top/bottom edges of overflowing content.</p>
<pre>Syntax
      overflow-y: <i>overflow</i> | inherit ;</pre>
<blockquote>
<p><span class="code">auto</span> - Provide scrollbars when necessary.<br>
<span class="code">hidden</span> - Clip and  hide any overflowing content.<br>
<span class="code">scroll</span>  - Clip any overflowing content but provide a scrollbar.<br>
<span class="code"><u>visible</u></span> -  Render overflowing content outside the element’s box (default)<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { overflow-y: auto; }<br>
    .ss64class { overflow-y: hidden; }</span><br>
    <span class="code">#SS64id { overflow-y: scroll;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">width: 250px;
height: 100px;
overflow-y: scroll;
</textarea></td>
    <td><div id="tryresult">This sample text is too long to fit in a text box if it's  constrained to just 250px wide by 100px tall. The CSS Overflow setting will determine how the text will display. Either overflowing the box or by providing extra scrollbars.</div></td>
  </tr>
</tbody></table>
<p>Browser Support:  All major browsers (CSS 3+) IE 9+</p>
<p class="quote"><i>“You are not here merely to make a living. You are here to enable the world to live more amply, with greater vision, and with a finer spirit of hope and achievement. You are here to enrich the world. You impoverish yourself if you forget this errand” ~ Woodrow Wilson</i></p><p><b>Related:</b></p>
<p><a href="overflow.html">overflow</a> - What happens if content overflows an element's box.<br>
<a href="overflow-x.html">overflow-x</a> - Whether to clip the left/right edges of overflowing content.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="overflow-y.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

