---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DateSerial</h1>
<p>  Returns a date given a year, month, and day.</p>
<pre>Syntax
      DateSerial(<i>year, month, day</i>)

Key
   <i>year</i>   Integer. Number between 100 and 9999, inclusive, or a numeric expression.<br>   <i>month</i>  Integer. Any numeric expression.<br>   <i>day</i>    Integer. Any numeric expression.</pre>
<p>The interpretation of two-digit years will vary according to the versions of Windows. To be sure the function returns the proper value, use a four-digit year.</p>
<p>The DateSerial() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="dateserial.png" width="344" height="104" alt="DateSerial"></p>
</blockquote>
<p>In VBA:</p>
<p class="code"> Dim dtmArrival As Date<br>
dtmArrival = DateSerial (2012, 12, 31)</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date.<br>
<a href="dateadd.html">DateAdd</a> - Add a time interval to a date. <a href="datediff.html"><br>
DateDiff</a> - Return the time difference between two dates.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="dateserial.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

