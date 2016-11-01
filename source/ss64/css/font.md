---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font</h1>
<p>Shorthand to set  font  properties:</p>
<pre><i>      element</i> { font: [<i>Font-style</i>] [<i>Font-variant</i>] [<i>Font-weight</i>]<i> Font-size<b> </b></i>[<i>Line-height</i>]<i> Font-family<b> </b>;</i>}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> { 
  <a href="font-style.html">font-style</a>: normal | italic | oblique;
  <a href="font-variant.html">font-variant</a>: normal | small-caps;
  <a href="font-weight.html">font-weight</a>: normal | bold | bolder | lighter | (100-900);
  <a href="font-size.html"><b>font-size</b></a>: (<i>number+unit</i>) | (xx-small - xx-large);
  <a href="line-height.html">line-height</a>: normal | (<i>number+unit</i>);
  <a href="font-family.html"><b>font-family</b></a>: <i>fontname1</i>,"<i>font name2</i>";
}</pre>
<p>Alternatively you can choose to inherit from a parent element:<span class="code"> font:  inherit  ;</span></p>
<p>The default font property values, any value that is not specified in the shorthand will be set to the     default, <u>even</u> if  set separately in another css rule.<br>
</p>
<pre>  font-style:  normal;
  font-variant: normal;
  font-weight: normal;
  font-size:   inherit;
  line-height: normal;
  font-family: inherit;</pre>
<h2>iOS and OSX system fonts</h2>
<blockquote>
<p>The <span class="code">font:</span> shorthand can also be used to <a href="http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/">specify</a> dynamic font styles in iOS and OS X. <br>
These are  shorthand  for a group of style definitions:</p>
<p>-apple-system-headline1, -apple-system-headline2, -apple-system-subheadline1, -apple-system-subheadline2, -apple-system-body, -apple-system-footnote, -apple-system-caption1, -apple-system-caption2, -apple-system-figure</p>
</blockquote>
<p><b>Examples</b></p>
<p>Set the font of H1 to double size (200%) with the Verdana font family:</p>
<p class="code">h1 {font: 200% Verdana,serif ;}</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font: normal normal 150% Georgia,Times,serif ;</textarea></td>
    <td><div id="tryresult">“From all these experiences the most important thing I have learned is that legibility and beauty stand close together and that type design, in its restraint, should be only felt but not perceived by the reader.” ~ Adrian Frutiger</div></td>
  </tr>
</tbody></table>
<p> (CSS 1) Browser Support: All major browsers</p>
<p><span class="quote"><i>“The real test of friendship is: can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?” - Eugene Kennedy</i></span></p>
<p><b>Related:</b></p>
<p><a href="color.html">color</a> - Color of text<br>
<a href="font-family.html">font-family</a> - Font family for text<br>
<a href="font-size.html">font-size</a> - Font size of text<br>
<a href="font-style.html">font-style</a> - Font style for text<br>
<a href="font-weight.html">font-weight</a> - Normal, bold, bolder<br>
<a href="font-face.html">@font-face</a> Download and use a web font.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
