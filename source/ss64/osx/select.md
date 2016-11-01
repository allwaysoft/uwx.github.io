---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>select</h1> 
<p>Expand <var>words</var>, generate a list of items.</p>
<pre>Syntax
      select <i>name</i> [ in <i>word</i> ] ; do <i>list</i> ; done</pre>
<p>The list of words following <span class="code">in</span> is expanded, generating a list of items. The set of expanded
words is printed on the standard error, each preceded by a number. </p>
<p>If the <span class="code">in</span> word is omitted,
the positional parameters are printed (see PARAMETERS). The PS3 prompt is then displayed and a line read from the standard input. If the line consists of a number  corresponding to one of the displayed words, then the value of <i>name</i> is set to that word. </p>
<p>If the line is
empty, the words and prompt are displayed again. If EOF is read, the command completes. Any
other value read causes <i>name</i> to be set to null. The line read is saved in the variable REPLY.</p>
<p>The <i>list </i>is executed after each selection until a break command is executed. </p>
<p>The exit status
of select is the exit status of the last command executed in list, or zero if no commands were
executed.</p>
<p>select is a bash construct.</p>
<p>Example script </p>
<pre>#!/bin/bash

echo "Enter the number of the file you want to view: (ctrl-C to quit)"

PS3="Your choice: "

select FILENAME in *;
do
  echo "You picked $FILENAME ($REPLY)"
done</pre>
<p class="quote"><i>“In expanding the field of knowledge, we but increase the horizon of ignorance” ~ Henry Miller </i> </p>
<p><b>Related:</b></p>
<p>
<a href="break.html">break</a> - Exit from a loop<br>
<a href="while.html">while</a> - Execute commands <br>
continue - Resume the next iteration of a while or foreach loop</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
