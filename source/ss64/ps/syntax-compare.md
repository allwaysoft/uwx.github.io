---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> Comparison Operators</h1> 
<p>The following operators are all Case-Insensitive by default:</p>
<pre> <a href="eq.html">-eq</a>             Equal
 <a href="ne.html">-ne</a>             Not equal
 -ge             Greater than or equal
 -gt             Greater than
 -lt             Less than
 -le             Less than or equal
 -like           Wildcard comparison
 -notlike        Wildcard comparison
 -match          <a href="syntax-regex.html">Regular expression</a> comparison
 -notmatch       <a href="syntax-regex.html">Regular expression</a> comparison
 -replace        <a href="replace.html">Replace</a> operator
 <a href="contains.html">-contains</a>       Containment operator
 -notcontains    Containment operator
 -shl            Shift bits left (PowerShell 3.0)
 -shr            Shift bits right – preserves sign for signed values.(PowerShell 3.0)
 -in             Like –contains, but with the operands reversed.(PowerShell 3.0)
 -notin          Like –notcontains, but with the operands reversed.(PowerShell 3.0)</pre>
<p>To perform a Case-Sensitive comparison just prefix any of the above with "c"<br>
for example <span class="code">-ceq</span> for case-sensitive Equals or <span class="code">-creplace</span> for case-sensitive replace.</p>
<p>Similarly prefixing with "i" will explicitly make the operator case insensitive.</p>
<pre>Types
 -is     Is of a <a href="syntax-datatypes.html">type</a>
 -isnot  Is not of a type
 -as     As a type, no error if conversion fails

Logical operators
 -and    Logical And
 -or     Logical Or
 -not    logical not
  !      logical not

Bitwise operators 
 -band   Bitwise and
 -bor    Bitwise or
 
<a href="syntax-f-operator.html">Format Operator</a>
 "<i>format_string</i>" <b>-f</b> <i>Object1</i>, <i>Object2</i>,...
</pre>
<p>The format_string is in the form: <span class="code">{0,-5} {1,-20} {2,-10}</span><br>
In each set of braces, the first number, before the comma
refers to the column.<br>
The second number, after the comma determines the padding (how many characters) <br>
If the second number is negative, it not only pads the element, but aligns it vertically. Optionally the second number can be used for formatting :hh :mm :C :p </p>
<p><b>Examples </b></p>
<p><span class="code">$demo = $null<br>
if <b>(</b>-Not ($demo)<b>)</b> { write "Zero, null or Empty"}<br>
if <b>(</b>!($demo)<b>)</b> { write "Zero, null or Empty"}</span></p>
<p><span class="code">$myVar -is "String"<br>
$myVar -eq 123 <br>
$myVar -ceq $myVar2 <br>
"abcdef" -like "abc*"<br>
"abcdef" -replace "dEf","xyz"<br>
$myVar1 -is "String" -and $myVar2 -is "Int"<br>
"{2:N}" -f 24.4567<br>
</span><span class="code">(1 -eq 1) -and -not (2 -gt 2) <br>
<br>
$mycmd = ps | select id,ProcessName<br>
foreach ($proc in $mycmd) <b>{</b>"{0,-8}{1,-20}" <b><a href="syntax-f-operator.html">-f</a></b> $proc.id, $proc.ProcessName<b>}</b></span></p>
<p class="quote"><i>“The 50-50-90 rule: Anytime you have a 50-50 chance of getting something right, there's a 90% probability you'll get it wrong”  ~ Andy Rooney</i></p>
<p><b>Related:</b></p>
<p><a href="if.html">if</a> - Conditionally perform a command<br>
<a href="syntax-variables.html">Assignment Operators</a> ( $variable = X, $variable += Y ) <br>
<a href="syntax-regex.html">PowerShell Regular Expressions</a><br>
<a href="format-table.html">Format-Table</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

