---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>printf</h1> 
<p>Format and print data.<br>
  Write the formatted <var>arguments</var> to the standard output under the control 
of the <var>format</var>. </p>
<pre>Syntax
      printf <i>format</i> [<i>arguments</i> ...]
</pre>
<p>The
<i>format</i> is a character string which contains three types of objects:  </p>
<ul>
<li>Plain  characters,  which are  simply  copied  to  standard  output.</li>
<li>Character <i>escape</i> sequences, which are converted and copied to the standard output.</li>
<li>Format specifications, each of which causes printing of the next  successive argument. </li>
</ul>
<p>The arguments after the first are treated as strings if the corresponding format is either <span class="code">c, b</span> or <span class="code">s</span> otherwise it is evaluated as a C constant, with the following extensions:</p>
<blockquote>
<p> • A leading plus or minus sign is allowed.<br>
• If the leading character is a single or double quote, the value is the ASCII code of the next
character.</p>
</blockquote>
<p> The <i>format</i> string is reused as often as necessary to satisfy the arguments. Any extra format  specifications are evaluated with zero or the null string.</p>
<p> Character escape sequences are in backslash notation as defined in the ANSI X3.159-1989 (`ANSI C89'),
with extensions. The characters and their meanings are as follows:</p>
<pre>   \a      Write a bell character.
   \b      Write a backspace character.
   \c      Ignore remaining characters in this string.
   \f      Write a form-feed character.
   \n      Write a new-line character.
   \r      Write a carriage return character.
   \t      Write a tab&gt; character.
   \v      Write a vertical tab character.
   \'      Write a single quote character.
   \\      Write a backslash character.
   \<i>num</i>
   \0<i>num</i>   Write an 8-bit character whose ASCII value is the 1-, 2-, or 3-digit octal number <i>num</i>.
</pre>
<p>Each format specification is introduced by the percent character (`%').  The remainder of the format
specification includes, in the following order:</p>
<pre>     Zero or more of the following flags:

             #       A `#' character specifying that the value should be printed in an `alternate form'.
                     For c, d, and s, formats, this option has no effect.  For the o formats the precision
                     of the number is increased to force the first character of the output string to a zero.
                     For the x (X) format, a non-zero result has the string 0x (0X) prepended to it.  For e,
                     E, f, g, and G, formats, the result will always contain a decimal point, even if no
                     digits follow the point (normally, a decimal point only appears in the results of those
                     formats if a digit follows the decimal point).  For g and G formats, trailing zeros are
                     not removed from the result as they would otherwise be;

             -       A minus sign specifies left adjustment of the output in the indicated field;

             +       Always place a sign before the number when using signed formats.

             ` '     A space specifying that a blank should be left before a positive number for a signed
                     format.  A `+' overrides a space if both are used;

             0       Use zero-padding rather than blank-padding.  A - overrides a 0 if both are used.

     Field Width:
             An optional digit string specifying a field width; if the output string has fewer characters
             than the field width it will be blank-padded on the left (or right, if the left-adjustment
             indicator has been given) to make up the field width (note that a leading zero is a flag, but
             an embedded zero is part of a field width);

     Precision:
             An optional period, `.', followed by an optional digit string giving a precision which specifies
             fies the number of digits to appear after the decimal point, for e and f formats, or the maximum
             number of characters to be printed from a string; if the digit string is missing, the precision
             is treated as zero;

     Format:
             A character which indicates the type of <i>format</i> to use (one of <b>diouxXfFeEgGaAcsb</b>).  The uppercase
             formats differ from their lowercase counterparts only in that the output of the former is
             entirely in uppercase.  The floating-point format specifiers (fFeEgGaA) can  be prefixed by an <b>L</b>
             to request that additional precision be used, if available.

     A field width or precision can  be `*' instead of a digit string.  In this case an argument supplies the
     field width or precision.

     The <i>format</i> characters and their meanings are:

     diouXx      The argument is printed as a signed decimal (d or i), unsigned octal, unsigned decimal, or
                 unsigned hexadecimal (X or x), respectively.

     fF          The argument is printed in the style `[-]ddd.ddd' where the number of d's after the decimal
                 point is equal to the precision specification for the argument.  If the precision is missing,
                 , 6 digits are given; if the precision is explicitly 0, no digits and no decimal point
                 are printed.  The values infinity and NaN are printed as `inf' and `nan', respectively.

     eE          The argument is printed in the style e `[-d.ddd+-dd]' where there is one digit before the
                 decimal point and the number after is equal to the precision specification for the argument
                 when the precision is missing, 6 digits are produced.  The values infinity and NaN
                 are printed as `inf' and `nan', respectively.

     gG          The argument is printed in style f (F) or in style e (E) whichever gives full precision in
                 minimum space.

     aA          The argument is printed in style `[-h.hhh+-pd]' where there is one digit before the hexadecimal
                 point and the number after is equal to the precision specification for the argument;
                 when the precision is missing, enough digits are produced to convey the argument's
                 exact double-precision floating-point representation.  The values infinity and NaN are
                 printed as `inf' and `nan', respectively.

     c           The first character of argument is printed.

     s           Characters from the string argument are printed until the end is reached or until the number
                 of characters indicated by the precision specification is reached; however if the precision
                 is 0 or missing, all characters in the string are printed.

     b           As for s, but interpret character escapes in backslash notation in the string argument.

     %           Print a `%'; no argument is used.

     The decimal point character is defined in the program's locale (category LC_NUMERIC).
</pre>
<p><b>Examples</b></p>
<pre><span class="body">Print the decimal number 5 followed by a newline (\n)</span>
$ printf "%d\n" 5
5

<span class="body">Print as float (default 6 decimal places)</span>
$ printf "%f\n" 5
5.000000

<span class="body">Print text followed by variable $USER</span>
$ printf "Hello, $USER.\n\n"                 
<span class="body">
Display variables</span>
$ distance=15
$ printf "Distance is %5d Miles\n" $distance   
Distance is    15 Miles

<span class="body">Echo a list of numbers from 1 to 100, adding 3 digits of Zero padding so they appear as 001, 002, 003 etc:</span>
$ for ((num=1;num&lt;=100;num+=1)); do echo `printf "%03d" $num`; done

<span class="body">Use \n anywhere to start a new line:</span>
$ printf "Two separate\nlines\n"
Two separate
lines

<span class="body">Print decimal numbers interspersed with text</span>
$ printf "There are %d orders valued at over %d euros.\n" 64 1500
There are 64 orders valued at over 1500 euros.

<span class="body">Print text interspersed with command results</span>
$ printf "This is `uname -s` running on a `uname -m` processor.\n\n"

<span class="body">Convert a hex number to decimal</span>
$ printf "%d\n " 0xF
15

<span class="body">Convert a decimal number to Hex</span>
$ printf "0x%X\n " 15
0xF

<span class="body">Convert a decimal number to Octal</span>
$ printf "0%o\n " 8
010

<span class="body">Convert an Octal  number to </span><span class="body">decimal</span>
$ printf "%d\n " 010
8</pre>
<p>In no case does a non-existent or small field width cause truncation of a field; padding takes place only if the specified field width exceeds the actual width.</p>
<p>Since the floating point numbers are translated from ASCII to floating- point and then back again, floating-point precision can  be lost. (By default, the number is translated to an IEEE-754 double-pre-cision double-precision<br>
cision value before being printed. The <span class="code">L</span> modifier might produce additional precision, depending on the
hardware platform.)</p>
<p> ANSI hexadecimal character constants were deliberately not provided.</p>
<p> The escape sequence <span class="code">\000</span> is the string terminator. When present in the argument for the b format, the argument will be truncated at the<span class="code"> \000</span> character.</p>
<p> Multibyte characters are not recognized in format strings (this is only a problem if `%' can appear inside a multibyte character).</p>
<p>Exits 0 on success, 1 on failure.</p>
<p> printf is a bash builtin command.</p>
<p><span class="quote"><i>“Fortune favours the bold, Fortune favours the brave”</i> ~ Latin proverb</span></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/printf.1.html">printf man page</a> - Apple.com<br>
<a href="echo.html">echo</a> - Display message on screen<br>
<a href="lpr.html">lpr</a> - Print files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="printf.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
