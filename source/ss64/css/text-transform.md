---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-transform</h1>
<p>Change the capitalization of text.</p>
<pre>Syntax
      text-transform: <u>none</u> | capitalize | lowercase |uppercase | inherit ;</pre>
<blockquote>
<p><span class="code">none</span> - Don't change the capitalization. (default)<br>
<span class="code">capitalize</span> - Transform the first character of each word to uppercase.<br>
<span class="code">uppercase</span> - Transform all characters to UPPER CASE.<br>
<span class="code">lowercase</span> - Transform all characters to lower case<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { text-transform: uppercase;  }<br>
    .ss64class { text-transform: capitalize; }</span><br>
    <span class="code">#SS64id { text-transform: lowercase;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">text-transform: capitalize;
</textarea></td>
    <td><div id="tryresult">It is very quick and convenient to transform UPPER, lower and MiXeD case text using just CSS but be aware that when copied to the clipboard, the original case of the text will be preserved.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers. <br>
On IE 8 and IE 9 text-transform can cause a <a href="https://connect.microsoft.com/IE/feedback/details/790265/combination-of-filter-and-first-letter-text-transform-uppercase-freezes-ie8-9">browser crash</a> if used in conjuntion with <span class="code">filter:</span></p>
<p class="quote"><i>“Some painters transform the sun into a yellow spot; others transform a yellow spot into the sun” ~ Pablo Picasso</i></p><p><b>Related:</b></p>
<p><a href="text-align.html">text-align</a> - Horizontal alignment of text.<br>
<a href="text-decoration.html">text-decoration</a> - Add decoration to text.<br>
<a href="text-indent.html">text-indent</a> - Indent the first line in a text-block.<br>
<a href="text-overflow.html">text-overflow</a> - What should happen when text overflows the containing element.<br>
<a href="text-shadow.html">text-shadow</a> - Add a shadow to text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="text-transform.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

