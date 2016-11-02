---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>DateAdd</h1> 
<p>Add a time interval to a Date</p>
<pre>Syntax 
      DateAdd (<i>interval</i>,<i>number</i>,<i>date</i>)

Key
   <i>number</i>    The number of intervals to add

   <i>date</i>      The date

   <i>interval</i>  The date/Time interval to add:

                yyyy  Year
                 q    Quarter
                 m    Month
                 y    Day of year
                 d    Day
                 w    Weekday
                 h    Hour
                 n    Mi<b>n</b>ute
                 s    Second</pre>
<p>To subtract dates just specify <i>number</i> as a negative, i.e. <span class="code">"m", -6 </span>will subtract 6 months.</p>
<p>Example: add 7 days </p>
<pre>dtmStart="18-Feb-10"
WScript<a href="echo.html">.Echo</a> "Start Date" &amp; dtmStart
dtmFinish=<b>DateAdd</b>("d",7,dtmStart)
WScript<a href="echo.html">.Echo</a> "End Date" &amp; dtmFinish</pre>
<p class="quote"><i>“We waste time looking for the perfect lover, instead of creating the perfect love” ~ Tom Robbins</i></p>
<p><b>Related:</b></p>
<p>  Date           - The current system date
<br>
<a href="datediff.html">DateDiff</a> - Return the time interval between two dates<br>
<a href="datepart.html">DatePart</a> - Return a unit of time from a date<br>
<a href="dateserial.html">DateSerial</a> - Return a Date from a numeric Year, Month and Day<br>
<a href="weekday.html">Weekday</a> - Return the day of the week<br>
<a href="http://support.microsoft.com/kb/q218964/">Q218964</a> - VBScript Date and Time formats change with logged on user<br>
Equivalent in Powershell - <a href="../ps/syntax-variables.html">Date.AddDays(-7)
</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dateadd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

