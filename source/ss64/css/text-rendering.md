---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-Rendering</h1>
<p>Choose the quality of text appearance vs speed of text rendering.</p>
<pre>      text-rendering: { <u>auto</u> |optimizeSpeed | optimizeLegibility | geometricPrecision ;}
</pre>
<p><br>
<span class="code">auto</span>  - Allow the browser to select an optimization for speed and legibility (default).</p>
<p> <span class="code">optimizeSpeed</span> - Emphasize rendering speed over legibility. Disables kerning and ligatures.     </p>
<p><span class="code">optimizeLegibility</span> - Emphasize legibility over rendering speed or geometric precision. Enable kerning and optional ligatures for certain fonts. Using <span class="code">optimizeLegibility</span> for long pages (1,000+ words) will introduce significant, performance problems on mobile devices.</p>
<p><span class="code">geometricPrecision</span> - Emphasize geometric precision over rendering speed and legibility. Allows for more fluid scaling of SVG fonts &amp; font kerning. WebKit Only.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { text-rendering: optimizeLegibility;  }<br>
.ss64class { text-rendering: geometricPrecision; }</span><br>
    <span class="code">#SS64id { text-rendering: auto;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">text-rendering: optimizeSpeed;
</textarea></td>
    <td><div id="tryresult">A stationary object remains stationary if the sum of the forces acting upon it - resultant force - is zero. A moving object with a zero resultant force keeps moving at the same speed and in the same direction.</div></td>
  </tr>
</tbody></table>
<p>Text-Rendering is not defined in any CSS standard. Browser Support: Gecko/WebKit/Blink.</p>
<p class="quote"><i>“In skating over thin ice our safety is in our speed” ~ Ralph Waldo Emerson</i></p><p><b>Related:</b></p>
<p><span class="Limited"><a href="font-size-adjust.html">font-size-adjust</a> - Attempt to normalise the font size. CSS3</span><br>
<a href="font-smoothing.html">font-smoothing</a> - <span class="Limited">Apply anti-aliasing to fonts.</span></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="text-rendering.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

