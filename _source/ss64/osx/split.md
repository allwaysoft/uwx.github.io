---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>split</h1> 
<p>Split a file into pieces.<br>
  Read the given <i>file</i> (or standard input if no <i>file </i>is specified) 
  and break it up into files of 1000 lines each. <br>
</p>
<pre>Syntax
      split [<b>-b</b> <i>byte</i><b>_</b><i>count[k|m]</i>] [<b>-l</b> <i>line</i><b>_</b><i>count</i>] [<i>file</i> [<i>name</i>]]

Option     -b      Create smaller files <i>byte_count</i> <b>bytes</b> in length.
             `k' = kilobyte pieces
             `m' = megabyte pieces.

     -l      Create smaller files <i>line</i><b>_</b><i>count</i> lines in length.</pre>
<p> If additional arguments are specified, the first is used as the 
  name of the input file which is to be split. </p>
<p>If a second additional argument is specified, it is used as a 
  prefix for the names of the files into which the file is split. In this case, 
  each file into which the file is split is named by the prefix followed by a 
  lexically ordered suffix in the range of `aa-zz'. If the name argument is not 
  specified, the file is split into lexically ordered files named in the range 
  of `xaa-zzz'. </p>
<p>For historical reasons, if you specify <i>name</i>, split can only create 676 separate files. The default naming convention allows 2028 separate files.</p>
<p><b>Examples</b></p>
<p>Split up the file demo.zip into multiple 100 MB files:</p>
<p class="code">$ split -b 100m demo.zip</p>
<p>The output files will be named with 3 letters starting <span class="code">xaa</span>,<span class="code"> xab</span>, … to reassemble them, cat the files in alphabetical order:</p>
<p><span class="code">$ cat `ls x*` &gt; demo2.zip</span></p>
<p class="quote"><i>“Silence, that frail partition between the ill-concealed and the ill-revealed. . . ” ~ Samuel Beckett </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/split.1.html">split man page</a> - Apple.com<br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="head.html">head</a> - Output the first part of file(s) <br>
<a href="join.html">join</a> - Join lines on a common field</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
