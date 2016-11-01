---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Year</h1>
<p>Return a four-digit year (a number from 1900 to 9999) for a given date value.</p>
<pre>Syntax
      Year(<i>date_value</i>)

Key
   <i>date_value</i>  A valid date.</pre>
<p>The Year() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p> <b>Examples</b></p>
<p class="code">Dim intDemo as integer<br> 
intDemo = Year(dtmShiftEnd)<br>
intDemo = Year(#31/12/2012#)</p>
<p class="code">Select * from orders where Year(Order_date) = 2012; </p>
<p class="quote"><i>“I'm spending a year dead for tax reasons” ~ Douglas Adams</i></p>
<p><b>Related:</b></p>
<p><a href="day.html">Day</a> - Return the day of the month.<br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="month.html">Month</a> - Return the month for a given date.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="year.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

