---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>head</h1> 
<p>Output the first part of files, prints the first part (10 lines 
by default) of each file.</p>
<pre>SYNTAX
      head [<i>options</i>]... [<i>file</i>]...

Options:

  -<i>NUMBER</i>
     Return the first <i>NUMBER</i> of lines from the file. (must be the first option specified)

  -<i>Count</i>Options</pre>
<blockquote>
<p>This option is only recognized if it is specified first.  <span class="code">Count</span> is
a decimal number optionally followed by a size letter ('b', 'k',<br>
'm' for bytes, Kilobytes or Megabytes) , or 'l' to mean count by lines, or other option
letters ('cqv').</p>
</blockquote>
<pre>  -c <i>BYTES</i>
  --bytes=<i>BYTES</i>
       Print the first <i>BYTES</i> bytes, instead of initial lines.  Appending
       'b' multiplies <i>BYTES</i> by 512, 'k' by 1024, and 'm' by 1048576.

  -n <i>N</i>
  --lines=<i>N</i>
       Output the first <i>N</i> lines.

  -q
  --quiet
  --silent
       Never print file name headers.

  -v
  --verbose
       Always print file name headers.</pre>
<p>If no files are given (or if given a <i>FILE </i>of '-') head will read from standard input.</p>
<p>If more than one <i>FILE</i> is specified, 'head' will print a one-line header consisting of <span class="code">==&gt; FILE NAME &lt;==</span> before the output for each <i>FILE</i>.<br>
<br>
Two option formats are accepted: the new one, in which numbers are arguments to the options ('-q -n 1'), and the old one, in which the number precedes any option letters ('-1q')</p>
<p><b>Examples</b></p>
<p>Extract the first 85 lines from a file: </p>
<p class="code"> head -85 file,txt </p>
<p>Extract lines 40-50 from a file, first using head to get the first 50 lines then <a href="tail.html">tail</a> to get the last 10: </p>
<p class="code"> head -50 file.txt | tail -10 </p>
<p class="quote"><i>"If you can keep your head when all about you are losing theirs and blaming it on you..." ~ Rudyard Kipling</i></p>
<p><b>Related bash commands</b>:<br>
  <a href="csplit.html"><br>
  csplit</a> - Split a file into context-determined pieces<br>
  <a href="cut.html">cut</a> - Divide a file into several parts<br>
  <a href="fmt.html">fmt</a> - Reformat paragraph text<br>
  <a href="paste.html">paste</a> - Merge lines of files<br>
  <a href="split.html">split</a> - Split a file into fixed-size pieces<br>
  <a href="tail.html">tail</a> - Output the last part of files<br>
  Equivalent Windows command:
  <a href="../nt/for.html">FOR</a> /F "skip=nlines" - Loop through items 
  in a text file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="head.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

