---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>builtin</h1>  
<p>Run a shell builtin, passing it args, and return its exit status.</p>
<pre>Syntax
      builtin [<i>shell-builtin</i> [<i>args</i>]]</pre>
<p>This is useful when defining a shell function with the same name as a shell builtin, retaining the functionality of the builtin within the function. <br>
</p>
<pre>For example, to write a function to replace `cd'
that writes the hostname and current directory 
to an xterm title bar:

cd()

   {

      builtin cd "$@" &amp;&amp; xtitle "$HOST: $PWD"

   }</pre>
<p> The return status is non-zero if shell-builtin is not a 
shell builtin command. </p>
<p class="quote"><i>"More people are killed every year by pigs than by sharks, which shows just how good we are at evaluating risks" ~ Bruce Schneier</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
  <a href="cron.html">cron</a> - Daemon to execute scheduled commands<br>
  <a href="exec.html">exec</a> - Execute a command<br>
  <a href="if.html">if</a> - Conditionally perform a command<br>
  <a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
  <a href="su.html">su</a> - Run a command with substitute user and group id<br>
  <a href="shopt.html">shopt</a> - Shell Options<br>
  <a href="source.html">.source</a> 
  - Run commands from a file <br>
  <a href="type.html">type</a> - Describe a command <br>
  <a href="watch.html">watch</a> - Execute/display a program periodically <br>
Equivalent Windows command: <a href="../nt/call.html">CALL</a> - Call one batch program from another </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="builtin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

