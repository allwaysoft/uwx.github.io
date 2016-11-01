---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>pbpaste</h1> 
<p>Paste data from the clipboard to STDOUT.</p>
<pre>Syntax
      pbpaste [-pboard {general | ruler  |  find  |  font}]
                 [-Prefer  {ascii | rtf | ps}]

Key
   -pboard  Specify a pasteboard to copy to.
            By default the general pasteboard.

   -Prefer  Specify the type of data to look for in the pasteboard.
            (pbpaste normally looks first for  ASCII data)
            In any case, pbpaste looks for the other formats if the preferred one is not found.</pre>
<p>pbpaste will remove data from the clipboard/pasteboard and write it to the standard output. <br>
It normally looks first for ASCII data in the clipboard and writes that to the standard output; if no ASCII data is in the pasteboard it looks for Encapsulated PostScript; if no EPS if present
it looks for Rich Text.<br>
If none of those types is present in the pasteboard, pbpaste produces no output.</p>
<p><b>Examples</b></p>
<p>Replace spaces in the clipboard text with <span class="code">%20 </span></p>
<p class="code">$ pbpaste | <a href="sed.html">sed</a> 's/ /%20/g'</p>
<p>Look first for RTF:<br>
<span class="code">$ pbpaste -Prefer RTF</span></p>
<p>Save the clipboard to a file:</p>
<p class="code">$ pbpaste &gt; /tmp/ss64.txt</p>
<p class="quote"><i>“Failure is not fatal, but failure to change might be” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p>
<a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pbpaste.1.html">pbpaste man page</a> - Apple.com<br>
<a href="pbcopy.html">pbcopy</a> - Copy data to the clipboard<br>
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
