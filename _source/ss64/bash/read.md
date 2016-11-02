---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>read</h1> 
<p><span class="body">Read a line from standard input</span></p>
<pre>Syntax
      read [-ers] [-a <var>aname</var>] [-p <var>prompt</var>] [-t <var>timeout</var>]
              [-n <var>nchars</var>] [-d <var>delim</var>] [<var>name</var>...]

Options

  -a <i>aname</i> 
    The words are assigned to sequential indices of the array variable aname, 
    starting at 0. All elements are removed from aname before the assignment. 
    Other name arguments are ignored.

  -d <i>delim</i> 
    The first character of delim is used to terminate the input line,
    rather than newline.

  -e 
    If the standard input is coming from a terminal, Readline is used
    to obtain the line.

  -n <i>nchars</i>
    read returns after reading nchars characters rather
    than waiting for a complete line of input.

  -p <i>prompt</i>
    Display prompt, without a trailing newline, before attempting
    to read any input. The prompt is displayed only if input is coming from a
    terminal.

  -r   
    If this option is given, backslash does not act as an escape character.
    The backslash is considered to be part of the line. In particular, a backslash-newline
    pair can not be used as a line continuation. 

  -s    
    Silent mode. If input is coming from a terminal, characters are not echoed.

  -t <i>timeout</i>   
    Cause read to time out and return failure if a complete line
    of input is not read within timeout seconds. This option has no
    effect if read is not reading input from the terminal or a pipe.</pre>
  

<p>This is a BASH shell builtin.<br>
  <br>
  One line is read from the standard input, and the first word is assigned to 
  the first <var>name</var>, the second word to the second <var>name</var>, and 
  so on, with leftover words and their intervening separators assigned to the 
  last <var>name</var>. <br>
  <br>
  If there are fewer words read from the standard input than names, the remaining 
  names are assigned empty values. <br>
  <br>
  The characters in the value of the <code>IFS</code> variable are used to split 
  the line into words. <br>
  <br>
  The backslash character <samp>`\'</samp> can be used to remove any special meaning 
  for the next character read and for line continuation. <br>
  <br>
  If no names are supplied, the line read is assigned to the variable <code>REPLY</code>. 
  The return code is zero, unless end-of-file is encountered or <code>read</code> 
  times out. </p>
<p><b>Examples</b></p>
<p>#!/bin/bash<br>
  read var_year <br>
  echo "The year is: $var_year"</p>
<p>echo -n "Enter your name and press [ENTER]: " <br>
  read var_name<br>
  echo "Your name is: $var_name"</p>
<p class="quote"><i>"Formal education will make you a living; self-education will make you a fortune" ~ Jim Rohn</i></p>
<p><b>Related:</b><br>
<br>
<a href="select.html">select</a> - Accept keyboard input<br>
Equivalent Windows commands: <a href="../nt/set.html">
SET /P</a> - Prompt for user input</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

