---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Width</h1>
<p>Set the width of an element.</p>
<pre>Syntax
      width: <i>width</i> | <u>auto</u> | inherit ;</pre>
<blockquote>
<p> <span class="code">width</span> - The width in <span class="code">px, pt, em, % </span><a href="syntax-units.html">etc</a>.<br>
<span class="code"><u>auto</u></span> -      The browser will calculate and select a width (default).<br>
<span class="code">min-content</span> - The intrinsic minimum width. Experimental/CSS 3. (Firefox  <span class="code">moz-min-content</span> and Chrome <span class="code">webkit-min-content</span>).<br>
<span class="code">max-content</span> - The intrinsic preferred width. Experimental/CSS 3. (Firefox <span class="code">moz-max-content</span> and Chrome <span class="code">webkit-max-content</span>).<br>
<span class="code">fit-content</span> - The intrinsic minimum width if available. Experimental/CSS 3. (Firefox <span class="code">moz-fit-content</span> and Chrome <span class="code">webkit-fit-content</span>).<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>If a DIV contains more text than will fit within a limited width, then it will scroll below the bottom border. If a single word is wider than the width then it will spill outside the right border.</p>
<p>The min and max-content values are not particularly useful on the width property, but  are often set on <a href="min-width.html">min-width</a> and <a href="max-width.html">max-width</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { width: 250px; }<br>
    .ss64class { width: 25em; }</span><br>
    <span class="code">#SS64id { width: 400pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
width: 50%;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the width of the element.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers. IE versions up to and     including 7 don’t support the value <span class="code">inherit</span>.</p>
<p class="quote"><i>“I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well”   ~ Diane Ackerman</i></p><p><b>Related:</b></p>
<p><a href="max-width.html">max-width</a> - Maximum width of an element<br>
<a href="min-width.html">min-width</a> - Minimum width of an element<br>
<a href="height.html">height</a> - Height of an element</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="width.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

