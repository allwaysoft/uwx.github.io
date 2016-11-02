---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-rule-style</h1>
<p>The   style of the rule between columns.</p>
<pre>Syntax
      column-rule-style: <i>RuleStyle</i> ;</pre>
<blockquote>
<p><span class="code"><u>none</u></span> - Don't display a rule (default)<br>
<span class="code">hidden</span> - Hide the rule<br>
<span class="code">dotted</span> - a dotted rule<br>
<span class="code">dashed</span> -  a dashed rule<br>
<span class="code">solid</span> - a solid rule<br>
<span class="code">double</span> - a double rule<br>
<span class="code">groove</span> - a 3D grooved rule *<br>
<span class="code">ridge</span> - a 3D ridged rule *<br>
<span class="code">inset</span> - a 3D inset rule *<br>
<span class="code">outset</span> - a 3D outset rule *</p>
</blockquote>
<p>* The 3D effects will vary with different combinations of <span class="code"><a href="column-rule-width.html">width</a></span> and <span class="code"><a href="column-rule-color.html">color</a></span>.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { column-rule-style: solid;  }<br>
    .ss64class { column-rule-style: dotted; }</span><br>
    <span class="code">#SS64id { column-rule-style: ridge;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="12" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-column-count: 3;
   -moz-column-count: 3;
        column-count: 3;

-webkit-column-rule-style: dotted;
   -moz-column-rule-style: dotted;
        column-rule-style: dotted;

-webkit-column-rule-color: #339966;
   -moz-column-rule-color: #339966;
        column-rule-color: #339966;

-webkit-column-gap: 5em;
   -moz-column-gap: 5em;
        column-gap: 5em;
</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-column-rule-style</span> for Firefox and <span class="code">-webkit-column-rule-style</span> for Safari and Chrome.</p>
<p class="quote"><i>“I don't want anyone reading my writing to think about style. I just want them to be in the story” ~ Willa Sibert Cather</i></p><p><b>Related:</b></p>
<p><a href="column-gap.html">column-gap</a> - Gap between the columns.<br>
<a href="column-rule-color.html">column-rule-color</a> - Color of the rule between columns.<br>
<a href="column-rule-width.html">column-rule-width</a> - Width of the rule between columns. <br>
<b><a href="column-rule.html">column-rule</a></b> - A shorthand property for all the column-rule-* properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

