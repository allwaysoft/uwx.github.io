---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>expr</h1> 
<p>Evaluate expression.<br>
expr evaluates <i>expression </i>and writes the result to standard output.</p>
<pre>Syntax
      expr <i>expression</i>

Options
     Operators are listed below in order of increasing precedence.  Operators
     with equal precedence are grouped within { } symbols.

     expr1 | expr2
       Returns the evaluation of expr1 if it is neither an empty string
       nor zero; otherwise, returns the evaluation of expr2.

     expr1 &amp; expr2
       Returns the evaluation of expr1 if neither expression evaluates
       to an empty string or zero; otherwise, returns zero.

     expr1 {=, &gt;, &gt;=, &lt;, &lt;=, !=} expr2
       Returns the results of integer comparison if both arguments are
       integers; otherwise, returns the results of string comparison
       using the locale-specific collation sequence.  The result of each
       comparison is 1 if the specified relation is true, or 0 if the
       relation is false.

     expr1 {+, -} expr2
       Returns the results of addition or subtraction of integer-valued
       arguments.

     expr1 {*, /, {% raw %}%}{% endraw %} expr2
       Returns the results of multiplication, integer division, or
       remainder of integer-valued arguments.

     expr1 : expr2
       The `:' operator matches expr1 against expr2, which must be a
       regular expression.  The regular expression is anchored to the
       beginning of  the string with an implicit `^'.  expr expects
       "basic" regular expressions, see re_format(7) for more informa-
       tion on regular expressions.

       If the match succeeds and the pattern contains at least one regu-
       lar expression subexpression `\(...\)', the string correspond-
       ing to `\1' is returned; otherwise the matching operator
       returns the number of characters matched.  If the match fails and
       the pattern contains a regular expression subexpression the null
       string is returned; otherwise 0.

     Parentheses are used for grouping in the usual manner.</pre>
<p>Examples<br>
</p>
<pre># A partial match will return the number of characters that match:
$ expr ss64 : ss6
3

# The condition in string 2 must entirely match string 1
$ expr ss64 : ss7
0

# Adding numbers
$ expr 5 + 2
7

# When multiplying the * has to be escaped
$ expr 5 \* 3
15

# Incrementing a variable (arithmetic expansion)
$ demo=1
$ demo=`expr $demo + 1`
$ echo $demo
2
$ demo=`expr $demo + 1`
$ echo $demo
3</pre>
<p> Return the filename portion of a pathname
stored in variable a.   The // characters act to eliminate ambiguity
with the division operator.<br>
<span class="code">&nbsp;$ expr //$a : '.*/\(.*\)'</span><br>
<br>
Return the number of characters in variable
$demo.<br>
<span class="code"> $ demo=ss64<br>
$ expr $demo : '.*'</span></p>
<p><b>Exit Status<br>
  </b> expr exits with one of the following values: <br>
  0 the expression is neither an empty string nor 0. <br>
  1 the expression is an empty string or 0. <br>
  2 the expression is invalid..</p>
<p class="quote"><i>"Silence is the  perfect expression of scorn" ~ George Bernard Shaw</i> (Back to Methuselah, 1921)</p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/expr.1.html">expr man page</a> - Apple.com<br>
<a href="awk.html">awk</a> - Find and Replace text within file(s) <br>
<a href="eval.html">eval</a> - Evaluate several commands/arguments<br>
<a href="for.html">for</a> - Loop, expand <i>words</i>, and execute <i>commands</i><br>
<a href="test.html">test</a> - Evaluate a conditional expression</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
