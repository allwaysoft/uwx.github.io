---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Column-width</h1>
<p>The  width of columns.</p>
<pre>Syntax
      column-width:  auto | <i>length</i> ;</pre>
<blockquote>
<p><span class="code"><i>length</i></span> - The width of each column in  <span class="code">px, pt, em </span><a href="syntax-units.html">etc</a>.<br>
<span class="code"><u>auto</u></span> - The browser will calculate the column widths automatically (default).</p>
</blockquote>
<p>If a <a href="width.html">width</a> is applied to the same element, that will take precedence over <span class="code">column-width</span>.</p>
<p>Examples:<br>
  <span class="code">h1 { column-width: 100px;  }<br>
    .ss64class { column-width: 5em; }</span><br>
    <span class="code">#SS64id { column-width: 5cm;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 2px solid blue;
-webkit-column-count: 3;
   -moz-column-count: 3;
        column-count: 3;

-webkit-column-width: 150px;
   -moz-column-width: 150px;
        column-width: 150px;</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-column-width</span> for Firefox and <span class="code">-webkit-column-width</span> for Safari and Chrome.</p>
<p class="quote"><i>“It is not the size of a man but the size of his heart that matters” ~ Evander Holyfield</i></p><p><b>Related:</b></p>
<p><a href="column-gap.html">column-gap</a> - Gap between the columns.<br>
<a href="column-count.html">column-count</a> - Number of columns an element should be divided into.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="column-width.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

