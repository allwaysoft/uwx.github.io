---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>echo</h1> 
<p>Display message on screen.</p>
<pre>Syntax
     echo [-n] [<i>string</i> ...]

Key<i>
   </i>-n   Do not print the trailing newline character. This can also be
        achieved by appending `\c' to the end of the string, as is done by
        iBCS2 compatible systems.</pre>
<p>To produce a default beep:</p>
<p> <span class="code">$ echo '^G^G^G^G'</span><br>
Enter  the  ^G characters (which represent ASCII 7, the BEL character) by typing <span class="code">Ctrl-v Ctrl-g</span></p>
<p>The echo utility exits 0 on success, and &gt;0 if an error occurs.</p>
<p><b>Examples</b></p>
<p><span class="code">$ echo "Hello World" </span></p>
<p>Echo can also display in color  using Escape sequences for foreground (30..37) and background (40..47) colours.<br>
Terminal.app preferences  give much finer control over  colors (background + selected text).</p>
<p class="code">$ COL_BLUE="\x1b[34;01m"<br>
$ COL_RESET="\x1b[39;49;00m"<br>
$ echo -e $COL_BLUE"Important Message: "$COL_RESET"This is a message"</p>
<p>Here is a shell script to display all the color combinations: </p>
<pre> #!/bin/bash
 #
 echo ---Bg---40---41---42---43---44---45---46---47
 for i in {30..37} # foreground
 do
 echo -n -e fg$i- 
 for j in {40..47} # background
 do
 echo -n -e '\E['$i';'$j'm SS64'
 tput sgr0 # Reset text attributes to normal without clear
 done
 echo # newline
 done
 
 echo -- Clear BG --
 for n in {30..37} # foreground
 do
 echo -e fg$n '\E['$n';'01'm SS64'
 tput sgr0 # Reset text attributes to normal without clear
 done</pre>
<p class="quote"><i>QED - Quod erat demonstrandum. [Thus it is proven.]</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/echo.1.html">echo man page</a> - Apple.com<br>
<a href="lpr.html">lpr</a> - Print files<br>
  <a href="printf.html">printf</a> - Format and print data<br>
<a href="say.html">say</a> - Convert text to audible speech<br>
<a href="wall.html">wall</a> - Write a message to users</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="echo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
