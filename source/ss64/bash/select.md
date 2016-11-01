---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>select</h1> 
<p>The <code>select</code> construct allows the easy generation of 
  menus. It has almost the same syntax as the <code>for</code> command.</p>

<pre>Syntax
      select <var>name</var> [in <var>words</var> ...]; do <var>commands</var>; done</pre>
<p>The list of words following <code>in</code> is expanded, generating a list 
  of items. The set of expanded words is printed on the standard error output 
  stream, each preceded by a number.<br>
  <br>
  If the <samp>`in <var>words</var>'</samp> is omitted, the positional parameters 
  are printed, as if <samp>`in "$@"'</samp> had been specifed. The <code>PS3</code> 
  prompt is then displayed and a line is read from the standard input. If the 
  line consists of a number corresponding to one of the displayed words, then 
  the value of <var>name</var> is set to that word. If the line is empty, the 
  words and prompt are displayed again. If <code>EOF</code> is read, the <code>select</code> 
  command completes. Any other value read causes <var>name</var> to be set to 
  null. The line read is saved in the variable <code>REPLY</code>.<br>
  <br>
  The <var>commands</var> are executed after each selection until a <code>break</code> 
  or <code>return</code> command is executed, at which point the <code>select</code> 
  command completes. <br>
  <br>
  Here is an example that allows the user to pick a filename from the current 
  directory, and displays the name and index of the file selected. </p>
<pre>select fname in *;
do
   echo you picked $fname \($REPLY\)
   break;
done
</pre>
<p><code>((...))</code> </p>
<pre>(( <var>expression</var> ))
</pre>
<p> If the value of the expression is non-zero, the return status is 0; otherwise 
  the return status is 1. This is exactly equivalent to </p>
<pre>let "<var>expression</var>"</pre>
<p class="quote"><i>"The truly successful businessman is essentially a dissenter, a rebel who is seldom if ever satisfied with the <a href="http://www.statusquo.co.uk/">status quo</a>" ~ 
J. Paul Getty</i></p>
<p><b>Related:</b><br>
<br>
<a href="read.html">read</a> - read a line from standard input<a href="for.html"> 
<br>
for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="until.html">until</a> - Execute commands (until error)<br>
Equivalent Windows command: 
<a href="../nt/choice.html">CHOICE</a> - Accept keyboard input to a batch file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

