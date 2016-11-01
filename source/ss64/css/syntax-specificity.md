---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS  Specificity</h1>
<p>Specificity  determines which CSS rule will take precedence and be applied by browsers. Understanding the rules of specificity will allow you to target specific elements on the page and avoid situations where “<i>the CSS just doesn’t seem to be working</i>.”</p>
<p>Whenever two conflicting rules apply to the same element, the one with higher specificity will win.</p>
<p>The four levels of specificity from highest to lowest: </p>
<ol>
<li> Inline styles (attached directly to the element) E.g. <span class="code">&lt;h1 style="color: #00f;"&gt;</span> </li>
<li><a href="syntax-class-id.html">#IDs</a> (a unique identifier for page elements) </li>
<li><a href="syntax-class-id.html">Classes</a> (.class), attributes  [attribute] and <a href="syntax-pseudo.html">pseudo-classes</a> such as <span class="code">:hover</span> and <span class="code">:focus</span></li>
<li> Elements such as<span class="code"> &lt;P&gt;</span> or <span class="code">H1</span> and <a href="syntax-pseudo.html">pseudo-elements</a> such as<span class="code"> :before</span> and <span class="code">:after</span></li>
</ol>
<p>The most obvious case is where two rules are at different levels of specificity: the highest will always win, so:</p>
<ul>
<li> An inline style will always take precedence over an <span class="code">#id</span></li>
<li> An <span class="code">#id</span> will 
always take precedence over a <span class="code">.class</span></li>
<li> A <span class="code">.class</span> will always take precedence over an <span class="code">element</span>.</li>
</ul>
<p>When two CSS rules are at the same level, the specificity is governed by the number of elements/classes in the selector – more will give higher specificity.</p>
<p>If the specificity at one level is  Equal, then the number of elements/classes in the lower levels will count – more will give higher specificity. </p>
<p>If the specificity is exactly Equal (the same level and the same number of elements/classes) then the last rule in the CSS sheet is the one that wins.</p>
<p>In  extreme cases (&gt; <a href="http://stackoverflow.com/questions/2809024/points-in-css-specificity">255 classes</a>/element tags) the browser can overflow a 32-bit integer value and assign the 'wrong' precedence to a rule. This is  unlikely to happen in any real-world design.</p>
<p><b>Examples</b></p>
<p class="code">p.styleA {font-family: <span class="winner">sans-serif</span>; }<br>
.styleA {font-family: monospace; }</p>
<p>In this case a paragraph formatted as styleA will be styled as sans-serif, the second rule is  over-ridden because an element + class has higher specificity than a class alone.</p>
<p>If we now add another CSS rule (and apply both styles to the <span class="code">&lt;P&gt;)</span> the text will now become monospace, this time the first rule will be over-ridden because  two classes have a higher specificity than one class + one element:</p>
<p class="code">p.styleA {font-family: sans-serif; }<br>
.styleA.styleB {font-family: <span class="winner">monospace</span>; }</p>
<p>If we now add a third rule we can switch the font to serif:</p>
<p class="code">p.styleA {font-family: sans-serif; }<br>
.styleA.styleB {font-family: monospace; }<br>
.styleA.styleC {font-family: <span class="winner">serif</span>; }</p>
<p>However in this case the specificity is equal (two classes in each rule) so the order of the CSS rules becomes important (last one wins),  if we swap them around the font will display as monospace:</p>
<p class="code">p.styleA {font-family: sans-serif; }<br>
 .styleA.styleC {font-family: serif; }<br>
.styleA.styleB {font-family: <span class="winner">monospace</span>; }</p>
<p>Three classes in a rule are more specific than two, so this will display the font as serif:</p>
<p class="code">p.styleA {font-family: sans-serif; }<br>
.styleA.styleB.styleC {font-family: <span class="winner">serif</span>; }<br>
.styleA.styleB {font-family: monospace; }</p>
<p>Adding an extra class is almost always preferable to adding an ID. It leaves more options open.</p>
<p>As a general rule, don’t qualify ID rules with tag names or classes (use <span class="code">#btnID</span> rather than <span class="code">button#btnID</span>) and don’t qualify class rules with tag names (use <span class="code">.myclass</span> rather than <span class="code">img.myclass</span>)</p>
<p class="quote"><i>“No problem can be solved until it is reduced to some simple form. The changing of a vague difficulty into a specific, concrete form is a very essential element in thinking” ~   John Pierpont Morgan</i></p><p><b>Related:</b></p>
<p><a href="syntax-class-id.html">Class and ID</a> - CSS selectors. <br>
<a href="syntax-cascading.html">Inheritance</a> - Cascading styles. <br>
<a href="syntax-attribute.html">Attribute selectors</a> - Target HTML elements based on a specific attribute.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-specificity.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
