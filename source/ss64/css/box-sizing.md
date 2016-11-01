---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><script type="text/javascript">
function ApplyStyle(id) {
  var el22 = document.getElementsByClassName('tryresult');
  var newcss = document.getElementById('trycode').value;

var divs = document.getElementsByClassName('tryresult');
for(var i=0; i < divs.length; i++) { 
  divs[i].setAttribute('style', newcss);
}

  
}</script>
<h1>Box-sizing</h1>
<p>The CSS box model used to calculate the width and height of elements.</p>
<pre>Syntax
           box-sizing: content-box | border-box  ;
      -moz-box-sizing: content-box | border-box | padding-box ;

Key
  <u>content-box</u>  The width and height properties represent only the dimensions of the <b>content</b>.
               They don’t include the border, margin, or padding (Default  CSS 2 box model.)

  border-box   The width and height properties represent the sum of the<b> content + padding size + border</b> size,
               but don’t include the margin. (Default IE 5 box model.)

  padding-box  The width and height properties include the <b>content + padding</b> size,
               but don’t include the border or margin.

  inherit      Inherit the property from a parent element.</pre>
<p>Box-sizing works with min-width / max-width / min-height / max-height with one exception, in Firefox versions prior to v17 (November 2012) min-height and max-height don't respect box-sizing.</p>
<p>When <span class="code">border-box</span> is applied to a <span class="code">&lt;textarea&gt;</span> it will prevent padding and border from expanding the elements width beyond 100% .</p><p>Examples:<br>
  <span class="code">h1 { box-sizing: border-box; }<br>
  </span><span class="code">
  .ss64class { 
  box-sizing: content-box; }</span><br>
  <span class="code">#ss64id { box-sizing: </span><span class="code">border-box; }</span>  <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">float: left;
width: 33%; /* enough space for 3 boxes to fit? */
border: 10px solid green;
-webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
</textarea></td>

<td>

<div class="tryresult">Box 1</div>
<div class="tryresult">Box 2</div>
<div class="tryresult">Box 3</div>

</td>
</tr>
</tbody></table>
<p>(CSS 3) Browser Support: IE, Opera, and Chrome,  use the equivalent <span class="code">-moz-box-sizing</span> for Firefox and <span class="code">-webkit-box-sizing</span> for Safari.</p>
<p class="quote"><i>“People who know little are usually great talkers, while men who know much say little” ~ Jean Jacques Rousseau</i></p>
<p><b>Related:</b></p>
<p><a href="http://css-tricks.com/box-sizing/">box sizing and inheritance </a>- CSS Tricks<br>
<a href="syntax-box-model.html">The CSS Box Model</a> - Borders, Padding and Margins.<br>
<a href="box-shadow.html">box-shadow</a> - Attach one or more drop-shadows to the box.<br>
<a href="max-height.html">max-height</a> - Maximum height of an element<br>
<a href="min-height.html">min-height</a> - Minimum height of an element<br>
<a href="max-width.html">max-width</a> - Maximum width of an element<br>
<a href="min-width.html">min-width</a> - Minimum width of an element</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="box-sizing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
