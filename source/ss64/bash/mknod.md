---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mknod</h1> 
<p> Create a FIFO, character special file, or block special file 
with the specified name.</p>
<pre>Syntax
      mknod [<i>options</i>]... <i>NAME </i><i>Type</i> [<i>Major Minor</i>]

Options

 -m <i>MODE</i>
 --mode=<i>MODE</i>
     Set the mode of created files to <i>MODE</i>, which is symbolic as in
     `chmod' and uses 0666 minus the bits set in the umask as the point
     of departure.
<i>
Type</i>    The type of file to make:
  `p'     for a FIFO
  `b'     for a block special file
  `c'     for a character special file
<i>
Major/Minor</i> When making a block or character special file, the major and minor 
            device numbers must be given after the file type.</pre>
<p>Unlike the phrase "special file type" above, the term "special 
  file" has a technical meaning on Unix: something that can generate or receive 
  data. Usually this corresponds to a physical piece of hardware, e.g., a printer 
  or a disk. (These files are typically created at system-configuration time.) 
  The `mknod' command is what creates files of this type. Such devices can be 
  read either a character at a time or a "block" (many characters) at a time, 
  hence we say there are "block special" files and "character special" files.</p>
<p class="quote"><i>"I played the organ when I went to military school, when I was 10. They had a huge organ, the second-largest pipe organ in New York State. I loved all the buttons and the gadgets. I've always been a gadget man" ~ Stephen Sondheim</i></p>
<p><b>Related:</b><br>
<br>
<a href="mkfifo.html">mkfifo</a> - Make FIFOs (named pipes)<br>
<a href="sed.html">sed</a> - Stream Editor</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mknod.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

