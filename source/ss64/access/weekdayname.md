---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>WeekdayName</h1>
<p>Returns  a string representing the day of the week.</p>
<pre>Syntax
      WeekdayName ( <i>number</i>, [<i>abbreviate</i>], [<i>firstdayofweek</i>] )

Key
   <i>date</i>            Any valid date expression.<br>
   <i>abbreviate</i>      Abbreviate the weekday name? TRUE /<u>FALSE</u>.

   <i><a href="acfirstweekofyear.html">firstdayofweek</a></i> 	A constant that specifies
                   the first day of the week, default=vbSunday.
</pre>
<p>The WeekdayName() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>. The vb constants can only be used in VBA. </p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDay as String <br>
</span><span class="code">strDay = weekdayname(2)<br>
'</span>will return Monday</p>
<p class="quote"><i>“Go girl, seek happy nights to happy days” ~ William Shakespeare</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date.<br>
<a href="monthname.html">MonthName</a> - Return a string representing the month.<br>
<a href="format.html">Format</a> - Format a Number/Date/Time.<br>
<a href="weekday.html">Weekday</a> - Return the weekday (1-7) from a date.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="weekdayname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

