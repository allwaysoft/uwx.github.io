---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>type</h1> 
<p>Describe a command, for each <i>name</i>, indicate how it would be interpreted 
  if used as <br>
a command name. </p>
<pre>Syntax
      type [-atp] [<var>name</var> ...]

Options
   If the `-t' option is used, type prints a single word which is one of:
      `alias'    (shell alias)
      `function' (shell function)
      `builtin'  (shell builtin)
      `file'     (disk file)
      `keyword'  (shell reserved word) 

   If the `-p' option is used, type either returns the name of the disk file that 
   would be executed, or nothing if `-t' would not return `file'.
      
   If the `-a' option is used, type returns all of the places that contain an 
   executable named file. This includes aliases and functions, if and only if the 
   `-p' option is not also used.</pre>
<p> The return status is zero if any of the <i>names</i> are found, non-zero otherwise.</p>
<p>type is a BASH builtin command.</p>
<p> <b>Examples</b></p>
<pre> $ type -a grep
 grep is /usr/bin/grep
 
 $ type type<br> type is a shell builtin

 $ type lsl
 lsl is a function
 lsl ()
 {
    ls -l $1
 }</pre>
<p class="quote"><i>"In his errors a man is true to type. Observe the errors and you will
know the man" ~ Analects</i></p>
<p><b>Related:</b><br>
<br>
<a href="builtin.html">builtin</a> - Run a shell builtin<br>
<a href="function.html">function</a> - Define Function Macros <br>
<a href="whereis.html">whereis</a> - Report all known instances of a command<br>
<a href="which.html">which</a> - Search the user's $path for a program file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="type.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

