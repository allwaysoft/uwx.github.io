---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Page-Break-After</h1>
<p>Adjust page breaks after the current element.</p>
<pre>Syntax
      Page-Break-After: <u>auto</u> | always | avoid | left | right ;</pre>
<blockquote>
<p><span class="code">auto</span> -  Automatic page breaks (neither forced nor forbidden).<br>
<span class="code">always</span> -  Always force page breaks after the element.<br>
<span class="code">avoid</span> -  Avoid page breaks after the element (no Firefox support).<br>
<span class="code">left</span> -  Force page breaks after the element so that the next page is formatted as a left page (no Firefox support).<br>
<span class="code">right</span> -  Force page breaks after the element so that the next page is formatted as a right page (no Firefox support).
</p>
</blockquote>
<p>Page breaks will only be visible when the page is printed, or in print preview.</p>
<p>Page breaks can fail to work if added inside tables, floating elements, inline-block elements, and block elements with borders.</p>
<p><span class="code">Page-Break-After</span> might in future be replaced by the more generic <span class="code">break-after</span>. The new property adds support for column and region breaks.</p>
<p>Examples:<br>
  <span class="code">body { Page-Break-After: always; }<br>
    .ss64class { Page-Break-After: avoid; }</span><br>
    <span class="code">#SS64id { Page-Break-After: always;  }</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
  <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">Page-Break-After: always;</textarea></td>
</tr>
</tbody></table>
<div id="tryresult">If a page break is applied to this text, the effect will be visible in print preview.</div>
<p>Browser Support: All major browsers. (CSS 2.1) </p>
<p class="quote"><i>“Wall Street and the City Spivs, together with their sycophantic friends in the media, are all part of a big club, and you ain't in it”  ~ George Carlin</i></p><p><b>Related:</b></p>
<p><a href="page-break-before.html">page-break-before</a> - Adjust page breaks after the current element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="page-break-after.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
