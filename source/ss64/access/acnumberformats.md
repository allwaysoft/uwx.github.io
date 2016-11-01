---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Number Formats for the <a href="format.html">format</a> function</h1>
<table>
<tbody><tr><td><p>Character</p></td><td><p>Description</p></td></tr>
<tr><td><p>None</p></td><td><p>Display the number with no formatting.</p></td></tr>
<tr><td><p>&nbsp;<strong>0</strong></p></td><td><p>Digit placeholder. Display a digit or a zero. If the expression has a digit in the position where the 0 appears in the format string, display it; otherwise, display a zero in that position.<br>
Leading / trailing zeros for these digits are displayed.</p>
</td></tr>
<tr><td><p>&nbsp;<strong>#</strong></p></td><td><p>Digit placeholder. Display a digit or nothing. If the expression has a digit in the position where the # appears in the format string, display it; otherwise, display nothing in that position. <br>
Leading / trailing zeros for these digits are suppressed.</p></td></tr>
<tr><td><p>&nbsp;<strong>.</strong></p></td><td><p>Decimal placeholder. In some locales, a comma is used as the decimal separator. </p></td></tr>
<tr><td><p>&nbsp;<strong>%</strong></p></td><td><p>Percentage placeholder. The expression is multiplied by 100.</p></td></tr>
<tr><td><p>&nbsp;<strong>,</strong></p></td><td><p>Thousand separator. In some locales, a period is used as a thousand separator. <br> 
Two adjacent thousand separators or a thousand separator immediately to the left of the decimal separator (whether or not a decimal is specified) means "scale the number by dividing it by 1000, rounding as needed." For example, you can use the format string "##0,," to represent 100 million as 100. Numbers smaller than 1 million are displayed as 0. Two adjacent thousand separators in any position other than immediately to the left of the decimal separator are treated simply as specifying the use of a thousand separator.</p></td></tr>
<tr><td><p>&nbsp;<strong>:</strong></p></td><td><p>Time separator. In some locales, other characters might be used to represent the time separator. </p></td></tr>
<tr><td><p>&nbsp;<strong>/</strong></p></td><td><p>Date separator. In some locales, other characters might be used to represent the date separator. </p></td></tr>
<tr><td><p>(E- E+ e- e+)</p></td><td><p>Scientific format. If the format expression contains at least one digit placeholder (<strong>0</strong> or <strong>#</strong>) to the right of E-, E+, e-, or e+, the number is displayed in scientific format and E or e is inserted between the number and its exponent. </p></td></tr><tr><td><p><strong>- + $</strong> ( )</p></td><td><p>Display a literal character. To display a character other than one of those listed, precede it with a backslash (\) or enclose it in double quotation marks (" ").</p></td></tr><tr><td><p>&nbsp;<strong>\</strong></p></td><td><p>Display the next character in the format string. To display a character that has special meaning as a literal character, precede it with a backslash (\). The backslash itself isn't displayed. Using a backslash is the same as enclosing the next character in double quotation marks. To display a backslash, use two backslashes (\\). </p><p>Examples of characters that can't be displayed as literal characters are the date-formatting and time-formatting characters (a, c, d, h, m, n, p, q, s, t, w, y, / and :), the numeric-formatting characters (#, 0, %, E, e, comma, and period), and the string-formatting characters (@, &amp;, &lt;, &gt;, and !).</p></td></tr>
<tr><td><p>&nbsp;"ABC"</p></td><td><p>Display the string inside the double quotation marks (" "). To include a string in <strong><em>format</em></strong> using VBA code, use <strong>Chr(</strong>34<strong>)</strong> to enclose the text in quotes (34 is the <a href="../unicode.html">character code</a> for a quotation mark).</p></td></tr>
</tbody></table>
<p class="quote"><i>“I often say that when you can measure what you are speaking about, and express it in numbers, you know something about it; but when you cannot express it in numbers, your knowledge is of a meagre and unsatisfactory kind” ~ William Thomson (Lecture on Electrical Units of Measurement)</i></p>
<p><b>Related:</b></p>
<p><a href="acdateformats.html">Date Formats</a> <br>
<a href="format.html">Format function</a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="acnumberformats.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

