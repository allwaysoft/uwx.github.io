---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transition-property</h1>
<p>Apply a transition effect to one or more CSS properties.</p>
<pre>Syntax
      transition-property: <i>property </i>| all | <u>none</u>  ;</pre>
<blockquote>
<p><span class="code"><i>property</i></span> - A comma separated list of CSS property names that the transition effects will apply  to.<br>
<span class="code">all</span> - Apply transition effects to all the changed properties.<br>
<span class="code">none</span> - Don't apply any transition effects. (default)</p>
</blockquote>
<p>Transitions are most often applied to CSS properties that are set to change on <span class="code">hover</span> or via JavaScript.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { transition-property: background;  }<br>
    .ss64class { transition-property: width,height,background; }</span><br>
    <span class="code">#SS64id { transition-property: all;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid blue 4px;
/* Transition */
-webkit-transition-property: width,height,background;
   -moz-transition-property: width,height,background; 
     -o-transition-property: width,height,background;
        transition-property: width,height,background;

/* Duration */
-webkit-transition-duration: 1.5s;
   -moz-transition-duration: 1.5s;
     -o-transition-duration: 1.5s;
        transition-duration: 1.5s;
</textarea></td>
    <td><div id="tryresult">This sample has a MouseOver / :hover style that changes the <span class="code">height</span> and <span class="code">width</span> and adds a red <span class="code">background</span>. <br>
{width: 500px; height: 300px; background: red;}<br>
Reload the page to restart.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers, IE 10, for older versions, use the equivalent <span class="code">-moz-transition-property</span> for Firefox and <span class="code">-webkit-transition-property</span> for Safari and Chrome.</p>
<p class="quote"><i>“Life is pleasant. Death is peaceful. It's the transition that's troublesome” ~ Isaac Asimov</i></p><p><b>Related:</b></p>
<p><a href="transition-duration.html">transition-duration</a> - The time a CSS transition effect takes to complete.<br>
<a href="transition-timing-function.html">transition-timing-function</a> - Speed curve of the transition effect.<br>
<a href="transition-delay.html">transition-delay</a> - Delay before  the CSS transition  is displayed.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set the four transition- properties.<br>
<a href="transform.html">transform</a> - Apply a 2D or 3D transformation to an element.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

