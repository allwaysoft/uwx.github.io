---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>sdiff</h1> 
<p>Merge two files interactively. (Show differences) with output 
to <i>outfile</i>.</p>
<pre>Syntax
      sdiff -o <i>outfile</i> [<i>options</i>] <i>from-file to-file</i>

Options

   Multiple single letter options (unless they take an argument)
   can be combined into a single command line argument.

       <b>-a</b>     Treat all files as text and compare them line-by-line,
              even if they do not appear to be text.

       <b>-b</b>     Ignore changes in amount of white space.

       <b>-B</b>     Ignore changes that just insert or delete blank
              lines.

       <b>-d</b>     Change the algorithm to perhaps find a smaller set
              of changes. This makes <i>sdiff</i> slower (sometimes
              much slower).

       <b>-H</b>     Use heuristics to speed handling of large files
              that have numerous scattered small changes.

       <b>--expand-tabs</b>

              Expand tabs to spaces in the output, to preserve
              the alignment of tabs in the input files.

       <b>-i</b>     Ignore changes in case; consider upper- and  lower-
              case to be the same.

       <b>-I</b> <i>regexp</i>
              Ignore changes that just insert or delete lines
              that match <i>regexp</i>.

       <b>--ignore-all-space</b>
              Ignore white space when comparing lines.

       <b>--ignore-blank-lines</b>

              Ignore changes that just insert or delete blank
              lines.

       <b>--ignore-case</b>
              Ignore  changes in case; consider upper- and lower-
              case to be the same.

       <b>--ignore-matching-lines=</b><i>regexp</i>
              Ignore changes that just insert or delete lines
              that match <i>regexp</i>.

       <b>--ignore-space-change</b>
              Ignore changes in amount of white space.

       <b>-l</b>

       <b>--left-column</b>
              Print only the left column of two common lines.

       <b>--minimal</b>
              Change  the algorithm to perhaps find a smaller set
              of changes.  This  makes  <i>sdiff</i>  slower  (sometimes
              much slower).

       <b>-o</b> <i>file</i>
       <b>--output=</b><i>file</i>

              Put  merged  output  into  <i>file</i>. This option is
              required for merging.

       <b>-s</b>
       <b>--suppress-common-lines</b>
              Do not print common lines.

       <b>--speed-large-files</b>
              Use heuristics to speed  handling  of  large  files
              that have numerous scattered small changes.

       <b>-t</b>     Expand  tabs  to  spaces in the output, to preserve
              the alignment of tabs in the input files.

       <b>--text</b> Treat all files as text and compare  them  line-by-
              line, even if they do not appear to be text.

       <b>-v</b>

       <b>--version</b>
              Output the version number of <i>sdiff</i>.

       <b>-w</b> <i>columns</i>
       <b>--width=</b><i>columns</i>
              Use an output width of <i>columns</i>.  Note that for his-
              torical reasons, this option is <b>-W</b> in <i>diff</i>,  <b>-w</b>  in
              <i>sdiff</i>.

       <b>-W</b>     Ignore horizontal white space when comparing lines.
              Note that for historical reasons, this option is <b>-w</b>

              in <i>diff</i>, <b>-W</b> in <i>sdiff</i>.</pre>
<p>Long named options can be abbreviated to any unique prefix of 
  their name.</p>
<p> If <i>from-file</i> is a directory and <i>to-file</i> is not, 
  <i>sdiff</i> compares the file in <i>from-file</i> whose file name is that of 
  <i>to-file</i>, and vice versa. <i>from-file</i> and <i>to-file</i> can not 
  both be directories.</p>
<p> <i>sdiff</i> options begin with <b>-</b>, so normally <i>from-file</i> 
  and <i>to-</i><i>file</i> can not begin with <b>-</b>. However, <b>--</b> as 
  an argument by itself treats the remaining arguments as file names even if they 
  begin with <b>-</b>. </p>
<p>You can not use <b>-</b> as an input file. </p>
<p><i>sdiff</i> without <b>-o</b> (or <b>--output</b>) produces a 
  side-by-side difference. This usage is obsolete; use <b>diff</b> <b>--side-by-side</b> 
  instead.</p>
<p>An exit status of 0 means no differences were found, 1 means some 
  differences were found, and 2 means trouble.</p>
<p class="quote"><i>"Eventually, all things merge into one, and a river runs through it" ~ Norman Maclean</i></p>
<p><b>Related:</b><br>
<br>
<a href="cmp.html">cmp</a> - Compare two files<br>
comm(1) <br>
<a href="diff.html">diff</a> - Display the differences between two files<br>
<a href="diff3.html">diff3</a> - Show differences among three files <br>
Equivalent Windows commands:  <a href="../nt/comp.html">COMP</a> / <a href="../nt/fc.html">FC</a> - Compare and display Characters/Lines which do not match.<br>
(also the WINDIFF GUI)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sdiff.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

