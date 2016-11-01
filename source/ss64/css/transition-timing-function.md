---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_css.lbi" --><!-- #EndLibraryItem --><h1>Transition-timing-function</h1>
<p>Speed curve of the transition effect.</p>
<pre>Syntax
      transition-timing-function: <i>timing </i>[,<i>timing2</i>] ;</pre>
<blockquote>
<p><span class="code"><u>ease</u></span> - Slow start, then fast, then end slowly. (Default) Equivalent to <span class="code">cubic-bezier(0.25,0.1,0.25,1)</span><br>
<span class="code">ease-in</span> - Slow start. Equivalent to <span class="code">cubic-bezier(0.42,0,1,1)</span><br>
<span class="code">ease-out</span> - Slow end. Equivalent to <span class="code">cubic-bezier(0,0,0.58,1)</span><br>
<span class="code">ease-in-out</span> - Slow start and end. Equivalent to <span class="code">cubic-bezier(0.42,0,0.58,1)</span><br>
<span class="code">linear</span> - The same speed transition from start to end. Equivalent to <span class="code">cubic-bezier(0,0,1,1)</span><br>
<span class="code">cubic-bezier(<i>x1, y1, x2, y2</i>)</span> - Define a specific cubic-bezier function. Values for <i><span class="code">x</span> and <span class="code">y</span></i> are numerics from 0 to 1<br>
<span class="code">steps</span> - A stepped timing function that takes two parameters. The first parameter specifies the number of intervals; the optional second parameter specifies the point in the interval where the property value changes. The second parameter is constrained to the values "start" or "end", which is the default.<br>
<span class="code">step-start</span> - A stepped timing function that is equivalent to "steps(1, start)".<br>
<span class="code">step-end</span> - A stepped timing function that is equivalent to "steps(1, end)".</p>
</blockquote>
<p> To specify a <a href="https://www.webkit.org/blog/138/css-animation/">cubic bezier</a> curve,  give the X and Y values for 2 of the control points of the curve. Point P0 is implicitly set to (0,0) and P3 is implicitly set to (1,1).</p>
<p>If more than one transition timing is given they will apply in turn to the (multiple) transition elements specified with <a href="transition-property.html">transition-property</a>.</p>
<p>Transitions are typically applied to CSS properties that are set to change on <span class="code">hover</span>,  if assigned to the <span class="code">normal</span> state, the animation would run immediately when the page is loaded.<br>
</p>
<p>Examples:<br>
  <span class="code">h1 { transition-timing-function: ease;  }<br>
    .ss64class { transition-timing-function: steps(4, end); }</span><br>
    <span class="code">#SS64id { transition-timing-function: cubic-bezier(0,0,1,0);  }</span>    <br>
</p>
<p>Try it:</p><input type="button" onclick="ApplyStyle()" value="Apply Changes">
<table>
  <tbody><tr>
    <td><textarea name="tryit" id="trycode" cols="60" rows="6" onfocus="this.style.background='#fff';" onblur="this.style.background='#eee';" tabindex="1">border: solid blue 4px;
/* Transition  */
-webkit-transition-property: all;
   -moz-transition-property: all; 
     -o-transition-property: all;
        transition-property: all;

/* Timing  */
-webkit-transition-timing-function: ease-out;
   -moz-transition-timing-function: ease-out;
     -o-transition-timing-function: ease-out;
        transition-timing-function: ease-out;

/* Duration  */
-webkit-transition-duration: 2s;
   -moz-transition-duration: 2s;
     -o-transition-duration: 2s;
        transition-duration: 2s;
</textarea></td>
    <td><div id="tryresult">This sample has a MouseOver / :hover style that changes the <span class="code">height</span> and <span class="code">width</span> and adds a red <span class="code">background</span>. <br>
{width: 500px; height: 300px; background: red;}<br>
Reload the page to restart.</div></td>
  </tr>
</tbody></table>
<p>(CSS 3) Browser Support:   IE 10 only, use the equivalent <span class="code">-moz-transition-timing-function</span> for Firefox and <span class="code">-webkit-transition-timing-function</span> for Safari and Chrome.</p>
<p class="quote"><i>“It's no delay to stop to edge the tool” ~ Irish Saying</i></p><p><b>Related:</b></p>
<p><a href="transition-property.html">transition-property</a> - Apply a transition effect to one or more CSS properties.<br>
<a href="transition-duration.html">transition-duration</a> - The time a CSS transition effect takes to complete.<br>
<a href="transition-delay.html">transition-delay</a> - Delay before  the CSS transition  is displayed.<br>
<b><a href="transition.html">transition</a></b> - Shorthand to set the four transition- properties.</p><!-- #BeginLibraryItem "/Library/foot_css.lbi" --><p>
<!-- CSS -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="2739097502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transition-timing-function.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

