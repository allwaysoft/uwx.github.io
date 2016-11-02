---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Text-overflow</h1>
<p>How to overflow  text when it does not fit into the containing element.</p>
<pre>Syntax
      <span class="code">text-overflow</span>: <span class="code"><u>clip</u> | ellipsis</span> | <i>string</i> ;</pre>
<blockquote>
<p><span class="code"><u>clip</u></span> - Clip the text.<br>
<span class="code">ellipsis</span> - Show an ellipsis … to represent the clipped text.<br>
<span class="code"><i>"string"</i></span>  - Display <i>string</i> instead of the clipped text.</p>
</blockquote>
<p>To use text-overflow within a table cell with IE, you can set <span class="code">white-space: nowrap;</span> along with <span class="code">table-layout: fixed;</span> on the table itself.</p>
<p>Examples:<br>
  <span class="code">h1 { text-overflow: auto; }<br>
    .ss64class { text-overflow: hidden; }</span><br>
    <span class="code">#SS64id { text-overflow: scroll;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table style="table-layout: fixed;">
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">width: 300px;
white-space: nowrap; 
overflow: hidden;
text-overflow: "[--]";
</textarea></td>
    <td><div id="tryresult">This long sentence will be truncated if we limit it to being just 300 px wide with no wrapping onto multiple lines. Of course a simpler alternative would be just writing a shorter sentence in the first place.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers, see <a href="http://caniuse.com/text-overflow">caniuse.com</a></p>
<p class="quote"><i>“Short cuts make long delays” ~ J.R.R. Tolkien</i></p><p><b>Related:</b></p>
<p><a href="overflow.html">overflow</a> - What happens if content overflows an element's box.<br>
<a href="overflow-x.html">overflow-x</a> - Whether to clip the left/right edges of overflowing content.<br>
<a href="overflow-y.html">overflow-y</a> Whether to clip the top/bottom edges of overflowing content.<br>
<a href="table-layout.html">table-layout</a> - Layout algorithm to be used for a table<br>
<a href="white-space.html">white-space</a> - How white-space inside an element is handled.<br>
<a href="text-align.html">text-align</a> - Horizontal alignment of text.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="text-overflow.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

