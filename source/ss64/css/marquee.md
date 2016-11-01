---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Marquee</h1>
<p>Shorthand to set the following marquee properties:</p>
<pre><i>      element</i> { marquee: <i>Direction Play-count Style Speed</i>;}
</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
   <a href="marquee-direction.html">marquee-direction:</a> <i>direction</i>;
   <a href="marquee-play-count.html">marquee-play-count:</a> <i>iterations</i>;
   <a href="marquee-style.html">marquee-style</a>: <i>style</i>;
   <a href="marquee-speed.html">marquee-speed</a>: <i>speed</i>;
}</pre>
<p>The default Marquee is <span class="code">left infinite scroll normal;</span></p>
<p>The marquee CSS properties are a replacement for the non-standard (but widely supported) HTML <a href="http://en.wikipedia.org/wiki/Marquee_element"><span class="code">&lt;marquee&gt;</span></a> tag.<br>
The <a href="overflow-x.html">overflow-x</a> property also has to be set before the marquee will take effect.</p>
<p>Examples:<br>
  <span class="code">h1 { Marquee: forwards infinite scroll fast;  }<br>
.ss64class { Marquee: reverse infinite scroll fast; }</span><br>
    <span class="code">#SS64id { Marquee: forwards infinite scroll normal;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">overflow-x: -webkit-marquee;
overflow-x: marquee-line;
-webkit-marquee: down infinite scroll fast;
        marquee: down infinite scroll fast;
</textarea></td>
    <td><div id="tryresult">A stationary object remains stationary if the sum of the forces acting upon it - resultant force - is zero. A moving object with a zero resultant force keeps moving at the same speed and in the same direction.</div></td>
  </tr>
</tbody></table>
<p>(CSS 4?) Browser Support: <b>None</b>. Use  <span class="code">-webkit-marquee</span> for Safari and Chrome.</p>
<p class="quote"><i>“Come to the edge, he said. They said: We are afraid. Come to the edge, he said. They came. He pushed them and they flew” ~ Guillaume Apollinaire</i></p><p><b>Related:</b></p>
<p><a href="marquee-direction.html">marquee-direction</a> - Direction of moving content.<br>
<a href="marquee-play-count.html">marquee-play-count</a> - The number of times a marquee box repeats.<br>
<a href="marquee-style.html">marquee-style</a> - Style of the moving content.<br>
<a href="marquee-speed.html">marquee-speed</a> - How fast to scroll the content.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="marquee.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

