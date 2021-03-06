---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>wc</h1> 
<p> Print byte, word, and line counts, count the number of bytes, 
  whitespace-separated words, and newlines in each given FILE, or standard input 
if none are given or for a FILE of `-'.</p>
<pre>Syntax
      wc [<i>options</i>]... [<i>file</i>]...

Options

   -c
   --bytes
   --chars
        Print only the byte counts.

   -w
   --words
        Print only the word counts.

   -l
   --lines
        Print only the newline counts.

   -L
   --max-line-length
        Print only the length of the longest line per file, 
        and if there is more than one file it prints the 
        maximum (not the sum) of those lengths. </pre>
<p> `wc' prints one line of counts for each file, and if the file 
  was given as an argument, it prints the file name following the counts. <br>
  <br>
  If more than one FILE is given, `wc' prints a final line containing the cumulative 
  counts, with the file name `total'. The counts are printed in this order: newlines, 
  words, bytes. <br>
  <br>
  By default, each count is output right-justified in a 7-byte field with one 
  space between fields so that the numbers and file names line up nicely in columns. 
  However, POSIX requires that there be exactly one space separating columns. 
  You can make `wc' use the POSIX-mandated output format by setting the `POSIXLY_CORRECT' 
  environment variable. <br>
  <br>
  By default, `wc' prints all three counts. Options can specify that only certain 
  counts be printed. Options do not undo others previously given, so <span class="code">wc --bytes --words</span>will print both the byte counts and the word counts. </p>
<p>The command <a href="grep.html">grep -c</a>  will also count the number of matching lines, <span class="code">grep -c</span> is faster than piping <span class="code">grep</span> to <span class="code">wc -l</span></p>
<p><b>Examples</b></p>
<p>Count the number of lines in file1.txt </p>
<p><span class="code">$ wc -l &lt; file1.txt </span></p>
<p>Count the number of words in file2.txt </p>
<p><span class="code">$ wc -w  file2.txt </span></p>
<p>Count the number of words by pasting from the clipboard: </p>
<p><span class="code">$ wc -l<br>
(paste the list into the window and then type CTRL-D)</span></p>
<p class="quote">  <i>"One look is worth a thousand words" ~ Fred 
  R. Barnard</i> </p>
<p><b>Related:</b></p>
<p><a href="http://www.linuxjournal.com/article/1327">wc examples</a> -   Linux Journal <br>
  <a href="cat.html">cat</a> - Display the contents of a file<br>
  <a href="cal.html">cal</a> - Display a calendar<br>
<a href="units.html"> units</a> - Convert units from one scale to another <br>
Equivalent Windows command: <span class="code"><i>command</i> | <a href="../nt/find.html">find</a> /c /v ""</span></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

