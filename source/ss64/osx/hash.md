---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>hash</h1> 
<p>Refresh the cached/remembered location of commands. <br>
Logging out and in will refresh this automatically, but if you have just updated or reinstalled a package you might want to force an update.</p>
<pre>Syntax
      hash [-lr] [-p <i>filename</i>] [-dt] [<i>name</i>]

Key
   -p   Use <i>filename </i>as the full file name of the command (no path search is performed).

   -t   Print the full pathname to which each <i>name</i> corresponds.

   -l   Display output in a format that can be reused as input.

   -d   Forget the remembered location of each <i>name</i>.

   -r   Forget all remembered locations.</pre>
<p> For each <i>name</i>, the full file name of the command is determined by searching the directories in $PATH and remembered.</p>
<p>  If multiple <i>name </i>arguments are supplied with -t, the name is printed before the hashed full pathname. If no arguments are given, or if only -l is supplied, information about remembered commands is printed. </p>
<p>The return status is true unless a <i>name </i>is not found or an invalid option is supplied.</p>
<p><b>Examples</b></p>
<p>Display the currently remembered location for getopt:<br>
<span class="code">$ getopt<br>
$ hash -t getopt</span></p>
<p>Remove the  entry for getopt:<br>
<span class="code">$ hash -d getopt</span></p>
<p>hash is a bash built in command: <span class="code"> $ help hash </span></p>
<p class="quote"><i>“Remember me when I am gone away,
Gone far away into the silent land...” ~ Christina Georgina Rossetti </i></p>
<p><b>Related:</b></p>
<p>
  <a href="history.html">history</a> - Command History</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="hash.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
