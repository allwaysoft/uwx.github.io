---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-ordinal-group</h1>
<p>The display order of the child elements of a box. </p>
<pre>Syntax
      box-ordinal-group: <i>group</i></pre>
<p>Elements with a lower value are displayed before those with a higher value. Default ordinal-group = 1</p>
<p>Examples:<br>
  <span class="code">h1 { box-ordinal-group: 1;  }<br>
    .ss64class { box-ordinal-group: 2; }</span><br>
    <span class="code">#SS64id { box-ordinal-group: 3;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;

-webkit-box-ordinal-group: 3;
   -moz-box-ordinal-group: 3;
        box-ordinal-group: 3;
</textarea></td>
    <td><div style="display: box; display: -moz-box; display: -webkit-box;">
<div style="-moz-box-ordinal-group: 2; -webkit-box-ordinal-group: 2; box-ordinal-group: 2; display: -moz-box; display: -webkit-box; display: box; border: 1px solid green">This sample area div has a box-ordinal-group value of 2<br>
and is set as <a href="display.html">display: box;</a></div>
<div id="tryresult">This is a separate but adjacent DIV.</div></div>
</td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b>, use the equivalent <span class="code">-moz-box-ordinal-group</span> for Firefox and <span class="code">-webkit-box-ordinal-group</span> for Safari, and Chrome.</p>
<p class="quote"><i>“I've never known a musician who regretted being one. Whatever deceptions life may have in store for you, music itself is not going to let you down” ~   Virgil Thomson</i></p><p><b>Related:</b></p>
<p><a href="box-align.html">box-align</a> - Align the child elements of a box. <br>
<a href="box-direction.html">box-direction</a> - The direction in which children of a box are displayed. <br>
<a href="box-flex.html">box-flex</a> - Whether the children of a box are flexible or inflexible in size.<br>
<a href="box-orient.html">box-orient</a> - Position child elements horizontally or vertically. <br>
<a href="box-pack.html">box-pack</a> - Define the horizontal or vertical position or a box.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

