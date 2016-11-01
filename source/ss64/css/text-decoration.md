---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-decoration</h1>
<p>Add decoration to text.</p>
<pre>Syntax
      text-decoration: <u>none</u> | underline | overline | line-through | blink | inherit ;</pre>
<blockquote>
<p><span class="code">none</span> - Normal text. (default)<br>
<span class="code">underline</span> - Add a line below the text.<br>
<span class="code">overline</span> - Add a line above the text.<br>
<span class="code">line-through</span> - Add a line through the text.<br>
<span class="code">blink</span> - Make the text blink.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>The CSS 2.1 specification allows web browsers to ignore <span class="code">text-decoration: blink</span> in order to comply with accessibility guidelines. The CSS 3 specification defines <span class="code">text-decoration</span> as a shorthand for text-decoration-line, text-decoration-color, and text-decoration-style, but there is  almost no browser support for those yet.</p>
<p>Examples:<br>
  <span class="code">h1 { text-decoration: underline;  }<br>
    .ss64class { text-decoration: blink; }</span><br>
    <span class="code">#SS64id { text-decoration: inherit;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">text-decoration: underline;
</textarea></td>
    <td><div id="tryresult">In  html documents the use of underline formatting is most often associated with hyperlinks. In many cases it is better to add emphasis with <b>bold</b> or <i>italic</i>.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers. </p>
<p class="quote"><i>“Whenever you find yourself on the side of the majority, it is time to pause and reflect” ~ Mark Twain</i></p><p><b>Related:</b></p>
<p><a href="font-weight.html">font-weight</a> - Normal, bold, bolder.<br>
<a href="text-align.html">text-align</a> - Horizontal alignment of text.<br>
<a href="text-indent.html">text-indent</a> - Indent the first line in a text-block.<br>
<a href="text-overflow.html">text-overflow</a> - What should happen when text overflows the containing element.<br>
<a href="text-shadow.html">text-shadow</a> - Add a shadow to text.<br>
<a href="text-transform.html">text-transform</a> - Change the capitalization of text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="text-decoration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

