---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>dirname</h1> 
<p>Convert a full pathname to just a path.</p>
<pre>Syntax
     dirname <i>pathname</i>
</pre>
<p>Prints all but the final slash-delimited component of a
string (presumably a filename).<br>
If PATHNAME is a single component, <span class="code">dirname</span> prints<span class="code"> . </span>(meaning the current directory)</p>
<p><b>Example</b></p>
<p>Extract the path from the variable <span class="code">pathnamevar</span> and store in the variable <span class="code">result</span> using <a href="syntax-expand.html">parameter expansion</a> $( )</p>
<p>$<span class="code"> result=$(dirname "$pathnamevar")</span></p>
<p class="quote">"How beautiful the leaves grow old. How full of light and color are their last days" ~ John Burroughs</p>
<p><b>Related:</b><br>
<br>
<a href="hash.html">hash</a> - Remember the full pathname of a name argument 
<br>
<a href="ls.html">ls</a> - List information about File(s)<br>
<a href="which.html">which</a> - Show full path of commands <br>
Equivalent Windows command: 
<a href="../nt/syntax-args.html">SET Parameters</a> - get a full or partial 
pathname from a variable. </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

