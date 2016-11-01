---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Border-Collapse</h1>
<p>Set the  border collapse model  to be used for a table or an inline table.</p>
<pre>Syntax
      border-collapse: collapse | separate | inherit ;</pre>
<blockquote>
<p> <span class="code">collapse</span> - The collapsing borders model.  This facilitates adding individual borders to any row(s) or cell(s) in the table. border-spacing and empty-cell properties will be ignored.</p>
<p><span class="code">separate</span> - The default setting with separate borders for each table cell.</p>
<p><span class="code">inherit</span> - Inherit the model from the parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { border-collapse: collapse; }<br>
    .ss64class { border-collapse: collapse; }</span><br>
    <span class="code">#SS64id { border-collapse: collapse;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-collapse: collapse;
border: solid grey;
</textarea></td>
    <td><table id="tryresult">
<tbody><tr><th>Heading 1</th><td>content</td><td>content</td><td>content</td></tr>
<tr><th>Heading 2</th><td>content</td><td>content</td><td>content</td></tr>
<tr><th>Heading 3</th><td>content</td><td>content</td><td>content</td></tr>
</tbody></table></td>
  </tr>
</tbody></table>
<p>Browser Support: All major browsers (CSS2+) In IE prior to 8.0  <span class="code">collapse</span> will not override cellspacing and <span class="code">inherit</span> is not supported.</p>
<p class="quote"><i>“The Berlin Wall wasn't the only barrier to fall after the collapse of the Soviet Union and the end of the Cold War. Traditional barriers to the flow of money, trade, people and ideas also fell” ~ Fareed Zakaria</i></p><p><b>Related:</b></p>
<p><a href="border-spacing.html">border-spacing</a> - Set the distance between the borders of adjacent cells.<br>
<a href="border.html">border</a> - Shorthand to set all the border properties.<br>
<a href="padding.html">padding</a> - Shorthand to set all the padding properties</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="border-collapse.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

