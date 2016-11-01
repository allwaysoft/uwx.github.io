---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>source</h1> 
<p>Execute commands from a file.</p>
<pre>Syntax
      . <i>filename</i> [<i>arguments</i>]

      source <i>filename</i> [<i>arguments</i>]</pre>
<p><span class="code">source</span> is a synonym for   dot/period '<span class="code">.</span>' in bash, but not in POSIX sh, so for maximum compatibility use the period.</p>
<p>Read  and  execute commands from <i>filename</i> in the current shell environment and return the exit
status of the last command.  </p>
<p>If <i>filename</i> does not contain a slash, file
names  in  PATH  are used to find the directory containing <i>filename</i>.  The file searched for in
PATH need not be executable.  When bash is  not  in  posix  mode,  the  current  directory  is
searched  if  no file is found in PATH.  If the sourcepath option to the shopt builtin command
is turned off, the PATH is not searched. </p>
<p>If any arguments are supplied, they become the positional  parameters  when  filename  is  executed.   Otherwise  the  positional  parameters are
unchanged.  </p>
<p>The return status is the status of the last command exited within the script (0 if
no commands are executed), and false if filename is not found or cannot be read.</p>
<p> <b>Examples</b></p>
<p class="code">$ source ~/myscript </p>
<p class="quote"><i>“The art and science of asking questions is the source of all knowledge” ~ Thomas Berger</i></p>
<p><b>Related:</b></p>
<p><a href="sort.html">sort</a> - Sort text files (sort - k will sort on a key) </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
