---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>paste</h1> 
<p>Merge corresponding or subsequent lines of files</p>
<pre>Syntax
       paste [-s] [-d <i>list</i>] <i>file</i> ...

Options
     -d <i>list     </i>Use one or more of the provided characters to replace the
                 newline characters instead of the default tab.  The charac-
                 ters in list are used circularly, i.e., when list is exhaust-
                 ed the first character from list is reused.  This continues
                 until a line from the last input file (in default operation)
                 or the last line in each file (using the -s option) is dis-
                 played, at which time paste begins selecting characters from
                 the beginning of list again.

                 The following special characters can also be used in list:

                 \n    newline character
                 \t    tab character
                 \\    backslash character
                 \0    Empty string (not a null character).

                 Any other character preceded by a backslash is equivalent to
                 the character itself.

     -s          Concatenate all of the lines of each separate input file in
                 command line order.  The newline character of every line ex-
                 cept the last line in each input file is replaced with the
                 tab character, unless otherwise specified by the -d option.</pre>
<p>If `-' is specified for one or more of the input files, the standard input is used; standard input is read one line at a time, circularly, for each instance of `-'. </p>
<p>paste exits 0 on success, and &gt;0 if an error occurs.</p>
<p class="quote"><i>“I have yet to hear a man ask for advice on how to combine marriage and a career” ~ Gloria Steinem</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/paste.1.html">paste man page</a> - Apple.com<br>
<a href="cut.html">  cut</a> - Divide a file into several parts<a href="cut.html"> <br>
</a><a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="fold.html">fold</a> - Wrap input lines to fit in specified width<br>
<a href="head.html">head</a> - Output the first part of file(s)<br>
<a href="join.html">join</a> - Join lines on a common field</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="paste.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
