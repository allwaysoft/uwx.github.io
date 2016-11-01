---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Outline</h1>
<p>Shorthand for the 3 outline properties:</p>
<pre>     outline: <i><a href="outline-width.html">outline-width</a> <a href="outline-style.html">outline-style</a> <a href="outline-color.html">outline-color</a></i> ;
</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="outline-width.html">outline-width</a>: <i>length</i> | thin | <u>medium</u> | thick | inherit ;
  <a href="outline-style.html">outline-style</a>: <i>style</i> ;
  <a href="outline-color.html">outline-color</a>: <i>color</i> ;
}</pre>
<p> Alternatively you can choose to inherit from a parent element:<span class="code"> outline: inherit;</span></p>
<h2>Removing the default outline from Anchor Tags (links)</h2>
<p>In the case of <span class="code">&lt;a&gt;</span> tags, most web browsers will give navigation hyperlinks a default <abbr title="In Firefox, the outline color is determined by the color of the text">coloured</abbr> / dotted <span class="code">outline</span> when they have focus. This is especially useful for folks who can't use a mouse  or have a visual impairment and are navigating with the TAB key. If you set <span class="code">outline:none</span> you will make  the links <a href="http://www.outlinenone.com/">inaccessible</a> for these people. If you must remove the default outline, then set an alternative property on <span class="code">:focus</span> for example: <br>
<span class="code">#test1 a:focus { outline: #FF0000 dotted medium; } <br>
#test2 a:focus { background: #FFFF00; }</span></p>
<p>Examples:<br>
  <span class="code">h1 { outline:  1em solid blue ;  }<br>
    .ss64class { outline: 2px  dotted #93622f ; }</span><br>
    <span class="code">#SS64id { outline:  1px solid rgb(0,255,0) ;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">outline: blue dotted 2px;
</textarea></td>
    <td><div id="tryresult">Outlines differ from borders in that they  do not take up space, they are drawn above the content and extend out towards the margin.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers - browsers will interpret the shortcut values in any order.</p>
<p class="quote"><i>“The paper cutouts allow me to draw with color. For me, it is a simplification. Instead of drawing an outline and then filling in with color-with one modifying the other-I draw directly in color...It is not a starting point, it is a completion” ~ Henri Matisse</i></p><p><b>Related:</b></p>
<p><a href="outline-color.html">outline-color</a> - Color of an outline.<br>
<a href="outline-style.html">outline-style</a> - Style of an outline. <br>
<a href="outline-width.html">outline-width</a> - Width of an outline. <br>
<b><a href="border.html">border</a></b> - Shorthand to set all the border properties<br>
<a href="syntax-box-model.html">The CSS Box Model</a><br>
<a href="syntax-pseudo.html">Pseudo-Classes</a></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

