---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>unshar</h1> 
<p>Unpack shell archive scripts. Each <i>file</i> is processed in turn, 
  as a shell archive or a collection of shell archives. If no files are given, 
then standard input is processed instead.</p>
<pre>Syntax
      unshar [<i>options</i>] ... [<i>file</i>... ]

Options

 -d <i>DIRECTORY</i>
 --directory=<i>DIRECTORY</i>
      Change directory to <i>DIRECTORY</i> before unpacking any files.

 -c
 --overwrite
 -f
 --force
      Passed as an option to the shar file.  Many shell archive scripts
      (including those produced by `shar' 3.40 and newer) accepts a `-c'
      argument to indicate that existing files should be overwritten.

      The option `-f' is provided for a more unique interface.  Many
      programs (such as `cp' and `mv') use this option to trigger the
      very same action.

 -e
 --exit-0
      This option exists mainly for people who collect many shell
      archives into a single mail folder.  With this option, `unshar'
      isolates each different shell archive from the others which have
      been put in the same file, unpacking each in turn, from the
      beginning of the file towards its end.  Its proper operation
      relies on the fact that many shar files are terminated by a
      `exit 0' at the beginning of a line.

      Option `-e' is internally equivalent to `-E "exit 0"'.

 -E <i>STRING</i>
 --split-at=<i>STRING</i>
      This option works like `-e', but it allows you to specify the
      string that separates archives if `exit 0' isn't appropriate.
 
      For example, noticing that most `.signatures' have a `--' on a
      line right before them, one can sometimes use `--split-at=--' for
      splitting shell archives which lack the `exit 0' line at end.  The
      signature will then be skipped altogether with the headers of the
      following message.

 --version
      Print the version number of the program on standard output, then
      immediately exits.

 --help
      Print a help summary on standard output, then immediately exits.</pre>
<p><i class="quote">"I've never had a humble opinion in my life. If you're 
  going to have one, why bother to be humble about it" ~ Joan 
  Baez </i><br>
  <br>
<b> Related:</b></p>
<p><a href="bzip2.html">bzip2</a> - Compress or decompress named file(s)<br>
<a href="cksum.html">cksum</a> - Print CRC checksum and byte counts<br>
pr - Convert text files for printing<br>
<a href="tar.html"> tar</a> - Store, list or extract files in an archive<br>
<a href="unrar.html">unrar</a> - Extract files from rar archives.<br>
<a href="uuencode.html">uudecode</a> - Decode a file created by uuencode<br>
Equivalent Windows commands:
EXTRACT, UNZIP</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="unshar.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

