---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>pr</h1>
<p>Prepare files for printing,  printing and pagination filter for text files.<br>
  When multiple input files are specified, each is read, formatted, and written 
to standard output.</p>
<pre>Syntax
      pr [<i>options</i>] [<i>file</i> ...]

Options

  +<i>beg_pag</i>[:<i>end-pag</i>], 
  --pages=[<i>beg_pag</i>[:<i>end-pag</i>]
      Begin printing on page <i>beg_pag </i>and end on <i>end-pag </i>if specified.

  -<i>num_cols</i>
   --columns=<i>num_cols</i>
      Print in <i>num_cols</i> number of columns, balancing the number of lines
      in the columns on each page.

  -a
  --across
      Print columns horizontally, not vertically.

  -c
  --show-control-chars
      Convert control characters to hat notation (such as ^C) and other unprintable characters to octal backslash format.
  -d
  --double-space
      Double space.

  -e[<i>tab-char[width</i>]]
  --expand-tabs=[<i>tab-char[width</i>]]
      Convert tabs (or tab-chars) to spaces.
      If <i>width</i> is specified, convert tabs to <i>width</i> characters (default is 8).

  -f
  -F
  --form-feed
      Separate pages with form feeds, not newlines.

  -h <i>header</i>
  --header=header
      Use header for the header instead of the filename.

  -i[<i>out-tab-char[out-tab-width</i>]]
  --output-tabs[=<i>out-tab-char[out-tab-width</i>]]
      Replace spaces with tabs on output. Can specify alternative tab character (default is tab) and width (default is 8).

  -J
  --join-lines
      Merge full lines; ignore -W if set.

  -l <i>lines</i>
  --length=<i>lines</i>
      Set page length to <i>lines</i> (default 66). If lines is less than 10, omit headers and footers.

  -m
  --merge
    Print all files, one file per column.

  -n[<i>delimiter</i>[<i>digits</i>]]
  --number-lines[=<i>delimiter</i>[<i>digits</i>]]
      Number columns, or, with the -m option, number lines.
      Append delimiter to each number (default is a tab) and limit
      the size of numbers to digits (default is 5).

  -o <i>width</i>
  --indent=<i>width</i>
      Set left margin to width.

  -r
  --no-file-warnings
      Continue silently when unable to open an input file.

  -s[<i>delimiter</i>]
  --separator[=<i>delimiter</i>]
      Separate columns with delimiter (default is a tab) instead of spaces.

  -S[<i>string</i>]
  --sep-string[=<i>string</i>]
      Separate columns with string. Default is a tab with -J and a space otherwise.

  -t
  --omit-header
      Suppress headers, footers, and fills at end of pages.

  -T
  --omit-pagination
      Like -t but also suppress form feeds.

  -v
  --show-non-printing
      Convert unprintable characters to octal backslash format.

  -w <i>page_width</i>
  --width=<i>page_width</i>
      Set the page width to <i>page_width </i>characters for multi-column output.
      Default is 72.

  -W <i>page_width</i>
  --page-width=<i>page_width</i>
      Set the page width to always be page_width characters.
      Default is 72.

  <i>file</i>
      A pathname of a file to be printed.
      If no <i>file</i> operands are specified, or if a <i>file</i> operand is `<b>-</b>',
      the standard input is used.

  --help
      Print a help message and then exit.

  --version
      Print version information and then exit.
</pre>
<p class="quote"><i> “We photographers deal in things which are continually vanishing, and when they have vanished there is no contrivance on earth can make them come back again. We cannot develop and print a memory” ~ Henri Cartier-Bresson</i></p>
<p><b>Related commands</b>:<br>
<br><a href="cat.html">cat</a> - Display the contents of a file<br>
<a href="more.html">more</a> - Display output one screen at a time <br>
Equivalent Windows commands: 
<a href="../nt/print.html">PRINT</a> - Print a file </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

