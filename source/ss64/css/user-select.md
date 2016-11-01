---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>User-select</h1>
<p>Control the selection of text.</p>
<pre>Syntax
      user-select: none | -moz-none |  element | <u>text</u> | all ;</pre>
<blockquote>
<p><span class="code">none</span> - Block the selection of text from starting on the element and any sub-elements.<br>
<span class="code">-moz-none</span> - Block  the selection of text from starting on the element and any sub-elements. (<a href="https://developer.mozilla.org/en/docs/CSS/user-select">Firefox</a> only)<br>
<span class="code">element</span> - Enable selection to start within the element, but be contained by the bounds of that element.<br>
<span class="code">all</span> - In an HTML editor, if a double-click or context-click occurred in  sub-elements, the highest ancestor with this value will be selected. (<a href="https://developer.mozilla.org/en/docs/CSS/user-select">Firefox</a> only)<br>
<span class="code">text</span> - Enable selection to start within the element and extend past the element's bounds. (default)</p>
</blockquote>
<p>Starting with Firefox 21 <span class="code">none</span> behaves like <span class="code">-moz-none</span>, so selection can be re-enabled on sub-elements using <span class="code">-moz-user-select: text</span></p>
<p>Examples:<br>
  <span class="code">h1 { -moz-user-select: none;  }<br>
    .ss64class { -webkit-user-select: none; }</span><br>
    <span class="code">#SS64id { -ms-user-select: none;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-user-select: none;
   -moz-user-select: none;
    -ms-user-select: none;
</textarea></td>
    <td><div id="tryresult">Blocking the users from selecting text  can be useful for text menus and buttons that are interface elements rather than actual content. However it will not prevent the use of Ctrl+A to select all. </div></td>
  </tr>
</tbody></table>
<p>Browser Support:  Not currently part of any W3C CSS specification, use the vendor prefixed versions: <span class="code">-moz-user-select</span>, <span class="code">-webkit-user-select</span> and <span class="code">-ms-user-select</span></p>
<p class="quote"><i>“Intellect is invisible to the man who has none” ~   Arthur Schopenhauer</i></p><p><b>Related:</b></p>
<p><a href="display.html">display</a> - How to display an HTML element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="user-select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

