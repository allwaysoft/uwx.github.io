---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS Style Sheets</h1>
<p>Styles can be added to an HTML document in 3 ways: external style sheets, embedded style sheets and Inline styles.</p>
<h2>External Style Sheets.</h2>
<p>External style sheets allow a set of styles to be shared across multiple pages, they completely separate content from presentation.</p>
<p>The most common method is a simple link element within the document <span class="code">&lt;HEAD&gt;</span>:</p>
<p class="code">&lt;link rel="STYLESHEET" href="../main.css" type="text/css"&gt;</p>
<p>The media attribute can be used to specify <span class="code">screen</span>, <span class="code">print</span> or <span class="code">all</span>, print style sheets will apply only when the document is printed.</p>
<p class="code">&lt;link rel="STYLESHEET" href="../main.css" type="text/css" media="print"&gt;</p>
<p>Alternate style sheets allow the selection of multiple sets of styles either via options built into the browser or more commonly built into the HTML page by the author, to specify an alternate style sheet simply change <span class="code">rel="STYLESHEET"</span> to <span class="code">rel="ALTERNATE STYLESHEET"</span></p>
<p>Import directives can be placed at the very beginning of a style sheet to @import a second style sheet:</p>
<p class="code">@import url(../promotion.css);</p>
<p>The majority of user agents (web browsers) will load all linked style sheets including alternate style sheets, so splitting code across different files will not save bandwidth.</p>
<h2>Embedded style sheets.</h2>
<p>A style sheet can be embedded in the <span class="code">&lt;HEAD&gt;</span> of a single HTML page, this is useful for styles that will only apply to a single page.</p>
<p class="code">&lt;style type="text/css"&gt;<br>
/* add rules here */
<br>
h1 { font-size: 16pt; }<br>
<br>
&lt;/style&gt;</p>
<h2>Inline styles.</h2>
<p>Any HTML element <span class="code">&lt;p&gt;</span>, <span class="code">&lt;H1&gt;</span> etc can have style information embedded inline <span class="code">&lt;H1 style="background: blue; color: white;"&gt;</span> not all CSS properties are available inline and this is the least efficient method of styling text, but it can be useful, for example when generating styled content dynamically with Javascript.</p>
<p class="quote"><i>“I'm black, I don't feel burdened by it and I don't think it's a huge responsibility. It's part of who I am. It does not define me” ~ Oprah Winfrey</i></p><p><b>Related:</b></p>
<p><a href="syntax-cascading.html">Inheritance</a> - Cascading styles</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
