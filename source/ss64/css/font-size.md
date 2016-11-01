---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Font-size</h1>
<p>The font size as an exact size (<i>number+unit</i>) or absolute (xx-small to xx-large).</p>
<pre>Syntax
      font-size: <i>absolute-size</i> | <i>relative-size</i> | <i>length</i> | <i>percentage</i> | inherit ;</pre>
<blockquote>
<p>Absolute sizes:<span class="code"> xx-small, x-small, small, medium, large,x-large,xx-large</span><br>
Relative sizes:<span class="code"> smaller, larger, %</span> (Percentage), <span class="code">em</span> (ems)<br>
Exact sizes: 
<span class="code">pt</span> (<a href="syntax-units.html">Points</a>), <span class="code">px</span> (<a href="syntax-units.html">Pixels</a>)<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>If an exact size is specified for <span class="code">&lt;HTML&gt;</span> or <span class="code">&lt;BODY&gt;</span> then any dependent elements such as <span class="code">&lt;P&gt;</span> set as a percentage (<span class="code">%</span>) will also appear at an exact size.</p>
<p> Absolute sizes can render differently on different browsers/devices. <br>
  Sizing the<span class="code">&lt;BODY&gt;</span>as a Percentage <a href="http://kyleschaeffer.com/user-experience/css-font-size-em-vs-px-vs-pt-vs/">rather than Ems</a> will ensure the text remains readable when resized or on a device with different <a href="../nt/syntax-dpi.html">DPI</a> settings. </p>
<p>Proportional font sizes are a key part of <a href="http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/">Responsive Web Design</a> a  trend (that has taken off since 2011), to design web pages that provide easy reading and navigation across a wide range of devices from mobile phones to traditional desktop monitors.</p>
<p>Examples:<br>
<span class="code">h1 { font-size: 16pt; }<br>
#ss64id { font-size: 16px</span><span class="code">; }<br>
.ss64class { font-size: 150%; }</span><br>
</p>
<p>Try it:</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="50" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">font-size: 150%;</textarea></td>

    <td><div id="tryresult">For clear readable text, use an 11 to 14 point scalable font.
 Also pay attention to font color.
 Contrary to popular belief, larger font sizes do not take longer to download!</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support: All major browsers, IE 8 will not re-size an element that has font-size specified with a <span class="code">px</span> value. </p>
<p class="quote"><i>“Like two doomed ships that pass in storm we had crossed each other's way: but we made no sign, we said no word, we had no word to say” ~  Oscar Wilde</i></p><p><b>Related:</b></p>
<p><a href="font-family.html">font-family</a> - Font family for text<br>
  <a href="font-style.html">font-style</a> - Font style for text<br>
  <a href="font-variant.html">font-variant</a> - Whether or not text should be displayed in a small-caps font<br>
  <a href="font-weight.html">font-weight</a> - Normal, bold, bolder<br>
<a href="font.html"><b>font</b></a> - Shorthand to set the font properties above in one declaration.<br>
<a href="letter-spacing.html">Letter-Spacing</a> - Increase or decrease the space between characters.<br>
<a href="syntax-units.html">Syntax - CSS Units</a> </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="font-size.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
