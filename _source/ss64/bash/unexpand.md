---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>unexpand</h1> 
<p> Convert spaces to tabs, write the contents of each given FILE, 
  or standard input if none are given or for a FILE of `-', to standard output. 
  Strings of two or more space or tab characters are converted to as many tabs 
as possible followed by as many spaces as are needed.</p>
<pre>Syntax
      unexpand [<i>options</i>]... [<i>file</i>]...

Options

 -<i>TAB1</i>[,<i>TAB2</i>]...
 -t <i>TAB1</i>[,<i>TAB2</i>]...
 --tabs=<i>TAB1</i>[,<i>TAB2</i>]...
     If only one tab stop is given, set the tabs TAB1 spaces apart
     instead of the default 8.  Otherwise, set the tabs at columns
     TAB1, TAB2, ... (numbered from 0), and leave spaces and tabs
     beyond the tabstops given unchanged.  If the tabstops are specified
     with the `-t' or `--tabs' option, they can be separated by blanks
     as well as by commas.  This option implies the `-a' option.

 -a
 --all
     Convert all strings of two or more spaces or tabs, not just initial
     ones, to tabs.</pre>
<p>By default, `unexpand' converts only initial spaces and tabs (those that precede all non space or tab characters) on each line. <br>
It preserves backspace characters in the output; they decrement the column count for tab calculations. <br>
By default, tabs are set at every 8th column.</p>
<p class="quote"><i>“Life finds its purpose and fulfillment in the expansion of happiness” ~ Maharishi Mahesh Yogi</i></p>
<p><b>Related:</b><br>
<br>
<a href="cut.html">
cut</a> - Divide a file into several parts<br>
<a href="expand.html">expand</a> - Convert tabs to spaces<br>
<a href="expr.html">expr</a> - Evaluate expressions <br>
<a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern<br>
<a href="seq.html">seq</a> - Print numeric sequences <br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters <br>
<a href="uuencode.html">uuencode</a> - Encode a binary file </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unexpand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

