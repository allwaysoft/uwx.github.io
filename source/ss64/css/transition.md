---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transition</h1>
<p>Shorthand to set the  4 transition properties:</p>
<pre><i>element</i> { transition: <i>Transition-property Duration Timing-function Delay  </i>; }
</pre>
<p>To apply multiple transitions<span class="code"></span> to the same element, list them in sets, with each set of 4 properties comma separated from the next.</p>
<p>This shorthand is equivalent to the following:<br>
</p>
<pre><i>element</i> {
  <a href="transition-property.html">transition-property</a><i> property</i>;
  <a href="transition-duration.html">transition-duration</a>:<i> time</i>;
  <a href="transition-timing-function.html">transition-timing-function</a>: <i>timing</i>;
  <a href="transition-delay.html">transition-delay</a>: <i>delay</i>;
}</pre>
<p>If not specified the  timing-function and delay will default to <span class="code">ease</span> and 0.</p>
<p>Examples:<br>
  <span class="code">h1 { transition: background 3s;  }<br>
    .ss64class { transition: width 2s, font-style 1s; }</span><br>
    <span class="code">#SS64id { transition: height 2.5s ease, width 2.5s ease;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid blue 4px;
-webkit-transition: width 1.5s,height 1.5s,background 1.5s;
   -moz-transition: width 1.5s,height 1.5s,background 1.5s;
     -o-transition: width 1.5s,height 1.5s,background 1.5s;
        transition: width 1.5s,height 1.5s,background 1.5s;
</textarea></td>
    <td><div id="tryresult">This sample has a MouseOver / :hover style that changes the <span class="code">height</span> and <span class="code">width</span> and adds a red <span class="code">background</span>. <br>
{width: 500px; height: 300px; background: red;}<br>
Reload the page to restart.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers including IE 10. For older versions, use the equivalent <span class="code">-moz-transition</span> for Firefox and <span class="code">-webkit-transition</span> for Safari and Chrome.</p>
<p class="quote"><i>“The world wonders” was a phrase used as <a href="http://en.wikipedia.org/wiki/The_world_wonders">security padding</a> in an encrypted message sent during the Battle of Leyte Gulf  on October 25, 1944”</i></p><p><b>Related:</b></p>
<p><a href="transition-property.html">transition-property</a> - Apply a transition effect to one or more CSS properties.<br>
<a href="transition-duration.html">transition-duration</a> - The time a CSS transition effect takes to complete.<br>
<a href="transition-timing-function.html">transition-timing-function</a> - Speed curve of the transition effect.<br>
<a href="transition-delay.html">transition-delay</a> - Delay before  the CSS transition  is displayed.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transition.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
