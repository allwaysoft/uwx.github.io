---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>wc</h1> 
<p>Word count, line, character, and byte count.</p>
<pre>Syntax
       wc [-clmw] [<i>file</i> ...]

Options
     -c    The number of bytes in each input file is written to the standard output.

     -l    The number of lines in each input file is written to the standard output.

     -m    The number of characters in each input file is written to the
           standard output.  If the current locale does not support multi-
           byte characters, this is equivalent to the -c option.

     -w    The number of words in each input file is written to the standard output.</pre>
<p> When an option is specified, wc only reports the information requested by
that option.  The default action is equivalent to specifying the -c, -l and -w options.<br>
<br>
If no files are specified, the standard input is used and no file name is
displayed.</p>
<p>The command <a href="grep.html">grep -c</a> will also count the number of matching lines, <span class="code">grep -c</span> is faster than piping <span class="code">grep</span> to <span class="code">wc -l</span></p>
<p>The wc utility displays the number of lines, words, and bytes contained 
in each input file (or standard input, by default) to the standard output. </p>
<p>A 
  line is defined as a string of characters delimited by a
<new- line="">
character, and a word is defined as a string of characters delimited 
  by white space characters. White space characters are the set of characters 
  for which the iswspace(3) function returns true.</new-></p>
<p> If more than one input file 
  is specified, a line of cumulative counts for all the files is displayed on 
  a separate line after the output for the last file. </p>
<p> The LANG, LC_ALL and LC_CTYPE environment variables affect the 
  execution of wc as described in environ(7).</p>
<p>Exits 0 on success, and &gt;0 if an error occurs.</p>
<p><b>Examples</b></p>
<p> Count the number of characters, words and lines in each of the files<br>
report1 and report2 as well as the totals for both:</p>
<pre>$ wc -mlw report1 report2
</pre>
<p>Count the number of words by pasting from the clipboard: </p>
<p><span class="code">$ wc -l<br>
(paste the list into the window and then type CTRL-D)</span></p>
<p class="quote"><i>“One look is worth a thousand words” ~ Fred R. Barnard</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/wc.1.html">wc man page</a> - Apple.com<br>
<a href="cal.html">  cal</a> - Display a calendar<br>
<a href="units.html"> units</a> - Convert units from one scale to another<br>
Equivalent Windows command: <span class="code"><i>command</i> | <a href="../nt/find.html">find</a> /c /v ""</span></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
