---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Weekday</h1>
<p>Returns a number representing the day of the week (a number from 1 to 7) given a date value.</p>
<pre>Syntax
      Weekday ( <i>date</i>, [<i>firstdayofweek</i>] )

Key
   <i>date</i>            Any valid date expression.<br>
   <i><a href="acfirstweekofyear.html">firstdayofweek</a></i> 	A constant that specifies
                   the first day of the week, default=vbSunday.
</pre>
<p>The weekday() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>. The vb constants can only be used in VBA. </p>
<p>To create day numbers compatible with <a href="../dates.html">ISO 8601</a> standard dates, set the<i>firstdayofweek</i> to Monday(2 or <span class="code">vbMonday</span>)</p>
<p><b>Examples</b></p>
<p><span class="code">Dim intDay as Integer<br>
</span><span class="code">intday = weekday("30/04/2012",2)<br>
Wscript.Echo intDay<br>
'</span>will return 1 (Monday) </p>
<p class="quote"><i>“A committee is a thing which takes a week to do what one good man can do in an hour” ~ Elbert Hubbard</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date. <br>
<a href="monthname.html">MonthName</a> - Return a string representing the month.<br>
<a href="format.html">Format</a> - Format a Number/Date/Time.<br>
<a href="weekdayname.html">WeekdayName</a> - Return the day of the week.<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="weekday.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

