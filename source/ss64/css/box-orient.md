---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-orient</h1>
<p>How to orient the child elements of a box, vertically or horizontally.</p>
<pre>Syntax
      box-orient: horizontal | vertical | inline-axis | block-axis ;</pre>
<blockquote>
<p><span class="code">horizontal</span> - Lay out children from left to right.<br>
<span class="code">vertical</span> - Lay out children from top to bottom.<br>
<span class="code">inline-axis</span> - Lay out children along the inline (horizontal) axis.<br>
<span class="code">block-axis</span> - Lay out children along the (vertical) block axis.<br>
</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { box-orient: horizontal;  }<br>
    .ss64class { box-orient: vertical; }</span><br>
    <span class="code">#SS64id { box-orient: horizontal;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="15" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid blue;

-webkit-box-orient: horizontal;
   -moz-box-orient: horizontal;
        box-orient: horizontal;

display: -webkit-box;
display:    -moz-box;
display:         box;
</textarea></td>
    <td><div id="tryresult">
<p>Line1</p>
      <p> Line2</p>
      <p>Line3</p>
  </div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  <b>None</b> (yet), use the equivalent <span class="code">-moz-box-orient</span> for Firefox and <span class="code">-webkit-box-orient</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“It wasn't a matter of courage or dreams, but something a whole lot simpler. A pilot would call it ground orientation. I'd spent a long time circling above the clouds, looking for life, while Hallie was living it” ~   Barbara Kingsolver</i></p><p><b>Related:</b></p>
<p><a href="box-align.html">box-align</a> - Align the child elements of a box. <br>
<a href="box-direction.html">box-direction</a> - The direction in which children of a box are displayed. <br>
<a href="box-flex.html">box-flex</a> - Whether the children of a box are flexible or inflexible in size.<br>
<a href="box-ordinal-group.html">box-ordinal-group</a> - Display order of the child elements of a box.<br>
<a href="box-pack.html">box-pack</a> - Define the horizontal or vertical position or a box.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="box-orient.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

