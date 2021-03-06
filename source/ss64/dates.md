---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_home.lbi" --><!-- #EndLibraryItem --><h1>Standard date and time notation</h1>
<p>The international standard date notation is</p>
<pre>  YYYY-MM-DD</pre>
<pre>Key
   YYYY = the year between 0000 and 9999. 
   MM   = the month between 01 (January) and 12 (December) 
   DD   = the day of the month between 01 and 31.</pre>
<p>Values must be padded with leading zeros. For example, the 31st day of January in the year 2012 is written as <span class="code">2012-01-31</span></p>
<h2>Who should use this and why?</h2>
<p>All authors targeting an international audience; particularly on the internet. Ambiguous culture-specific date formats can easily be misinterpreted: formats like <span class="code">2/4/12</span> and <span class="code">4/2/12</span> are  very easily confused. Where the language/culture of the audience is known, then Days or Months written out as text characters are more readable, this page deals only with numeric date formats.</p>
<h2>Advantages </h2>
<ul>
  <li>Because the larger units are written in front of the smaller ones  it is easy to sort a list of dates correctly: <br>
    <span class="code">2012-01-29<br>
2012-01-30<br>
2012-01-31</span></li>
  <li> The accuracy of a date (or date + time in 24 hour format) can be changed to suit your needs, you can specify with an accuracy of seconds, minutes, days or just months: <br>
    <span class="code">2012-01-31 14:56:30<br>
2012-01-31 14:56<br>
2012-01-31<br>
2012-01</span></li>
  <li>The format cannot be confused with other national date notations, the handful of countries where writing a date <b>starting</b> with the year is standard, all already use <span class="code">year-month-day</span>. In countries where writing a date <b>ending</b> with the year is standard, there are at least 6 different notations in use.</li>
  <li>A 4-digit year ensures that centuries don't get confused: 2020 vs 1920  </li>
  <li>It's portable and future ready,  if you don't have a multi-cultural audience right now, you might acquire one in the future, it's good to be prepared. </li>
</ul>
<h2>International Standard ISO 8601</h2>
<p>The standard date notation described above is compliant with ISO 8601. Apart from the recommended primary standard notation <span class="code">YYYY-MM-DD</span>, ISO 8601 also specifies a number of alternative formats for use in applications with special requirements. </p>
<ul>
  <li>Date between 0000 and 1582 are assumed to be in the <a href="http://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar">Proleptic Gregorian calendar</a> rather than the Julian calendar commonly in use at the time.</li>
  <li> Separators can sometimes be omitted if compactness is more important than human readability: YYYYMMDD (but not YYYYMM to avoid confusion with YYMMDD.) e.g. <span class="code">20120131</span> often printed on a product to indicate the date of manufacture. </li>
  <li>Year + day e.g. <span class="code">2012-062</span> or <span class="code">2012062</span></li>
  <li>Week numbers, week + day e.g. <span class="code">2015W014</span></li>
</ul>
<p>A week starts with Monday (day 1) and ends with Sunday (day 7). </p>
<p>Week 01 of a year is defined as the first week in the year that contains Thursday. </p>
<pre>e.g. Dec-Jan 2015/6: 
  <b>M  T  W  T  F  S  S</b>
 28 29 30 31  1  2  3 = WEEK 53
  4  5  6  7  8  9 10 = WEEK 1</pre>
<p>The week number can be described by counting Thursdays: week 12 contains the 12th Thursday of the year.</p>
<h2> Time of day</h2>
<p>The international standard notation for the time of day is:</p>
<pre>hh:mm:ss

key
   hh = Number of complete hours since midnight (00-24)
   mm = Number of complete minutes since the start of the hour (00-59) 
   ss = Number of complete seconds since the start of the minute (00-60).</pre>
