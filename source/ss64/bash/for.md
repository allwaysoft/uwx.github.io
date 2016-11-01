---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>for</h1> 
<p>Expand <var>words</var>, and execute <var>commands</var> once 
  for each member in the resultant list, with <var>name</var> bound to the current 
member.</p>
<pre>Syntax
      for <var>name</var> [in <var>words</var> ...]; do <var>commands</var>; done

      for (( <var>expr1</var> ; <var>expr2</var> ; <var>expr3</var> )) ; do <var>commands</var> ; done</pre>
<p class="body">If <samp>`in <var>words</var>'</samp> is not present, the <code>for</code> 
command executes the <var>commands</var> once for each positional parameter that 
is set, as if <samp>`in "$@"'</samp> had been specified (see  Positional Parameters below.)</p>
<p>When a wildcard is introduced, then words will match against filenames, * will match every file in the directory.</p>
<pre>for thisfile in *; do
   echo "found $thisfile"
done</pre>
<p class="body">The second form of the <span class="body"><span class="code">for</span></span> command is evaluated thus: </p>
<blockquote>
<p>First, the arithmetic expression <var>expr1</var> is evaluated 
  according to <a href="syntax-math.html">shell  arithmetic expression rules</a>. The arithmetic expression <var>expr2</var> 
  is then evaluated repeatedly until it evaluates to zero. <br>
  <br>
  Each time <var>expr2</var> evaluates to a non-zero value, <var>commands</var> 
  are executed and the arithmetic expression <var>expr3</var> is evaluated. If any 
expression is omitted, it behaves as if it evaluates to 1. </p>
</blockquote>
<h2>  Return Status</h2>
<blockquote>
<p> The Return Status of <span class="code">for</span> will be  the exit status of the last command that executes, (if there are multiple expressions then the last command in <var>list</var> .) <br>
If there are no items in the expansion of <var>words</var>, no commands are executed, and the return status is zero. The return status is false if any of the expressions is invalid. </p>
</blockquote>
<h2>Positional Parameters</h2>
<blockquote>
<p> These are assigned from the shell's arguments when the shell is invoked, they can be reassigned using the <a href="../osx/set.html">set </a>builtin command.<br>
Positional parameter <i>N</i> can be referenced as ${<i>N</i>}, or as $<i>N</i> when <i>N</i> consists of a single digit. $1, $2 etc </p>
</blockquote>
<p><b>Examples</b></p>
<pre># Loop through a set of strings:
for m in Apple Sony Panasonic "Hewlett Packard" Nokia<br>do<br>  echo "Manufacturer is:" $m<br>done

# or as a single line...
for <b>m</b> in Apple Sony Panasonic "Hewlett Packard" Nokia; do echo "Manufacturer is:" $<b>m</b>;done


# Loop 100 times:
for i in $(seq 1 100); do echo -n "Hello World${i} "; done


# Loop through the arguments passed to a function:
foo ()<br>{<br>    for ARG in "$@";do echo $ARG; done<br>}
# try it<br>foo abc 123 "Hello World" 'bash rules'</pre>
<p class="quote"><i>"In expanding the field of knowledge, we but increase the horizon of ignorance" ~ Henry Miller </i>   
</p>
<p><b>Related:</b><br>
<a href="case.html"><br>
case</a> - Conditionally perform a command<br>
<a href="eval.html">eval</a> - Evaluate several commands/arguments<br>
<var> </var> <a href="if.html">if</a> - Conditionally perform a command<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s)<br>
<a href="m4.html">m4</a> - Macro processor<br>
<a href="until.html">until</a> - Execute commands (until error) <br>
<a href="while.html">while</a> - Execute commands<br>
Equivalent Windows commands: 
  <a href="../nt/for.html">FOR</a> - Conditionally perform a command several times </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

