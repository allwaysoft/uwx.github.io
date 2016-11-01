---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-rule</h1>
<p>Shorthand to set the      width, style and color of the rule between columns.</p>
<pre>Syntax
      column-rule: <i>Column-rule-width Column-rule-style Column-rule-color</i> ;</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="column-rule-width.html">column-rule-width</a> thin | medium | thick | <a href="syntax-units.html"><i>length</i></a>;
  <a href="column-rule-style.html">column-rule-style</a>: <i>RuleStyle</i>;
  <a href="column-rule-color.html">column-rule-color</a>: <a href="color.html"><i>color</i></a>;
}</pre>
<p>Examples:<br>
  <span class="code">h1 { column-rule-width: 2px dotted #0000ff;  }<br>
    .ss64class { column-rule-width: 4px solid #339966; }</span><br>
    <span class="code">#SS64id { column-rule-width: thick double blue;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="12" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-column-count: 3;
   -moz-column-count: 3;
        column-count: 3;

-webkit-column-gap: 5em;
   -moz-column-gap: 5em;
        column-gap: 5em;

-webkit-column-rule: 10px solid #339966;
   -moz-column-rule: 10px solid #339966;
        column-rule: 10px solid #339966;
</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-column-rule</span> for Firefox and <span class="code">-webkit-column-rule</span> for Safari and Chrome.</p>
<p class="quote"><i>“I don't want anyone reading my writing to think about style. I just want them to be in the story” ~ Willa Sibert Cather</i></p><p><b>Related:</b></p>
<p><a href="column-gap.html">column-gap</a> - Gap between the columns.<br>
<a href="column-rule-color.html">column-rule-color</a> - Color of the rule between columns.<br>
<a href="column-rule-style.html">column-rule-style</a> - Style of the rule between columns. <br>
<a href="column-rule-width.html">column-rule-width</a> - Width of the rule between columns.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="column-rule.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

