---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Month</h1>
<p>  Return  the month (a number from 1 to 12) for a given date.</p>
<pre>Syntax
      Month(<i>date_value</i>)

Key
   <i>date_value</i>  A valid date.</pre>
<p>The Month() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p> <b>Examples</b></p>
<p class="code">Dim intDemo as integer<br>
intDemo = Month(dtmShiftEnd)<br>
intDemo = Month(#30/12/2012 08:55:00 AM#)</p>
<p class="code">Select * from orders where Month(Order_date) = 3; </p>
<p class="quote"><i>“What would be the use of immortality to a person who cannot use well a half an hour” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b></p>
<p><a href="day.html">Day</a> - Return the day of the month.<br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="year.html">Year</a> - Return the year for a given date.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="month.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

