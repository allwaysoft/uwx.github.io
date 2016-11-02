---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>rename (linux only, not ubuntu) </h1> 
<p>Rename files. </p>
<pre>Syntax
      rename <i>from to file...</i></pre>
<p>rename will rename the specified files by replacing the first occurrence of <i>from</i> in their name by <i>to</i>.</p>
<p><b>Examples</b></p>
<p>Given the files foo1, ..., foo9, foo10, ..., foo278, the commands</p>
<p class="code"> $ rename foo foo0 foo?<br>
$ rename foo foo0 foo??</p>
<p>will turn them into foo001, ..., foo009, foo010, ..., foo278.</p>
<p>Fix the extension of your .htm files so they become .html :</p>
<p class="code"> $ rename .htm .html *.htm</p>
<p>Rename all files (<span class="code">*</span>) to be lowercase:</p>
<p class="code">$ rename 'y/A-Z/a-z/' *</p>
<p>Rename is NOT a bash builtin, it is available on most distributions, if you dont have it then an alternative is to use a <a href="for.html">for</a> loop. For example to  rename a folder full of <span class="code">.txt</span> files to have the extension <span class="code">.html </span></p>
<p><span class="code">$ for i in *.txt; do mv "$i" "`<a href="basename.html">basename</a> $i .txt`.html"; done <br>
</span>or<span class="code"><br>
$ for files in *.txt; do  mv "$files" "${files%.txt}.html"; done</span></p>
<p> <i class="quote">“Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has” ~ Margaret Mead</i><br>
<b><br>
Related:</b><br>
<br>
<a href="mv.html">mv</a> - Move or rename files or directories.<br>
Equivalent Windows command: <a href="../nt/ren.html">REN</a> - Rename files. </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rename.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

