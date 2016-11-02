---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>hash</h1> 
<p>Remember the full pathnames of commands specified as name arguments, 
so they need not be searched for on subsequent invocations.</p>
<pre>Syntax
      hash [-r] [-p <i>filename</i>] [<i>name</i>] 

Options
      -r   Reset, causes the shell to forget all remembered locations.

      -p   Use <i>filename</i> as the location of <i>name</i> (don't search $PATH).</pre>
<p> The commands are found by searching through the directories listed in $PATH. 
  <br>
  <br>
  If no arguments are given, information about remembered commands is printed. 
  <br>
  <br>
  The return status is zero unless a name is not found or an invalid option is 
  supplied. </p>
<p>hash is a bash built in command.<br>
  <br>
  <i class="quote">"I spent most of the eighties, most of my life, riding around in somebody 
  else's car, in possession of, or ingested of, something illegal, on my way from 
  something illegal to something illegal with many illegal things happening all 
  around me" ~ Iggy Pop 
  </i> </p>
<p><b>Related:</b><br>
<br>
<a href="dirname.html">dirname</a> - Convert a full pathname to just a path<br>
<a href="which.html">which</a> - Show full path of commands <br>
Equivalent Windows command: <a href="../nt/set.html">
SET</a> - Display, set, or remove Windows  environment variables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

