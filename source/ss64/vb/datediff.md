---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>DateDiff</h1> 
<p>Return the time interval between two dates.</p>
<pre>Syntax 
      DateDiff (<i>interval</i>,<i>date1,date2</i>[<i>,</i> <i>FirstDayofWeek</i> [, <i>FirstWeekofYear</i>]])

Key
    <i>date1</i>      The first date to compare

    <i>date2</i>      The second date to compare

<i>FirstDayofWeek</i> A constant defining the first day of the week:
               vbUseSystem (0), vbSunday (1=default),vbMonday(2), 
               vbTuesday(3), vbWednesday(4), vbThursday(5),
               vbFriday(6), vbSaturday(7)

<i>FirstWeekofYear</i> A constant defining the first week of the year:
               vbUseSystem(0), vbFirstJan1(1),vbFirstFourDays(2),
               vbFirstFullWeek(3) 

<i>    interval</i>   The date/Time interval to express the result:

                 yyyy  Year
                  q    Quarter
                  m    Month
                  y    Day of year
                  d    Day
                  w    Weekday
                  h    Hour
                  n    Mi<b>n</b>ute
                  s    Second</pre>
<p>Example</p>
<pre>dtm1="18-Feb-10"
dtm2="19-Aug-10"
WScript<a href="echo.html">.Echo</a> "Difference between " &amp; dtm1 &amp; " and " &amp; dtm2
intMonthsDifferent=<b>DateDiff</b>("m", dtm1, dtm2)
WScript<a href="echo.html">.Echo</a> intMonthsDifferent</pre>
<p><i class="quote">“Listen to many, speak to a few” ~ William Shakespeare</i><br>
<b><br>
Related:</b></p>
<p>  Date           - The current system date<br>
<a href="dateadd.html">DateAdd</a> - Add a time interval to a Date<br>
<a href="datepart.html">DatePart</a> - Return a unit of time from a date<br>
<a href="dateserial.html">DateSerial</a> - Return a Date from a numeric Year, Month and Day<br>
<a href="weekday.html">Weekday</a> - Return the day of the week<br>
Equivalent  PowerShell cmdlet: <a href="../ps/new-timespan.html">New-TimeSpan</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="datediff.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

