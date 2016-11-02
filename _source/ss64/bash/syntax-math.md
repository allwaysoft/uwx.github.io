---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Arithmetic expressions</h1>
<p>The shell allows arithmetic expressions to be evaluated, as one of the shell 
  expansions or by the <a href="let.html"><code>let</code></a> builtin. 
</p>
<p>Evaluation is done in long integers with no check for overflow, though division 
  by 0 is trapped and flagged as an error. The operators and their precedence 
  and associativity are the same as in the C language. <br>
  <br>
  The following list of operators is grouped into levels of equal-precedence operators. 
  The levels are listed in order of decreasing precedence. </p>
<dl compact=""> 
  <dt><code><var>id</var>++ <var>id</var>--</code> 
  </dt><dd>variable post-increment and post-decrement 
  </dd><dt><code>++<var>id</var> --<var>id</var></code> 
  </dt><dd>variable pre-increment and pre-decrement 
  </dd><dt><code>- +</code> 
  </dt><dd>unary minus and plus 
  </dd><dt><code>! ~</code> 
  </dt><dd>logical and bitwise negation 
  </dd><dt><code>**</code> 
  </dt><dd>exponentiation 
  </dd><dt><code>* / %</code> 
  </dt><dd>multiplication, division, remainder 
  </dd><dt><code>+ -</code> 
  </dt><dd>addition, subtraction 
  </dd><dt><code>&lt;&lt; &gt;&gt;</code> 
  </dt><dd>left and right bitwise shifts 
  </dd><dt><code>&lt;= &gt;= &lt; &gt;</code> 
  </dt><dd>comparison 
  </dd><dt><code>== !=</code> 
  </dt><dd>equality and inequality 
  </dd><dt><code>&amp;</code> 
  </dt><dd>bitwise AND 
  </dd><dt><code>^</code> 
  </dt><dd>bitwise exclusive OR 
  </dd><dt><code>|</code> 
  </dt><dd>bitwise OR 
  </dd><dt><code>&amp;&amp;</code> 
  </dt><dd>logical AND 
  </dd><dt><code>||</code> 
  </dt><dd>logical OR 
  </dd><dt><code>expr ? expr : expr</code> 
  </dt><dd>conditional evaluation 
  </dd><dt><code>= *= /= %= += -= &lt;&lt;= &gt;&gt;= &amp;= ^= |=</code> 
  </dt><dd>assignment 
  </dd><dt><code>expr1 , expr2</code> 
  </dt><dd>comma </dd>
</dl>
<p>Shell variables are allowed as operands; parameter expansion is performed before 
  the expression is evaluated. Within an expression, shell variables can also 
  be referenced by name without using the parameter expansion syntax. The value 
  of a variable is evaluated as an arithmetic expression when it is referenced. 
  A shell variable need not have its integer attribute turned on to be used in 
  an expression. </p>
<p>Constants with a leading 0 are interpreted as octal numbers. <br>
  A leading <samp>`0x'</samp> or <samp>`0X'</samp> denotes hexadecimal. <br>
  Otherwise, numbers take the form [<var>base</var><code>#</code>]<var>n</var>, 
  where <var>base</var> is a decimal number between 2 and 64 representing the 
  arithmetic base, and <var>n</var> is a number in that base. If <var>base</var><code>#</code> 
  is omitted, then base 10 is used. The digits greater than 9 are represented 
  by the lowercase letters, the uppercase letters, <samp>`_'</samp>, and <samp>`@'</samp>, 
  in that order. If <var>base</var> is less than or equal to 36, lowercase and 
  uppercase letters can be used interchangably to represent numbers between 10 
  and 35. </p>
<p>Operators are evaluated in order of precedence. Sub-expressions in parentheses 
  are evaluated first and can override the precedence rules above.</p>
<p><b>Related:</b><br>
<br>
<a href="syntax.html">Bash Syntax</a><br>
<a href="http://dlmf.nist.gov/">NIST Digital Library of Mathematical Functions</a><br>
Windows equivalent command: <a href="../nt/set.html">SET</a> /A - Display, set, or remove Windows  environment variables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
