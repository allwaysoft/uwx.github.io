---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>iconv </h1> 
<p>Convert encoding of a file from one character set encoding to another.</p>
<pre>Syntax
      iconv [<i>Option...</i>] -f <i>encoding</i> -t <i>encoding inputfile</i> 
      iconv -l

Options

   -f <i>encoding</i>
   --from-code <i>encoding</i>
          Convert characters From <i>encoding</i>.

   -t <i>encoding</i>
   --to-code <i>encoding</i>
          Convert characters To <i>encoding</i>.

   --list
          List known coded character sets
          The encodings available are system dependent.

   -o <i>file</i>
   --output <i>file</i>
          Specify an output file (instead of stdout.)

Options controlling conversion problems:

   -c     When this option is given, characters that cannot be converted are silently
          discarded, instead of leading to a conversion error.

   --unicode-subst=<i>formatstring</i>
          Replace Unicode characters that cannot be represented in the target
          encoding with a placeholder string that is constructed from <i>formatstring</i>,
          applied to the Unicode code point. The formatstring must be in the same
          format as for the <a href="printf.html">printf</a> command or the  printf() function, taking either
          no argument or exactly one unsigned integer argument.

   --byte-subst=<i>formatstring</i>
          Replace bytes in the input that are not valid in the source encoding 
          with a placeholder string constructed from the given <i>formatstring</i>,
          applied to the byte's value. The formatstring must be in the same
          format as for the <a href="printf.html">printf</a> command or  the  printf()  function, taking either
          no argument or exactly one unsigned integer argument.

   --widechar-subst=<i>formatstring</i>
          Replace wide characters in the input that are not valid in the source
          encoding with a placeholder string that is constructed from the given
          <i>formatstring</i>, applied to the byte's value. The formatstring must
          be in the same format as for the <a href="printf.html">printf</a> command or the  printf() function,
          taking either no argument or exactly one unsigned integer argument.

Options controlling error output:

   −s
   −−silent
	       Suppress error messages about invalid or unconvertible characters are omitted

   --verbose
        Print progress information. </pre>
<p> 
  The iconv program converts the encoding of characters in inputfile from one coded character set to another. The result is written to standard output unless otherwise specified by the --output option. </p>
<p><b>Examples</b></p>
<p>Convert input.txt from ISO-8859-1 to UTF-8 and save as output.txt </p>
<p class="code">$ iconv -f ISO-8859-1 -t UTF-8 &lt; input.txt &gt; output.txt</p>
<p>Script to convert all .HTML files in a directory from Windows 1242 to UTF8 (from <a href="http://sharealike.org/index.php/2008/12/12/script-to-convert-windows-1252-files-to-utf-8/">brianwc/ShareAlike</a>) </p>
<p class="code">#/bin/bash<br>
LIST=`ls *.html`<br>
for i in $LIST;<br>
do iconv -f WINDOWS-1252 -t UTF8 $i -o $i."utf8";<br>
mv $i."utf8" $i;<br>
done</p>
<p class="quote"><i> “Acceptance of a double standard has always been a sign of inferiority. To let someone behave according to one set of principles or values while demanding that you be subjected to others is to validate a claim
of superiority that justifies the inconsistent and unfair behavior” ~ Bruce Thornton (The Truth about Tolerance)</i></p>
<p><b>Related:</b><br>
<br>
<a href="uuencode.html">uuencode</a> - Encode a binary file<br>
<a href="http://en.wikipedia.org/wiki/Character_encoding">Character encoding</a> - Wikipedia <br>
Equivalent Windows command: <a href="../nt/type.html">TYPE</a>   - Convert to Windows 1252.</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

