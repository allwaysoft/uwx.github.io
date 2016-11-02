---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Hyphens</h1>
<p>How to split words to improve the layout of paragraphs when line-wrapping.</p>
<pre>Syntax
      hyphens: none | <u>manual</u> | auto  | inherit ;</pre>
<blockquote>
<p> <span class="code">none</span> -  Lines will only wrap at whitespace, words are never broken at line breaks.</p>
<p><span class="code">manual</span> - Words are broken for line-wrapping only where characters inside the word suggest line break opportunities. See Suggesting line break opportunities for details. </p>
<p><span class="code">auto</span> - The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use. Suggested line break opportunities, should be preferred over automatically selecting break points whenever possible. The auto setting's behavior depends on the language being properly tagged (via HTML lang) so that the appropriate hyphenation rules can be selected.</p>
<p><span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<h2>Suggested line breaks</h2>
<p>Two Unicode characters can be used to manually specify potential line break points within text: </p>
<p><span class="code">U+2010 (HYPHEN)</span> The "hard" hyphen character indicates a visible line break opportunity. Even if the line is not actually broken at that point, the hyphen is still rendered. <br>
<span class="code"> U+00AD (SHY)     </span>An invisible, "soft" hyphen. This character is not rendered visibly; instead, it suggests a place where the browser might choose to break the word if necessary. In HTML, you can use <span class="code">&amp;shy; </span>to insert a soft hyphen. </p>
<p>Examples:<br>
  <span class="code">h1 { hyphens: none;  }<br>
    .ss64class { hyphens: manual; }</span><br>
    <span class="code">#SS64id { hyphens: auto;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-moz-hyphens: none;
 -ms-hyphens: none;
     hyphens: none;
</textarea></td>
    <td><div id="tryresult">These­words­are­broken­up­with­soft­hyphens­(in­HTML­&amp;shy;)­their­appearance­will­change­according­to­the­CSS­setting­and­the­width­of­the­browser­window.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  None. Use the equivalent <span class="code">-moz-hyphens</span> for Firefox and <span class="code">-ie-hyphens</span> for IE 10.</p>
<p class="quote"><i>“if you don’t know where you are going, any road will take you there” ~   George Harrison</i></p><p><b>Related:</b></p>
<p><a href="padding-bottom.html">padding-bottom</a> - Bottom padding of an element. <br>
<a href="padding-right.html">padding-right</a> - Right padding of an element.<br>
<a href="padding-top.html">padding-top</a> - Top padding of an element.<br>
<b><a href="padding.html">padding</a></b> - Shorthand to set all the padding properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="hyphens.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

