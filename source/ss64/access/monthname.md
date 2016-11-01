---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>MonthName</h1>
<p>  Return  a string representing the month.</p>
<pre>Syntax
      Month(<i>month_number</i>, [<i>abbreviate</i>] ))

Key
   <i>month_number</i>  A value from 1 to 12, representing the month.


   <i>abbreviate</i>    A boolean value, either TRUE or FALSE.
                 If set to TRUE, the month name will be abbreviated.
                 If set to FALSE, the month name is returned in full.</pre>
<p>The strings returned by MonthName() will vary according to your Windows regional settings (language.)</p>
<p>The MonthName() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p> <b>Examples</b></p>
<p class="code">Dim strDemo as String <br>
strDemo = Monthname(12)<br>
strDemo = MonthName(month(date))</p>
<p class="quote"><i>“Thirty days hath September,  April, June, and November;  All the rest have thirty-one,  Excepting February alone,  And that has twenty-eight days clear;  And twenty-nine in each leap-year.”</i></p>
<p><b>Related:</b></p>
<p><a href="day.html">Day</a> - Return the day of the month.<br>
<a href="datepart.html">DatePart</a> - Return part of a given date.<br>
<a href="year.html">Year</a> - Return the year for a given date.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="monthname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

