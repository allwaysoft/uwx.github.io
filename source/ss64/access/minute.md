---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Minute</h1>
<p>Return the minute of the hour (a number from 0 to 59) given a time value.</p>
<pre>Syntax
      Minute(<i>time_value</i>)

Key
   <i>time_value</i>  A valid time.</pre>
<p>The minute() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p> <b>Examples</b></p>
<p class="code">Dim intDemo as integer<br> 
intDemo = minute(dtmShiftEnd)<br>
intDemo = minute(#08:55:30 AM#)</p>
<p class="code">Select * from orders where minute(Order_date) = 30; </p>
<p class="quote"><i>“For a moment, nothing happened. Then, after a second or so, nothing continued to happen” ~ Douglas Adams</i></p>
<p><b>Related:</b></p>
<p><a href="day.html">Day</a> - Return the day of the month.<br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="second.html">Second</a> - Return the seconds of the minute</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="minute.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

