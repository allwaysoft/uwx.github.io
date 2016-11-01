---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Weekday</h1> 
<p>Return the day of the week.</p>
<pre>Syntax 
      Weekday(<i>Date </i>[,<i>FirstDayofWeek</i>])

Key
   <i>Date</i>             A date expression

   <i>FirstDayofWeek</i>   A constant that specifies
                    the first day of the week, default=vbSunday.
</pre>
<p>  To create day numbers compatible with <a href="../dates.html">ISO 8601</a> standard dates, set the<i>firstdayofweek</i> to Monday(2 or <span class="code">vbMonday</span>)</p>
<p>Example</p>
<pre>Dim intDay
intDay = Weekday(<span class="code">"30/04/2012",2</span>)
WScript<a href="echo.html">.Echo</a> intDay<br>&gt; 1

Weekday() will return one of the following <a href="syntax-constants.html">constant</a> values:

<u>vbSunday</u>    1
vbMonday    2
vbTuesday   3
vbWednesday 4
vbThursday  5
vbFriday    6
vbSaturday  7</pre>
<p class="quote"><i>“Write it on your heart that every day is the best day in the year” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b></p>
<p><a href="dateadd.html">DateAdd</a> - Add a time interval to a Date<a href="datediff.html"><br>
DateDiff</a> - Return the time interval between two dates <a href="datepart.html"><br>
DatePart</a> - Return a unit of time from a date<br>
<a href="weekdayname.html">WeekdayName</a> - Return the named day of the week<br>
Equivalent PowerShell cmdlet: <span class="code">(<a href="../ps/get-date.html">Get-Date</a>).DayOfWeek.Value__ + 1</span> (The underscores give a number and the +1 is because PS counts from 0) </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="weekday.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

