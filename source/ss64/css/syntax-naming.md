---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1> CSS Naming convention.</h1>
<p>When writing CSS it's a good idea to follow some sort of naming convention. This will involve a little thought in the early design stages but can save 
  significant time when maintaining the finished code. It's less important which exact conventions you choose to follow - but this page has a few suggestions.</p>
<p>The benefits of  a naming convention are more to do with human factors than anything else, if fact you can choose to minify the final CSS code.</p>
<h2>Names</h2>
<blockquote>
<p>Name CSS Class selectors and ID selectors in lowercase and use dashes to separate words <span class="code">.social-header {…}</span></p>
<p>When choosing a name don't describe the values that the selector will apply  (color, position etc) as these could change in a future redesign.</p>
<p>When writing CSS rules, it is good for performance to <a href="syntax-class-id.html">minimise the number of selectors</a> (at most 3 selectors in each rule)<br>
To facilitate this you can add additional; more specific; Classes or IDs to the HTML markup:<br>
<span class="code">/* Bad */<br>
header nav ul li a {…}<br>
<br>
/* Good */<br> 
.social-link {…}</span></p>
<p>Place any vendor-prefixed properties <b>before</b> the non-prefixed property in the style sheet.  This ensures that when a browser starts to support the official W3C property then the  W3C property will take precedence. (the last style definition wins)</p>
</blockquote>
<h2>Punctuation</h2>
<blockquote>
<p>Include one space before the opening brace of declaration blocks <span class="code">my-style {width: 3000em;}</span></p>
<p>Include one space after the colon  in each property <span class="code">width: 3000em</span></p>
<p>End all declarations with a semi-colon <span class="code">width: 3000em;</span><br>
(semicolons are in fact only required <b>between</b> declarations, but using one everywhere will reduce errors when editing the stylesheet.)</p>
<p>Comma-separated values should include a space after each comma <span class="code">{font-family: Helvetica, Arial, Sans-Serif;}</span></p>
<p>but don't include spaces after commas in RGB colors, and don't prefix with a leading zero <span class="code"> {color: rgb(255,12,5);}</span></p>
<p>Lowercase hex values <span class="code">color: #ff00aa</span></p>
<p>Quote attribute values in selectors<span class="code"><br>
</span>(quotes are in fact only required<b> </b>if the value contains whitespace, but using them everywhere will reduce errors when editing the stylesheet.)<br>
e.g. 
Match SPAN elements with a "class" attribute having the value "example":<br>
<span class="code">span[class="example"]</span><span class="code"> {…}</span></p>
<p>Don't specify units (px, pt etc) for a zero value <span class="code">margin: 0; </span></p>
</blockquote>
<h2>Multi-Line CSS</h2>
<blockquote>
<p>Each declaration should appear on its own line (i.e. don't randomly mix multi-line and single line CSS declarations)</p>
<p>indent multi-line CSS with 2 spaces (soft tabs)<br>
Indent any vendor prefixed properties,  so that they line up with the equivalent non-prefixed property.</p>
<p>Place the closing brace on a new line <br>
<span class="code">}</span></p>
<p>List all CSS properties in alphabetic order. This makes it easy to spot any duplicate or conflicting definitions.</p>
</blockquote>
<p class="quote"> <i>“Always end the name of your child with a vowel, so that when you yell the name will carry”  ~ Bill Cosby</i></p>
<p><b>Related:</b></p>
<p><a href="http://bem.info/tools/bem/bem-naming/">BEM CSS</a> - <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">naming convention</a><br>
<a href="http://www.w3.org/TR/CSS2/syndata.html">CSS Syntax</a> - W3C<br>
<a href="http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml">Google HTML/CSS Style Guide</a><br>
<a href="http://make.wordpress.org/core/handbook/coding-standards/css/">WordPress CSS Coding Standard</a>s<br>
Naming - <a href="http://tantek.com/2012/353/b1/why-html-classes-css-class-selectors">Class selectors not CSS classes</a> - tanek.com</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-naming.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
