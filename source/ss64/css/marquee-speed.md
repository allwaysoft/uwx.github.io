---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Marquee-speed</h1>
<p>How fast to scroll the content of a marquee box.</p>
<pre>Syntax
      marquee-speed <i>speed
</i>      marquee-speed <i>distance/time</i></pre>
<blockquote>
<p> <i><span class="code">number</span></i> - an Integer or time unit (non-negative values)<br>
<span class="code">fast</span> - Move at a fast speed.<br>
<span class="code">normal</span> - Move at a normal speed. <br>
<span class="code">slow</span> - Move at a slow speed.</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { marquee-speed: fast; }<br>
#ss64id { marquee-speed: normal</span><span class="code">; }<br>
  .ss64class { 
  marquee-speed: 10; }</span><br>
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
<p>(CSS 3) Browser Support: <b>None</b>. Use the equivalent <span class="code">-webkit-marquee-speed</span> for Safari and Chrome.</p>
<p class="quote"><i>“I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia” ~ Woody Allen</i></p><p><b>Related:</b></p>
<p><a href="marquee-direction.html">marquee-direction</a> - Direction of moving content.<br>
<a href="marquee-play-count.html">marquee-play-count</a> - The number of times a marquee box repeats.<br>
<a href="marquee-style.html">marquee-style</a> - Style of the moving content.<br>
<b><a href="marquee.html">marquee</a></b> - Shorthand to set all the marquee properties in one declaration</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="marquee-speed.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


