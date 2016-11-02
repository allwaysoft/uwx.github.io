---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cmp</h1> 
<p>Compare two files, and if they differ, tells the first byte and 
  line number where they differ.<br>
  <br>
  You can use the `cmp' command to show the offsets and line numbers where two 
  files differ. `cmp' can also show all the characters that differ between the 
two files, side by side.</p>
<pre>Syntax
      cmp <i>options</i>... <i>FromFile</i> [<i>ToFile</i>]

Options
      Multiple single letter options (unless they take an argument)
      can be combined into a single command line word: 
      so `-cl' is equivalent to -c -l.

-c
     Print the differing characters.  Display control characters as a
     `^' followed by a letter of the alphabet and precede characters
     that have the high bit set with `M-' (which stands for "meta").

--ignore-initial=<i>BYTES</i>
     Ignore any differences in the the first <i>BYTES</i> bytes of the input
     files.  Treat files with fewer than <i>BYTES</i> bytes as if they are
     empty.

-l
     Print the (decimal) offsets and (octal) values of all differing
     bytes.

--print-chars
     Print the differing characters.  Display control characters as a
     `^' followed by a letter of the alphabet and precede characters
     that have the high bit set with `M-' (which stands for "meta").

--quiet
-s
--silent
     Do not print anything; only return an exit status indicating
     whether the files differ.

--verbose
     Print the (decimal) offsets and (octal) values of all differing
     bytes.

-v
--version
     Output the version number of `cmp'.

      The file name `-' is always the standard input.  `cmp' also uses the
      standard input if one file name is omitted.

      An exit status of 0 means no differences were found, 1 means some
      differences were found, and 2 means trouble.</pre>
<p> 
  <b>Example</b></p>
<p class="code">$ cmp tnsnames.ora tnsnames.old</p>
<p><b>Notes</b><br>
  `cmp' reports the differences between two files character by character, instead 
  of line by line. As a result, it is more useful than `diff' for comparing binary 
  files. For text files, `cmp' is useful mainly when you want to know only whether 
  two files are identical. <br>
  <br>
  For files that are identical, `cmp' produces no output. When the files differ, 
  by default, `cmp' outputs the byte offset and line number where the first difference 
  occurs. You can use the `-s' option to suppress that information, so that `cmp' 
  produces no output and reports whether the files differ using only its exit 
  status. <br>
  Unlike `diff', `cmp' cannot compare directories; it can only compare two files.<br>
  <br>
  <i class="quote">"First rate people hire other first rate people. Second rate people hire 
  third rate people. Third rate people hire fifth rate people" ~ André Weil</i> </p>
<p><b>Related:</b><br>
<a href="comm.html"><br>
comm</a> - Compare two sorted files line by line<br>
<a href="diff.html">diff</a> - Display the differences between two files<br>
<a href="diff3.html">diff3</a> - Show differences among three files<br>
dircmp - Compare 2 directories <br>
<a href="sdiff.html">sdiff</a> - merge two files interactively<br>
Equivalent Windows commands:  <a href="../nt/comp.html">COMP</a> / <a href="../nt/fc.html">FC</a> - Compare  and display  Characters/Lines 
which do not match.<br>
(also the WINDIFF  GUI)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

