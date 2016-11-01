---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transition-duration</h1>
<p>The time a CSS transition effect takes to complete.</p>
<pre>Syntax
      transition-duration: <i>time </i>[,time]... ;</pre>
<blockquote>
<p><span class="code"><i>time</i></span> - One or more transition times, separated by commas, followed by a time unit designator (<span class="code">ms</span> or <span class="code">s</span>). </p>
</blockquote>
<p>If more than one transition time is given they will apply in turn to the (multiple) transition elements specified with <a href="transition-property.html">transition-property</a>.</p>
<p>Examples:<br>
  <span class="code">h1 { transition-duration: 1.5s;  }<br>
    .ss64class { transition-duration: 250ms; }</span><br>
    <span class="code">#SS64id { transition-duration: 2s,5s,15s;  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid blue 4px;
/* Transition  */
-webkit-transition-property: width,height,background;
   -moz-transition-property: width,height,background; 
     -o-transition-property: width,height,background;
        transition-property: width,height,background;

/* Duration  */
-webkit-transition-duration: 1s,1s,10s;
   -moz-transition-duration: 1s,1s,10s;
     -o-transition-duration: 1s,1s,10s;
        transition-duration: 1s,1s,10s;
</textarea></td>
    <td><div id="tryresult">This sample has a MouseOver / :hover style that changes the <span class="code">height</span> and <span class="code">width</span> and adds a red <span class="code">background</span>. <br>
{width: 500px; height: 300px; background: red;}<br>
Reload the page to restart.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:  All major browsers including IE 10. For older versions, use the equivalent <span class="code">-moz-transition-duration</span> for Firefox and <span class="code">-webkit-transition-duration</span> for Safari and Chrome.</p>
<p class="quote"><i>“I find that when I'm ready for something to end, I transition quickly. But when something ends before its time, I find it hard to move on” ~ Emma Caulfield</i></p><p><b>Related:</b></p>
<p><a href="transition-property.html">transition-property</a> - Apply a transition effect to one or more CSS properties.<br>
<a href="transition-timing-function.html">transition-timing-function</a> - Speed curve of the transition effect.<br>
<a href="transition-delay.html">transition-delay</a> - Delay before  the CSS transition  is displayed.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set the four transition- properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transition-duration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

