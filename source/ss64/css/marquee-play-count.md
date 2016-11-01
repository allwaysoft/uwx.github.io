---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Marquee-play-count</h1>
<p>The number of times a marquee box repeats (or infinite).</p>
<pre>Syntax
      marquee-play-count <i>iterations</i> | infinite</pre>
<blockquote>
<p><i class="code">iterations </i>- The number of times the marquee repeats.<br>
<span class="code">infinite</span> - Repeat continuously.<br>
</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { marquee-play-count: infinite; }<br>
#ss64id { marquee-play-count: infinite</span><span class="code">; }<br>
  .ss64class { 
  marquee-play-count: 10; }</span><br>
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
        marquee-direction: reverse; /* W3C */
-webkit-marquee-repetition: infinite;
  marquee-play-count: infinite; /* W3C */
-webkit-marquee-speed: fast;
        marquee-speed: fast; /* W3C */
</textarea></td>

    <td><div id="tryresult">A stationary object remains stationary if the sum of the forces acting upon it - resultant force - is zero. A moving object with a zero resultant force keeps moving at the same speed and in the same direction.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support: <b>None</b>. Use the equivalent <span class="code">-webkit-marquee-repetition</span> for Safari and Chrome.</p>
<p class="quote"><i>“Be daring, be different, be impractical, be anything that will assert integrity of purpose and imaginative vision against the play-it-safers, the creatures of the commonplace, the slaves of the ordinary” ~ Cecil Beaton </i></p><p><b>Related:</b></p>
<p><a href="marquee-direction.html">marquee-direction</a> - Direction of moving content.<br>
<a href="marquee-style.html">marquee-style</a> - Style of the moving content.<br>
<a href="marquee-speed.html">marquee-speed</a> - How fast to scroll the content.<br>
<b><a href="marquee.html">marquee</a></b> - Shorthand to set all the marquee properties in one declaration</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="marquee-play-count.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


