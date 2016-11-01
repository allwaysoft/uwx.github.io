---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>false</h1> 
<p>Do nothing, returning a non-zero (false) exit status.</p>
<pre>Syntax
      false</pre>
<p>  `false' does nothing except return an exit status of 1, meaning 
  "failure".  It can be used as a place holder in shell scripts where an
  unsuccessful command is needed.<br>
  <br>
  `false' ignores <b>all</b> command line arguments, even <span class="code">--help</span> and  <span class="code">--version</span>, since to do otherwise would change expected behavior that 
some programmers might be relying on.</p>
<p>  This version of `false' is implemented as a C program, and is thus 
  more secure and faster than a shell script implementation, and can 
  safely be used as a dummy shell for the purpose of disabling accounts.</p>
<p class="quote"><i>"False in one thing, false in everything" ~ Legal maxim </i></p>
<p><b>Related:</b><br>
<br>
<a href="true.html">true</a> - Do nothing, successfully.<br>
<a href="yes.html">yes</a> - Print a string until interrupted.<br>
Equivalent Windows commands: 
The <a href="../nt/color.html">COLOR</a> command can be used to set an %errorlevel%</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="false.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

