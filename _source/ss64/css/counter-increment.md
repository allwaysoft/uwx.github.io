---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Counter-increment</h1>
<p>Increment one or more counter values.</p>
<pre>Syntax
      counter-increment: <i>variable number</i> | none | inherit ;</pre>
<blockquote>
<p><span class="code">variable</span> - The counter to be incremented.<br>
<span class="code">number</span> - How much the counter will increment on each occurrence of the selector. Zero or negative values are allowed (default = 1 or 0 if not initialised).<br>
<span class="code">none</span> - No counters will be incremented.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { counter-increment: ss64counter;  }<br>
    .ss64class { counter-increment: ss64counter; }</span><br>
<span class="code">#SS64id { counter-increment: ss64counter;  }</span>    </p>
<p>The variable being used must first be initialised or reset with <span class="code"><a href="counter-reset.html">counter-reset</a></span>, if the counter is reset for the <span class="code">&lt;body&gt;</span> tag, the numbering will run for the entire document, if the counter is reset for the <span class="code">&lt;h1&gt;</span> tag the numbering will run until the next occurence of an <span class="code">&lt;h1&gt;</span> tag. Multiple variables can be used to count Section numbers, Headings, Footnotes etc. These can then be added to the document using <a href="content.html">content:</a> and the <span class="code">:before</span> and <span class="code">:after</span> pseudo-elements.</p>
<p>Legal numbering:</p>
<p class="code"> OL { counter-reset: ss64; padding-left: 10px; }    <br>
LI { display: block }    <br>
LI:before { content: counters(ss64, ".") " ";     counter-increment: ss64; }</p>

<table width="80%" border="1">
<tbody><tr>
<td class="code">&lt;ol&gt;&lt;li&gt;One&lt;/li&gt; <br>
&lt;li&gt;Two <br>&nbsp;&nbsp;&lt;ol&gt;&lt;li&gt;Two.one&lt;/li&gt; <br>
&nbsp;&nbsp;&lt;li&gt;Two.two&lt;/li&gt; <br>
&nbsp;&nbsp;&lt;li&gt;Two.three&lt;/li&gt;&lt;/ol&gt;&lt;/li&gt;<br>
&lt;li&gt;Three<br>
&nbsp;&nbsp;&lt;ol&gt;&lt;li&gt;Three.one&lt;/li&gt;<br>
&nbsp;&nbsp;&lt;li&gt;Three.two <br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ol&gt;      &lt;li&gt;Three.two.one&lt;/li&gt; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Three.two.two&lt;/li&gt;&lt;/ol&gt;&lt;/li&gt;&lt;/ol&gt;&lt;/li&gt;<br>
&lt;li&gt;Four&lt;/li&gt;&lt;/ol&gt;</td>
<td><div class="demolist"><ol>
<li>One</li>
<li>Two
<ol>
<li>Two.one</li>
<li>Two.two</li>
<li>Two.three</li>
</ol>
</li>
<li>Three
<ol>
<li>Three.one</li>
<li>Three.two
<ol>
<li>Three.two.one</li>
<li>Three.two.two</li>
</ol>
</li>
</ol>
</li>
<li>Four</li>
</ol></div></td>
</tr>
</tbody></table>

<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Sir, my friend John Baynes used to say that the man who published a book without an index ought to be damned ten miles beyond Hell, where the Devil could not get for stinging nettles” ~   Francis Douce</i></p><p><b>Related:</b></p>
<p><a href="content.html">content</a> - Insert generated content before or after an element.<br>
<a href="counter-reset.html">counter-reset</a> - Create or reset one or more counters.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
