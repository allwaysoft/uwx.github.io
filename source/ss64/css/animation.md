---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Animation</h1>
<p>Shorthand to set  the CSS properties:</p>
<pre><i>      element</i> { animation: <i>animation-name, animation-duration, animation-timing-function,
                       animation-delay, animation-iteration-count, animation-direction animation-fill-mode</i>;}</pre>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  animation-name: <i>animation_IDENT</i> ;
  animation-duration: <i>time</i> s | <i>time</i> ms ;
  animation-timing-function: <i>timing</i> ;
  animation-delay: <i>time</i> s | <i>time</i> ms ;
  animation-iteration-count: <i>number</i> |infinite ;
  animation-direction: <i>direction</i> ;
  animation-fill-mode ;
}</pre>
<p>A list of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">all CSS properties that can be animated</a> (Mozilla).</p>
<p>The default animation property values, any value that is not specified in the shorthand will be set to the     default, even if  set separately in another css rule.</p>
<pre>  animation-name: none;
  animation-duration: 0s ;
  animation-timing-function: ease ;
  animation-delay: 0s ;
  animation-iteration-count: 1 ;
  animation-direction: normal ;
  animation-fill-mode: none ;</pre>
<p><b>Examples</b></p>
<p>Set the ident called "rumble" to repeat, in a linear fashion every 0.1 s, with no startup delay and repeat indefinitely:</p>
<p class="code">animation:         rumble linear 0.1s 0s infinite;</p>
<p>Try it: first we set <a href="keyframes.html">@keyframes</a> to define a <a href="transform.html">transform</a> for "rumble"</p>
<p class="code">@keyframes         rumble { 0%, 100% {} 50% {          transform: translateY(-0.2em) {% raw %}}}{% endraw %}<br>
@-webkit-keyframes rumble { 0%, 100% {} 50% {  -webkit-transform: translateY(-0.2em) {% raw %}}}{% endraw %}<br>
@-ms-keyframes     rumble { 0%, 100% {} 50% {      -ms-transform: translateY(-0.2em) {% raw %}}}{% endraw %}<br>
</p>
<input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" tabindex="1">animation:         rumble linear 0.1s 0s infinite;
-webkit-animation: rumble linear 0.1s 0s infinite;
-moz-animation:    rumble linear 0.1s 0s infinite;
-ms-animation:     rumble linear 0.1s 0s infinite;
</textarea></td>
    <td><div id="tryresult">This is a sample of CSS animation.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  IE 10, Firefox and Opera. For older versions, use the equivalent <span class="code">-moz-animation</span> for Firefox , <span class="code">-ms-animation </span>for IE and <span class="code">-webkit-animation</span> for Safari and Chrome.</p>
<p><span class="quote"><i>“I've learned that our background and circumstances may have influenced who we are, but we are responsible for who we become” ~ James Rhinehart</i></span></p>
<p><b>Related:</b></p>
<p><a href="transform.html">transform</a> - Apply a 2D or 3D transformation to an element.<br>
<a href="transition.html">transition</a> <a href="transition-property.html">- </a>CSS transition effects.<br>
</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="animation.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
