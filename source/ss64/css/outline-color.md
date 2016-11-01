---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Outline-color</h1>
<p>Set the color of an outline.</p>
<pre>Syntax
      outline-color: <i><a href="color.html">color</a> </i>| invert | inherit ;</pre>
<blockquote>
<p><span class="code"><i>color</i></span> - The color of the outline.<br>
<span class="code">invert</span> - Set the outline color to an inversion of the background color.<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>The <span class="code"><a href="outline-style.html">outline-style</a></span> property must be set before any outline color properties can be applied.<br>
The <span class="code">transparent</span> keyword maps to <span class="code">rgb(0,0,0)</span>.</p>
<p>Examples:<br>
  <span class="code">h1 { outline-color: rgb(0,255,0);  }<br>
    .ss64class { outline-color: #93622f; }</span><br>
    <span class="code">#SS64id { outline-color: #2b5e55;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">outline-style: solid;
outline-color: green;
</textarea></td>
    <td><div id="tryresult">Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers apart from IE. Not all support <span class="code">invert</span></p>
<p class="quote"><i>“You are not here merely to make a living. You are here to enable the world to live more amply, with greater vision, and with a finer spirit of hope and achievement. You are here to enrich the world. You impoverish yourself if you forget this errand” ~ Woodrow Wilson</i></p><p><b>Related:</b></p>
<p><a href="outline-style.html">outline-style</a> - Style of an outline. <br>
<a href="outline-width.html">outline-width</a> - Width of an outline. <b><br>
</b><b><a href="outline.html">outline</a></b> - Shorthand to set all the outline properties<br>
<a href="border-color.html">border-color</a> - Color of the four borders.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="outline-color.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

