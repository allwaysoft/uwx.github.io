---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>uuencode / uudecode</h1> 
<p> uuencode - encode a binary file <br>
  <br>
uudecode - decode a file created by uuencode</p>
<pre>Syntax
       uuencode [-m] [ <i>file</i> ] <i>name</i>

       uudecode [-o <i>outfile</i>] [ <i>file</i> ]...
</pre>
<p> Uuencode  and  uudecode  are used to transmit binary files over transmission mediums that do not support  other  than
simple ASCII data.</p>
<p>Debian/Ubuntu users can install uuencode as part of the ’<a href="http://packages.ubuntu.com/search?keywords=sharutils">sharutils</a>’ group of Unix utilities with <span class="code"><a href="apt-get.html">apt-get</a> install sharutils</span><br>
  <br>
  Uuencode reads <i>file</i> (or by default the standard input) and
  writes an encoded version to  the  standard  output.   The
  encoding  uses only printing ASCII characters and includes
  the mode of the file and the operand name for use by uude
code.</p>
<p>By default the standard  UU  encoding       
  format  will  be  used. If the option -m is given on the       
      command line base64 encoding is used instead.</p>
<p>Uudecode transforms uuencoded files (or  by  default,  the
      standard  input)  into  the  original form.  The resulting       
      file is named <i>name</i> (or outfile if the -o option is  given)       
      and  will  have  the mode of the original file except that       
setuid and execute bits are not retained. </p>
<p>If  outfile  or       
        <i>name</i> is <span class="code">/dev/stdout</span> the result will be written to standard       
        output.  Uudecode ignores any leading and trailing  lines.       
        The  program  can  automatically  decide which of the both       
        supported encoding schemes are used.</p>
<p><b>Examples</b><br>       
The following example packages  up  a  source  tree,  compresses it, uuencodes it and mails it to a user on another     
system.  When uudecode is run on the  target  system,  the file  `src_tree.tar.Z' will be created which can then be       
uncompressed and extracted into the original tree.</p>
<pre>      tar  cf  -   src_tree   |   compress   |   uuencode
      src_tree.tar.Z | mail sys1!sys2!user</pre>
<p><i class="quote">"One of the main causes of the fall of the Roman Empire was that, lacking zero, they had no way to indicate successful termination of their 
C programs" ~ Robert Firth</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="iconv.html">iconv</a> - Convert the character set of a file<br>compress(1) - <br>
mail(1) - <br>
uucp(1) - <br>
Equivalent Windows command: NTUUCODE.EXE - UUEncode/Decode utility</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

