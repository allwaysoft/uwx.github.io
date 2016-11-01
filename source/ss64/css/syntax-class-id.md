---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS Class and ID selectors</h1>
<p>CSS stylesheets can address elements of the page with several degrees of selectivity.</p>
<p>CSS selectors are not case sensitive; this includes class and ID selectors. <br>
But HTML class and id names are  defined to be case-sensitive in HTML 4.01 and above. (In <a href="http://www.w3.org/TR/html4/struct/global.html#h-7.5.2">the HTML spec</a> this is shown as [CS] for Case Sensitive.) For this reason it is a good idea to be consistent in the use of UPPER and lower case names, the most common naming convention is all-lower-case-separated-with-dashes.</p>
<h2>HTML Types</h2>
<p>The most basic CSS styling is to directly address html elements, </p>
<p>This allows you to style <b>all</b> occurences of a particular HTML element. For example all <span class="code">&lt;p&gt;</span> or all <span class="code">&lt;h1&gt;</span> elements.</p>
<p>No changes to the HTML markup are required, just address within the style sheet as<span class="code"> p {<i>cssrule</i>: <i>value</i>;}</span> or<span class="code"> h1 {<i>cssrule</i>: <i>value</i>;}</span></p>
<p>This method is easy to maintain because everything is in the CSS stylesheet, but it does generally require you to write all the HTML markup before starting to write the CSS.</p>
<h2>.Class</h2>
<p>Multiple class selectors can be defined on a page. </p>
<p>This allows you to style <b>multiple</b> occurences of a particular HTML element. For example if you have 10 paragraphs but wish to style 5 differently then create and apply a style to just those 5.</p>
<p> Assign in html as <span class="code">&lt;p class="ss64class"&gt;</span> then address in the style sheet as 
<span class="code">.ss64class { <i>cssrule</i>: <i>value</i>; }</span></p>
<p>More than one class can be applied to the same element/div:</p>
<p><span class="code">&lt;img class="button red"&gt;</span><br>
<span class="code">&lt;img class="button blue"&gt;</span></p>
<p>If a suitable element does not already exist for the area you need to style, then add a DIV:<span class="code"> <br>
&lt;div class="ss64class"&gt;...&lt;/div&gt;</span></p>
<p>A CSS class name must begin with a letter(<span class="code">a–z</span>), an underscore (_) or a dash (-), followed by any number of dashes, underscores, letters, or numbers. The leading dash or underscore are reserved for <a href="syntax-vendor-prefix.html">vendor prefixes</a>.</p>
<h2>#ID</h2>
<p>An ID selector is unique, on each page there can only be <b>one</b> occurence of each ID.<br>
</p>
<p>Assign in html as <span class="code">&lt;p id="ss64id"&gt;</span> then address in the style sheet as <span class="code">#ss64id { <i>cssrule</i>: <i>value</i>; }</span></p>
<p>If a suitable element does not already exist for the area you need to style, then add a DIV:<span class="code"> &lt;div id="ss64id"&gt;...&lt;/div&gt;</span></p>
<p>Assigning a style via an ID will  over-ride the class structure, an ID is the most <i>specific</i> way of selecting an element, this has the downside that inheritance of new style changes through the DOM will no longer be possibe because the ID style will always take precedence.
</p>
<p>IDs are ideal for targeting in javascript where a unique identifier is required.</p>
<h2>Multiple selectors</h2>
<p>To apply a  CSS rule to more than one selector,  list the selectors separated by commas:</p>
<pre>      Selector1 , Selector2 {<i> cssrule</i>: <i>value</i>; }</pre>
<p>e.g. <br>
<span class="code">.class64, #IDA { border: 0; }</span> <br>
<span class="code">.class64, img { border: 0; }</span><br> 
This will apply the  style to elements that have either class (an <b>OR</b> operation).</p>
<h2>Qualifying selectors</h2>
<p>To apply a  CSS rule to elements that match two (or more) selectors, list the selectors without any separating spaces or commas:</p>
<pre>      .Selector1.Selector2 {<i> cssrule</i>: <i>value</i>; }</pre>
<p>e.g. <br>
<span class="code">.class64.class2 { border: 0; }<br>
.class64#IDa { border: 5; }</span><br>
<span class="code">img.class2 { border: 7; }</span></p>
<p> This will apply the  style to elements that have both classes (an <b>AND</b> operation). <br>
While it is possible to use this syntax with ID selectors   an <span class="code">#</span> ID is already unique, so there is no point.</p>
<p>To ensure your CSS is efficient and fast, don’t qualify ID rules with tag names or classes (use <span class="code">#IDa</span> rather than <span class="code">button#IDa</span>) and don’t qualify class rules with tag names (use <span class="code">.myclass</span> rather than <span class="code">img.myclass</span>)<br>
In other words don't use qualifying selectors unless you absolutely have to, they can dramatically decrease performance.</p>
<p>If you are tempted to include tag names in a CSS rule for readability, consider changing the name of the ID/Class instead.</p>
<h2>Descendant selectors</h2>
<p>Descendant selectors  will select  a combination of items that are found within the markup structure. The elements are  listed separated by spaces and will be evaluated by the browser engine from <b><a href="http://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left">Right to Left</a></b>, starting from the rightmost selector (called the "key") and moving through each selector until it finds a match or discards the rule. </p>
<pre>      element element {<i> cssrule</i>: <i>value</i>; }</pre>
<p> e.g. <br>
<span class="code">class64 p { border: 0; }</span> <br>
for each <span class="code">&lt;p&gt;</span> element, the browser must  traverse up the <abbr title="Document Object Model">DOM</abbr> tree, evaluating every ancestor element until it finds a match (<span class="code">class64</span>)</p>
<p>In older browsers (prior to around 2010) descendant selectors will perform much slower than some of the alternatives listed below.</p>
<h2>Child selectors</h2>
<p>Child selectors are evaluated just like descendant selectors, but they will only select  items that are direct children. Because they only look one level down the markup structure they will perform better than descendant selectors.</p>
<pre>      element<b> &gt; </b>element {<i> cssrule</i>: <i>value</i>; }</pre>
<p> e.g. <br>
<span class="code">class64&gt; p { border: 0; }</span> <br>
for each <span class="code">&lt;p&gt;</span> element, the browser will  traverse one level up the <abbr title="Document Object Model">DOM</abbr> tree, evaluating those ancestor elements until it finds a match (<span class="code">class64</span>)<br>
For child selectors to be recognised by IE 8 you must specify a doctype and for HTML 5, IE8  also needs a <a href="http://stackoverflow.com/questions/10306853/css-child-selector-not-working-in-ie8">javascript  shiv</a>. </p>
<h2>Adjacent Sibling  selector.</h2>
<p>Adjacent sibling selectors are evaluated just like descendant selectors, but they will only select  items that  directly follow one another. </p>
<pre>      element<b> + </b>element {<i> cssrule</i>: <i>value</i>; }</pre>
<p> e.g. <br>
<span class="code">h1 + class64 { border: 0; }</span> <br>
for each<span class="code"> class64</span> element, the browser will  traverse up the <abbr title="Document Object Model">DOM</abbr> tree to see if its immediate predecessor matches (<span class="code">h1</span>)</p>
<h2>General Sibling  selector.</h2>
<p>General sibling selectors are evaluated just like Adjacent Sibling selectors, with the small difference that the items being selected, don’t have to directly follow one another (but they do still need to be children). Again because they only look one level down the markup structure they will perform better than descendant selectors.</p>
<pre>      element<b> ~ </b>element {<i> cssrule</i>: <i>value</i>; }</pre>
<p> e.g. <br>
<span class="code">h1 ~ class64 { border: 0; }</span> <br>
for each<span class="code"> class64 </span>element, the browser will  traverse up the <abbr title="Document Object Model">DOM</abbr> tree to see if its parent matches (<span class="code">h1</span>)</p>
<h2>Universal selector.</h2>
<p>The universal selector is an asterix <span class="code">(*)</span>that will match any element. Using the universal selector as the key selector (the rightmost) will result in less efficient CSS that can take significantly longer for a web browser to render.
</p>
<p class="quote"><i>“Natural selection, as it has operated in human history, favors not only the clever but the murderous” ~ Barbara Ehrenreich</i></p><p><b>Related:</b></p>
<p><a href="syntax-specificity.html">Specificity</a> - Which rules take precedence in CSS.<br>
<a href="syntax-attribute.html">CSS Attribute selectors</a><br>
<a href="syntax-cascading.html">Inheritance</a> - Cascading styles.<br>
<a href="syntax-pseudo.html">Pseudo classes</a> - Format Anchor links and Drop Caps.<br>
<a href="https://developers.google.com/speed/docs/best-practices/rendering">Optimize browser rendering</a> - Google<br>
<a href="https://developer.mozilla.org/en-US/docs/CSS/Writing_Efficient_CSS">Writing efficient CSS</a> - Mozilla<br>
<a href="http://www.w3.org/TR/CSS2/selector.html">Selectors</a> - W3C </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-class-id.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
