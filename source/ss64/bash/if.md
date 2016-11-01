---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>if</h1> 
<p>Conditionally perform a command.</p>
<pre>Syntax
      <b>if</b> <var>test-commands</var>; <b>then</b>
  <var>    consequent-commands</var>;
      [<b>elif</b> <var>more-test-commands</var>; <b>then</b>
  <var>    more-consequents</var>;]
      [<b>else</b> <var>alternate-consequents</var>;]
      <b>fi</b></pre>
<p> The <var>test-commands</var> list is executed, and if its return status is 
  zero, the <var>consequent-commands</var> list is executed.</p>
<p>If <var>test-commands</var> returns a non-zero status, each <code>elif</code> 
  list is executed in turn, and if its exit status is zero, the corresponding 
  <var>more-consequents</var> is executed and the command completes.<br>
  <br>
  If <samp>`else <var>alternate-consequents</var>'</samp> is present, and the 
  final command in the final <code>if</code> or <code>elif</code> clause has a 
  non-zero exit status, then <var>alternate-consequents</var> is executed.</p>
<p>For simple comparisons, a more concise option is to use a <a href="syntax-redirection.html">conditional operator</a> instead of IF.<br> 
for example
<span class="code"><br>
[ "$var" = "snark" ] <b>&amp;&amp;</b> echo "found snark" </span></p>
<p>instead of </p>
<p> <span class="code">if [ "$var" = "snark" ];<br>
&nbsp;&nbsp;then   echo "found snark" <br>
fi</span><br>
  <br>
  The return status is the exit status of the last command executed, or zero if 
  no condition tested true. </p>
<p><span class="code">if</span> is a bash builtin command.</p>
<p class="quote"><i>"Then you admit confirming not denying you ever said that?" <br>
  "NO! ... I mean Yes! WHAT?" <br>
  I'll put `maybe.' ~ Bloom 
  County </i></p>
<p><b>Related:</b><br>
<br>
<a href="case.html">case</a> - Conditionally perform a command<br>
<a href="eval.html">eval</a> - Evaluate several commands/arguments <br>
<a href="expr.html">expr</a> - Evaluate expressions <br>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="test.html">test</a> - 
Evaluate a conditional expression<br>
<a href="until.html">until</a> - Execute commands (until error) <br>
<a href="while.html">while</a> - Execute commands<br>
<a href="syntax-file-operators.html">File operators</a> -f<br>
Equivalent Windows command:
<a href="../nt/if.html">IF</a> - Conditionally perform a command</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

