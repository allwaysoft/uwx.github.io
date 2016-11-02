---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fold</h1> 
<p>Wrap input lines to fit in specified width, writes each FILE (`-' 
  means standard input), or standard input if none are given, to standard output, 
breaking long lines.</p>
<pre>Syntax
      fold [<i>options</i>]... [FILE]...
</pre>
<p>  By default, `fold' breaks lines wider than 80 columns.  The output
  is split into as many lines as necessary.<br>
    <br>
  `fold' counts screen columns by default; thus, a Tab can count more
  than one column, Backspace decreases the column count, and CarriageReturn sets the column to zero.</p>
<pre>Options

 -b
 --bytes
 Count bytes rather than columns, so that tabs, backspaces, and
 carriage returns are each counted as taking up one column, just
 like other characters.

 -s
 --spaces
 Break at word boundaries: the line is broken after the last blank
 before the maximum line length.  If the line contains no such
 blanks, the line is broken at the maximum line length as usual.

 -w <i>WIDTH</i>
 --width=<i>WIDTH</i>
 Use a maximum line length of <i>WIDTH</i> columns instead of 80.</pre>
<p class="quote"><i>"The general attitude seems to be that people should wear square shoes, because squares are easier to design and manufacture than foot shaped shoes. If the shoe industry has gone the way of the computer industry it would now be running a $200-a-day course on how to walk, run and jump in square shoes" ~ Alan Kay</i></p>
<p><b>Related:</b><br>
<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="expand.html">expand</a> - Convert tabs to spaces <br>
<a href="fmt.html">fmt</a> - Reformat paragraph text<br>
<a href="head.html">head</a> - Output the first part of file(s) <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tail.html">tail</a> - Output the last part of files</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fold.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

