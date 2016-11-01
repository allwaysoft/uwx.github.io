---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Quotes</h1>
<p>Type of quotation marks for embedded quotations.</p>
<pre>Syntax
      quotes: "<i>openQuote1</i>" "<i>closeQuote1</i>" "<i>openQuote2</i>" "<i>closeQuote2</i>" | inherit ;</pre>
<blockquote>
<p><span class="code">none</span> - Do not produce any quotation marks.<br>
<i class="code">openQuote</i> - The opening quotation mark to use.<br>
<i class="code">closeQuote</i> - The closing quotation mark to use.<br>
<span class="code">inherit</span> - inherit from the parent element.</p>
</blockquote>
<p>The <span class="code">&lt;q&gt;</span> element is designed  for  quotations. The quotation marks will be automatically inserted into the rendering by the user agent. The default quotation marks  for the English language are <span class="code">“ ”</span> and <span class="code">‘ ’.</span></p>
<p>The <span class="code">quotes</span> CSS property can be used to over-ride the user agent defaults - typically with foreign language quotation marks such as <span class="code">«</span> and <span class="code">»</span>. </p>
<p>The <a href="http://en.wikipedia.org/wiki/Quotation_mark">quotation marks</a> must be given in pairs, one pair for each level of nested quotations that you need to support:</p>
<pre> "'" "'"
 '"' '"'
 "‘" "’"
 "“" "”"
 "‹" "›"
 "«" "»" </pre>
<p>Although intended only for quotation marks, it is possible to insert one (or several) <a href="../ascii.html">ASCII</a> characters (A-Z, 0-9 etc.)</p>
<p>Examples:<br>
  <span class="code">h1 { quotes: "“" "”" "‹" "›" ;  }<br>
    .ss64class { quotes: "“" "”" "‘" "’" ; }</span><br>
    <span class="code">#SS64id { quotes: "«" "»" "‹" "›" ;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">quotes: "«" "»" "'" "'";
</textarea></td>
    <td><div id="tryresult"><q>Outer quote, <q>inner nested quote</q>, remainder of outer quote</q>. Normal text</div></td>
  </tr>
</tbody></table>
<p>(CSS 2) Browser Support:  All major browsers.</p>
<p class="quote"><i><q>It is with books as with men: a very small number play a great part, the rest are lost in the multitude</q> ~ Voltaire</i></p><p><b>Related:</b></p>
<p><a href="content.html">content</a> - Insert generated content before or after an element. (<span class="code">open-quote, close-quote, no-open-quote</span>, and <span class="code">no-close-quote</span>.)<br>
<a href="hyphens.html">hyphens</a> - How to split words to improve the layout of paragraphs.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="quotes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

