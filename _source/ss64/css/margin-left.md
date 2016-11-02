---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Margin-left</h1>
<p> Set the margin on the left side of an element. Margin is on the outside of <a href="syntax-box-model.html">box model</a> while <a href="padding.html">padding</a> is on the inside. Use margins to separate the entire block from other elements on the page.</p>
<pre>Syntax
      margin-left: <i>length</i> | <i>percentage</i> | auto | inherit ;</pre>
<blockquote>
<p><span class="code">Length</span> - The margin size  in<span class="code"> px, pt, %, em,</span> <a href="syntax-units.html">etc</a>.<br>
<span class="code">Percentage</span> - Size based on the <b>width</b> of the containing block.<br>
<span class="code">auto</span> - Calculate the margins automatically. In most cases this will be zero or the distance to the edge of the parent.<br>
<span class="code">inherit</span> - Inherit from the parent element.</p>
</blockquote>
<p>Negative margins: If a static element is given a negative margin on the top/left, it pulls the element in that specified direction.<br>
If a negative margin is applied opposite a <span class="code">float</span>, it creates a void leading to the overlapping of content.<br>
The browser does not add together the left and right margins of adjacent  boxes, they are merged and  the larger of the two will be used.</p>
<p>To centre an image or block element horizontally set <span class="code">display: block;</span> and then set both the left and right margins to <span class="code">margin-left: auto;     margin-right: auto;</span> see the example below.</p>
<p>The default value is 0.</p>
<p>Examples:<br>
<span class="code">h1 { margin-left: 5px;  }<br>
.ss64class { margin-left: 1em; }</span><br>
<span class="code">#SS64id { margin-left: -4pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 4px solid blue;
display: block;
margin-right: auto;
margin-left: auto;
</textarea></td>
    <td><div style="border: 1px solid orange">
<div>This is a sample of text with a CSS border (shown in orange)  <img src="../images/smile.jpg" id="tryresult" width="76" height="95" alt="smile">  and an inline image that we can apply CSS formatting to.</div></div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers, IE 7 does not support inherit.</p>
<p class="quote"><i>“Everything is worth what its purchaser will pay for it” ~ Publilius Syrus</i></p><p><b>Related:</b></p>
<p><a href="margin-bottom.html">margin-bottom</a> - Bottom margin of an element.<br>
<a href="margin-right.html">margin-right</a> - Right margin of an element.<br>
<a href="margin-top.html">margin-top</a> - Top margin of an element.<br>
<b><a href="margin.html">margin</a></b> - Shorthand to set all the margin properties in one declaration.<br>
<a href="http://www.granneman.com/webdev/coding/css/centertables/">Center a table with CSS</a> - Scott Granneman</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="margin-left.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

