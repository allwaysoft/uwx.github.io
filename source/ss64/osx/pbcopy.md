---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>pbcopy</h1> 
<p>Copy data  from STDIN to the clipboard.</p>
<pre>Syntax
      pbcopy  [-<i>pboard</i> {<u>general</u> | ruler | find | font}]

Key
   -pboard  Specify a pasteboard to copy to.
            By default the general pasteboard.</pre>
<p>Takes the standard input and places it in the specified pasteboard. If no pasteboard is specified, the general pasteboard will be used by default. </p>
<p>The input is placed in the pasteboard as ASCII data unless it begins with the Encapsulated PostScript (EPS) file header or the Rich Text Format (RTF) file header, in which case it is placed in
the pasteboard as one of those data types.</p>
<p><b>Examples</b></p>
<p># Copy a list of files in your home directory to the OS X clipboard:<br>
<span class="code">$ ls ~ | pbcopy</span></p>
<p># Copy the contents of a file to the clipboard:<br>
<span class="code">$ pbcopy &lt; cookies.txt</span><span class="code"></span></p>
<p># Copy part of a file to the clipboard:<br>
<span class="code">$ grep 'ip address' serverlist.txt | pbcopy</span><br>
<br>
<i class="quote">"God shows his contempt for wealth by the kind of person he selects to receive it" ~ Austin O'Malley</i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pbcopy.1.html">pbcopy man page</a> - Apple.com<br>
<a href="pbpaste.html">pbpaste</a> Paste data from the Clipboard<br>
<a href="printenv.html">printenv</a> - Print environment variables</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
