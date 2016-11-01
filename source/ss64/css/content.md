---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Content</h1>
<p>Insert generated content before or after an element, using the <span class="code">:before</span> and <span class="code">:after</span> <a href="syntax-pseudo.html">pseudo</a>-elements.</p>
<pre>Syntax
      content: "<i>content_string_to_add</i>"</pre>
<blockquote>
<p><span class="code">none</span> - Set the content to nothing.<br>
<span class="code">normal</span> - Set the content to normal, typically the same as <span class="code">nothing</span>.<br>
<span class="code">counter</span> - Set the content as a counter.<br>
<span class="code">attr(<i>attribute</i>)</span> - Set the content to <i>attribute</i>.<br>
<i><span class="code">string</span></i> - Set the content to <i>string</i>.<br>
<span class="code">open-quote</span> - Set the content to an opening quote.<br>
<span class="code">close-quote</span> - Set the content to a closing quote.<br>
<span class="code">no-open-quote</span> - Remove the opening quote from the content.<br>
<span class="code">no-close-quote</span> - Remove the closing quote from the content.<br>
<span class="code">url(<i>url</i>)</span> - Set the content to an image file, a sound/video file, etc.).<br>
<span class="code">inherit</span> - Inherit from the parent element</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1:after { content: " **DRAFT**";}<br>
    .ss64class:before { content: "PRIORITY "; }</span><br>
<span class="code">#SS64id:after { content: "";  }</span></p>
<p>A counter can be a named counter (setup with <span class="code"><a href="counter-reset.html">counter-reset</a></span>) or in the case of a List Item, the default "." </p>
<p>A common use for <span class="code">content</span> is changing the appearance of links so that they display the full URL after the link text, typically this rule would be included in the PRINT stylesheet to only affect printed pages.<span class="code"><br>
a:after { content: " (" attr(href) ")";</span></p>
<p>Including an image alongside <span class="code">&lt;a&gt;</span> links can be done with a <a href="background.html">background</a> rule.</p>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“There is but an inch of difference between a cushioned chamber and a padded cell” ~   G. K. Chesterton</i></p><p><b>Related:</b></p>
<p><a href="quotes.html">quotes</a> - Type of quotation marks for embedded quotations.<br>
<a href="visibility.html">visibility</a> - Hide or show an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="content.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

