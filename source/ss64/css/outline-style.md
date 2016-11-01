---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Outline-style</h1>
<p>Set the Style of an outline.</p>
<pre>Syntax
      outline-style: <i>style</i> ;</pre>
<blockquote>
<p><span class="code">none</span> - No outline and the computed <span class="code">outline-width</span> is           zero.<br>
<span class="code">dotted</span> - A dotted outline.<br>
<span class="code">dashed</span> - A dashed outline.<br>
<span class="code">solid</span> - A solid outline.<br>
<span class="code">double</span> - A double outline. This does not make the outline any wider.<br>
<span class="code">groove</span> - A 3D grooved outline. The effect depends on the outline-color value.<br>
<span class="code">ridge</span> - A 3D ridged outline. The effect depends on the outline-color value.<br>
<span class="code">inset</span> - A 3D inset outline. The effect depends on the outline-color value.<br>
<span class="code">outset</span> - A 3D outset outline. The effect depends on the outline-color value.<br>
<span class="code">inherit</span> - Inherit the outline style from the parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { outline-style: dotted;  }<br>
    .ss64class { outline-style: solid; }</span><br>
    <span class="code">#SS64id { outline-style: inherit;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">outline-style: double;
outline-color: green;
</textarea></td>
    <td><div id="tryresult">Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers</p>
<p class="quote"><i>“The paper cutouts allow me to draw with color. For me, it is a simplification. Instead of drawing an outline and then filling in with color-with one modifying the other-I draw directly in color...It is not a starting point, it is a completion” ~ Henri Matisse</i></p><p><b>Related:</b></p>
<p><a href="outline-color.html">outline-color</a> - Color of an outline.<br>
<a href="outline-width.html">outline-width</a> - Width of an outline.<br>
<b><a href="outline.html">outline</a></b> - Shorthand to set all the outline properties.<br>
<a href="border-style.html">border-style</a> Style of the four borders.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="outline-style.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

