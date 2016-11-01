---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Style</h1>
<p>Set the style of the four borders. The four borders can be set individually or together using from one to four values:</p>
<pre>Syntax
      border-style: <i>Top &nbsp;Right &nbsp;Bottom &nbsp;Left</i> ;<br>      border-style:<i> Top &nbsp;&nbsp;Right&amp;Left &nbsp;Bottom </i>;<br>      border-style: <i>Top&amp;Bottom &nbsp;Right&amp;Left </i>;<br>      border-style: <i>AllBorders </i>;
</pre>
<blockquote>
<p> To remember the  order use the mnemonic TRouBLe or think of a clock face.</p>
<p>Border Styles:<br>
  <span class="code">none</span> - No border and the computed <span class="code">border-width</span> is           zero.<br>
  <span class="code">hidden</span> - No border, not even in a table where an adjacent (collapsed) cell exists.<br>
  <span class="code">dotted</span> - A dotted border.<br>
  <span class="code">dashed</span> - A dashed border.<br>
  <span class="code">solid</span> - A solid border.<br>
  <span class="code">double</span> - A double border. This does not make the border any wider.<br>
  <span class="code">groove</span> - A 3D grooved border. The effect depends on the border-color value.<br>
  <span class="code">ridge</span> - A 3D ridged border. The effect depends on the border-color value.<br>
  <span class="code">inset</span> - A 3D inset border. The effect depends on the border-color value.<br>
  <span class="code">outset</span> - A 3D outset border. The effect depends on the border-color value.<br>
<span class="code">inherit</span> - Inherit the border style from the parent element.</p>
</blockquote>
<p>A thin (1px) dotted border with a color close to the surrounding content can be used to soften the normally sharp edge between blocks of content.</p>
<p>Examples:<br>
  <span class="code">h1 { border-style: solid double dashed dotted; }<br>
    .ss64class { border-style: solid dashed; }</span><br>
    <span class="code">#SS64id { border-style: solid;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: inset;
border-top-color: #0000ff;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. Each of the 4 borders can be styled separately with CSS.</div></td>
  </tr>
</tbody></table>
<p> (CSS 1) Browser Support:  All major browsers,  IE 1.0 - IE     7     do not support <span class="code">hidden</span> or <span class="code">inherit</span>, IE 1.0 - IE 8  may fail to display 1px dashed borders.</p>
<p class="quote"><i>“I don't want anyone reading my writing to think about style. I just want them to be in the story” ~ Willa Sibert Cather</i></p>
<p><b>Related:</b></p>
<p><a href="border-color.html">border-color</a> - Color of the four borders.<br>
<a href="border-width.html">border-width</a> - Width of the four borders.<br>
<a href="border.html"><b>border</b></a> - Shorthand to set all  border properties<br>
<a href="color.html">color</a> - Color of text<br>
<a href="outline-style.html">outline-style</a> - Style of an outline.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-style.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

