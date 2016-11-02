---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Direction</h1>
<p>The text reading direction, left-to-right or right-to-left.</p>
<pre>Syntax
      direction: ltr | rtl | inherit ;</pre>
<blockquote>
<p><span class="code">ltr</span> - Set a left-to-right direction.<br>
<span class="code">rtl</span> - Set a right-to-left direction.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p> On a page with mixed languages you can alternate between text directions. This can make for a disjointed reading experience as the reader not only has to be bilingual but will have to jump between blocks of text and switch reading direction.</p>
<p>For the direction property to affect <b>content</b> reordering in inline elements, the <a href="unicode-bidi.html">unicode-bidi</a> property must be set to embed or override. Always use dedicated <a href="http://www.w3.org/International/questions/qa-bidi-css-markup">bidi markup</a> to describe your content, where markup is available. Then CSS might also be needed to describe the meaning of that markup.</p>
<p>If the displayed content is copied to the clipboard, it will be copied with the systems default text direction.</p>
<p>Examples:<br>
  <span class="code">h1 { direction: rtl;  }<br>
    .ss64class { direction: rtl; }</span><br>
    <span class="code">#SS64id { direction: inherit;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">direction: rtl;
unicode-bidi: bidi-override;
</textarea></td>
    <td><div id="tryresult">Roman text is normally displayed in a left to right direction. <span lang="ar-iq" dir="rtl">وصغار موسكو المتّبعة لمّ ثم, وأزيز لإعلان دحر عل. به، وإيطالي التقليدية هو, مع جُل وبداية بالجانب. ان الدّفاع المتاخمة كان. عل بقصف بالحرب وهولندا، يتم.</span> This is not always the case for foreign languages.
</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers. IE 8+</p>
<p class="quote"><i>“Some painters transform the sun into a yellow spot; others transform a yellow spot into the sun” ~ Pablo Picasso</i></p><p><b>Related:</b></p>
<p><span class="code">&lt;dir&gt;</span> Markup for directionality <span class="code">rtl</span> or <span class="code">ltr</span>. <span class="code">dir="ltr"</span><br>
<span class="code">&lt;bdo&gt;</span> Markup to override the directionality of text as defined by the Unicode bidi algorithm.<br>
<a href="unicode-bidi.html">unicode-bidi</a> - Control the inline direction of text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

