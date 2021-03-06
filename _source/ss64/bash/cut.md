---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>cut</h1> 
<p>Divide a file into several parts (columns)<br>
  Writes to standard output selected parts of each line of each input file, or 
standard input if no files are given or for a file name of `-'.</p>
<pre>Syntax
     cut [<i>OPTION</i>]... [<i>FILE</i>]...
</pre>
<p>In the options below, BYTE-LIST, CHARACTER-LIST, and FIELD-LIST are one or more 
numbers or ranges (two numbers separated by a dash)<br>
<br>
Bytes, characters, and fields are are numbered starting at 1 and 
separated by commas.  <br>
Incomplete ranges can be given: <span class="code">-M </span>means <span class="code">1-M</span> &nbsp;; <span class="code">&nbsp;N-</span> means <span class="code">N</span> through end of line or last field.</p>
<pre>Options

-b <i>BYTE-LIST</i>
--bytes=<i>BYTE-LIST</i>
     Print only the bytes in positions listed in <i>BYTE-LIST</i>.  Tabs and
     backspaces are treated like any other character; they take up 1
     byte.

-c <i>CHARACTER-LIST</i>
--characters=<i>CHARACTER-LIST</i>
     Print only characters in positions listed in <i>CHARACTER-LIST</i>.  The
     same as `-b' for now, but internationalization will change that.
     Tabs and backspaces are treated like any other character; they
     take up 1 character.

-f <i>FIELD-LIST</i>
--fields=<i>FIELD-LIST
</i>     Print only the fields listed in <i>FIELD-LIST</i>.  Fields are separated
     by a TAB character by default.

-d <i>INPUT_DELIM_BYTE</i>
--delimiter=<i>INPUT_DELIM_BYTE</i>
     For `-f', fields are separated in the input by the first character
     in INPUT_DELIM_BYTE (default is TAB).

-n
     Do not split multi-byte characters (no-op for now).

-s
--only-delimited
     For `-f', do not print lines that do not contain the field
     separator character.

--output-delimiter=<i>OUTPUT_DELIM_STRING</i>
     For `-f', output fields are separated by <i>OUTPUT_DELIM_STRING</i> The
     default is to use the input delimiter.</pre>
<p><b>  Example</b></p>
<p>Parse out  column 2 from a semicolon (;) delimited file:</p>
<p class="code">$ cat myfile.txt | cut -d \; -f 2 &gt; output.txt </p>
<p><i class="quote">"It seemed the world was divided into good and bad people. The good ones slept better... while the bad ones seemed to enjoy the waking hours much more" ~ Woody Allen</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="head.html">head</a> - Output the first part of file(s) <br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tail.html">tail</a> - Output the last part of files <br>
Equivalent Windows command: <a href="../nt/for_f.html">FOR</a> /F - Conditionally perform a command on items 
in a text file<br>
Equivalents in NT Batch/Perl Script - <a href="http://www.robvanderwoude.com/unixports.php#CUT">CUT Scripts</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

