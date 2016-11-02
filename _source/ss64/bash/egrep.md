---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>egrep</h1> 
<p>Search file(s) for lines that match an extended expression (extended grep) </p>
<pre>Syntax
      egrep [ <i>options</i> ] '<i>PATTERN</i>' <i>files</i> ...

egrep is the same as `grep <a href="grep-regex.html">-E</a>'

all other <i>options</i> are the same as <a href="grep.html">grep</a> 
</pre>
<p> The <i>PATTERN</i> is a regexp.  In typical usage, the regexp is quoted to
prevent the shell from expanding any of the special characters as file
name wildcards.  Normally, `egrep' prints the lines that matched.<br>
If
multiple file names are provided on the command line, each output line
is preceded by the name of the file and a colon.<br>
</p>
<pre>OPTIONS

  -c
     Print out a count of the lines that matched the pattern, instead
     of the lines themselves.

  -s
     Be silent. No output is produced, and the exit value indicates
     whether or not the pattern was matched.

  -v
     Invert the sense of the test. `egrep' prints the lines that do
     *not* match the pattern, and exits successfully if the pattern was
     not matched.

  -i
     Ignore case distinctions in both the pattern and the input data.

  -l
     Only print the names of the files that matched, not the lines that
     matched.

  -e <i>PATTERN</i>
     Use PATTERN as the regexp to match.  The purpose of the `-e'
     option is to allow patterns that start with a `-'.</pre>
<p class="quote"><i>“I've never had a humble opinion in my life. If you're going to have one, why bother to be humble about it” ~ Joan Baez </i> </p>
<p><b>Related:</b></p>
<p><a href="fgrep.html">fgrep</a> - Search file(s) for lines that match a fixed 
string<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s) <br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern <br>
Equivalent Windows commands: <a href="../nt/findstr.html">FINDSTR</a> - Search for strings in files </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="egrep.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

