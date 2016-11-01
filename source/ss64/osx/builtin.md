---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>builtin</h1> 
<p>Execute the specified shell builtin, passing it arguments, and return its exit status.</p>
<pre>Syntax
      builtin <i>shell-builtin</i> [<i>arguments</i>]</pre>
<p>This
is  useful  when  defining a function whose name is the same as a shell builtin, retaining the
functionality of the builtin within the function.  The cd builtin is commonly  redefined  this
way.  </p>
<p>The return status is false if shell-builtin is not a shell builtin command.</p>
<p> <b>Example</b></p>
<pre>$ builtin ls</pre>
<p> builtin is a builtin command</p>
<p class="quote"><i>“The beginning of wisdom is to call things by their right names” - Chinese Proverb</i></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="builtin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