<p> If the hour value is 24, then the minute and second values must be zero. </p>
<p> The value 60 for <span class="code">ss</span> might sometimes be needed during an inserted leap second. In practice most clocks resynchronize some time after a leap second has happened, to avoid any disruption that an out-of-range timestamp might otherwise cause.</p>
<p> The two notations <span class="code">00:00</span> and <span class="code">24:00</span> are available to distinguish between midnight at the start of the day and midnight at the end of the day. Where a single representation is required, <span class="code">00:00</span> is the preferred notation. Digital clocks display 00:00 and not 24:00. </p>
<p>As with the date notation, the precision can be reduced and/or the separating colons can be omitted, this is often required when creating date stamped files and folders as many file systems do not support the colon character in filenames: <br>
<span class="code">08:59:59 <br>
08:59<br>
085959 <br>
0859</span></p>
<p>It is also possible to add fractions of a second after a decimal dot or comma: <br>
<span class="code">14:30:59.5564 <br>
143059.5564 </span></p>
<p>If a date and a time are displayed on the same line, always write the date in front of the time. If a date and a time value are stored together in a single data field, then ISO 8601 suggests  they  be separated by a  capital letter T, as in <span class="code">20120131T143059</span>. </p>
<p>Importantly the standard specifies the use of 24 hour clock system. </p>
<h2>Advantages of 24 hour time</h2>
<ul>
  <li>More compact 23:00 vs 11:00 pm</li>
  <li>Easy to sort </li>
  <li>Easy to calculate time differences 23:00-10:00 vs 11:00 pm-10:00 am </li>
  <li>Avoids confusion around the overflow from 12:59 a.m. to 1:00 a.m.</li>
  <li>Widely used in Europe and in computing, navigation &amp; military applications for a long time. </li>
</ul>
<h2>Time Zone</h2>
<p>By default a date and time as written above is assumed to be in some local time zone. To indicate that a time is measured in Universal Time (UTC), append a capital letter Z: <br>
  <span class="code">2012-01-31T08:59Z <br>
08:59:59Z <br>
0859Z </span></p>
<p>The Z stands for the zero meridian, which goes through Greenwich in London. Universal Time UTC was called Greenwich Mean Time (GMT) before 1972.</p>
<p> For other time zones, the strings below can be added to indicate the offset. <br>
  <span class="code">+hh:mm, 
+hhmm, or +hh <br>
-hh:mm, 
-hhmm, or -hh </span></p>
<p>Positive values are <span class="code">hh</span> hours and <span class="code">mm</span> minutes ahead of UTC. (East of meridian) <br>
Negative values are behind UTC (time zones west of the zero meridian) </p>
<p>The following all indicate the same point in time in UTC, CET and EST: <br>
  <span class="code">12:00Z <br>
13:00+01:00 <br>
0700-0500</span></p>
<p> When saving date information in a database it is a good idea to save  at least two of: Local Time, UTC and Offset. This can simplify any future support for the ever changing world of 
time zones and daylight saving time changes.</p>
<p><span class="quote"><i>“He was always late on principle, his principle being that punctuality is the thief of time”  ~ Oscar Wilde</i></span></p>
<p><b>Related:</b></p>
<p><a href="bash/date.html">bash date</a> command<br>
  <a href="nt/date.html">Windows date</a> command &amp; <a href="nt/syntax-stampme.html">StampMe</a> script<br>
PowerShell <a href="ps/get-date.html">Get-Date</a> &amp; <a href="ps/syntax-stampme.html">StampMe</a> script &amp;  <a href="ps/syntax-dateformats.html">date formats</a><br>
<a href="http://www.merlyn.demon.co.uk/datelinx.htm">Dr J R Stockton’s website</a> is full of detailed and accurate advice about date calculations.<br>
<a href="http://en.wikipedia.org/wiki/ISO_8601">Wikipedia 
ISO 8601</a> &amp; <a href="http://en.wikipedia.org/wiki/ISO_8601_usage">usage</a> across  countries.<br>
<a href="http://www.iso.org">www.iso.org</a> - Source for all ISO standards.</p><!-- #BeginLibraryItem "/Library/foot_root.lbi" --><p>
<hr>
<div id="bl" class="footer"><a href="dates.html#"><img src="images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->
