---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><style type="text/css">
#tryresult {border: 2px solid green;}
</style>
<h1>list-style-position</h1>
<p> Position list-item markers inside or <u>outside</u> the content flow.</p>
<pre>Syntax
      list-style-position: inside | <u class="code">outside</u> | inherit ;</pre>
<blockquote>
<p><span class="code">inside</span> - Inside the content flow.<br>
<span class="code">outside</span> - Outside the content flow (default).<br>
<span class="code">inherit</span> - Inherit from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">ol { list-style-position: inside; }<br>
.SS64class { list-style-position: outside; }<br>
#SS64id { list-style-position: inside; }</span></p>
<p> Moving the markers <span class="code">inside</span> will also indent the text.</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" wrap="VIRTUAL" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">list-style-position: inside;</textarea></td>

    <td><ol><div id="tryresult">
<li>This is an ordered list &lt;OL&gt;</li>
<li>Each item is a &lt;LI&gt;</li>
      <li>The default markers are numeric</li>
</div>
</ol></td>
  </tr>
</tbody></table>

<p>(CSS 1) Browser Support: All major browsers </p>
<p class="quote"><i>“You don't have to hold a position in order to be a leader”   ~ Anthony J. D'Angelo</i></p><p><b>Related:</b></p>
<p><a href="list-style-image.html">list-style-image</a> - Set an image as the list-item marker.<br>
<a href="list-style-type.html">list-style-type</a> - Type of list-item marker.<br>
<b><a href="list-style.html">list-style</a></b> - Set all the properties for a list in one declaration.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="list-style-position.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


