---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>csplit</h1> 
<p>Split a file into context-determined pieces.</p>
<pre>Syntax
     csplit [<i>options</i>]... <i>FILE</i> <i>PATTERN</i>...
</pre>
<p>Output pieces of <i>FILE</i> separated by PATTERN(s) to files 'xx00', 'xx01', ..., and output byte counts of each piece to standard output.  (standard input if <i>FILE</i> is - ).</p>
<pre>Options

   -f <i>PREFIX</i>
   --prefix=<i>PREFIX</i>
       Use <i>PREFIX</i> as the output file name prefix.

   -b <i>SUFFIX</i>
   --suffix=<i>SUFFIX</i>
       Use <i>SUFFIX</i> as the output file name suffix.  When this option is
       specified, the suffix string must include exactly one
       `printf(3)'-style conversion specification, possibly including
       format specification flags, a field width, a precision
       specifications, or all of these kinds of modifiers.  The format
       letter must convert a binary integer argument to readable form;
       thus, only `d', `i', `u', `o', `x', and `X' conversions are
       allowed.  The entire SUFFIX is given (with the current output file
       number) to `sprintf(3)' to form the file name suffixes for each of
       the individual output files in turn.  If this option is used, the
       `--digits' option is ignored.

   -n <i>DIGITS</i>
   --digits=<i>DIGITS</i>
       Use output file names containing numbers that are DIGITS digits
       long instead of the default 2.

   -k
   --keep-files
       Do not remove output files when errors are encountered.

   -z
   --elide-empty-files
       Suppress the generation of zero-length output files.  (In cases
       where the section delimiters of the input file are supposed to
       mark the first lines of each of the sections, the first output
       file will generally be a zero-length file unless you use this
       option.)  The output file sequence numbers always run
       consecutively starting from 0, even when this option is specified.

   -s
   -q
   --silent
   --quiet
       Do not print counts of output file sizes.</pre>
<p>Read standard input if <i>FILE</i> is -. Each <i>PATTERN</i> can be: </p>
<p>The contents of the output files are determined by the <i>PATTERN</i> arguments, as detailed below. An error occurs if a <i>PATTERN</i> argument refers to a nonexistent line of the input file (e.g., if no remaining line matches a given regular expression). After every <i>PATTERN</i> has been matched, any remaining input is copied into one last output file.<br>
<br>
By default, `csplit' prints the number of bytes written to each output file after it has been created.</p>
<p>     The types of pattern arguments are:</p>
<pre><i>   N</i>
      Create an output file containing the input up to but not including
      line <i>N</i> (a positive integer).  If followed by a repeat count, also
      create an output file containing the next LINE lines of the input
      file once for each repeat.

   /<i>REGEXP</i>/[<i>OFFSET</i>]
      Create an output file containing the current line up to (but not
      including) the next line of the input file that contains a match
      for <i>REGEXP</i>.  The optional <i>OFFSET</i> is a `+' or `-' followed by a
      positive integer.  If it is given, the input up to the matching
      line plus or minus <i>OFFSET</i> is put into the output file, and the
      line after that begins the next section of input.

   %<i>REGEXP</i>%[<i>OFFSET</i>]
      Like the previous type, except that it does not create an output
      file, so that section of the input file is effectively ignored.

   {<i>REPEAT-COUNT</i>}
      Repeat the previous pattern <i>REPEAT-COUNT</i> additional times.
      <i>REPEAT-COUNT</i> can either be a positive integer or an asterisk,
      meaning repeat as many times as necessary until the input is
      exhausted.</pre>
<p>The output files' names consist of a prefix (`xx' by default) followed by a suffix. By default, the suffix is an ascending sequence of two-digit decimal numbers from `00' and up to `99'. In any case, concatenating the output files in sorted order by filename produces the original input file.<br>
<br>
By default, if `csplit' encounters an error or receives a hangup, interrupt, quit, or terminate signal, it removes any output files that it has created so far before it exits.</p>
<p><b>Related:</b><br>
<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fmt.html">fmt</a> - Reformat paragraph text<br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tail.html">tail</a> - Output the last part of files</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="csplit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

