---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>time</h1> 
<p>Measure the running time of a command. </p>
<pre>Syntax
      time [-lp] [<i>command</i>]

Options

   -l      The contents of the rusage structure are printed.
   -p      The output is formatted as specified by IEEE Std 1003.2-1992 (POSIX.2)</pre>
<p>The time utility executes and times <i>command</i>. After the utility finishes, time writes the
total time elapsed, the time consumed by system overhead, and the time used to execute 
<i>command</i> to the standard error stream. Times are reported in seconds.</p>
<p>Without <i>command, </i>prints a time summary for the current 
  shell and its children.</p>
<p>The time utility shall exit with one of the following values:<br> 1-125 An error occurred in the time utility.<br> 
126 The utility was found but could not be invoked.<br> 
127 The utility could not be found.<br>
Otherwise, the exit status of time shall be that of <i>command</i>.</p>
<p class="quote"><i>“Let us not look back in anger or forward in fear, but around us in awareness” ~ James Thurber</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/time.1.html">time man page</a> - Apple.com<br>
<a href="exec.html">exec</a> - Execute a command</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="time.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
