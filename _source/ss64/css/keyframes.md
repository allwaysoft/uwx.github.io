---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>@Keyframes</h1>
<p>Control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points in time during the animation.</p>
<pre>       @keyframes <i>AnimationName {keyframes-selector {css-styles;{% raw %}}}{% endraw %}</i>

   <i>AnimationName</i>      The name of the animation.

   <i>keyframes-selector</i> Percentage of the animation duration:
                      0-100%
                      from (same as 0%)
                      to (same as 100%)
                      Multiple keyframes-selectors can be applied to one animation.

   <i>css-styles</i>         One or more legal CSS style properties
</pre>
<p>In order for a keyframe list to be valid, it must include rules for at least the times 0% (or <span class="code">from</span>) and 100% (or <span class="code">to</span>) (that is, the starting and ending states of the animation). If both of these time offsets aren't specified, the keyframe declaration is invalid and can't be used for animation.</p>
<p><b>Examples</b></p>
<p>Define a set of partial rotation keyframes (shake):</p>
<pre>keyframes shake {
   0% { transform: translate(7px, 2px) rotate(0deg); }
  20% { transform: translate(-8px, 0px) rotate(3deg); }
  40% { transform: translate(6px, -2px) rotate(3deg); }
  60% { transform: translate(-8px, 2px) rotate(0deg); }
  80% { transform: translate(-6px, -2px) rotate(3deg); }
  100% { transform: translate(6px, -4px) rotate(-3deg); }
}</pre>
<p>Define a <a href="transform.html">transform</a> keyframe (rumble) note this has to include empty selectors for 0 and 100%:</p>
<pre>@keyframes  rumble {
 0%, 100% {}
 50% { transform: translateY(-0.2em) }
 }</pre>
<pre>@-webkit-keyframes rumble {<br>  0%, 100% {} 
  50% {  -webkit-transform: translateY(-0.2em) }
}

@-ms-keyframes  rumble {<br>  0%, 100% {}<br>  50% {-ms-transform: translateY(-0.2em) }
}<span class="code"></span></pre>
<p>Now we can set the ident called "rumble" to repeat, in a linear fashion every 0.1 s, with no startup delay and repeat indefinitely:</p>
<p class="code">animation:         rumble linear 0.1s 0s infinite;</p>
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
<a href="transition.html">transition</a> - CSS transition effects.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


