---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Radius</h1>
<p>Shorthand to set all four border-*-radius properties.</p>
<pre>      border-Radius: <i>top-left</i> [<i>top-right</i>] [<i>bottom-right</i>] [<i>bottom-left</i>] ;</pre>
<p>border-radius  is a shorthand property for setting  the following  properties</p>
<pre><a href="border-top-left-radius.html">border-top-left-radius</a> - Curve the top-left corner<br><a href="border-top-right-radius.html">border-top-right-radius</a> - Curve the top-right corner <br><a href="border-bottom-left-radius.html">border-bottom-left-radius</a> - Curve the bottom-left corner<br><a href="border-bottom-right-radius.html">border-bottom-right-radius</a> - Curve the bottom-right corner</pre>
<p>The four values  are given in the clockwise order: Top-Left, Top-Right, Bottom-Right, Bottom-Left.<br>
If Bottom-Left is omitted it will default to the same as Top-Right.<br>
If Bottom-Right is omitted it will default to  the same as Top-Left.<br>
If Top-Right is omitted it  will default to  the same as Top-Left i.e all 4 radiuses will be set to the same value.</p>
<p>Percentage values will curve the height and width of the corner in proportion to the height and width of the element.</p>
<p>Default:<span class="code"> 0 (Square corners)</span></p>
<p>The <span class="code"><a href="border-style.html">border-style</a></span> property must be set for the border-radius properties to have any effect.</p>
<p>Examples:<br>
<span class="code">h1 { border-radius: 40px 10px; }<br>
.ss64class { border-radius: 33%; }</span><br>
<span class="code">#SS64id { border-radius: 0.5em;  }</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font-size: 1.5em;
border: 3px solid blue;
border-radius: 50em ;
padding: 0.5em 1.5em;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border.</div></td>
  </tr>
</tbody></table>
<p>Browser Support: (CSS 3)  IE 9 and up, and all other modern browsers.</p>
<p class="quote"><i>“And I thought how unpleasant it is to be locked out; and I thought how it is worse, perhaps, to be locked in” ~Virginia Woolf” </i></p>
<p><b>Related:</b></p>
<p><a href="http://border-radius.com/">border-radius.com</a> - Online tool<br>
<a href="http://css3.me/">CSS3 generator</a> - Generate rounded corners and box-shadow<br>
<a href="border-top-left-radius.html">border-top-left-radius</a> - Curve the top-left corner<br>
<a href="border-top-right-radius.html">border-top-right-radius</a> - Curve the top-right corner <br>
<a href="border-bottom-left-radius.html">border-bottom-left-radius</a> - Curve the bottom-left corner<br>
<a href="border-bottom-right-radius.html">border-bottom-right-radius</a> - Curve the bottom-right corner<br>
<a href="box-shadow.html">box-shadow</a> - Attach one or more drop-shadows to the box.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

