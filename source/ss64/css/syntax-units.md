---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1>CSS Units</h1>
<p>Measurement units are used to size CSS elements either absolutely or relative to another element.:</p>
<h2>Absolute Units</h2>
<blockquote>
<p><span class="code">px </span>pixels (a non-linear <a href="http://inamidst.com/stuff/notes/csspx">angular measurement</a>) based on a pixel density of 96dpi and a nominal arm’s length of 28 inches: 1px = 0.0213 degrees (visual angle). If the pixel density of the output device is very different from that of  a typical computer display, the user agent should rescale pixel values. 1px is equal to 0.75pt or 16px = 12pt.<br>
<br>
<span class="code">in </span>Inch<br>
<br>
<span class="code">cm </span>Centimeter<br>
<br>
<span class="code">mm </span>Millimeter<br>
<br>
<span class="code">pt </span>Point (1 pt is the same as 1/72 inch) point sizes are accurate on paper but inconsistent across browsers when used for on-screen display. Use in print stylesheets only. 12pt = 16px<br>
<br>
<span class="code">pc </span>Pica (1 pc is the same as 12 points) as for pts use in print stylesheets only.<br>
</p>
</blockquote>
<h2>Relative Units</h2>
<blockquote>
<p><span class="code">% </span>A percentage based on the parent element (the length of same property). For an element 40px wide, a child element with <span class="code">width: 50%</span> will render at 20px<br>
<br>
<span class="code">em </span> An em unit is equal to the computed <a href="font-size.html">font-size</a> of the element to which the em is applied. If an element has a font-size that is set (or inherited) to be 20px, then 20px=1em. Then setting other elements e.g. <span class="code">padding:0.5em;</span> will equate to 10px;</p>
<p>If the font-size is itself set using ems, then it will inherit the size from it's parent(s), possibly going all the way back to the document's root element.</p>
<p>A  size set in ems will cascade, which makes resizing an emement as easy as changing the font-size, rather than changing font-size and borders and padding etc. <br>
<br>
<span class="code">rem </span>Like em, but the size is always Relative to the "root" element  (<a href="http://caniuse.com/#search=rem">IE 9+</a>)<br>
<br>
<span class="code">ex </span>The x-height of a font (so called because it is often equal to the height of the lowercase "x")</p>
</blockquote>
<p>The advantage of relative units is that the sizes can cascade, from &lt;BODY&gt; to element to sub-element. This can be useful if you need to manually or dynamically change the size of the entire page, just one change to the top level will do the trick.<br>
With absolute units, each rule is fixed in size, to make everything larger or smaller will involve editing multiple CSS rules.</p>
<h2>Viewports (a new units of measure in CSS3)</h2>
<blockquote>
<p>Currently supported only in Chrome:</p>
<p><span class="code">vw</span> each unit is equal to 1% of the width of the containing block, e.g. if the width of the viewport is 200mm, <span class="code">h1 { font-size: 8vw }</span> will set h1 elements to 16mm (200/100×8). <br>
<span class="code">vh </span>each unit is equal to 1% of the height of the containing block<br>
<span class="code">vmin</span> Equal to the smaller of ‘vw’ or ‘vh’.<br>
<span class="code">vmax</span> Equal to the larger of ‘vw’ or ‘vh’. </p>
</blockquote>
<p>Relative and absolute units can be mixed, for example a parent element could be sized at 18px (fixed) and the child element at 75% (relative).</p>
<h2>Baseline font sizes:</h2>
<p>Most web browsers have a default font-size of 16px,  there will be some users who will adjust this (typically for accessibility reasons.)</p>
<p><span class="code">&nbsp;100% = 1 em ~= 16px ~= 14pt</span></p>
<h2><a id="calc"></a>Calc</h2>
<p>Calc is a CSS function that allows simple arithmetic calculations, use it anywhere a length or a size is required. <br>
Available in <a href="http://caniuse.com/calc">IE9, Firefox 16, Chrome 26, Safari 6.1, iOS 7</a></p>
<pre>   calc(<i>expression</i>)</pre>
<pre><i>expression</i> Any simple expression combining the following operators:

       +   Addition.
       -   Subtraction.
       *   Multiplication. At least one of the arguments must be a <i>number</i>.
       /   Division. The right-hand side must be a <i>number</i>.
</pre>
<p> The operands in the expression can be any length syntax value. <br>
You can freely mix  different units for each value in the expression. <br>
Use parentheses to establish computation order when needed.</p>
<p>The em is so called because it is often equal to the  width of an upper case letter M.  The EM SPACE character will always be 1 em wide, all other characters (including even the EM DASH) can vary in size according to the <a href="font-family.html">font-family</a>.</p>
<p><b>Examples</b></p>
<p>Stretch across the window, with a 40-pixel gap between both sides of the element and the edges of the window:</p>
<pre>.banner {
   width: 90%;         /* fallback for browsers without support for calc() */
   width: calc(100% - 80px);
}</pre>
<p> Fit into one quarter of the screen:<br>
</p>
<pre>#ss64box {
   width: 150px;       /* fallback for browsers without support for calc() */   
   width: calc(100% / 4);
}</pre>
<p class="quote"><i class="quote">“Failure of the Orbiter occurred because the flight system software  was written using metric units, while the ground crew were entering course correction and thruster data using  Imperial measures” ~ NASA <a href="http://en.wikipedia.org/wiki/Mars_Climate_Orbiter#Communications_loss">Mars Climate Orbiter</a></i></p>
<p><b>Related:</b></p>
<p><a href="border-width.html">border-width</a> - Width of the four borders.<br>
<a href="font-size.html">font-size</a> - Font size of text<br>
<a href="http://www.w3.org/TR/CSS2/syndata.html#values">Lengths and Units</a> - W3C<br>
<a href="http://zellwk.com/blog/rem-vs-em/">REM vs EM</a> – The Great Debate zellwk.com<br>
<a href="http://msdn.microsoft.com/en-us/library/ms537660%28v=vs.85%29.aspx">CSS Values and Units Reference</a> - MSDN<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-units.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
