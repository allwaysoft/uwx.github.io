---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border</h1>
<p>Shorthand to set  the 3 properties:</p>
<pre><i>element</i> { border: <i><a href="border-width.html">border-width</a> <a href="border-style.html">border-style</a> <a href="border-color.html">border-color</a> </i>;}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="border-width.html">border-width</a>: <i>length</i> | thin | <u>medium</u> | thick | inherit ;
  <a href="border-style.html">border-style</a>: <i>style</i> ;
  <a href="border-color.html">border-color</a>:  <i>color</i> ;
}</pre>
<p>Alternatively you can choose to inherit from a parent element: <span class="code">border: inherit ;</span></p>
<p>These three properties are themselves shorthand properties, for example <span class="code">border-style</span> can set different styles for top, bottom, left and right borders. If you use the <span class="code">border</span> shorthand it will set all 4 to the same value.</p>
<p>The <span class="code">Border-Style</span> property must be set for the <span class="code">Border-Width</span> or <span class="code">Border-Color</span> properties to have any effect.</p>
<p>The default  property values, any value that is not specified in the shorthand will be set to the     default:</p>
<pre>  border-width: medium;
  border-style: none;
  border-color: 0;</pre>
<p><b>Examples</b></p>
<p>Set the  border of H1 to a 2px solid green line:</p>
<p class="code">h1 {border: 2px solid green ;}</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 3px dotted white ;</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. Each of the 4 borders can be styled together or separately with CSS.</div></td>
  </tr>
</tbody></table>
<p>Browser Support: All major browsers (CSS 1) Web browsers will interpret the shortcut values in any order.</p>
<p class="quote"><i>“I am the kind of person who doesn't recognize borders. I don't understand why we think it is okay to keep someone within one border when they are unable to feed their family when they could be getting help somewhere else. I don't see people as different so I don't understand the idea of borders in this world” ~ Angelina Jolie</i></p><p><b>Related:</b></p>
<p><a href="border-bottom.html">border-bottom</a> - Shorthand to set all the border-bottom properties.<br>
<a href="border-left.html">border-left</a> - Shorthand to set all the border-left properties. <br>
<a href="border-right.html">border-right</a> - Shorthand to set all the border-right properties.<br>
<a href="border-top.html">border-top</a> - Shorthand to set all the border-top properties.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

