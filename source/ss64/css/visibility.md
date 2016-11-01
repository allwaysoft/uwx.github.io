---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Visibility</h1>
<p>Hide or show an element.</p>
<pre>Syntax
      visibility: visible | hidden | collapse | inherit ;</pre>
<blockquote>
<p> <span class="code">visible</span> - Make the generated boxes visible.<br>
<span class="code">hidden</span> - Make the generated boxes invisible without removing them from the layout. Descendant boxes can be made visible.<br>
<span class="code">collapse</span> - Remove a table object from  display; the space it occupied will be filled by subsequent siblings. For non-table objects, this acts just like <span class="code">hidden</span>.The way browsers handle <span class="code">collapse</span> is not consistent so it's use should be avoided.<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>When working with table objects (rows, row groups, columns, and column groups), <span class="code">visibility:collapse</span> should be used in preference to <span class="code">display: none</span>, this will keep the structural integrity of the table intact. If <span class="code">visibility:collapse</span> is specified for any  element other than an internal table object, it will  behave as <span class="code">visibility:hidden</span>.</p>
<p>Unlike <span class="code">display:none</span>, setting an element’s visibility to <span class="code">hidden</span> does not remove the related element from the rendering process completely, the invisible box can still affect the layout of other elements on the page.</p>
<p>Examples:<br>
  <span class="code">h1 { visibility: hidden; }<br>
  </span><span class="code">
  .ss64class { 
  visibility: visible; }</span><br>
  <span class="code">#ss64id { visibility: collapse</span><span class="code">; }</span>  <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">visibility: hidden;
</textarea></td>

<td><div id="tryresult">An invisibility cloak is a magical garment which renders whatever it covers unseeable. They can be made from hair of Demiguise, a magical creature that possesses the power to become invisible.</div></td>
</tr>
</tbody></table>
<p>Browser Support: All major browsers support Visible and Hidden, The CSS2 value, <a href="http://www.quirksmode.org/css/visibility.html">collapse</a> has limited support.</p>
<p class="quote"><i>“People who know little are usually great talkers, while men who know much say little” ~ Jean Jacques Rousseau</i></p>
<p><b>Related:</b></p>
<p><a href="float.html">float</a> - Shift to the left (or right) allowing other content to flow/wrap alongside.<br>
<a href="display.html">display</a> - How to display an HTML element.<br>
<a href="opacity.html">opacity</a> - Opacity level for an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="visibility.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


