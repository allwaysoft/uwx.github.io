---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_csssyntax.lbi" --><!-- #EndLibraryItem --><h1> CSS pseudo-classes and pseudo-elements.</h1>
<p>Pseudo-classes and pseudo-elements allow you to format elements that lie outside the document tree.  A Pseudo-Class can be used to address an element based on its dynamic state. A Pseudo-Element can be used to address sub-parts of an element.</p>
<h2>Anchor/Link Pseudo-Classes</h2>
<p><span class="code">:link</span> - a link that has not been used, nor is a mouse pointer hovering over it.<br>
<span class="code">:visited</span> - a link that has been used before, but has no mouse hovering over it.<br>
<span class="code">:hover</span> - a link that currently has a mouse pointer hovering over it.<br>
<span class="code">:focus</span> -  an element which has the focus (used when navigating with the keyboard.)<br>
<span class="code">:active</span> - a link that’s in the process of being clicked.</p>
<p>The order in which these classes are defined within a CSS stylesheet is important, <span class="code">:hover</span> must come after <span class="code">:link</span> and <span class="code">:visited</span>, and <span class="code">:active</span> must come after <span class="code">:hover</span><br>
To remember the correct order: <b>L</b>ink - <b>V</b>isited - <b>H</b>over - <b>F</b>ocus - <b>A</b>ctive, use the mnemonic <b>L</b>o<b>V</b>e <b>HA</b>te (or <b>L</b>ord
<b>V</b>ader’s 
<b>H</b>andle <b>F</b>ormerly <b>A</b>nakin).</p>
<p>Pseudo-classes can be stacked, so to address only <span class="code">visited</span> links on <span class="code">hover</span>, use: </p>
<p><span class="code">a:<b>visited:hover</b> {color: red; text-decoration: underline;}</span></p>
<p>Examples:</p>
<p class="code">a:link {color: #00F; text-decoration: none;}<br>
a:visited {color: #711B8D; text-decoration: none;}<br>
a:visited:hover {color: #0F0; text-decoration: underline;}<br>
a:hover {color: #00F; text-decoration: underline;}<br>
a:focus {color: green;}<br>
a:active {color: #00F;}</p>
<p>Mozilla and Webkit have vendor extensions to allow combining pseudo classes, not that there is any great need:
<span class="code">-webkit-any</span> and <span class="code"> -moz-any</span></p>
<h2>Other Pseudo-Classes</h2>
<p><span class="code">:lang(language)</span> - Select elements with a matching lang attribute  determined by a combination of the "lang" attribute, the META element, (and possibly by  HTTP headers).<br>
<span class="code">:first-child</span> -   Format the first child of the parent element.<br>
<span class="code">:first-of-type     :last-of-type     :only-of-type     :only-child     :nth-child(<i>n</i>)     :nth-last-child(<i>n</i>) :nth-of-type(<i>n</i>)     :last-child     :root     :empty     :target     :enabled     :disabled     :checked     ::selection</span></p>
<p>Examples:</p>
<p>Make the second column of a table red:</p>
<p class="code">td:nth-child(2) {color: red;}</p>
<h2>Pseudo-Elements</h2>
<p><span class="code"> :first-line</span> - Format the first line only.<br>
<span class="code">:first-letter</span> - Format the first letter only.<br>
<span class="code">:before</span> - Before the content of the selected element(s)<br>
<span class="code">:after</span> - After the content of the selected element(s)</p>
<p>As of CSS 3.0 pseudo-elements use a double colon prefix :: instead of : this is to distinguished them from pseudo-classes. Most browsers will accept either.<br>
</p>
<p>Example: Display a drop-cap effect with the first line in small caps, resize the browser window to see the full effect:</p>
<pre>#dropcap:first-line { font-variant: small-caps; font-family: Verdana, sans;}

#dropcap:first-letter {
   color: #ff0084;
   float: left;
   font-size: 600%; 
   font-family: Times, Serif;
   font-weight: bold;
   left: -3px; 
   line-height: 0.8em;
   padding: 0 5px 0 0; 
   position: relative;
   }</pre>
<div id="dropcap"> The Comte de Lamothe, who, in 1815, was an old man seventy-five years of age, had nothing remarkable about him except his silent and sententious air, his cold and angular face, his perfectly polished manners, his coat buttoned up to his cravat, and his long legs always crossed in long, flabby trousers of the hue of burnt sienna. His face was the same color as his trousers.

This M. de Lamothe was "held in consideration" in this salon on account of his "celebrity" and, strange to say, though true, because of his name of Valois.

As for M. Gillenormand, his consideration was of absolutely first-rate quality. He had, in spite of his levity, and without its interfering in any way with his dignity, a certain manner about him which was imposing, dignified, honest, and lofty, in a bourgeois fashion; and his great age added to it. One is not a century with impunity. </div>
<p><span class="code">:first-line</span> and <span class="code">:first-letter</span> are not supported in IE 8 or earlier.</p>
<p><span class="quote"><i>“Intellectuals are useless, and as a pseudo-intellectual I can't help but envy the practicality of that” ~ Bauvard (The Prince Of Plungers )</i></span></p>
<p><b>Related:</b></p>
<p><a href="color.html">color</a> - Text color<br>
<a href="outline.html">outline</a> - Set outline properties<br>
<a href="font-style.html">font-style</a> - Font style italic/normal.<a href="font-weight.html"><br>
font-weight</a> - Normal, bold, bolder.<br>
<a href="text-decoration.html">text-decoration</a> - Add decoration to text.<br>
<a href="http://www.cssbakery.com/2010/01/drop-caps-in-css.html">CSS Bakery</a> - Methods to create Drop Caps </p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-pseudo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
