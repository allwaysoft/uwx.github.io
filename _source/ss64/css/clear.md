---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Clear</h1>
<p>Set sides of an element where other floating elements are not allowed.</p>
<pre>Syntax
      clear: right | left | both | none | inherit ;</pre>
<blockquote>
<p><span class="code">right</span> - Force a <span class="code">float:right</span> item to appear below (instead of alongside) any previous <span class="code">float:right</span> items.<br>
<span class="code">left </span>- Force a <span class="code">float:left</span> item to appear below (instead of alongside) any previous <span class="code">float:left</span> items.<br>
<span class="code">both</span> - Force a <span class="code">float:left</span> or a <span class="code">float:right</span> item to appear below (instead of alongside) any previous <span class="code">float:left</span> or  <span class="code">float:right </span>items.<br>
none - Remove any clears<br>
inherit - Inherit from a parent element.
</p>
</blockquote>
<p>If the browser width is too narrow to display both items, they will stack vertically.</p>
<p>Examples:<br>
  <span class="code">h1 { clear: both; }<br>
    .ss64class { clear: right; }</span><br>
<span class="code">#SS64id { clear: left;  }</span> </p>
<p>It can be useful to embed clear in a stylesheet rule of its own: <br>
<span class="code">.clearfix::after {clear: both}</span><br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid red;
float: left;
clear: left;
</textarea></td>
    <td><div style="float:left; border:solid blue">This div is floated left,<br>
it is several lines long,<br>
leaving some vertical space</div>
<div style="float:right; border:solid green">This div is floated Right</div>
<div id="tryresult">Another DIV</div>
</td>
  </tr>
</tbody></table>
<p>Browser Support: CSS 1 supported in all major browsers.</p>
<p class="quote"><i>“Float like a butterfly, sting like a bee” ~ Muhammad Ali</i></p><p><b>Related:</b></p>
<p><a href="float.html">float</a> - Shift to the left (or right) on the current line allowing other content to flow/wrap alongside.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

