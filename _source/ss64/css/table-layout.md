---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Table-Layout</h1>
<p>How to layout table  columns.</p>
<pre>Syntax
      <span class="code">table-layout</span>: <span class="code"><u>auto</u> | fixed</span> | inherit ;</pre>
<blockquote>
<p><u class="code">auto</u> - Automatic table layout algorithm,     the column width is set by the widest unbreakable content in the cells. (default)<br>
<span class="code">fixed</span> - Horizontal layout only depends on the table's width and the width of the columns, not the contents of the cells.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>A fixed layout, in conjunction with setting a cell width will  trigger the 'other table algorithm', browsers will then size based on the width, not the contents of the cells. Using a fixed layout, the entire table can be quickly rendered once  the first table row has been downloaded.</p>
<p> Using an automatic layout, if some cell  content is wider than that in the first row, then it will not fit in the calculated column width.</p>
<p>Examples:<br>
  <span class="code">td { table-layout: fixed; }<br>
    .ss64class { table-layout: auto; }</span><br>
    <span class="code">#SS64id { table-layout: fixed; }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">table-layout: fixed;
width: 50%;
</textarea></td>
    <td><div>
<table border="1" id="tryresult">
<tbody><tr>
<td>Top left content</td>
<td>Top right content</td>
</tr>
<tr>
<td>Bottom left content that, being longer will tend to make this column wider.</td>
<td>Bottom right content</td>
</tr>
</tbody></table>
</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Never mind the quality: feel the width”   ~ 1950s catch phrase</i></p><p><b>Related:</b></p>
<p><a href="overflow.html">overflow</a> - What happens if content overflows an element's box.<br>
<a href="width.html">width</a> - Width of an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table-layout.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

