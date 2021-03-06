---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Format</h1>
<p>Take an expression and return it as a formatted string (Number, Date or String).</p>
<pre>Syntax
      Format(<i>expression</i>[,<i>format</i>])

      Format(<i>expression</i>[,<i>format</i> [,<i>firstdayofweek</i> [,<i>firstweekofyear</i>]]])

Key
   <i>expression</i>      Any valid expression.<br>
   <i>format</i> 	        The format expression as described below.

   <i><a href="acfirstweekofyear.html">firstdayofweek</a></i> 	For date expressions, a constant that specifies
                   the first day of the week, default=vbSunday.

   <i><a href="acfirstweekofyear.html">firstweekofyear</a></i> For date expressions, a constant that specifies
                   the first week of the year.
                   default = the week of January 1st.</pre>
<p>The Format function can be used in VBA code or in <a href="syntax-functions.html">SQL queries</a>, the <span class="code">format</span> expressions use a very similar syntax to that used in the format property of Access Text fields.</p>
<p>A user-defined <span class="code">format</span> expression for <i>numbers</i> can have from one to four sections separated by semicolons.<br>
A user-defined <span class="code">format</span> expression for <i>Strings</i>  can have one or two sections separated by semicolons.<br>
A user-defined <span class="code">format</span> expression for <i>dates</i>  can have a single <span class="code">format</span> applied:</p>
<table width="90%" border="1" cellpadding="2" cellspacing="0">
<tbody><tr>
<td>&nbsp;</td>
<td>Section 1 </td>
<td>&nbsp;</td>
<td>Section 2 </td>
<td>&nbsp;</td>
<td>Section 3 </td>
<td>&nbsp;</td>
<td>Section 4 </td>
</tr>
<tr>
<td>Number</td>
<td><a href="acnumberformats.html">Number format</a> - Applies to Positive numbers.</td>
<td>;</td>
<td><a href="acnumberformats.html">Number format</a> - Applies to Negative numbers*</td>
<td>;</td>
<td><a href="acnumberformats.html">Number format</a> - Applies to Zeros*</td>
<td>;</td>
<td>Format for Null values or Text. </td>
</tr>
<tr>
<td>Date</td>
<td><a href="acdateformats.html">Date/Time format</a> </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>String</td>
<td><a href="acstringformats.html">Format for string data</a> </td>
<td>;</td>
<td>Null Values and zero-length strings ("")*</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody></table>
<p>* If sections 2 and 3 are not defined then Section 1 format will be applied.</p>
<p>The format codes for Numbers, Dates and Strings cannot be mixed in the same format() statement.</p>
<p>If the format() function is applied to an Access password field, it will reveal the password. </p>
<p><span class="code">Format()</span> will return a Variant, you can also use <span class="code">Format$()</span> to return a String. <br>
You should use <span class="code">Format()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p><b>Examples</b></p>
<p><span class="code">strDiscount = Format("0.15", "Percent")</span> will return '15%' </p>
<p><span class="code">intPrice = Format(12.45, "Currency")</span> will return '$12.45'</p>
<p><span class="code">intPrice = Format(64.5, "#,##0.00")</span> will return '64.50'</p>
<p><span class="code">dtmOrder = Format([order_time], "Long Time")</span> will return a system defined long time.</p>
<p><span class="code">strStart = Format(MyDate, "yyyy-mm-dd")</span> will return an <a href="http://en.wikipedia.org/wiki/ISO_8601#Calendar_dates">ISO 8601</a> date.</p>
<p><span class="code">strName = Format(MyName, "&gt;")</span> will return the text for 'MyName' in upper case.</p>
<p><span class="code">strName = Format(MyName, "&lt;;Required item missing")</span> will return the text for 'MyName' in lower case, if MyName is empty it will return the string "Required item missing" </p>
<p><span class="code">intPrice = Format(MyPrice, "+ 0.00;(0);nothing")</span> will return a positive price prefixed with a + with 2 decimal places, a negative price will be enclosed in parenthesis and rounded (no decimals) and lastly a price of Zero will return the string "nothing" </p>
<p><span class="code">SELECT Format(order_price, "Currency") FROM T_Orders; </span>Sql statement using the format function. </p>
<p class="quote"><i>“An essential aspect of creativity is not being afraid to fail” ~ Edwin Land</i></p>
<p><b>Related:</b></p>
<p><a href="date.html">Date</a> - Return the current date.<br>
<a href="dateadd.html">DateAdd</a> - Add a time interval to a date. <a href="datediff.html"><br>
DateDiff</a> - Return the time difference between two dates.<br>
<a href="datepart.html">DatePart</a> - Return a  specified part of a given date.<br>
<a href="monthname.html">MonthName</a> - Return a string representing the month.<br>
<a href="http://support.microsoft.com/kb/200299">Q200299</a> - BUG: Format or DatePart Functions return wrong Week number for last Monday in year.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

