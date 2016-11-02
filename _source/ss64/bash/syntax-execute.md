---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>
Conditional Execution</h1>
<p>Chain commands to run one after another</p>
<pre>An AND list has the form 

<var>      command1</var> &amp;&amp; <var>command2</var></pre>
<pre><var>command2</var> is executed if, and only if, <var>command1</var> succeeds

An OR list has the form 
<var>
      command3</var> || <var>command4</var>
<var>
command4</var> is executed if, and only if, <var>command3</var> fails  </pre>
<p>In any event the second command must wait for the first command to either complete successfully or to fail. </p>
<p>A <code>list</code> is a sequence of one or more pipelines separated by one 
  of the operators <samp>`;'</samp>, <samp>`&amp;'</samp>, <samp>`&amp;&amp;'</samp>, 
  or <samp>`||'</samp>, and optionally terminated by one of <samp>`;'</samp>, <samp>`&amp;'</samp>, or a <code>newline</code>. </p>
<p>Of these list operators, <samp>`&amp;&amp;'</samp> and <samp>`||'</samp> have 
  equal precedence, followed by <samp>`;'</samp> and <samp>`&amp;'</samp>, which 
  have equal precedence. </p>
<p>If a command is terminated by the control operator <samp>`&amp;'</samp>, the 
  shell executes the command asynchronously in a subshell. This is known as executing 
  the command in the <var>background</var>. The shell does not wait for the command 
  to finish, and the return status is 0 (true).<br>
  <br>
  When job control is not active, the standard input for asynchronous commands, 
  in the absence of any explicit redirections, is redirected from <code>/dev/null</code>. 
</p>
<p>Commands separated by a <samp>`;'</samp> are executed sequentially; the shell 
  waits for each command to terminate in turn. The return status is the exit status 
  of the last command executed. </p>
<p>The return status of AND and OR lists is the exit status of the last command 
  executed in the list. 
</p><p><b>Related:</b><br>
<br>
<a href="syntax.html">Bash Syntax</a><br>
Windows equivalent: <a href="../nt/syntax-conditional.html">Conditionals</a> 
- IF THEN ELSE Execution</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
