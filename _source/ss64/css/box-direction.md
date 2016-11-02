---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Box-direction</h1>
<p>The direction in which child elements of  a box  element are laid out.</p>
<pre>Syntax
      box-direction: normal | reverse | inherit ;</pre>
<blockquote>
<p><span class="code">normal</span> - Display in the default direction.<br>
<span class="code">reverse</span> - Display in reverse direction.<br>
<span class="code">inherit</span> - Inherit from a parent element.</p>
</blockquote>
<p>Examples:<br>
  <span class="code">h1 { box-direction: reverse;  }<br>
    .ss64class { box-direction: reverse; }</span><br>
    <span class="code">#SS64id { box-direction: reverse;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="15" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: 1px solid blue;
width: 300px;
height: 100px;

display: -webkit-box;
display:    -moz-box;
display:         box;
-webkit-box-direction: reverse;
   -moz-box-direction: reverse;
        box-direction: reverse;
</textarea></td>
    <td><div id="tryresult">
<p>*FirstChild</p>
<p>*SecondChild</p>
<p>*ThirdChild</p>
</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  None, use the equivalent <span class="code">-moz-box-direction</span> for Firefox and <span class="code">-webkit-box-direction</span> for Safari, Opera, and Chrome.</p>
<p class="quote"><i>“I've never known a musician who regretted being one. Whatever deceptions life may have in store for you, music itself is not going to let you down” ~   Virgil Thomson</i></p><p>&nbsp;</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="box-direction.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

