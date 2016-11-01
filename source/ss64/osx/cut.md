---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>cut</h1> 
<p>Divide a file into several parts. </p>
<pre>Syntax
       cut -b <i>list</i> [-n] [<i>file</i> ...]
       cut -c <i>list</i> [<i>file</i> ...]
       cut -f <i>list</i> [-d <i>delim</i>] [-s] [<i>file</i> ...]

Options
     -b <i>list</i>     The list specifies byte positions.

     -c <i>list</i>     The list specifies character positions.

     -d <i>delim</i>    Use the first character of the string <i>delim</i> as the field delimiter
                 character instead of the tab character.

     -f <i>list</i>     The list specifies fields, delimited in the input by a single
                 tab character.  Output fields are separated by a single tab
                 character.

     -n          Do not split multi-byte characters.

     -s          Suppresses lines with no field delimiter characters.  Unless
                 specified, lines with no delimiters are passed through unmodified.
                 </pre>
<p><b>Notes<br>
</b>cut exits 0 on success, 1 if an error occurred. </p>
<p class="quote"><i>“It seemed the world was divided into good and bad people. The good ones slept better... while the bad ones seemed to enjoy the waking hours much more” ~ Woody Allen</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/cut.1.html">cut man page</a> - Apple.com<br>
<a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="head.html">head</a> - Output the first part of file(s) <br>
<a href="join.html">join</a> - Join lines on a common field <br>
<a href="paste.html">paste</a> - Merge lines of files<br>
<a href="split.html">split</a> - Split a file into fixed-size pieces<br>
<a href="tail.html">tail</a> - Output the last part of files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cut.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
