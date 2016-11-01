---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Round</h1>
<p>  Return a number rounded to a specified number of decimal places.</p>
<pre>Syntax
      Round(<i>expression</i>, [<i>decimal_places</i>])

Key
   <i>expression</i>    The numeric expression to be rounded.

  <i>decimal_places</i> The number of decimal places to round to.
                 default=0 (which will return an integer).</pre>
<p>The Round() function utilizes bankers rounding. When the last <a href="http://en.wikipedia.org/wiki/Significant_figures">significant digit </a>is a <span class="code">5</span>, it will round to the nearest even number. To instead follow the traditional rule of always rounding a <span class="code">5</span> UP add a very small value such as <span class="code">+ 0.000001</span></p>
<p>The Round() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim intDemo as Integer<br>
</span>
<span class="code"> intDemo = Round (123.64)<br>
</span>'returns <span class="code">123 <br>
intDemo = Round (123.64, 1)<br>
</span>'returns <span class="code">123.6<br>
intDemo = Round (2.225, 2)<br>
</span>'returns <span class="code">2.22<br>
intDemo = Round (2.225 + 0.000001, 2)<br>
</span>'returns <span class="code">2.23</span></p>
<p class="quote"><i>“I, on the other hand, am a fully-rounded human being, with a degree from the University of Life, a diploma from the School of Hard Knocks, and three gold stars from the Kindergarten of Getting the Shit Kicked Out of Me” ~ Rowan Atkinson (Blackadder 4) </i></p>
<p><b>Related:</b></p>
<p><a href="int.html">Int</a> - Return the integer portion of a number (negative numbers round down)<br>
<a href="fix.html">Fix</a> -  Return the integer portion of a number (negative numbers round up)<br>
<a href="http://allenbrowne.com/round.html">Rounding in Access</a> - Allen Browne</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="round.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

