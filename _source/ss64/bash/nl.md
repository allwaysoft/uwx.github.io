---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>nl</h1> 
<p>Number lines and write files, writes each FILE to standard output, 
  with line numbers added to some or all of the lines. <br>
If no input file (or `-' ) is given nl will read from standard input.</p>
<pre>Syntax
      nl [<i>options</i>]... [<i>File</i>]...

OPTIONS

-b <i>STYLE</i>
--body-numbering=<i>STYLE</i>
     Select the numbering style for lines in the body section of each
     logical page.  When a line is not numbered, the current line number
     is not incremented, but the line number separator character is
     still prepended to the line.  
     The styles are:

     `a'          number all lines,

     `t'          number only nonempty lines (default for body),

     `n'          do not number lines (default for header and footer),

     `pREGEXP'    number only lines that contain a match for REGEXP.

-d <i>CD</i>
--section-delimiter=<i>CD</i>
     Set the section delimiter characters to CD; default is `\:'. If
     only C is given, the second remains `:'.  (Remember to protect `\'
     or other metacharacters from shell expansion with quotes or extra
     backslashes.)

-f <i>STYLE</i>
--footer-numbering=<i>STYLE</i>
     Analogous to `--body-numbering'.

-h <i>STYLE</i>
--header-numbering=<i>STYLE</i>
     Analogous to `--body-numbering'.

-i <i>NUMBER</i>
--page-increment=<i>NUMBER</i>
     Increment line numbers by <i>NUMBER</i> (default 1).

-l <i>NUMBER</i>
--join-blank-lines=<i>NUMBER</i>
     Consider <i>NUMBER</i> (default 1) consecutive empty lines to be one
     logical line for numbering, and only number the last one.  Where
     fewer than <i>NUMBER</i> consecutive empty lines occur, do not number
     them.  An empty line is one that contains no characters, not even
     spaces or tabs.

-n <i>FORMAT</i>
--number-format=<i>FORMAT</i>
     Select the line numbering format (default is `rn'):

    `ln'     left justified, no leading zeros;

    `rn'     right justified, no leading zeros;

    `rz'     right justified, leading zeros.

-p
--no-renumber
     Do not reset the line number at the start of a logical page.

-s <i>STRING</i>
--number-separator=<i>STRING</i>
     Separate the line number from the text line in the output with
     STRING (default is the TAB character).

-v <i>NUMBER</i>
--starting-line-number=<i>NUMBER</i>
     Set the initial line number on each logical page to NUMBER
     (default 1).

-w <i>NUMBER</i>
--number-width=<i>NUMBER</i>
     Use NUMBER characters for line numbers (default 6).</pre>
<p>`nl' decomposes its input into (logical) pages; by default, the 
  line number is reset to 1 at the top of each logical page.<br>
  <br>
  `nl' treats all of the input files as a single document; it does not reset line 
  numbers or logical pages between files. <br>
  <br>
  A logical page consists of three sections: header, body, and footer. Any of 
  the sections can be empty. Each can be numbered in a different style from the 
  others. <br>
  <br>
  The beginnings of the sections of logical pages are indicated in the input file 
  by a line containing exactly one of these delimiter strings:<br>
  <span class="code">\:\:\:</span> start of header;<br>
  <span class="code">\:\:</span> start of body;<br>
  <span class="code">\:</span> start of footer. <br>
  The two characters from which these strings are made can be changed from<span class="code"> \ </span>and<span class="code"> : </span>via options (see above), but the pattern and length of each string cannot 
  be changed. A section delimiter is replaced by an empty line on output. <br>
  <br>
  Any text that comes before the first section delimiter string in the input file 
  is considered to be part of a body section, so `nl' treats a file that contains 
  no section delimiters as a single body section. </p>
<p class="quote"><i>"Seek not the favor of the multitude; it is seldom got by honest and lawful means. But seek the testimony of few; and number not voices, but weigh them" ~ Immanuel Kant</i></p>
<p><b>Related:</b><br>
<br>
<a href="comm.html">comm</a> - Compare two sorted files line by line<br>
<a href="csplit.html">csplit</a> - Split a file into context-determined pieces<br>
<a href="expand.html">expand</a> - Convert tabs to spaces<br>
<a href="seq.html">seq</a> - Print numeric sequences <br>
Equivalent Windows commands: 
<a href="../nt/for.html">FOR</a> /F "skip=nlines" - Loop through items in a text file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nl.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

