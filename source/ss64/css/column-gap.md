---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-gap</h1>
<p>The gap between  columns (in<span class="code"> px, pt, em,</span> <a href="syntax-units.html">etc</a>.)</p>
<pre>Syntax
      column-gap: <i>number</i> | normal ;</pre>
<blockquote>
<p><span class="code"><i>number</i></span> - The size of the gap between columns. It must not be negative, but can be equal to 0.<br>
<span class="code">normal</span> - Use the browser-defined default spacing, normally 1em.</p>
</blockquote>
<p>The default value is <span class="code">auto</span>.</p>
<p>Examples:<br>
  <span class="code">h1 { column-gap: 30px;  }<br>
    .ss64class { column-gap: 8pt; }</span><br>
    <span class="code">#SS64id { column-gap: 0;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-column-count: 3;
   -moz-column-count: 3;
        column-count: 3;

-webkit-column-gap: 50px;
   -moz-column-gap: 50px;
        column-gap: 50px;
</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-column-gap</span> for Firefox and <span class="code">-webkit-column-gap</span> for Safari and Chrome.</p>
<p class="quote"><i>“Mind the gap!!!” ~ <a href="http://www.bbc.co.uk/news/uk-england-london-21737161">Oswald Laurence</a></i></p><p><b>Related:</b></p>
<p><a href="column-count.html">column-count</a> - Number of columns an element should be divided into.<br>
<a href="column-span.html">column-span</a> - How many columns an element should span across.<br>
<a href="column-width.html">column-width</a> - Width of the columns.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="column-gap.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

