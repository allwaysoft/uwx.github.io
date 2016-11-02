---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-align</h1>
<p>How to vertically align the child elements of a box.</p>
<pre>Syntax
      box-align: start | end | center | baseline | stretch ;</pre>
<blockquote>
<p><span class="code">start</span> - For normal direction boxes, place the top edge of each child is along the top of the box. For reverse direction boxes, place the bottom edge along the bottom edge.<br>
<span class="code">end</span> - For normal direction boxes, place the bottom edge of each child is along the bottom of the box. For reverse direction boxes, place the top edge of each child along the top of the box.<br>
<span class="code">center</span> - Divide any extra space is evenly, with half above and half below the child.<br>
<span class="code">baseline</span> - If box-orient is inline-axis or horizontal, place all children with their baselines aligned.<br>
<span class="code">stretch</span> - Stretch the child elements to fill the containing block</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { box-align: start;  }<br>
    .ss64class { box-align: center; }</span><br>
    <span class="code">#SS64id { box-align: baseline;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="15" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid blue;
width: 200px;
height: 200px;

display: -webkit-box;
display:    -moz-box;
display:         box;
-webkit-box-pack: center;
   -moz-box-pack: center;
        box-pack: center;
-webkit-box-align: start;
   -moz-box-align: start;
        box-align: start;
</textarea></td>
    <td><div id="tryresult">This is a sample of text with a CSS border. The border helps to display the position of the text DIV.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b>, use the equivalent <span class="code">-moz-box-align</span> for Firefox and <span class="code">-webkit-box-align</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“Property is intended to serve life, and no matter how much we surround it with rights and respect, it has no personal being. It is part of the earth man walks on. It is not man” ~   Martin Luther King, Jr.</i></p><p><b>Related:</b></p>
<p><a href="box-direction.html">box-direction</a> - The direction in which children of a box are displayed. <br>
<a href="box-flex.html">box-flex</a> - Whether the children of a box are flexible or inflexible in size.<br>
<a href="box-ordinal-group.html">box-ordinal-group</a> - Display order of the child elements of a box.<br>
<a href="box-orient.html">box-orient</a> - Position child elements horizontally or vertically. <br>
<a href="box-pack.html">box-pack</a> - Define the horizontal or vertical position or a box.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="box-align.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

