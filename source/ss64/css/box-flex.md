---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-flex</h1>
<p>Whether the children of a box are flexible or inflexible in size. </p>
<pre>Syntax
      box-flex: <i>flex</i></pre>
<p>The flex is relative: a box-flex of 2 is twice as flexible as 1.<br>
Default=0.0 (inflexible)</p>
<p>Examples:<br>
  <span class="code">h1 { box-flex: 25;  }<br>
    .ss64class { box-flex: 4.5; }</span><br>
    <span class="code">#SS64id { box-flex: 2;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-box-flex: 5;
   -moz-box-flex: 5;
        box-flex: 5;
</textarea></td>
    <td><div style="width: 600px; display: box; display: -moz-box; display: -webkit-box;">
<div style="-moz-box-flex: 10; -webkit-box-flex: 10; box-flex: 10; display: -moz-box; display: -webkit-box; display: box; border: 1px solid green">This sample area div has a box-flex value of 10<br>
and is set as <a href="display.html">display: box;</a></div>
<div id="tryresult">This is a separate but adjacent DIV.</div></div>
</td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b>, use the equivalent <span class="code">-moz-box-flex</span> for Firefox and <span class="code">-webkit-box-flex</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“Virtue in this world should be malleable” ~   Moliere</i></p><p><b>Related:</b></p>
<p><a href="box-align.html">box-align</a> - Align the child elements of a box. <br>
<a href="box-direction.html">box-direction</a> - The direction in which children of a box are displayed. <br>
<a href="box-ordinal-group.html">box-ordinal-group</a> - Display order of the child elements of a box.<br>
<a href="box-orient.html">box-orient</a> - Position child elements horizontally or vertically. <br>
<a href="box-pack.html">box-pack</a> - Define the horizontal or vertical position or a box.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="box-flex.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

