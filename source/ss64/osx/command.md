---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>command</h1> 
<p>Run <i>command</i> with <i>args</i> suppressing the normal shell function lookup.</p>
<pre>Syntax
      command [-pVv] <i>command</i> [<i>arg</i>...]

Key
    -p   Use a default value for PATH that will find all the standard utilities.

    -v   Print a description of <i>command</i>

    -V   Print a verbose description of <i>command</i></pre>
<p>Only builtin commands or commands found in the PATH are executed.  </p>
<p>Exit Status<br>
If the -V or -v option is  supplied, the exit status is 0 if command was found, and 1 if not.  <br>
If neither option is supplied
and an error occurred or command cannot be found, the exit status is 127.  <br>
Otherwise, the exit
status of the command builtin is the exit status of <i>command</i>.<br>
</p>
<p><b>Example</b></p>
<pre>$ command ls</pre>
<p> command is a builtin command</p>
<p class="quote"><i>“I'm not dumb. I just have a command of thoroughly useless information” - Bill Watterson</i></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
