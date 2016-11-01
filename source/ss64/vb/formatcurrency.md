---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>FormatCurrency</h1> 
<p>Format a number with a currency symbol.</p>
<pre>Syntax 
      FormatCurrency(<i>number</i> [,<i>DecimalPlaces</i> [,<i>IncludeLeadingZero</i>
          [,<i>UseParenthesis</i> [, <i>GroupDigits</i>]]]] )

Key
   <i>number</i>              The number to format.
 
<i>   DecimalPlaces</i>       Number of digits to display after the decimal point.

<i>   IncludeLeadingZero</i>  Include a leading zero for numbers &lt;1 and &gt; -1

<i>   UseParenthesis</i>      Show negative numbers in Parentheis (500) = -500

<i>   GroupDigits</i>         Group large numbers with commas (or the regional delimiter)</pre>
<p>Example</p>
<pre>Set intDemo = 150000.56
WScript<a href="echo.html">.Echo</a> FormatCurrency(intDemo,1)
</pre>
<p class="quote"><i>“The best way to destroy the capitalist system is to debauch the currency. By a continuing process of inflation, governments can confiscate, secretly and unobserved, an important part of the wealth of their citizens” ~ 
John Maynard Keynes</i></p>
<p><b>Related:</b></p>
<p><a href="formatnumber.html">FormatNumber</a> - Format a number<br>
<a href="formatpercent.html">FormatPercent</a> - Format a number with a % symbol<br>
<a href="formatdatetime.html">FormatDateTime</a> - Format a Date/Time value<br>
Equivalent Powershell command: <span class="code">$myvar = "{0:C}" <a href="../ps/syntax-f-operator.html">-f</a> 1500</span> will display $1500 </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="formatcurrency.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

