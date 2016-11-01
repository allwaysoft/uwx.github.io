---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-rule-width</h1>
<p>The     width of the rule between columns.</p>
<pre>Syntax
      column-rule-width: thin | medium | thick | <i>length</i> ;
</pre>
<blockquote>
<p><span class="code">thin</span> - Width less than the default.<br>
<span class="code">medium</span> - Default. A medium width border.<br>
<span class="code">thick</span> - Width greater than the default.<br>
<span class="code"><i>length</i></span> - A floating-point number followed by an <a href="syntax-units.html">absolute or relative units</a> designator (px, em, pt...)</p>
</blockquote>
<p>The exact thickness of the column rule when using the medium, thin, or thick value is user agent dependent.</p>
<p>Examples:<br>
  <span class="code">h1 { column-rule-width: 2em;  }<br>
    .ss64class { column-rule-width: 1px; }</span><br>
    <span class="code">#SS64id { column-rule-width: medium;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="12" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-column-count: 3;
   -moz-column-count: 3;
        column-count: 3;

-webkit-column-rule-style: solid;
   -moz-column-rule-style: solid;
        column-rule-style: solid;

-webkit-column-rule-color: #339966;
   -moz-column-rule-color: #339966;
        column-rule-color: #339966;

-webkit-column-rule-width: 10px;
   -moz-column-rule-width: 10px;
        column-rule-width: 10px;

-webkit-column-gap: 5em;
   -moz-column-gap: 5em;
        column-gap: 5em;
</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-column-rule-width</span> for Firefox and <span class="code">-webkit-column-rule-width</span> for Safari and Chrome.</p>
<p class="quote"><i>“I don't want anyone reading my writing to think about style. I just want them to be in the story” ~ Willa Sibert Cather</i></p><p><b>Related:</b></p>
<p><a href="column-gap.html">column-gap</a> - Gap between the columns.<br>
<a href="column-rule-color.html">column-rule-color</a> - Color of the rule between columns.<br>
<a href="column-rule-style.html">column-rule-style</a> - Style of the rule between columns. <br>
<b><a href="column-rule.html">column-rule</a></b> - A shorthand property for all the column-rule-* properties.<br>
<a href="column-count.html">column-count</a> - Number of columns an element should be divided into.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="column-rule-width.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

