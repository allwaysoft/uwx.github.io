---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>expand</h1> 
<p>Convert tabs to spaces, write the contents of each given <i>file</i>, 
  to standard output, with tab characters converted to the appropriate number 
  of spaces. If no <i>file</i> is given, or for a <i>file</i> of `-', write to standard input.</p>
<pre>Syntax
      expand [<i>options</i>]... [<i>file</i>]...

Options
   -<i>TAB1</i>[,<i>TAB2</i>]...
   -t <i>TAB1</i>[,<i>TAB2</i>]...
   --tabs=<i>TAB1</i>[,<i>TAB2</i>]...</pre>
<blockquote>
<p>If only one tab stop is given, set the tabs <span class="code"><i>TAB1</i></span> spaces apart
(default is 8).  Otherwise, set the tabs at columns <span class="code"><i>TAB1</i></span>, <span class="code"><i>TAB2</i></span>,
... (numbered from 0), and replace any tabs beyond the last
tabstop given with single spaces.  If the tabstops are specified
with the `-t' or `--tabs' option, they can be separated by blanks
as well as by commas.</p>
</blockquote>
<pre>   -i
   --initial</pre>
<blockquote>
<p>Only convert initial tabs (those that precede all non-space or
non-tab characters) on each line to spaces.</p>
</blockquote>
<p>By default, expand converts all tabs to spaces. It preserves backspace characters in the output; they decrement the column count for tab calculations. The default action is equivalent to `-8' (set tabs every 8 columns).</p>
<p class="quote"><i>“Apply yourself. Get all the education you can, but then, by God, do something. Don't just stand there, make it happen” ~ Lee Iacocca, Chairman, Chrysler Motors</i></p>
<p><b>Related:</b><br><br>
<a href="cut.html">cut</a> - Divide a file into several parts<br>
<a href="expr.html">expr</a> - Evaluate expressions <br>
<a href="fmt.html">fmt</a> - Reformat paragraph text <br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern <br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters <br>
<a href="unexpand.html">unexpand</a> - Convert spaces to tabs <br>
<a href="uuencode.html">uuencode</a> - Encode a binary file <br>
Equivalent Windows command: <a href="../nt/syntax-replace.html">SET variable</a> - change part of a  variable</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="expand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

