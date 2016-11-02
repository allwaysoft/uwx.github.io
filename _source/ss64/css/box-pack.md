---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-pack</h1>
<p>Define the horizontal position in horizontal boxes and the vertical position in vertical boxes.</p>
<pre>Syntax
      box-pack: start | end | center| justify ;</pre>
<blockquote>
<p><span class="code">start</span> - For normal direction boxes, place the first child on the top/left with any extra space on the bottom/right (after the last child). For	reverse direction boxes, place last child on the bottom/right with any extra space on the top/left (before the first child.)<br>
<span class="code">end</span> - For normal direction boxes, place last child on the bottom/right with any extra space on the top/left (before the first child.). For reverse direction boxes, place the first child one the top/left with any extra space on the bottom/right (after the last child)<br>
<span class="code">center</span> - Divide any extra space is evenly, with half before and half after the last child.<br>
<span class="code">justify</span> - Divide extra space evenly between each child (no extra space before the first child or after the last child)<br>
</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { box-pack: start;  }<br>
    .ss64class { box-pack: center; }</span><br>
    <span class="code">#SS64id { box-pack: end;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="15" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
width: 400px;
height: 200px;

/* box */
display: -webkit-box;
display:    -moz-box;
display:         box;
/* Pack */
-webkit-box-pack: center;
   -moz-box-pack: center;
        box-pack: center;
/* Align */
-webkit-box-align: start;
   -moz-box-align: start;
        box-align: start;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the position of the text DIV.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b>, use the equivalent <span class="code">-moz-box-align</span> for Firefox and <span class="code">-webkit-box-align</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“Surround yourself with people who believe in you” ~   Brian Koslow</i></p><p><b>Related:</b></p>
<p><a href="box-align.html">box-align</a> - Align the child elements of a box. <br>
<a href="box-direction.html">box-direction</a> - The direction in which children of a box are displayed. <br>
<a href="box-flex.html">box-flex</a> - Whether the children of a box are flexible or inflexible in size.<br>
<a href="box-ordinal-group.html">box-ordinal-group</a> - Display order of the child elements of a box.<br>
<a href="box-orient.html">box-orient</a> - Position child elements horizontally or vertically. </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

