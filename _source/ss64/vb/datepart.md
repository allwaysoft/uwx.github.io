---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>DatePart</h1> 
<p>Return a  specified part of a given date.</p>
<pre>Syntax 
      DatePart (<i>interval</i>,<i>date </i>[<i>,</i> <i>FirstDayofWeek</i> [, <i>FirstWeekofYear</i>]])

Key
    <i>date</i>       The date to analyse

<i>FirstDayofWeek</i> A constant defining the first day of the week:
               vbUseSystem (0), vbSunday (1=default),vbMonday(2), 
               vbTuesday(3), vbWednesday(4), vbThursday(5),
               vbFriday(6), vbSaturday(7)

<i>FirstWeekofYear</i> A constant defining the first week of the year:
               vbUseSystem(0), vbFirstJan1(1),vbFirstFourDays(2),
               vbFirstFullWeek(3) 

<i>    interval</i>   The date/Time interval to express in the result:

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
WScript<a href="echo.html">.Echo</a> dtm1
intMonthsinDate=<b>DatePart</b>("m", dtm1)
WScript<a href="echo.html">.Echo</a> intMonthsinDate</pre>
<p>  To produce a correct ISO weeknumber requires a function:<br>
</p>
<p><span class="code">Function ISOWeekNum(dtmDate) <br>
  &nbsp; ' Returns a WeekNumber from a date <br>
  &nbsp; Dim NearThurs <br>
  &nbsp; NearThurs = ((dtmDate+5) \ 7) * 7 - 2 <br>
  &nbsp; ISOWeekNum = ((NearThurs - DateSerial(Year(NearThurs), 1, 1)) \ 7) + 1 <br>
  End function<br>
</span><br>
  ' Example <br>
  <span class="code">wscript.echo "ISOWeekNumber: " &amp; ISOWeekNum(cdate("2017-12-25")) </span></p>
<p class="quote"><i>“Christmas, children, is not a date. It is a state of mind” ~ Mary Ellen Chase</i></p>
<p><b>Related:</b></p>
<p>  Date           - The current system date.<br>
<a href="day.html">Day </a>-      Return the day component of a date.<br>
<a href="dateadd.html">DateAdd</a> - Add a time interval to a Date.<br>
<a href="datediff.html">DateDiff</a> - Return the time interval between two dates.<br>
<a href="dateserial.html">DateSerial</a> - Return a Date from a numeric Year, Month and Day.<br>
<a href="month.html">Month</a> -     Return the month component of a date.<br>
<a href="year.html">Year</a> -      Return the year component of a date.<br>
<a href="http://support.microsoft.com/kb/200299">Q200299</a> - BUG: Format or DatePart Functions return wrong Week number for last Monday in year.<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
Equivalent  PowerShell cmdlet: <a href="../ps/get-date.html">Get-Date</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="datepart.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

