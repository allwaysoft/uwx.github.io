---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Width</h1>
<p>Shorthand to set the top, right, bottom and left border properties in <span class="code">px, pt, %, em,</span> <a href="syntax-units.html">etc</a>.</p>
<pre><i>element</i> { border-width: <i>TopWidth RightWidth BottomWidth LeftWidth </i>;}

<i>element</i> { border-width: <i>TopWidth &nbsp;Right&amp;LeftWidth &nbsp;BottomWidth </i>;}
<i>
element</i> { border-width: <i>Top&amp;BottomWidth &nbsp;Right&amp;LeftWidth </i>;}

<i>element</i> { border-width: <i>Width </i>;}</pre>
<p>Alternatively you can choose to inherit from a parent element:<span class="code"> border-width: inherit ;</span></p>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="border-top-width.html">border-top-width:</a> thin | <u>medium</u> | thick | <i>length</i> | inherit ;
  <a href="border-right-width.html">border-right-width</a>: thin | <u>medium</u> | thick | <i>length</i> | inherit ;
  <a href="border-bottom-width.html">border-bottom-width</a>: thin | <u>medium</u> | thick | <i>length</i> | inherit ;
  <a href="border-left-width.html">border-left-width</a>:thin | <u>medium</u> | thick | <i>length</i> | inherit ;
}</pre>
<p>The default border width is medium.</p>
<p><b>Examples</b></p>
<p>Set the  border widths to 3px and 8px:</p>
<p class="code">h1 {border-width: 3px 8px;}</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
border-width: 1px 4px 10px 25px;</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. Each of the 4 borders can be styled together or separately with CSS.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers.</p>
<p><span class="quote"><i>“I've learned that our background and circumstances may have influenced who we are, but we are responsible for who we become” ~ James Rhinehart</i></span></p>
<p><b>Related:</b></p>
<p><a href="border-style.html">border-style</a> - Style of the four borders.<br>
<a href="border-color.html">border-color</a> - Color of the four borders.<br>
<a href="border.html"><b>border</b></a> - Shorthand to set all  border properties.<br>
<a href="outline-width.html">outline-width</a> - Width of an outline.<br>
<a href="syntax-box-model.html">The CSS Box Model</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-width.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


