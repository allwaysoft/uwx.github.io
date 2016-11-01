---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>iconv</h1> 
<p>Convert encoding of a file from one character set encoding to another.</p>
<pre>Syntax
      iconv [<i>Option...</i>] -f <i>fromCode</i> -t <i>toCode inputfile</i>...
      iconv -l

Options

   -f <i>encoding</i>
   --from-code=<i>encoding</i>
          Convert characters From <i>encoding</i>.

   -t <i>encoding</i>
   --to-code=<i>encoding</i>
          Convert characters To <i>encoding</i>.

   -l
   --list
          List the names of the supported encodings
          For the libiconv implementation, the names are printed in upper case, separated by
          whitespace, and alias names of an encoding are listed on the same line as the encoding itself.

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
          Suppress error messages about invalid or unconvertible characters are omitted.</pre>
<p> The iconv program converts the encoding of characters in inputfile from one coded character set to another. The result is written to standard output unless otherwise specified by the --output option. </p>
<p><b>Examples</b></p>
<p>Convert input.txt from ISO-8859-1 to UTF-8 and save as output.txt </p>
<p class="code">$ iconv -f ISO-8859-1 -t UTF-8 &lt; input.txt &gt; output.txt</p>
<p>Convert Demo1.txt and Demo2.txt from WINDOWS-1252 to UTF-8 and save as a single file output.txt </p>
<p class="code">$ iconv -f WINDOWS-1252 -t UTF-8 Demo1.txt Demo2.txt &gt; output.txt</p>
<p class="quote"><i> “Acceptance of a double standard has always been a sign of inferiority. To let someone behave according to one set of principles or values while demanding that you be subjected to others is to validate a claim of superiority that justifies the inconsistent and unfair behavior” - Bruce Thornton (The Truth about Tolerance)</i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/iconv.1.html">iconv man page</a> - Apple.com<a href="comm.html"><br>
</a><a href="uuencode.html">uuencode</a> - Encode a binary file<br>
<a href="http://en.wikipedia.org/wiki/Character_encoding">Character encoding</a> - Wikipedia <br>
Equivalent (Linux) bash command:<a href="../bash/iconv.html"> iconv </a> - Convert encoding of a file from one character set encoding to another.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="iconv.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
