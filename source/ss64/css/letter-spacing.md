---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Letter-Spacing</h1>
<p>Increase or decrease the space between characters in  text.</p>
<pre>Syntax
      letter-spacing: <i>length</i> | <u>normal</u> | inherit ;</pre>
<blockquote>
<p><span class="code"><i>Length</i></span> - The letter spacing in<span class="code"> px, pt, em,</span> <a href="syntax-units.html">etc</a>.<br>
<span class="code">normal</span> - The default letter spacing.<br>
<span class="code">inherit</span> - Inherit from the parent element.</p>
</blockquote>
<p>A negative length will bring the letters closer together than normal (compressed text).</p>
<p>Using <a href="syntax-units.html">font-relative values</a> (em or rem) is recommended, so that the letter-spacing will increase or decrease by an appropriate amount if the font-size is changed. <br>
The <i>length </i>value  is added to (or subtracted from) the browsers default spacing (which is based on the font metrics.)</p>
<p>Most current browsers now support subpixel values (anything that computes to less than <span class="code">1px</span>.)</p>
<p>The default value is <u>normal</u></p>
<p>Examples:<br>
<span class="code">h1 { letter-spacing: 2px;  }<br>
.ss64class { letter-spacing: 0.5em; }</span><br>
<span class="code">#SS64id { letter-spacing: -1pt;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">letter-spacing: 0.25em;
</textarea></td>
    <td><div id="tryresult">IT STARTED OUT AS A FEELING WHICH THEN GREW INTO A HOPE.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers (the degree of spacing does vary).</p>
<p class="quote"><i>“Everything is worth what its purchaser will pay for it” ~ Publilius Syrus</i></p><p><b>Related:</b></p>
<p> <a href="word-spacing.html">word-spacing</a> - Increase or decrease the space between words.<br>
<a href="font-size.html">font-size</a> - Font size of text.<br>
<a href="font-variant.html">font-variant</a> - Whether or not text should be displayed in a small-caps font.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="letter-spacing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

