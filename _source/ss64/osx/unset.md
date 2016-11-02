---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>unset</h1> 
<p>Remove variable or function names - the opposite of <a href="set.html">set</a>.</p>
<pre>Syntax
      unset [-fv] [<i>name</i> ...] 

Key
   -v   Each <i>name </i>refers to a shell variable.(default)

   -f   Each <i>name</i> refers to a shell function, and the function definition is removed. 
</pre>
<p><b>Example</b><br>
<br>
<span class="code">$ unset myvariable</span></p>
<p>Each unset variable or function is removed from the environment passed to subsequent commands. If any of RANDOM, SECONDS, LINENO, HISTCMD, FUNCNAME, GROUPS, or DIRSTACK are unset, they lose their special properties, even if they are subsequently reset. </p>
<p>The exit status is true unless a <i>name</i> is readonly. It is not an error for nothing to be unset.</p>
<p>unset is a bash built in command.</p>
<p class="quote"><i>"Look Dave, I can see you're really upset about this" ~ HAL (Space 2001) </i></p>
<p><b>Related:</b></p>
<p>  <a href="set.html">set</a> - Set a variable</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
