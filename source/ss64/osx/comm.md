---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>comm</h1> 
<p>Compare two sorted files line by line. </p>
<pre>Syntax
      comm [-123i] <i>file1 file2</i>

Options
   -1      Suppress printing of column 1

   -2      Suppress printing of column 2

   -3      Suppress printing of column 3

   -i      Case insensitive comparison of lines</pre>
<p>  The comm utility reads <i>file1</i> and file2, <i>which</i> should be sorted lexically, 
and produces three text columns as output:</p>
<pre> Lines only in file1; Lines only in file2; Lines in both files. </pre>
<p>If printing of a column is suppressed, the output will be padded 
with TAB characters.</p>
<p>Each column will have a number of tab characters prepended to it equal to
the number of lower numbered columns that are being printed. For example, if column number two is being suppressed, lines printed in column
number one will not have any tabs preceding them, and lines printed in
column number three will have one.</p>
<p> The comm utility assumes that the files are lexically sorted; all characters participate in line comparisons. The filename<span class="code"> '-' </span>means standard input. <br>
Collation sorting: the LANG, LC_ALL, LC_COLLATE, and LC_CTYPE environment variables affect
the execution of comm as described in environ(7)</p>
<p class="quote"><i>“When I'm President, I will go line by line to make sure that we are not spending money unwisely” - Barack Obama </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/comm.1.html">comm man page</a> - Apple.com<br>  
<a href="cmp.html">cmp</a> - Compare two files <br>
<a href="diff.html">diff</a> - Display the differences between two files<br>
<a href="diff3.html">diff3</a> - Show differences among three files<br>
<a href="sdiff.html">sdiff</a> - merge two files interactively<br>
<a href="sort.html">sort</a> - Sort text files <br>
<a href="uniq.html">uniq</a> - Uniquify files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="comm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
