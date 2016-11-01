---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Unicode-bidi</h1>
<p>Control the inline direction of text.</p>
<pre>Syntax
      unicode-bidi: bidi-override | embed | normal ;</pre>
<blockquote>
<p><span class="code">bidi-override</span> - The text to which this is applied will override the Unicode bidi algorithm according to the directional flow indicated by the <span class="code">direction</span> property. For block-level elements, (table cells, table captions, or inline blocks), it creates an override for (some) inline-level descendants. <br>
<span class="code">embed</span> - The text  to which this is applied will assume the directional flow indicated by the <span class="code">direction</span> property. <br>
<span class="code">normal</span> - This value doesn’t offer an additional level of embedding with respect to the bidirectional algorithm. For inline elements, implicit reordering works across element boundaries.</p>
</blockquote>
<p> Always use dedicated <a href="http://www.w3.org/International/questions/qa-bidi-css-markup">bidi markup</a> to describe your content, where markup is available. Then CSS can also be used to describe the meaning of that markup.</p>
<p>Examples:<br>
  <span class="code">h1 { unicode-bidi: bidi-override;  }<br>
    .ss64class { unicode-bidi: embed; }</span><br>
    <span class="code">#SS64id { unicode-bidi: lowercase;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">direction: rtl;
unicode-bidi: bidi-override;
</textarea></td>
    <td><div id="tryresult">Roman text is normally displayed in a left to right direction. <span lang="ar-iq" dir="rtl">وصغار موسكو المتّبعة لمّ ثم, وأزيز لإعلان دحر عل. به، وإيطالي التقليدية هو, مع جُل وبداية بالجانب. ان الدّفاع المتاخمة كان. عل بقصف بالحرب وهولندا، يتم.</span> This is not always the case for foreign languages.</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers. IE 8+</p>
<p class="quote"><i>“Hope is not the conviction that something will turn out well but the certainty that something makes sense, regardless of how it turns out” ~ Vaclav Havel</i></p><p><b>Related:</b></p>
<p><span class="code">&lt;dir&gt;</span> Markup for directionality <span class="code">rtl</span> or <span class="code">ltr</span>.<br>
<span class="code">&lt;bdo&gt;</span> Markup to override the directionality of text as defined by the Unicode bidi algorithm.<br>
<span class="code"><a href="direction.html">direction</a>:ltr</span> - Set a base direction of LTR for the text to which the unicode-bidi property is applied. <br>
<span class="code"><a href="direction.html">direction</a>:rtl</span> - Set a base direction of RTL for the text to which the unicode-bidi property is applied.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unicode-bidi.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

