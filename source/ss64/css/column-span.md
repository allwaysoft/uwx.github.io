---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-span</h1>
<p>Span the content of an element across multiple columns.</p>
<pre>Syntax
      column-span: 1 | all  ;</pre>
<blockquote>
<p><span class="code">1</span> - The content block does not span multiple columns (Default).<br>
<span class="code">all</span> - Span all columns. All content that is declared before the content block is shown before the content block.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { column-span: all;  }<br>
    .ss64class { column-span: all; }</span><br>
    <span class="code">#SS64id { column-span: all;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-column-span: all;
        column-span: all;</textarea></td>
    <td><div style="column-count: 3;-moz-column-count: 3;-webkit-column-count: 3;column-gap: 20px;-moz-column-gap: 20px;-webkit-column-gap: 20px;">
<div id="tryresult">Do Column layouts improve readability?</div>
When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10,  Opera. Use the equivalent <span class="code">-webkit-column-span</span> for Safari and Chrome.</p>
<p class="quote"><i>“Everything is worth what its purchaser will pay for it” ~ Publilius Syrus</i></p><p><b>Related:</b></p>
<p><a href="column-count.html">column-count</a> - Number of columns an element should be divided into.<br>
<a href="column-width.html">column-width</a> - Width of the columns.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="column-span.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

