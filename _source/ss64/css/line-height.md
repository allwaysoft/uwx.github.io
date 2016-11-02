---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Line-Height</h1>
<p>Set the line     height. Line height will indirectly affect the leading or     half-leading. <a href="http://en.wikipedia.org/wiki/Leading">Leading</a> is the distance between  successive lines of type. </p>
<pre>Syntax
      line-height: <i>height</i> | normal | inherit ;</pre>
<blockquote>
<p><span class="code"><i>height</i></span> - A number  used to set the line height relative to the font-size, so if the font is 10px and line height is 1.5  then each line will be 15px high.<br>
A fixed line height can also be set in px, pt, cm, % or em but this is <a href="http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/">not recommended</a> for any element that has descendant elements - the decendants would inherit the same size as the parent instead of a line-height relative to their own font-size. <br>
<span class="code">normal</span> - the user agents default line-height.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>Examples:<br>
<span class="code">h1 { line-height: 1.0; }<br>
#ss64id { Line-height: 1.5</span><span class="code">; }<br>
  .ss64class { 
  line-height: 1.2; }</span><br>
</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">Line-Height: 1.5;</textarea></td>

    <td><div id="tryresult">
Type is a beautiful group of letters, not a group of beautiful letters.<br>
If beauty of music is between the notes, beauty of typography is in the white spaces. </div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers,  IE 8+</p>
<p class="quote"><i>“Beauty itself is but the sensible image of the Infinite” ~ Francis Bacon</i></p>
<p><b>Related:</b></p>
<p><a href="font-size.html">font-size</a> - Font size of text</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


