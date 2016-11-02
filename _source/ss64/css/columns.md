---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Columns</h1>
<p>Shorthand to set the column-width and column-count.</p>
<pre>Syntax
      columns: <i>column-width column-count</i> ;</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="column-width.html">column-width:</a> <i>length</i>;
  <a href="column-count.html">column-count</a>: <i>number</i>;
}</pre>
<p>Examples:<br>
  <span class="code">h1 { columns: 100px 4;  }<br>
    .ss64class { columns: 5em 2; }</span><br>
    <span class="code">#SS64id { columns: 5cm 3;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">-webkit-columns: 150px 3;
   -moz-columns: 150px 3;
        columns: 150px 3;</textarea></td>
    <td><div id="tryresult">When text is displayed in newspaper columns the length of each line is much shorter. This is a great aid to readability. On the internet many people will skim read large blocks of text and this can have the unfortunate effect that they miss important points buried in a long paragraph.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Opera. Use the equivalent <span class="code">-moz-columns</span> for Firefox and <span class="code">-webkit-columns</span> for Safari and Chrome.</p>
<p class="quote"><i>“Consider the momentous event in architecture when the wall parted and the column became” ~ Louis Kahn</i></p><p><b>Related:</b></p>
<p><a href="column-width.html">column-width</a> - Width of the columns.<br>
<a href="column-count.html">column-count</a> - Number of columns an element should be divided into.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="columns.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

