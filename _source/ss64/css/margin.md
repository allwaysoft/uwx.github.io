---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Margin</h1>
<p>Shorthand to set the top, right, bottom and left margin properties in <span class="code">px, pt, %, em,</span> <a href="syntax-units.html">etc</a>. Margin is on the outside of <a href="syntax-box-model.html">box model</a> while <a href="padding.html">padding</a> is on the inside. Use margins to separate the entire block from other elements on the page.</p>
<pre>Syntax<i>

element</i> { margin: <i>TopMargin RightMargin BottomMargin LeftMargin </i>;}

<i>element</i> { margin: <i>TopMargin &nbsp;Right&amp;LeftMargin &nbsp;BottomMargin </i>;}

<i>element</i> { margin: <i>Top&amp;BottomMargin &nbsp;Right&amp;LeftMargin </i>;}

<i>element</i> { margin:<i> Margin</i>;}
</pre>
<p>Alternatively you can choose to inherit from a parent element:<span class="code"> Margin: inherit ;</span></p>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="margin-top.html">margin-top</a> <i>length</i>;
  <a href="margin-right.html">margin-right</a>: <i>length</i>;
  <a href="margin-bottom.html">margin-bottom</a>: <i>length</i>;
  <a href="margin-left.html">margin-left</a>: <i>length</i>;
}</pre>
<p>The default Margin for a DIV is 0, the default margin for BODY is 8px (in most browsers).<br>
If your stylesheets contains many <span class="code">margin:0</span> definitions then consider using a CSS <a href="http://meyerweb.com/eric/thoughts/2011/01/03/reset-revisited/">reset</a>, even a simple<span class="code"> body {margin 0; padding: 0;}</span></p>
<p>Examples:<br>
  <span class="code">h1 { Margin: 5px;  }<br>
.ss64class { Margin: 2px 5px; }</span><br>
    <span class="code">#SS64id { Margin: 2px 50px 10px 75px;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 4px solid blue;
margin: 4px 40px 10px;
</textarea></td>
    <td><div style="border: 1px solid red"><div id="tryresult">This is a sample of text with a CSS border shown in red, containing a second DIV that we can format with CSS.</div></div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers, IE 7 does not support <span class="code">inherit</span>.</p>
<p class="quote"><i>“Come to the edge, he said. They said: We are afraid. Come to the edge, he said. They came. He pushed them and they flew” ~ Guillaume Apollinaire</i></p><p><b>Related:</b></p>
<p><a href="margin-bottom.html">margin-bottom</a> - Bottom margin of an element.<br>
<a href="margin-left.html">margin-left</a> - Left margin of an element.<br>
<a href="margin-right.html">margin-right</a> - Right margin of an element.<br>
<a href="margin-top.html">margin-top</a> - Top margin of an element.<br>
<a href="syntax-box-model.html">The CSS Box Model</a><br>
<a href="https://developer.mozilla.org/en-US/docs/CSS/margin">margin properties</a> - Mozilla.org</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="margin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

