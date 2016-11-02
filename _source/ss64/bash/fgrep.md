---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fgrep</h1> 
<p>Search file(s) for lines that match a fixed string</p>
<pre>Syntax
      fgrep &lt;<i>options</i>&gt; ...

fgrep is the same as `grep <a href="grep-regex.html">-F</a>'

all other <i>options</i> are the same as <a href="grep.html">grep</a> </pre>
<p>It's a popular fallacy that <span class="code">fgrep</span> stands for fast-grep,
  in fact <span class="code">fgrep</span> means fixed-string grep<b>.</b></p>
<p>fgrep implements the <a href="http://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_string_matching_algorithm">Aho–Corasick string matching algorithm</a>  which is very fast at matching multiple strings in the input stream/file. So if fgrep is used like this:</p>
<p class="code">fgrep -f patternlist.txt largetextfile.txt</p>
<p>it is much faster than</p>
<p class="code">grep -f patternlist.txt largetextfile.txt</p>
<p>Matching  a single pattern with fgrep is not significantly faster than grep.</p>
<p><i class="quote">"The knowledge imposes a pattern, and falsifies, For the pattern is new in every moment..." ~ T. S. Eliot</i><b><br>
<br>
Related:</b><br>
<br>
<a href="egrep.html">egrep</a> - Search file(s) for lines that match an extended 
  expression<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s) <br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern <br>
Equivalent Windows command: <a href="../nt/findstr.html">FINDSTR</a> - Search for strings in files </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fgrep.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

