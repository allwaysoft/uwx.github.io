---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS  inheritance and cascade</h1>
<p>Multiple CSS styles can apply to the same HTML element, conflicts are resolved through inheritance and cascading.</p>
<h2>Inheritance</h2>
<p>In most HTML documents, elements such as <span class="code">&lt;h1&gt;, &lt;h2&gt;, &lt;p&gt; and &lt;b&gt;</span> are <i>decendents</i> of the <span class="code">&lt;body&gt;</span></p>
<p>Also <span class="code">&lt;body&gt;</span> is the <i>parent</i> of<span class="code"> &lt;h1&gt;, &lt;h2&gt;, &lt;p&gt; and &lt;b&gt; </span>a parent can have multiple children, but each child can have only one parent.</p>
<p>Due to inheritance all decendants of an element will use the same font style and color as their parent unless that style has been specifically redefined for the child.</p>
<p>This process of inheritance applies to most (but not all) CSS properties.</p>
<h2>Cascade</h2>
<p>Multiple CSS stylesheets, and multiple CSS rules can be applied to the same page, cascading is a set of rules that decides which will take precedence.</p>
<ul>
<li>Browser style sheet - lowest priority, a fall back if nothing else is specified. Built-in to the web browser.</li>
<li>User style sheet - medium priority, unless the user creates rules with<span class="code"> !important</span>, for accessibility reasons these rules will take precedence.</li>
<li>Author style sheet - highest priority,  written by the designer of the web page.</li>
</ul>
<p>Most styling will be done via author style sheets, it is possible to apply more than one style sheet to the same page - this is often useful when working on large websites that have some "company standard" CSS and other 
CSS that is unique to a page or section of the site.</p>
<p>Author stylesheets are linked to the page with a link (or links) in the <span class="code">&lt;head&gt;</span> section of the page of the HTML.:</p>
<p class="code">&lt;link rel="STYLESHEET" href="../corporate.css" type="text/css"&gt;<br>
&lt;link rel="STYLESHEET" href="../main.css" type="text/css"&gt;</p>
<p>If more than one style sheet is specified and they contain CSS rules that affect the same element, then the precedence is inferred from the order in which they are listed in the <span class="code">&lt;head&gt;</span> section - the last one listed will have the highest precedence.</p>
<p>It is also possible to create rules in an Author  style sheet that use <span class="code">!important</span>, these will over-ride other author/browser style sheets, but not any user styles with <span class="code">!important</span>.</p>
<p class="quote"><i>“Your future takes precedence over your past. Focus on your future, rather than on the past” ~ Gary Ryan Blair </i></p><p><b>Related:</b></p>
<p><a href="syntax-box-model.html">The CSS Box Model</a> - Borders, Padding and Margins.</p>
<p></p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-cascading.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
