---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS Attribute selectors</h1>
<p>Target HTML elements based on a specific attribute, (not only  <span class="code">class</span> or <span class="code">id</span>). The examples below use the <span class="code">Title</span> attribute but the same can be used for any HTML attribute.</p>
<h2><span class="code">Attribute</span> (Match all occurences of the attribute)</h2>
<blockquote>
<p>Style any elements that have a Title attribute<br>
<span class="code">[title] { color: orange; }</span></p>
</blockquote>
<h2><span class="code">Attribute=Value</span> (Exact match)</h2>
<blockquote>
<p> Style any elements that have a Title attribute = "Home Page"<br>
<span class="code">[title="Home Page"] { color: orange; }</span></p>
<p>Style any elements that have an HREF attribute = "SS64.com" <br>
<span class="code">a[href="http://ss64.com"] { color: orange; }</span></p>
</blockquote>
<h2>Matching Multiple Values:</h2>
<h2><span class="code">Attribute*=<i>Value</i></span> (Wildcard match anywhere in <i>value</i>)</h2>
<blockquote>
<p> Style any elements that have a Title attribute that contains "Shop"<br>
<span class="code">[title*="Shop"] { color: orange; }</span></p>
<p>Match any DIVs that have an ID containing "ss64"<br>
<span class="code">div[id*="ss64"]  { color: orange; }</span></p>
</blockquote>
<h2><span class="code">Attribute^=<i>Value</i></span> (Begins with <i>value</i>)</h2>
<blockquote>
<p> Style any elements that have a Title attribute that begins with "Home"<br>
<span class="code">[title^="Home"] { color: orange; }</span></p>
<p>Style any <span class="code">&lt;a&gt;</span> elements that have an HREF attribute that begins with "SS64.com" (so this will also match any deep links)<br>
<span class="code">a[href^="http://ss64.com"] { color: orange; }</span></p>
</blockquote>
<h2><span class="code">Attribute$=<i>Value</i></span> (Ends with <i>value</i>)</h2>
<blockquote>
<p> Style any elements that have a Title attribute that ends with "sales"<br>
<span class="code">[title$="Sales"] { color: orange; }</span></p>
</blockquote>
<h2><span class="code">Attribute~=<i>Value</i></span> (Match a list - values separated with spaces)</h2>
<blockquote>
<p> Style any elements that have a Title attribute that contains "sales", optionally the title can contain other words separated with spaces.<br>
<span class="code">[title~="Sales"] { color: orange; }</span></p>
</blockquote>
<h2><span class="code">Attribute|=<i>Value</i></span> (Begins with <i>value</i> -  separated with dashes)</h2>
<blockquote>
<p> Style any elements that have a Title attribute that <b>starts with </b> "sales", optionally the title can contain other words separated with dashes.<br>
<span class="code">[title|="Sales"] { color: orange; }</span></p>
</blockquote>
<h2>Multiple attribute selectors </h2>
<p>Multiple attribute selectors can be listed, in which case, all of them must match:</p>
<blockquote>
<pre rel="CSS">h1[rel="nofollow"][title^="Sales"] { color: <span class="code">orange</span>; }
</pre>
</blockquote>
<p>Attribute selectors are frequently used for styling forms:</p>
<blockquote>
<p><span class="code">input[type="text"] {…}<br>
input[type="button"] {…}</span></p>
</blockquote>
<p class="quote"><i>“Natural selection, as it has operated in human history, favors not only the clever but the murderous” ~ Barbara Ehrenreich</i></p><p><b>Related:</b></p>
<p><a href="syntax-class-id.html">Class and ID</a> - CSS selectors<br>
<a href="syntax-pseudo.html">Pseudo classes</a> - Format Anchor links and Drop Caps.<br>
<a href="http://www.w3.org/TR/CSS2/selector.html">Selectors</a> - W3C </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
