---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Counter-reset</h1>
<p>Create or reset one or more counters.</p>
<pre>Syntax
      counter-reset: <i>variable </i>[<i>number</i>] [<i>variable </i>[<i>number</i>]] [...] ;</pre>
<blockquote>
<p><span class="code">variable</span> - The counter(s) to be reset.<br>
<span class="code">number</span> - The initial value of the counter. ( default = 0)</p>
</blockquote>
<p>To reset multiple counters based on the same tag, use a single style rule <span class="code">H1{counter-reset:  var1 var2;}</span><br>
</p>
<p>Examples:<br>
  <span class="code">h1 { counter-reset: ss64counter;  }<br>
    .ss64class { counter-reset: ss64counter; }</span><br>
<span class="code">#SS64id { counter-reset: ss64counter;  }</span>    </p>
<p>If the counter is reset for the <span class="code">&lt;body&gt;</span> tag, the numbering will run for the entire document, if the counter is reset for the <span class="code">&lt;H1&gt;</span> tag the numbering will run until the next occurence of an <span class="code">&lt;H1&gt;</span> tag. Multiple variables can be used to count Section numbers, Headings, Footnotes etc. These can then be added to the document using <a href="content.html">content:</a> and the <span class="code">:before</span> and <span class="code">:after</span> pseudo-elements.</p>
<p>Adding a counter to the <span class="code">&lt;H2&gt;</span> tag so that each line will be prefixed with <span class="code">"<i>number</i> ~ "</span> :</p>
<p class="code">h1 {counter-reset: ss64;}</p>
<p class="code">h2:before <br>
{<br>
counter-increment: ss64;<br>
content: counter(ss64) " ~ ";<br>
}</p>

<h1>Title (H1)</h1>
<h2>some text (H2)</h2>
<h2>some text (H2)</h2>
<h2>some text (H2)</h2>
<h1>Title  (H1)</h1>
<h2>some text (H2)</h2>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Sir, my friend John Baynes used to say that the man who published a book without an index ought to be damned ten miles beyond Hell, where the Devil could not get for stinging nettles” ~   Francis Douce</i></p><p><b>Related:</b></p>
<p><a href="content.html">content</a> - Insert generated content before or after an element.<br>
<a href="counter-increment.html">counter-incremen</a>t  - Increment one or more counters.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="counter-reset.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
