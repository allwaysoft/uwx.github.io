---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>read</h1> 
<p>Read one line from the standard input, (or from a file) and assign the word(s) to variable name(s).</p>
<pre>Syntax
      read [-ers] [-u <i>fd</i>] [-t <i>timeout</i>] [-a <i>aname</i>] [-p <i>prompt</i>]
              [-n <i>nchars</i>] [-d <i>delim</i>] [<i>name</i> ...]

Key
   -a <i>aname</i><br>             The <i>words</i> are assigned to sequential indices of the array variable <i>aname</i>, starting at 0.<br>             aname is unset before any new values are assigned.  Other name arguments are ignored.<br><br>   -d <i>delim</i><br>             The first character of <i>delim</i> is used to terminate the input line, rather than newline.
<br>   -e        If the standard input is coming from a terminal, readline is used to obtain the line.
<br>   -n <i>nchars</i><br>             read returns after reading <i>nchars</i> characters rather than waiting for a complete line of<br>             input.<br>   -p <i>prompt</i><br>             Display <i>prompt</i> on standard error, without a trailing newline, before attempting to read<br>             any input. The prompt is displayed only if input is coming from a terminal.
<br>   -r        Backslash  does not act as an escape character.  The backslash is considered to be part<br>             of the line. In particular, a backslash-newline pair can not be used as a line continuation.<br><br>   -s        Silent mode. If input is coming from a terminal, characters are not echoed.
<br>   -t <i>timeout</i><br>             Cause read to time out and return failure if a complete line of input is not read<br>             within <i>timeout</i> seconds. This option has no effect if read is not reading input from<br>             the terminal or a pipe.
<br>   -u <i>fd</i>     Read input from file descriptor <i>fd</i>.</pre>
<p>One line is read from the standard input, or from the file descriptor <i>fd</i> supplied as an  argument to the -u option, and the first word is assigned to the first name, the second word to the second name, and so on, with leftover words and their intervening separators assigned to the last name. </p>
<p>If there are fewer words read from the input stream than names, the remaining names are assigned empty values. The characters in IFS are used to split the line into words. The backslash character (\) can be used to remove any special meaning for the next character read and for line continuation.</p>
<p>If no <i>names</i> are supplied, the line read is assigned to the variable REPLY. </p>
<p>The return code is zero, unless end-of-file is encountered, read times out, or an invalid file descriptor is supplied as the argument to -u.<br>
read is a bash builtin command.</p>
<p class="quote"><i>“Let us read and let us dance - two amusements that will never do any harm to the world”  ~ Voltaire</i></p>
<p><b>Related:</b></p>
<p><a href="expr.html">expr</a> - Evaluate expressions</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="read.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
