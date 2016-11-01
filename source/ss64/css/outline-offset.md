---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Outline-offset</h1>
<p>Offset an outline, and draw it beyond the border edge.</p>
<pre>Syntax
      outline-offset: <i>length</i> | inherit ;</pre>
<blockquote>
<p><span class="code"><i>length</i></span> - The distance the outline is outset from the border edge in <span class="code">px, pt</span> or <span class="code">em</span> (default=0).<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { outline-offset: 2px; }<br>
    .ss64class { outline-offset: 1em; }</span><br>
    <span class="code">#SS64id { outline-offset: 5pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid black;
outline-offset: 5px;
outline: 5px solid blue;
</textarea></td>
    <td><div id="tryresult">Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers apart from IE.</p>
<p class="quote"><i>“The theoretical broadening which comes from having many humanities subjects on the campus is offset by the general dopiness of the people who study these things...” ~  Richard Feynman</i></p><p><b>Related:</b></p>
<p><a href="outline-color.html">outline-color</a> - Color of an outline.<br>
<a href="outline-style.html">outline-style</a> - Style of an outline.<br>
<a href="outline-width.html">outline-width</a> - Width of an outline.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="outline-offset.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

