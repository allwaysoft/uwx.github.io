---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>enable</h1> 
<p>Enable and disable builtin shell commands.</p>
<pre>Syntax
        enable [-n] [-p] [-f <var>filename</var>] [-ads] [<var>name</var> ...]

Options
      -a     list each builtin with an indication of whether or not 
             it is enabled.
  
      <samp>-d</samp>      Delete a builtin loaded with <samp>`-f'</samp>. 

      -f     load the new builtin command <i>name</i> from shared object <var>filename</var>, 
             on systems that support dynamic loading.

      -n     Disable the <i>name</i>s listed, otherwise names are enabled.

      -p     Print a list of shell builtins, default if no <var>name</var> arguments appear
             With no other arguments, the list consists of all enabled shell builtins. 

      -s     Restrict to enable only POSIX special builtins</pre>
<p> Disabling a builtin allows a disk command which has the same 
  name as a shell builtin to be executed without specifying a full pathname, even 
  though the shell normally searches for builtins before disk commands. <br>
  <br>
  For example, to use the <code>test</code> binary found via <code>$PATH</code> 
  instead of the shell builtin version, type <samp>`enable -n test'</samp>. <br>
  <br>
  If there are no options, a list of the shell builtins is displayed. <br>
  <br>
  If `-s' is used with `-f', the new builtin becomes a special builtin. <br>
  <br>
  The return status is zero unless a <i>name</i> is not a shell builtin or there 
  is an error loading a new builtin from a shared object. <br>
  <br>
  <i class="quote">"You see things; and you say 'Why?' But I dream things that never were; and 
  I say 'why not?' ~ George 
  Bernard Shaw </i> </p>
<p><b>Related:</b><br>
<a href="builtin.html"><br>
builtin</a> - Run a shell builtin<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="watch.html">watch</a> - Execute/display a program periodically<br>
<a href="source.html">.source</a> - Run commands from a file </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

