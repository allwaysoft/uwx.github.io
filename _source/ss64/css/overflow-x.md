---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Overflow-x</h1>
<p>Whether to clip the left/right edges of overflowing content.</p>
<pre>Syntax
      overflow-x: <i>overflow</i> | inherit ;</pre>
<blockquote>
<p><span class="code">auto</span> - Provide scrollbars when necessary.<br>
<span class="code">hidden</span> - Clip and  hide any overflowing content.<br>
<span class="code">scroll</span>  - Clip any overflowing content but provide a scrollbar.<br>
<span class="code"><u>visible</u></span> -  Render overflowing content outside the element’s box (default)<br>
<span class="code">no-display</span> - If the content does not fit in the content box, the whole box is removed.<br>
<span class="code">no-content</span> - If the content does not fit in the content box, the whole content is hidden.<br>
<span class="code">inherit</span> - Inherit the property from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { overflow-x: auto; }<br>
    .ss64class { overflow-x: hidden; }</span><br>
    <span class="code">#SS64id { overflow-x: scroll;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">width: 250px;
height: 100px;
overflow-x: scroll;
</textarea></td>
    <td><div id="tryresult">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm This sample text contains some long strings without spaces that won't wrap onto the next line. nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn more sample text: nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn.</div></td>
  </tr>
</tbody></table>
<p>Browser Support:  All major browsers (CSS 3+)  IE 9+</p>
<p class="quote"><i>“.. almost everything – all external expectations, all pride, all fear of embarrassment or failure ~ these things just fall away in the face of death, leaving only what is truly important” ~ Steve Jobs</i></p>
<p><b>Related:</b></p>
<p><a href="overflow.html">overflow</a> - What happens if content overflows an element's box.<br>
<a href="overflow-y.html">overflow-y</a> - Whether to clip the top/bottom edges of overflowing content.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

