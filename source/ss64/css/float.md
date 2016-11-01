---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Float</h1>
<p>Shift to the left (or right) on the current line allowing other content to flow/wrap alongside.</p>
<pre>Syntax
      float: left | right | <u>none</u> | inherit ;</pre>
<blockquote>
<p> <span class="code">left</span> - Float to the left.<br>
<span class="code">right</span> - Float to the right.<br>
<span class="code"><u>None</u></span>  - Do not float (default).<br>
<span class="code">Inherit</span> -  Assume the float value from a parent element.</p>
</blockquote>
<p>Float is mainly used to position images within a block of text, but can  be used to position any elements side by side, it is particularly useful when the exact sizes are unknown or subject to change.</p>
<p> If  set to <span class="code">none</span> the item will be positioned within the normal flow of text.<br>
 To 
prevent other elements from floating to the left or right of this one use <a href="clear.html"><span class="code">clear</span></a>.</p>
<p>If the browser width is too narrow to display the items side by side, they will stack vertically.</p>
<p>Examples:<br>
  <span class="code">h1 { float: right; }<br>
    .ss64class { float: left; }</span><br>
    <span class="code">#SS64id { float: right;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border-style: solid;
float: right;
</textarea></td>
    <td><div id="tryresult">The 'Try It' control will change the float of this DIV</div>
<div style="float:left; border:solid red">This div is floated left</div></td>
  </tr>
</tbody></table>
<p>(CSS 1) Browser Support:  All major browsers.</p>
<p class="quote"><i>“Float like a butterfly, sting like a bee” ~ Muhammad Ali</i></p><p><b>Related:</b></p>
<p><a href="clear.html">Clear - </a>Set sides of an element where other floating elements are not allowed.<br>
<a href="display.html">display</a> - How to display an HTML element<br>
<a href="visibility.html">visibility</a> - Hide or show an element<br>
<a href="http://www.alistapart.com/articles/css-floats-101/">CSS Floats 101</a> - A List apart</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="float.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

