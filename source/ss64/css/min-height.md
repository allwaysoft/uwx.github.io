---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Min-Height</h1>
<p>Set the minimum height of an element.</p>
<pre>Syntax
      min-height: <i>length</i> | <i>percentage</i> | <u>none</u> | inherit ;</pre>
<blockquote>
<p><span class="code"><i>Length</i></span> - The min height  in <span class="code">px, pt</span> or <span class="code">em</span>.<br>
<span class="code"><i>percentage</i></span> - 
The min height as a percentage value.<br>
<span class="code">none</span> - No limit on the height. (default)<br>
<span class="code">inherit</span> - inherit from the parent element.<br>
<span class="code">min-content</span> - The intrinsic minimum width. Experimental/CSS 3.<br>
&nbsp;&nbsp;&nbsp;(Firefox <span class="code">moz-min-content</span> and Chrome <span class="code">webkit-min-content</span>).<br>
<span class="code">max-content</span> - The intrinsic preferred width. Experimental/CSS 3.<br>
&nbsp;&nbsp;&nbsp;(Firefox <span class="code">moz-max-content</span> and Chrome <span class="code">webkit-max-content</span>).<br>
<span class="code">fill-available</span> - The containing block height minus horizontal margin, border and padding. Experimental /CSS 3<br>
<span class="code">available</span> - An ancient name for fill-available (some browsers only)</p>
</blockquote>
<p> Min-height  does not include padding, borders, or margins, these can cause the total height to be larger.<br>
If a
div contains more text than will fit within a limited height, then it will scroll below the bottom border.</p>
<p>Examples:<br>
  <span class="code">h1 { min-height: 25px; }<br>
    .ss64class { min-height: 2em; }</span><br>
    <span class="code">#SS64id { min-height: 25pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
min-height: 75px;
</textarea></td>
    <td><div id="tryresult">“If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it” ~ President Lyndon B. Johnson</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Happiness makes up in height what it lacks in length”   ~ Robert Frost</i></p><p><b>Related:</b></p>
<p><a href="max-height.html">max-height</a> - Maximum height of an element<br>
<a href="height.html">height</a> - Height of an element<br>
<a href="width.html">width</a>       - Width of an element<br>
<a href="box-sizing.html">box-sizing</a> - The CSS box model used to calculate the height and width of elements.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="min-height.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

