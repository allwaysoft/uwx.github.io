---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WeekdayName</h1> 
<p>Return the named  day of the week.</p>
<pre>Syntax 
      WeekdayName(<i>DayNum</i>[,<i>Abbreviate </i>[,<i>FirstDayofWeek</i>]])

Key
   <i>DayNum</i>           A date expression

   <i>Abbreviate</i>       Abbreviate the day: Monday&gt;Mon... (TRUE/FALSE)

   <i>FirstDayofWeek</i>   An integer for the first day of the week

<i>DayNum</i> is one of the following <a href="syntax-constants.html">constant</a> values:

vbSunday    1
vbMonday    2
vbTuesday   3
vbWednesday 4
vbThursday  5
vbFriday    6
vbSaturday  7</pre>
<p>Example</p>
<pre>result = WeekdayName(6)
WScript<a href="echo.html">.Echo</a> result
&gt; Friday</pre>
<p class="quote"><i>“Name the day of marriage, and God will give thee joy” - Shakespeare</i></p>
<p><b>Related:</b></p>
<p><a href="dateadd.html">DateAdd</a> - Add a time interval to a Date<a href="datediff.html"><br>
DateDiff</a> - Return the time interval between two dates <a href="datepart.html"><br>
DatePart</a> - Return a unit of time from a date<br>
<a href="weekday.html">Weekday</a> - Return the day of the week<br>
Equivalent in PowerShell: <span class="code">$result = (get-date "12/31/2010").dayofweek</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="weekdayname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

