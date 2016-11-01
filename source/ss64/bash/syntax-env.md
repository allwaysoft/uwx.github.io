---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>
Environment</h1> 
<p>When a program is invoked it is given an array of strings called the <var><a href="syntax-variables.html">environment</a></var>. 
  This is a list of name-value pairs, of the form <code>name=value</code>. </p>
<p>Bash provides several ways to manipulate the environment. On invocation, the 
  shell scans its own environment and creates a parameter for each name found, 
  automatically marking it for <var>export</var> to child processes. <br>
  <br>
  Executed commands inherit the environment. The <a href="export.html"><code>export</code></a> 
  and <samp>`<a href="declare.html">declare -x</a>'</samp> commands allow 
  parameters and functions to be added to and deleted from the environment. <br>
  <br>
  If the value of a parameter in the environment is modified, the new value becomes 
  part of the environment, replacing the old. The environment inherited by any 
  executed command consists of the shell's initial environment, whose values can 
  be modified in the shell, less any pairs removed by the <a href="unset.html"><code>unset</code></a> 
  and <samp>`<a href="export.html">export -n</a>'</samp> commands, plus 
  any additions via the <a href="export.html"><code>export</code></a> 
  and <samp>`<a href="declare.html">declare -x</a>'</samp> commands. </p>
<p>The environment for any simple command or function can be augmented temporarily 
  by prefixing it with parameter assignments, as described in section <a href="syntax-parameters.html">Shell 
  Parameters</a>. These assignment statements affect only the environment seen 
  by that command. </p>
<p>If the <samp>`-k'</samp> option is set (see <a href="set.html">the Set Builtin</a>), then all parameter assignments are 
  placed in the environment for a command, not just those that precede the command 
  name. </p>
<p>When Bash invokes an external command, the variable <samp>`$_'</samp> is set 
  to the full path name of the command and passed to that command in its environment. 
</p>
<p><b>Related:</b></p>
<p><a href="syntax-variables.html">List of bash variables</a><br>  
<a href="syntax-prompt.html">The PROMPT_COMMAND variable</a><br>
Windows equivalent: <a href="../nt/set.html">SET</a> / <a href="../nt/setlocal.html">SETLOCAL</a> - Display, set, or remove Windows environment variables.<br>
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-env.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
