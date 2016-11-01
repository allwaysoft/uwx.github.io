---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tsort</h1> 
<p>Topological sort, perform a topological sort on the given FILE, 
or standard input if no input file is given or for a FILE of `-'.</p>
<pre>Syntax
      tsort [<i>options</i>] [<i>file</i>]

Options

--help
--version

`tsort' reads its input as pairs of strings, separated by blanks,
indicating a partial ordering.  The output is a total ordering that
corresponds to the given partial ordering.

   For example

     tsort &lt;&lt;EOF
     a b c
     d
     e f
     b c d e
     EOF

will produce the output

     a
     b
     c
     d
     e
     f

`tsort' will detect cycles in the input and writes the first cycle
encountered to standard error. &lt;eof a
     b
     c
     d
     e
     f
     eof will produce the output detect cycles in input and writes first cycle
encountered to standard error.</pre>
<p> note that for given partial ordering generally there is no unique
total ordering.</p>
<p><i class="quote">"There is always room at the top" ~ Daniel Webster </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="sort.html">sort</a> - Sort text files<br>
Equivalent Windows commands: 
<a href="sort.html">SORT</a> - Sort input</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

