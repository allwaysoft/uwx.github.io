---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>env</h1> 
<p>List or Set environment variables and optionally run a utility</p>
<pre>Syntax
       env [-i] [<i>name</i>=<i>value</i> ...] [<i>utility</i> [<i>argument</i> ...]]</pre>
<p>env executes <i>utility</i> after modifying the environment as 
  specified on the command line. </p>
<p>The option name=value specifies an environmental variable, <i>name</i>, 
  with a value of <i>value</i>. </p>
<p>The option `-i' causes env to completely ignore the environment 
  it inherits. </p>
<p>If no <i>utility </i>is specified, env prints out the names and 
  values of the variables in the environment, with one name=value pair per line. <br>
This is the same as running <span class="code"><a href="printenv.html">printenv</a></span>.<br>
</p>
<p class="quote"><i>"Each time we changed our environment, our environment changed 
  our behavior, and our new behavior demanded a new environment" ~ Laurence 
  J. Peter </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/env.1.html">env man page</a> - Apple.com<br>  
<a href="set.html">set</a> - Set a variable</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="env.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
