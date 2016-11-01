---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1> Using parenthesis to group and expand expressions</h1>
<p>Grouping a (list of commands) in parenthesis causes them to be executed as if 
they were a single unit. <br>
<br>
When commands are grouped, redirections can be applied to the entire command list. For example, the output of all the commands in the list can be redirected 
to a single stream. <br>
<br>
Group commands in a sub-shell: <b>( )</b></p>
<pre>  (<i>list</i>)</pre>
<blockquote>
<p> Placing a list of commands between parentheses causes a subshell 
to be created, and each of the commands in <var>list</var> to be executed in that 
subshell. Since the <var>list</var> is executed in a subshell, variable assignments 
do not remain in effect after the subshell completes.</p>
</blockquote>
<p><span class="body"> Group commands in the current shell:<b> { }</b><br>
</span> </p>
<pre>  { <i>list</i>; }</pre>
<blockquote>
<p> Placing a list of commands between curly braces causes the list to be executed in the current shell context. No subshell is created. The 
semicolon (or newline) following <var>list</var> is required. </p>
<p>In addition to the creation of a subshell, there is a subtle difference between these two constructs due to historical reasons. The braces are <code>reserved words</code>, so they must be separated from the <var>list</var> by <code>blank</code>s. 
  The parentheses are <code>operators</code>, and are recognized as separate tokens by the shell even if they are not separated from the <var>list</var> by whitespace. </p>
<p>The exit status of both of these constructs is the exit status of <var>list</var>. <br>
</p>
</blockquote>
<p>Return a binary result of expression:<b> [[ ]]</b></p>
<pre>   [[ <i>expression</i> ]] </pre>
<blockquote>
<p>Return a status of 0 or 1 depending on the evaluation of the conditional expression. Word splitting and filename expansion are not performed 
on the words between the<span class="code"> [[ </span>and<span class="code"> ]]</span>; tilde expansion, parameter and variable expansion, arithmetic expansion, command substitution, 
process substitution, and quote removal are performed. <br>
<br>
When the<span class="code"> == </span>and<span class="code"> != </span>operators are used, pattern matching will be done on the string to the right of the operator.<br>
. <br>
The return value is 0 if the string matches or does not match the pattern, respectively, and 1 otherwise. <br>
<br>
Any part of the pattern can be quoted to force it to be matched as a string. <br>
<br>
Expressions within the [[ ]] can be combined using the following operators, listed in decreasing order of precedence: </p>
<pre>( <i>expression</i> )               Returns the value of expression.
                             This can be used to override the normal precedence of operators. 
<br>! <i>expression</i>                 True if expression is <b>false</b>. 
<br><i>expression1</i> &amp;&amp; <i>expression2</i>   True if both expression1 <b>and</b> expression2 are true. 
<br><i>expression1</i> || <i>expression2</i>   True if either expression1 <b>or</b> expression2 is true. </pre>
<p> The <span class="code">&amp;&amp;</span> and <span class="code">||</span> commands do not execute expression2 if the value of expression1 is sufficient to determine the return value of the entire conditional 
expression.</p>
</blockquote>
<h2><a id="arithmetic"></a>Arithmetic expansion</h2>
<blockquote>
<p> Arithmetic expansion allows the evaluation of an arithmetic expression and the substitution of the result. The format for arithmetic expansion is: </p>
<pre>$(( <var>expression</var> ))</pre>
<p>The expression is treated as if it were within double quotes, but a double quote inside the parentheses is not treated specially. All tokens in the expression undergo parameter expansion, command substitution, and quote removal. Arithmetic substitutions can be nested. </p>
<p> If the expression is invalid, Bash prints a message indicating failure to the standard error and no substitution occurs. </p>
</blockquote>
<p> <b>Related:</b></p>
<p><a href="syntax.html">OS X Syntax</a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-brackets.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
