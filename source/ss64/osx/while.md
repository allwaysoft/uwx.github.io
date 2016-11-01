---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>while</h1> 
<p>Execute commands</p>
<pre>Syntax
      while <i>list</i>; do <i>list</i>; done
<br>      until <i>list</i>; do <i>list</i>; done</pre>
<p>The <span class="code">while</span> command continuously executes the do <i>list</i> as long as the last command in <i>list</i> returns an exit status of zero. </p>
<p>The <span class="code">until</span> command is identical to the while command, except
that the test is negated; the do <i>list</i> is executed as long as the last command in <i>list</i> returns a non-zero exit status. </p>
<p>The exit status of the while and until commands is the exit status of the last do list command executed, or zero if none was executed.</p>
<p class="quote"><i>"God shows his contempt for wealth by the kind of person he selects to receive it" ~ Austin O'Malley</i></p>
<p><b>Related:</b></p>
<p><a href="break.html">break</a> - Exit from a loop<br>
 continue - Resume the next iteration of a while or if loop. <br>
<a href="for.html">for</a> - Loop command </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="while.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
