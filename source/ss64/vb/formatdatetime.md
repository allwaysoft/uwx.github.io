---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>FormatDateTime</h1> 
<p>Format a Date/Time value.</p>
<pre>Syntax 
      FormatDateTime(<i>date</i> [,<i>format</i>] )

Key
   <i>date</i>       A date or a string that can be interpreted as a date.
              The values accepted are dependent on the regional settings
              of the current user.
 
<i>   format</i>     The date format: <u>vbGeneralDate</u> (0), vbLongDate (1), vbShortDate (2), vbLongTime (3), vbShortTime (4).
</pre>
<p>Example</p>
<pre>WScript<a href="echo.html">.Echo</a> FormatDateTime("2012/25/10",vbLongDate)
</pre>
<p class="quote"><i>“We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams” ~ Jeremy Irons</i></p>
<p><b>Related:</b></p>
<p><a href="formatcurrency.html">FormatCurrency</a> - Format a number with a currency symbol<br> 
<a href="formatnumber.html">FormatNumber</a> - Format a number<br> 
<a href="formatpercent.html">FormatPercent</a> - Format a number with a % symbol<br>
<a href="datepart.html">DatePart</a> - Return part of a given date<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
Equivalent PowerShell cmdlet: <span class="code">$myvar = (<a href="../ps/get-date.html">get-date</a>).tolongDatestring()</span> Also: .toshortDatestring .tolongTimestring .toshortTimestring</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="formatdatetime.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

