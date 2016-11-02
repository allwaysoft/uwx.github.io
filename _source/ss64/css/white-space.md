---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>White-space</h1>
<p>Control how white-space and text wrapping inside an element is handled.</p>
<pre>Syntax
      white-space: <u>normal</u> | nowrap | pre | pre-line | pre-wrap | inherit ;</pre>
<blockquote>
<p><span class="code">normal</span> - Sequences of whitespace will collapse into a single space character. Text will wrap when necessary. (default)<br>
<span class="code">nowrap</span> - Sequences of whitespace will collapse into a single space character. Text will not wrap unless a <span class="code">&lt;br&gt;</span> tag is encountered.<br>
<span class="code">pre</span> - Whitespace is preserved by the browser  (like the <span class="code">&lt;pre&gt;</span> tag). Text will not wrap unless a <span class="code">&lt;br&gt;</span> tag is encountered.<br>
<span class="code">pre-line</span> - Sequences of whitespace will collapse into a single space character. Text will wrap when necessary, and on line breaks.<br>
<span class="code">pre-wrap</span> - Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks <br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>When applied to a floated element, white-space will not change the normal float behaviour, but will just prevent  the whitespace characters within the float from wrapping.</p><p>Examples:<br>
  <span class="code">h1 { white-space: pre;  }<br>
    .ss64class { white-space: nowrap; }</span><br>
    <span class="code">#SS64id { white-space: pre-wrap;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">white-space: pre;
</textarea></td>
    <td><div id="tryresult">This text    has been typed,    with a number of    extra consecutive spaces.
By default  these will  collapsed    into single spaces.</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before” ~ Gene Roddenberry</i> (<i>Star Trek</i>)</p><p><b>Related:</b></p>
<p><a href="text-align.html">text-align</a> - Horizontal alignment of text.<br>
<a href="text-overflow.html">text-overflow</a> - What should happen when text overflows the containing element.<br>
<a href="word-spacing.html">word-spacing</a> - Increase or decrease the space between words in a text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

