---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DateValue</h1>
<p>  Convert a string to a date.</p>
<pre>Syntax
      DateValue (<i>expression</i>)</pre>
<p>The expression must be a valid date. The Date data type accepts either the date or the time, or both. Possible values range from January 1, 100 to December 31, 9999.</p>
<p>The interpretation of two-digit years will vary according to the versions of Windows. To be sure the function returns the proper value, use a four-digit year.</p>
<p>The DateValue() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Example</b></p>
<p class="code">Dim dtmRetirement as Date </p>
<p class="code">dtmRetirement = DateValue("Aug 6, 2083")<br>
dtmRetirement = DateValue("12/30/2012")<br>
dtmRetirement = DateValue("December 30, 2012")</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="cdate.html">CDate</a> - Convert an expression to a Date<br>
<a href="dateserial.html">DateSerial</a> - Return a date given a year, month, and day.<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="datevalue.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

