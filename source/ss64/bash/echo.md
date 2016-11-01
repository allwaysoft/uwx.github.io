---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>echo</h1> 
<p>Display message on screen, writes each given STRING to standard 
output, with a space between each and a newline after the last one.</p>
<pre>Syntax
     echo [<i>options</i>]... [<i>string</i>]...

Options

 -n
     Do not output the trailing newline.

 -E
     Disable the interpretation of the following backslash-escaped characters

 -e
     Enable interpretation of the following backslash-escaped
     characters in each STRING:

    \a          alert (bell)

    \b          backspace

    \c          suppress trailing newline

    \e          escape <br> <br>    \f          form feed

    \n          new line

    \r          carriage return

    \t          horizontal tab

    \v          vertical tab

    \\          backslash

    \<i>NNN</i>
          the character whose ASCII code is NNN (octal); if NNN is not
          a valid octal number, it is printed literally.

    \x<i>nnn</i><br>          the character whose ASCII code is the hexadecimal value <br>          nnn (one to three digits)</pre>
<p>echo is a BASH built-in command</p>
<p><b>Examples</b></p>
<p>Echo can also display in color by using Escape sequences for  foreground (30..37) and background (40..47) colours.</p>
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
<p><i class="quote">“The only thing that helps me pass the time away; is knowing I'll be back at Echo Beach some day” ~ Martha and the Muffins</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="head.html">head</a> - Output the first part of file(s)<a href="less.html"><br>
less</a> - Display output one screen at a time<br>
<a href="more.html">more</a> - Display output one screen at a time <br>
<a href="notify-send.html">notify-send</a> - Send desktop notifications<br>
pg - Display one page at a time<br>
<a href="tee.html">tee</a> - Redirect output to multiple files <br>
Equivalent Windows command:  <a href="../nt/echo.html">ECHO</a> - Display message on screen</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="echo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

