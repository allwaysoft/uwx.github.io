---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Spacing</h1>
<p>Set the spacing     between adjacent table cell borders.</p>
<pre>Syntax
      border-spacing: <i>Length</i> [<i>VertLength</i>] | inherit ;</pre>
<blockquote>
<p><i><span class="code">Length</span></i>  - The border space measured in <span class="code">px</span>, <span class="code">em</span> or <span class="code">pt</span>. <br>
<span class="code">inherit</span> - Inherit from the parent element.<br>
</p>
</blockquote>
<p>This only applies to the separated borders model, if <a href="border-collapse.html">collapsing borders</a> are used, Border Spacing will be     ignored.</p>
<p>If two values are given, the first sets horizontal spacing,     and the second vertical spacing. 
Negative values are not allowed.<br>
If border spacing is set to<span class="code"> 0 </span>the table cells will be pushed together, but two adjacent cells will still have two borders, unlike collapsed borders where all the borders around each cell (and the whole table) are collapsed into one. <br>
This is equivalent to the old <span class="code">cellspacing</span> property. Alternatively <span class="code"><a href="border-collapse.html">border-collapse</a>: collapse;</span> will remove all table cell border spacing.</p>
<p>Examples:<br>
<span class="code">h1 { border-spacing: 5px; }<br>
.ss64class { border-spacing: 2em 0.5em; }<br>
#SS64id { border-spacing: 0px;  }</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
<tbody><tr>
<td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-collapse: separate;
border: solid grey;
border-spacing: 8px;
</textarea></td>
<td><table id="tryresult">
<tbody><tr><th>Heading 1</th><td>content</td><td>content</td><td>content</td></tr>
<tr><th>Heading 2</th><td>content</td><td>content</td><td>content</td></tr>
<tr><th>Heading 3</th><td>content</td><td>content</td><td>content</td></tr>
</tbody></table></td>
</tr>
</tbody></table>
<p>(CSS 2) Browser Support: All major browsers,  IE 8.0+</p>
<p class="quote"><i>“The Berlin Wall wasn't the only barrier to fall after the collapse of the Soviet Union and the end of the Cold War. Traditional barriers to the flow of money, trade, people and ideas also fell” ~ Fareed Zakaria</i></p><p><b>Related:</b></p>
<p><a href="border.html">border</a> - Shorthand to set all the border properties.<br>
<a href="border-collapse.html">border-collapse</a> - Collapse table borders.<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-spacing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

