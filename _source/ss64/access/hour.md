---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Hour</h1>
<p>  Return the hour of the day (a number from 0 to 23) from a given time (or Date/Time) value.</p>
<pre>Syntax
      Hour(<i>time_value</i>)

Key
   <i>time_value</i>  A valid time.</pre>
<p>The Hour() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<blockquote>
<p><img src="hour.png" width="300" height="114" alt="hour"></p>
</blockquote>
<p> <b>Examples</b></p>
<p class="code">Dim intDemo as integer<br>
intDemo = Hour(dtmShiftEnd)<br>
intDemo = Hour(#08:55:00 AM#)<br>
intDemo = Hour(#30/12/2012 08:55:00 AM#)</p>
<p class="code">Select * from orders where Hour(Order_date) = 17; </p>
<p class="quote"><i>“What would be the use of immortality to a person who cannot use well a half an hour” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b></p>
<p><a href="day.html">Day</a> - Return the day of the month.<br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="minute.html">Minute</a> - Return the minute of the hour.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="hour.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

