---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-align-last</h1>
<p> How to align the last (or only) line of text.</p>
<pre>Syntax
      text-align-last: <i>alignment</i> ;</pre>
<blockquote>
<p> <span class="code">auto</span> - Align as per the value of <a href="text-align.html">text-align</a>.<br>
<span class="code">justify</span> - Align along both the left and right content edges.<br>
<span class="code">left</span> - Align to the left edge of the line box.<br>
<span class="code">right</span> - Align to the right edge of the line box.<br>
<span class="code">center</span> - Center within the line box.<br>
<span class="code">start</span> - The same as left if direction is left-to-right and right if direction is right-to-left.<br>
<span class="code">end</span> - The same as right if direction is left-to-right and left if direction is right-to-left.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>If applied to multiple paragraphs <span class="code">text-align-last</span>  will apply to the last line of each paragraph.<br>
Text-align-last will also apply to a line right before a forced line break when text-align is "justify"</p>
<p>Examples:<br>
  <span class="code">h1 { text-align-last: center;  }<br>
    .ss64class { text-align-last: justify; }</span><br>
    <span class="code">#SS64id { text-align-last: inherit;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-moz-text-align-last: justify;
text-align-last: justify;
</textarea></td>
    <td><div id="tryresult">
<p>This text should run over several lines having the effect that the last line might not perfectly fill the line creating a ragged last line of text. Opinions will vary but some consider this ugly.
</p></div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support: IE 5.5+ and Firefox with the <span class="code">-moz-</span> prefix. (<span class="code">start</span> and <span class="code">end</span> are not supported in IE.)</p>
<p class="quote"><i>“An appeaser is one who feeds a crocodile - hoping it will eat him last” ~ Winston Churchill</i></p><p><b>Related:</b></p>
<p><a href="text-align.html">text-align</a> - Horizontal alignment of text.<br>
<a href="text-transform.html">text-transform</a> - Change the capitalization of text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

