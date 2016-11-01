---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Overflow-wrap</h1>
<p>Break lines within words in order to prevent overflow. This can be useful to force wrapping of otherwise unbreakable strings, too long to fit within a containing box.</p>
<pre>Syntax
      overflow-wrap: <u>normal</u> | break-word ;

      word-wrap: <u>normal</u> | break-word ;</pre>
<blockquote>
<p><span class="code"><u>normal</u></span> -  Lines  only break at normal word break points.<br>
<span class="code">break-word</span>  - Break words at arbitrary points if there are no otherwise acceptable break points in the line.<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { overflow-wrap: break-word; }<br>
    .ss64class { word-wrap: normal; }</span><br>
    <span class="code">#SS64id { overflow: scroll;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">width: 200px;
border: solid green;
word-wrap: break-word;
</textarea></td>
    <td><div id="tryresult">Text that includes a long url such as https://en.wikipedia.org/wiki/Progressive_enhancement#Introduction_and_background can cause problems with word wrapping, overflowing the box.</div></td>
  </tr>
</tbody></table>
<p> Browser Support:  <span class="code">word-wrap</span> All major browsers. The alternate name <span class="code">overflow-wrap</span> is supported in CSS 3</p>
<p class="quote"><i>“Paper can't wrap up a fire”   ~ Chinese Proverb</i></p><p><b>Related:</b></p>
<p><a href="overflow.html">overflow</a> - What happens if content overflows an element's box.<br>
<a href="overflow-x.html">overflow-x</a> - Whether to clip the left/right edges of overflowing content.<br>
<a href="overflow-y.html">overflow-y</a> - Whether to clip the top/bottom edges of overflowing content.<br>
<a href="table-layout.html">table-layout</a> - How to layout table cells, rows, and columns.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="overflow-wrap.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

