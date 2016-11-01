---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tac</h1> 
<p>Concatenate and write files in reverse, copies each <i>FILE</i> (<span class="code"> -</span> means standard input), or standard input if none are given, to standard output, 
reversing the records (lines by default) in each file separately.</p>
<pre>Syntax
      tac [<i>options</i>]... [<i>file</i>]...

Options

   -b
   --before
        The separator is attached to the beginning of the record that it
        precedes in the file.

   -r
   --regex
        Treat the separator string as a regular expression.  Users of `tac'
        on MS-DOS/MS-Windows should note that, since `tac' reads files in
        binary mode, each line of a text file might end with a CR/LF pair
        instead of the Unix-style LF.

   -s <i>SEPARATOR</i>
   --separator=<i>SEPARATOR</i>
        Use SEPARATOR as the record separator, instead of newline.</pre>
<p>Each Record is separated by an instance of a string (newline by default). By default, this separator string is attached to the end of the record that it follows in the file.</p>
<p>tac is <a href="cat.html">cat</a> backwards.</p>
<p><b>Example</b></p>
<p>pj.txt<br>
<span class="code">Even in the summer<br>
even in the spring<br>
You can never get too much of a wonderful thing</span></p>
<p>$ tac pj.txt </p>
<p>Output:<br>
<span class="code">You can never get too much of a wonderful thing<br>
even in the spring<br>
Even in the summer</span><br><br>
<i class="quote">“The best is the enemy of the good” - Voltaire </i></p>
<p><b>Related bash commands</b>:<br><br>
<a href="cat.html">cat</a> - Display the contents of a file<br>
<a href="comm.html">comm</a> - Compare two sorted files line by line<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="sort.html">sort</a> - Sort text files <a href="split.html"><br>
split</a> - Split a file into fixed-size pieces </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
