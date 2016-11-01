---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DateAdd</h1>
<p>  Add a specified time interval to a date.</p>
<pre>Syntax
      DateAdd(<i>interval, number, date</i>)

Key
   <i>interval</i>  The interval of time to add.

   <i>number</i>    The number of intervals to add.
             positive for dates in the future or
             negative for dates in the past.

   date      The  date to which the interval is added.</pre>
<table cols="2"> <tbody> <tr> <td class="label"><b>Interval Setting</b></td> <td class="label"><b>Description</b></td></tr>
<tr> <td>yyyy</td> <td>Year</td></tr>
<tr> <td>q</td> <td>Quarter</td></tr>
<tr> <td>m</td> <td>Month</td></tr> 
<tr> <td>y</td> <td>Day of year</td></tr>
<tr> <td>d</td> <td>Day</td></tr> 
<tr> <td>w</td> <td>Weekday</td></tr>
<tr> <td>ww</td> <td>Week</td></tr> 
<tr> <td>h</td> <td>Hour</td></tr> 
<tr> <td>n</td> <td>Minute</td></tr> 
<tr> <td>s</td> <td>Second</td></tr></tbody></table>
<p>DateAdd  won't return an invalid date. </p>
<p>The DateAdd() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="dateadd.png" width="439" height="104" alt="DateAdd"></p>
</blockquote>
<p>In VBA:</p>
<p>Add one month to January 31:</p>
<p class="code">DateAdd("m", 1, "31-Jan-16")</p>
<p>In this case, DateAdd returns 29-Feb-16</p>
<p class="quote"><i>“Beauty is Nature's coin, must not be hoarded, but must be current” ~ John Milton</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date.<br>
<a href="datediff.html">DateDiff</a> - Return the time difference between two dates. <br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="dateserial.html">DateSerial</a> - Return a date given a year, month, and day.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="dateadd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

