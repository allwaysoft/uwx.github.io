---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DatePart</h1>
<p>  Returns a  specified part of a given date.</p>
<pre>Syntax
      DatePart(interval, <i>date</i> [,<i>firstdayofweek</i>[, <i>firstweekofyear</i>]])

Key
   <i>interval</i>  The interval of time to return.

   <i>date      </i>The dates to evaluate (Date).

   <i>firstdayofweek</i>  A constant (0-7) that specifies the first day of the week.
                   default=vbSunday (1).

   <i>firstweekofyear</i> A constant (0-3) that specifies the first week of the year.
                   default = the week in which January 1 occurs (1).
</pre>
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
<p>FirstWeekConstants:<br>
<span class="code">0 vbUseSystem</span> - Use the NLS API setting.<br>
<span class="code">1 <u>vbFirstJan1</u></span> - Start with week in which January 1 occurs (default).<br>
<span class="code">2 vbFirstFourDays</span> - Start with the first week that has at least four days in the new year.<br>
<span class="code">3 vbFirstFullWeek</span> - Start with first full week of the year.</p>
<p>The <i>firstdayofweek</i> argument will affect calculations that use week intervals.</p>
<p>The DatePart() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="datepart.png" width="439" height="104" alt="DatePart"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">DatePart("d", Now)</p>
<p><span class="code">DatePart("w", "Feb 12")</span></p>
<p>To produce a correct <a href="../dates.html">ISO 8601</a> weeknumber requires a function, if this is saved in a module it can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>:<br>
</p>
<p><span class="code">Function ISOWeekNum(dtmDate) <br>
  &nbsp; ' Returns a WeekNumber from a date <br>
  &nbsp; Dim NearThurs <br>
  &nbsp; NearThurs = ((dtmDate+5) \ 7) * 7 - 2 <br>
  &nbsp; ISOWeekNum = ((NearThurs - DateSerial(Year(NearThurs), 1, 1)) \ 7) + 1 <br>
  End function<br>
  </span><br>
<span class="code">wscript.echo "ISOWeekNumber: " &amp; ISOWeekNum(cdate("2017-12-25")) </span></p>
<p class="quote"><i>“An essential aspect of creativity is not being afraid to fail” ~ Edwin Land</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date.<br>
<a href="dateadd.html">DateAdd</a> - Add a time interval to a date. <a href="datediff.html"><br>
DateDiff</a> - Return the time difference between two dates.<br>
<a href="http://support.microsoft.com/kb/200299">Q200299</a> - BUG: Format or DatePart Functions return wrong Week number for last Monday in year.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="datepart.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
