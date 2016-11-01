---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Max-Height</h1>
<p>Set the maximum height of an element.</p>
<pre>Syntax
      max-height: <i>length</i> | <i>percentage</i> | <u>none</u> | inherit ;</pre>
<blockquote>
<p><span class="code"><i>Length</i></span> - The max height  in <span class="code">px, pt</span> or <span class="code">em</span>.<br>
<span class="code"><i>percentage</i></span> - 
The max height as a percentage value<br>
<span class="code">none</span> - No limit on the height. (default)<br>
<span class="code">inherit</span> - inherit from the parent element.<br>
<br>
<span class="code">max-content</span>  - Experimental/CSS 3,     the intrinsic preferred height.<br>
<span class="code">min-content</span> - Experimental/CSS 3, the intrinsic minimum height.<br>
<span class="code">fit-content</span> - Experimental/CSS 3, the intrinsic preferred height.<br>
<span class="code">fill-available</span> - Experimental /CSS 3, The containing block height minus horizontal margin, border and padding.<br>
<span class="code">available</span> - An ancient name for the keyword above (some browsers only)</p>
</blockquote>
<p> Max-height  does not include padding, borders, or margins.<br>
If a div contains more text or larger text, than will fit within a limited height, then it will scroll below the bottom border.</p>
<p>Examples:<br>
  <span class="code">h1 { max-height: 25px; }<br>
    .ss64class { max-height: 2em; }</span><br>
    <span class="code">#SS64id { max-height: 25pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
max-height: 50px;
</textarea></td>
    <td><div id="tryresult">
This is a sample of text with a CSS border.<br>
The border helps to display the height of the element.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Happiness makes up in height what it lacks in length”   ~ Robert Frost</i></p><p><b>Related:</b></p>
<p><a href="min-height.html">min-height</a> -Minimum height of an element<br>
<a href="height.html">height</a> - Height of an element<br>
<a href="width.html">width</a>       - Width of an element<br>
<a href="box-sizing.html">box-sizing</a> - The CSS box model used to calculate the height and width of elements.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

