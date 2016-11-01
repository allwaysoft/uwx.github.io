---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Strings (<abbr title="Download strings"><a href="http://technet.microsoft.com/en-us/sysinternals/bb897439.aspx">SysInternals</a></abbr>)</h1>
<p>Search for ANSI and UNICODE strings in binary files.</p>
<pre>Syntax
      strings [-a] [-f <i>offset</i>] [-b <i>bytes</i>] [-n <i>length</i>] [-o] [-q] [-s]
         [-u] <i>file_or_directory</i>

Key
   -a  Ascii-only search (Unicode and Ascii is default)
   -b  Bytes of file to scan
   -f  File offset at which to start scanning.
   -o  Print offset in file string was located
   -n  Minimum string length (default is 3)
   -q  Quiet (no banner)
   -s  Recurse subdirectories
   -u  Unicode-only search (Unicode and Ascii is default)</pre>
<p>Strings just scans the file you pass it for UNICODE (or ASCII) strings of a default length of 3 or more UNICODE (or ASCII) characters. <span class="code"></span></p>
<p><b>Examples:</b><br><br>
Search one or more files for the presence of a particular string:</p>
<p class="code">strings *.dll | findstr /i TextToSearchFor</p>
<p class="quote"><i>“My advice is, don’t spend money on therapy. Spend it in a record store” ~ Wim Wenders</i></p>
<p><b>Related:</b></p>
<p><a href="type.html">TYPE</a> - Display the contents of a text file</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="strings.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
