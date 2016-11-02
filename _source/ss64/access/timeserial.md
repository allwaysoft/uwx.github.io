---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>TimeSerial</h1>
<p>  Return a time given an hour, minute, and second value.</p>
<pre>Syntax
      TimeSerial ( <i>hour</i>, <i>minute</i>, <i>second</i> )

Key
   hour    The hour value (0 - 23).

   minute  The minute value (0 - 59).

   second  The second value (0 - 59).
</pre>
<p>The hour/minute/seconds  can be numeric <i>expressions</i>. </p>
<p>The TimeSerial() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a> </p>
<p><b>Example</b></p>
<p><span class="code">Dim dtmSaved<br>
dtmSaved = TimeSerial (23, 15, 00)</span><br>
'Returns: <span class="code">11:15:00 PM </span></p>
<p class="quote"><i>“The hours of folly are measured by the clock, but of wisdom no clock can measure” ~ William Blake</i></p>
<p><b>Related:</b></p>
<p><a href="now.html">Now</a> - Return the current date and time.<br>
<a href="date.html">Date</a> - Return the current date.<br>
<a href="doevents.html">DoEvents</a> - Delay to allow the operating system to process other events.<br>
<a href="timevalue.html">TimeValue</a> - Convert a string to a Time.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="timeserial.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

