---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>function</h1> 
<p>Shell functions are a way to group commands for later execution using a single 
  name for the group. They are executed just like a regular command. When the 
  name of a shell function is used as a simple command name, the list of commands 
  associated with that function name will be executed. </p>
<p>Functions are declared using this syntax:
</p><pre>[ <code>function</code> ] <var>name</var> () { <var>command-list</var>; }</pre>
<p>This defines a shell function named <var>name</var>. The reserved word <code>function</code> 
  is optional. If the <code>function</code> reserved word is supplied, the parentheses 
  are optional. </p>
<p>If a function called <i>name</i> already exists it will be overwritten. If you already have an <a href="alias.html">alias</a> called <i>name</i>, this alias should be removed with unalias before creating the function.</p>
<p>The <var>body</var> of the function is the <var>command-list</var> 
  between { and }. This list is executed whenever <var>name</var> is specified 
  as the name of a command. </p>
<p>The exit status of a function is the exit status of 
  the last command executed in the body.</p>
<p>To view a bash function's definition use the <a href="type.html">type</a> command: <span class="code">type myfunctionname</span></p>
<p>Shell functions are executed 
  in the current shell context; no new process is created to interpret them. </p>
<p>Note that for historical reasons, the curly braces that surround the body of 
  the function must be separated from the body by <code>blanks</code> or newlines. 
  This is because the braces are reserved words and are only recognized as such 
  when they are separated by whitespace. Also, the <var>command-list</var> must 
  be terminated with a semicolon or a newline. </p>
<p>When a function is executed, the arguments to the function become the positional 
  parameters during its execution.<br>
  The special parameter <samp>`#'</samp> that expands to the number of positional 
  parameters is updated to reflect the change. <br>
  Positional parameter <code>0</code> is unchanged. <br>
  The <code>FUNCNAME</code> variable is set to the name of the function while 
  the function is executing. </p>
<p>If the builtin command <code>return</code> is executed in a function, the function 
  completes and execution resumes with the next command after the function call. 
  When a function completes, the values of the positional parameters and the special 
  parameter <samp>`#'</samp> are restored to the values they had prior to the 
  function's execution. If a numeric argument is given to <code>return</code>, 
  that is the function's return status; otherwise the functions's return status 
  is the exit status of the last command executed before the <code>return</code>. 
</p>
<p>Variables local to the function can be declared with the <code>local</code> 
  builtin. These variables are visible only to the function and the commands it 
  invokes. </p>
<p>Functions can be recursive. No limit is placed on the number of recursive calls.</p>
<h2>Arguments</h2>
<p>Just like a bash shell script, a Function can process passed arguments, a function will also  return an <a href="exit.html">exit</a> status.</p>
<p>Calling a function within a script with a command-line argument:</p>
<pre>function.sh arg1

#!/bin/bash
# function.sh
#  Call this script with a command-line argument,
#+ something like $0 arg1.

func ()
{
echo "$1"   # Echo the first arg passed to the function.
}

echo "==============================================="
echo
echo "Now call the above function passing the scripts first command-line argument."
func $1

exit 0</pre>
<p><b>Examples:</b></p>
<p><span class="code">function lsl() { ls -l $1; }<br>
<br>
function mcd() { mkdir $1 &amp;&amp; cd $1; }</span></p>
<p class="quote"><i>“Cats are intended to teach us that not everything in nature has a function” ~ Garrison Keillor</i></p>
<p><b>Related:</b><br>
<br>
<a href="expr.html">expr</a> - Evaluate expressions<br>
<a href="eval.html">eval</a> - Evaluate several commands/arguments<br>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var> 
<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s) <br>
<a href="set.html">set</a> - Manipulate shell variables and functions<br>
<a href="http://tldp.org/LDP/abs/html/complexfunct.html">Advanced Bash-Scripting Guide</a> - Complex Functions and Function Complexities<br>
Equivalent Windows command: <a href="../nt/doskey.html">DOSKEY</a> - Edit command line, recall commands, 
and create macros</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

