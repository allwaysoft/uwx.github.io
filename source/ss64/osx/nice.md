---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>nice</h1> 
<p>Run a command with modified priority. </p>
<pre>Syntax
      nice [-n <i>increment</i>] <i>Command</i> [<i>Arg</i>]...

Key
   -n <i>increment  </i>A positive or negative decimal integer used
                 to modify the system scheduling priority of <i>command</i></pre>
<p>If an increment is given, it is
used; otherwise an increment of 10 is assumed.</p>
<p> The super-user can run <i>command</i>s (utilities) with priorities higher than normal by using a negative increment. </p>
<p>The priority can be adjusted over a range of -20 (the highest) to 20 (the lowest).</p>
<p> Exit Status<br>
1-125 An error occurred in the nice utility.<br>
126 The <i>command</i> was found but could not be invoked.<br>
127 The <i>command</i> could not be found.<br> 
Otherwise, the exit status of nice shall be that of <i>command</i>.<br>
<br>
<i class="quote">“Work is achieved by those employees who have not yet reached their level of incompetence” ~ Laurence J. Peter (The Peter Principle)</i> </p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/nice.1.html">nice man page</a> - Apple.com<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="sleep.html">sleep</a> - Delay for a specified time<br>
getpriority<br> 
setpriority<br>
renice</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nice.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
