---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Position</h1>
<p>Positioning method  for an element.</p>
<pre>Syntax
      <span class="code">position</span>: <span class="code"><u>static</u> | relative | absolute | fixed</span> | inherit ;</pre>
<blockquote>
<p><u class="code">static</u> - Render elements in order, as they appear in the document flow<br>
<span class="code">relative</span> - Position relative to the normal (static) position using top, bottom, left or right.<br>
<span class="code">absolute</span> - Position relative to the html page (or parent element).<br>
<span class="code">fixed</span> - Position relative to the browser window, this fixed position won't scroll if the page scrolls.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p> Where one element is nested within another,   the position of the inner DIV element will be relative to its parent DIV container, but only if that parent DIV has  a non-<span class="code">static</span> position.<br>
If an element’s position  is set to absolute or fixed, <a href="float.html">float</a> will be ignored (the computed value is none).</p>
<p>Examples:<br>
  <span class="code">h1 { position: relative; }<br>
    .ss64class { position: absolute; }</span><br>
    <span class="code">#SS64id { position: relative; }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">position: relative;
top: 40px
</textarea></td>
    <td><div id="tryresult">Elements that are positioned relatively are still considered to be in the normal flow of elements in the document. In contrast, an element that is positioned absolutely is taken out of the flow and thus takes up no space when placing other elements. </div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Do not worry about holding high position; worry rather about playing your proper role”   ~ Confucius</i></p><p><b>Related:</b></p>
<p><a href="clip.html">clip</a> - Clip an absolutely positioned image/element.<br>
<a href="float.html">float</a> - Shift to the left (or right) allowing other content to flow/wrap alongside.<br>
<a href="width.html">width</a> - Width of an element<br>
<a href="z-index.html">z-index</a> - Stack order of a positioned element</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="position.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
