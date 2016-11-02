---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Marquee-direction</h1>
<p>Specify the direction of motion for a marquee box.</p>
<pre>Syntax
      marquee-direction <i>direction</i></pre>
<blockquote>
<p><span class="code">auto</span> - The marquee moves in the default direction (right to left).<br>
<span class="code">backwards</span> - The marquee moves from right to left.<br>
<span class="code">left</span> - The marquee moves from right to left.<br>
<span class="code">forwards</span> - The marquee moves from left to right.<br>
<span class="code">right</span> - The marquee moves from left to right.<br>
<span class="code">reverse</span> - The marquee moves from top to bottom. <br>
<span class="code">down</span> - The marquee moves from top to bottom.<br>
<span class="code">ahead</span> - The marquee moves from bottom to top.<br>
<span class="code">up</span> - The marquee moves from bottom to top.</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { marquee-direction: reverse; }<br>
#ss64id { marquee-direction: forwards</span><span class="code">; }<br>
  .ss64class { 
  marquee-direction: auto; }</span><br>
</p>
<p>The marquee CSS properties are a replacement for the non-standard HTML <a href="http://en.wikipedia.org/wiki/Marquee_element"><span class="code">&lt;marquee&gt;</span></a> tag.<br>
The <a href="overflow-x.html">overflow-x</a> property also has to be set before the marquee will take effect.</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">overflow-x: -webkit-marquee;
overflow-x: marquee-line; /* W3C */
-webkit-marquee-direction: reverse;
        marquee-direction: reverse;
-webkit-marquee-repetition: infinite;
  marquee-play-count: infinite; /* W3C */
-webkit-marquee-speed: fast;
        marquee-speed: fast; /* W3C */
</textarea></td>

    <td><div id="tryresult">A stationary object remains stationary if the sum of the forces acting upon it - resultant force - is zero. A moving object with a zero resultant force keeps moving at the same speed and in the same direction.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support: <b>None</b>. Use the equivalent <span class="code">-webkit-marquee-direction</span> for Safari and Chrome.</p>
<p class="quote"><i>“The direction in which education starts a man will determine his future in life” ~ Plato</i></p><p><b>Related:</b></p>
<p><a href="marquee-play-count.html">marquee-play-count</a> - The number of times a marquee box repeats.<br>
<a href="marquee-style.html">marquee-style</a> - Style of the moving content.<br>
<a href="marquee-speed.html">marquee-speed</a> - How fast to scroll the content.<br>
<b><a href="marquee.html">marquee</a></b> - Shorthand to set all the marquee properties in one declaration<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


