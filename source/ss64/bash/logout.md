---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>logout</h1> 
<p>Exit a login shell.</p>
<pre>SYNTAX
      logout [<var>n</var>]</pre>
<p>Returns a status of <var>n</var> to the shell's parent. </p>
<p>A login shell,  is your topmost shell, and is started when
you log in. </p>
<p>When you terminate a login shell (via the commands `exit', `logout,' or the end of file [^D]), you are logged out completely. </p>
<p>Sub-Shells</p>
<blockquote>
<p>A
      `sub-shell' is a shell created after login, either by loading a new shell or opening a window with a graphics interface. A sub-shell usually will not
    accept the command `logout' to terminate, you must use `exit' or ^D.<br>
  When you terminate a sub-shell, you are returned to the process or shell
that created it. </p>
</blockquote>
<p><b>Example</b> (starting from a bash shell) </p>
<p><span class="code">$ tcsh<br>
  % # now in the tcsh shell <br>
  % exit<br>
  $ 
  # now back in the bash shell <br>
  $ logout
  </span><br>
  <br>
  <i class="quote">"We want the finest wines available to humanity. And we want them here 
      and we want them now" ~ Bruce 
  Robinson / Withnail and I </i> </p>
<p><b> Related:</b></p>
<p>exit - Exit session<br>
&lt;ctrl&gt;&lt;d&gt; - End of File <br>
  <a href="logname.html"> logname</a> - Print current login name<br>
Equivalent Windows command:
EXIT - Quit the CMD shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

