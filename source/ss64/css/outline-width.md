---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Outline-width</h1>
<p>Set the width of an outline.</p>
<pre>Syntax
      outline-width: <span class="code">length | thin | <u>medium</u> | thick</span> | inherit ;</pre>
<blockquote>
<p><span class="code">length</span> - the width in<span class="code"> px, pt, %, em,</span> <a href="syntax-units.html">etc</a>. <br>
<span class="code">thin, <u>medium</u>,  thick</span> - Standard browser defined sizes.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>The <span class="code"><a href="outline-style.html">outline-style</a></span> property must be set for the outline-width or outline-color properties to have any effect.</p>
<p>Examples:<br>
  <span class="code">h1 { outline-width: 6pt;  }<br>
    .ss64class { outline-width: 1em; }</span><br>
    <span class="code">#SS64id { outline-width: 2px;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">outline-style: solid;
outline-width: 2px;
</textarea></td>
    <td><div id="tryresult">Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“The paper cutouts allow me to draw with color. For me, it is a simplification. Instead of drawing an outline and then filling in with color-with one modifying the other-I draw directly in color...It is not a starting point, it is a completion” ~ Henri Matisse</i></p><p><b>Related:</b></p>
<p><a href="outline-color.html">outline-color</a> - Color of an outline.<br>
<a href="outline-style.html">outline-style</a> - Style of an outline. <br>
<b><a href="outline.html">outline</a></b> - Shorthand to set all the outline properties<br>
<a href="border-width.html">border-width</a> - Width of the four borders.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

