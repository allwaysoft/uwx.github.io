---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>readonly</h1> 
<p>Mark a variable or function as read-only.</p>
<pre>Syntax
      readonly [-apf] [<i>name</i>[=<i>word</i>] ...]

Key
   -a   Restrict the variables to arrays

   -p   Display output in a format that can be reused as input

   -f   Mark functions corresponding to the <i>names</i> as read-only</pre>
<p>The given <i>names</i> are marked readonly; the values of these names can not be changed by  subsequent assignment.</p>
<p>If no <i>name </i>arguments are given,or if the -p option is supplied, a list of all readonly names is printed. </p>
<p>If a variable <i>name</i> is
followed by =<i>word</i>, the value of the variable is set to <i>word</i>. </p>
<p>The return status is 0 unless an
invalid option is encountered, one of the names is not a valid shell variable name, or -f is supplied with a name that is not a function.<br>
readonly is a bash builtin command.</p>
<p class="quote"> <i>“The universe is like a safe to which there is a combination. But the combination is locked up in the safe”  ~ Peter De Vries</i></p>
<p><b>Related:</b></p>
<p><a href="set.html">set</a> - Set a shell variable = value</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="readonly.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
