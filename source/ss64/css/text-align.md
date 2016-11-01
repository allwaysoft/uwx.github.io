---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-align</h1>
<p>Horizontal alignment of text.</p>
<pre>Syntax
      text-align: <u>left</u> | right | center | justify | inherit ;</pre>
<blockquote>
<p><span class="code">left</span> - Align text to the left. (default for left to right text)<br>
<span class="code">right</span> - Align text to the right.<br>
<span class="code">center</span> - Center the text.<br>
<span class="code">justify</span> - Align along both the left and right content edges.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>This is an alignment of the text, but it won't move an entire block of text to the  center. To centre an image or block element horizontally set <span class="code">display: block;</span> and then set both the left and right margins to <span class="code"><a href="margin-left.html">margin-left: auto;</a> margin-right: auto;</span></p>
<p>Applying <span class="code">text-align</span> within a table cell will only work if the cell itself is sized correctly, apply <span class="code">width :100%</span> to the table cell and then <span class="code">text-align</span> will work as expected.</p>
<p>Examples:<br>
  <span class="code">h1 { text-align: center;  }<br>
    .ss64class { text-align: justify; }</span><br>
    <span class="code">#SS64id { text-align: left;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">text-align: justify;
</textarea></td>
    <td><div id="tryresult">The default alignment for text is left to right. When using narrow 'newspaper style' columns of text then applying "justify" to align along both the left and right content edges can produce a more pleasing layout of text on the screen, or on the page if printed.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers. Only American English spelling is supported (center not centre).</p>
<p class="quote"><i>“The easiest way to vertically center something in CSS is to close your laptop and go to the bar” ~ @<a href="https://twitter.com/thedaniel/status/414123893830336513">jakeboxer</a></i></p><p><b>Related:</b></p>
<p><a href="text-align-last.html">text-align-last</a> - How to align the last line of text.<br>
<a href="column-gap.html">column-gap</a> - Gap between the columns.<br>
<a href="font-weight.html">font-weight</a> - Normal, bold, bolder.<br>
<a href="text-decoration.html">text-decoration</a> - Add decoration to text.<br>
<a href="text-indent.html">text-indent</a> - Indent the first line in a text-block.<br>
<a href="text-overflow.html">text-overflow</a> - What should happen when text overflows the containing element.<br>
<a href="vertical-align.html">vertical-align</a> - Vertical alignment of an image/element.<br>
<a href="word-spacing.html">word-spacing</a> - Increase or decrease the space between words in a text.<br>
<a href="unicode-bidi.html">unicode-bidi</a> - Control the inline direction of text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="text-align.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

