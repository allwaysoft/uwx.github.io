---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transition-delay</h1>
<p>Delay before  the CSS transition  is displayed.</p>
<pre>Syntax
      transition-delay: <i>time </i>[,<i>time2</i>] ;</pre>
<blockquote>
<p><i><span class="code">time</span></i> - One or more offset times, separated by commas, followed by a time unit designator  (<span class="code">ms</span> or <span class="code">s</span>). <br>
</p>
</blockquote>
<p>If more than one transition delay is given they will apply in turn to the (multiple) transition elements specified with <a href="transition-property.html">transition-property</a>.</p>
<p>Transitions are typically applied to CSS properties that are set to change on <span class="code">hover</span>,  if assigned to the <span class="code">normal</span> state, the animation would run immediately when the page is loaded.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { transition-delay: 1.5s;  }<br>
    .ss64class { transition-delay: 250ms; }</span><br>
    <span class="code">#SS64id { transition-delay: 8s;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid blue 4px;
/* Transition */
-webkit-transition-property: all;
   -moz-transition-property: all; 
     -o-transition-property: all;
        transition-property: all;
/* Delay  */
-webkit-transition-delay: 1s;
   -moz-transition-delay: 1s;
     -o-transition-delay: 1s;
        transition-delay: 1s;
/* Duration */
-webkit-transition-duration: 1s;
   -moz-transition-duration: 1s;
     -o-transition-duration: 1s;
        transition-duration: 1s;
</textarea></td>
    <td><div id="tryresult">This sample has a MouseOver / :hover style that changes the <span class="code">height</span> and <span class="code">width</span> and adds a red <span class="code">background</span>. <br>
{width: 500px; height: 300px; background: red;}<br>
Reload the page to restart.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:   IE 10 only, use the equivalent <span class="code">-moz-transition-delay</span> for Firefox and <span class="code">-webkit-transition-delay</span> for Safari and Chrome.</p>
<p class="quote"><i>“It's no delay to stop to edge the tool” ~ Irish Saying</i></p><p><b>Related:</b></p>
<p><a href="transition-property.html">transition-property</a> - Apply a transition effect to one or more CSS properties.<br>
<a href="transition-duration.html">transition-duration</a> - The time a CSS transition effect takes to complete.<br>
<a href="transition-timing-function.html">transition-timing-function</a> - Speed curve of the transition effect.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set the four transition- properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transition-delay.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

