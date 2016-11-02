---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>return</h1> 
<p>Cause a shell function to exit with the return value n. </p>
<pre>Syntax
      return [<i>n</i>]  

Options
      <i>n</i>    Return value i.e. an errorlevel</pre>
<p> If n is not supplied, the return value is the exit status of the last command executed in the function. This can also be used to terminate execution of a script being executed with the . (or source) builtin, returning either n or the exit status of the last command executed within the script as the exit status of the script. <br>
<br>
The return status is false if return is used outside a function and not during the execution of a script by . or source. </p>
<p>return is a bash builtin command.</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b><br>
<br>
<a href="source.html">. period</a> - Run commands from a file<br>
Equivalent Windows command: EXIT - Exit a windows <a href="../nt/cmd.html">CMD</a> shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

