---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><script type="text/javascript">
function ApplyStyle(id) {
  var newcss = document.getElementById('trycode').value;
  var divs = document.getElementsByClassName('tryresult');
for(var i=0; i < divs.length; i++) { 
  divs[i].setAttribute('style', newcss);
  }
}</script>
<h1>Display</h1>
<p>How to display an HTML element.</p>
<pre>Syntax
      display: <i>display_mode</i> ;</pre>
<blockquote>
<p> Display_Modes:<br>
<span class="code"> block</span> -  Take up the full width available, with a new line before and after.<br>
<span class="code">box</span> - Display as a block-level flex container box (also <span class="code">flex-box</span> or <span class="code">flex</span> )<br>
<span class="code">inline</span> - One or more inline boxes, does not force new lines, this will display List Items as a horizontal row.<br>
<span class="code">inline-block</span> - A block box that’s laid out as if it were an inline box (but preserving  block capabilities such as setting width, height, top and bottom margins / paddings etc).<br>
<span class="code">inline-flex</span> - Display as an inline-level flex container box<br>
<span class="code">inline-table</span> - Behave like a table  laid out like an inline box.<br>
<span class="code">list-item</span> - A principal block box and a list-item inline box for the list marker (bullet).<br>
<span class="code">run-in</span> - By default a block box, if the run-in box doesn’t contain a block box, and is followed by a sibling block box (not a run-in box), the run-in box becomes the first <span class="code">inline</span> box of the sibling block box.<br>
<span class="code">table</span> -  Behave like a table.<br>
<span class="code">table-caption</span> - Behave like a table caption.<br>
<span class="code">table-cell</span> -  Behave like a table cell. <br>
<span class="code">table-column</span> - Behave like a table column.<br>
<span class="code">table-column-group</span> - Behave like a table column group.<br>
<span class="code">table-footer-group</span> - Behave like a table footer row group.<br>
<span class="code">table-header-group</span> - Behave like a table header row group. <br>
<span class="code">table-row     </span> -  Behave like a table row.<br>
<span class="code">table-row-group</span> - Behave like a table body row group.<br>
<span class="code">none</span> - Generate no box at all, not even for descendant boxes no matter what their <span class="code">display:</span> property is set to. <br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>If an element’s display property is set to <span class="code">none</span>, no <a href="syntax-box-model.html">box</a> is generated and so <a href="float.html">float</a> and <a href="position.html">position</a> are ignored. </p>
<p>When working with table objects (rows, row groups, columns, and column groups), <span class="code">visibility:collapse</span> should be used in preference to <span class="code">display: none</span>, this will keep the structural integrity of the table intact.</p>
<p>To centre an image or block element horizontally set <span class="code">display: block;</span> and then set both the left and right margins to auto: <span class="code">margin-left: auto;     margin-right: auto;</span></p>
<p>Displaying images - when a browser is running in "Standards" mode, the <span id="linebox">&nbsp;line box&nbsp;</span> always contains  space for character <a href="http://en.wikipedia.org/wiki/Descender">descenders</a> below the baseline. This will cause a small gap to appear below the image. Setting <span class="code">img {display: block;}</span> or <span class="code">img {vertical-align:bottom;}</span>will prevent the image from being treated as an inline element, thus removing the extra vertical space.</p>
<p>Examples:<br>
  <span class="code">li { display: inline; }<br>
  </span><span class="code">
  .ss64class { 
  display: none; }</span><br>
  <span class="code">#ss64id { display: </span><span class="code">block; }</span>  <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">display: inline;
</textarea></td>

<td>
<ul>
<li class="tryresult"><a href="display.html#">ListItem1</a></li>
<li class="tryresult"><a href="display.html#">ListItem2</a></li>
<li class="tryresult"><a href="display.html#">ListItem3</a></li>
</ul>
</td>
</tr>
</tbody></table>
<p>Browser Support: IE8+, Opera 9.2+ some  browsers do not render all values correctly see <a href="http://www.quirksmode.org/css/display.html">Quirksmode</a> or <a href="http://caniuse.com/#search=display">Caniuse</a></p>
<p class="quote"><i>“People who know little are usually great talkers, while men who know much say little” ~ Jean Jacques Rousseau</i></p>
<p><b>Related:</b></p>
<p><a href="float.html">float</a> - Shift to the left (or right) allowing other content to flow/wrap alongside<br>
<a href="visibility.html">visibility</a> - Hide or show an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="display.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
