---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>basename </h1> 
<p>Strip directory and suffix from filenames</p>
<pre>Syntax
      basename <i>NAME</i> [<i>SUFFIX</i>]

      basename <i>OPTION

</i>Key
   --help
        Display help

   --version
        Output version information and exit</pre>
<p>  basename will print <i>NAME</i> with any leading directory components removed. If specified, it will also remove a trailing SUFFIX (typically a file extention). </p>
<p><b>Examples</b></p>
<p>Get the name of the home folder:</p>
<p>$<span class="code"> basename ~</span></p>
<p>Extract the file name from the variable <span class="code">pathnamevar</span> and store in the variable <span class="code">result</span> using <a href="syntax-expand.html">parameter expansion</a> $( )</p>
<p>$<span class="code"> result=$(basename "$pathnamevar")</span></p>
<p>A <a href="syntax-script.html">script</a> to rename file extensions:</p>
<p class="code">#BatchRenameExt<br>
for file in *.$1; do<br>
mv $file `basename $file $1`.$2<br>
done</p>
<p>$<span class="code"> BatchRenameExt htm html</span></p>
<p><span class="quote"><i>“Then I came up with this crazy idea just to walk out on the stage with no band at all and just start singing whatever came to mind. I actually fought the idea for a while because it seemed almost too radical, but it became obvious what I was supposed to be doing” ~ <a href="http://www.youtube.com/watch?v=PgvJg7D6Qck">Bobby McFerrin</a></i></span> </p>
<p><b>Related:</b><br>
<br>
<a href="dir.html">dir</a> - Briefly list directory contents<br> 
<a href="dirname.html">dirname</a> - Convert a full pathname to just a path<br>
<a href="ls.html">ls</a> - List information about file(s)<br>
Equivalent Windows command: <a href="../nt/syntax-substring.html"> Variable Substring </a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="basename.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

