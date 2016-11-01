---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>paste</h1> 
<p>Merge lines of files, write to standard output lines consisting 
  of sequentially corresponding lines of each given file, separated by a TAB character.</p>
<pre>Syntax
      paste [<i>options</i>]... [<i>file</i>]...

Options
   -s
   --serial
        Paste the lines of one file at a time rather than one line from
        each file.

   -d <i>DELIM-LIST</i>
   --delimiters <i>DELIM-LIST</i>
        Consecutively use the characters in <i>DELIM-LIST</i> instead of TAB to
        separate merged lines.  When <i>DELIM-LIST</i> is exhausted, start again
        at its beginning.</pre>
<p> Standard input is used for a file name of <span class="code">-</span> or if no input files are given.</p>
<p class="quote"><i>"The secret to success is to offend the greatest number of people" ~ George Bernard Shaw</i></p>
<p><b>Related:</b><br>
<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width <br>
<a href="fmt.html">fmt</a> - Reformat paragraph text<br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tail.html">tail</a> - Output the last part of files </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="paste.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

