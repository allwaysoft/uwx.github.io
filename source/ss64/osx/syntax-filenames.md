---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Filenames</h1>

<p>The only two invalid characters for OS X filesystems (UFS, HFS+, and HFSX) are slash 
('<span class="code">/</span>') and null ('<span class="code">\0</span>')</p>
<h2>Text encoding of filenames</h2>
<p>OS X supports international unicode characters in filenames, the filename must be normalized to Apple's "nearly"
Unicode NFD (NFD with Apple HFS+ variations).</p>
<p>OS X always uses NFD on its hfs+ filesystem (or even when using FAT on a memory stick).<br>
(The above assumes you are using the POSIX API, not the legacy pre-OS X API.)</p>
<p>Windows XP and Linux do not perform any normalization, they just store the filename as given.</p>
<h2>Cross-platform compatibility</h2>
<p>The following  characters are valid in OS X but should be avoided in filenames if you need compatibility with other operating systems:</p>
<p><span class="code">: </span>(colon)<br>
<span class="code">\ </span>(back-slash)<br>
<span class="code">¢™$® </span>(Unicode symbols)<br>
<span class="code">. , [ ] { } ( ) ! ; " ' * ? &lt; &gt; |</span> (Punctuation marks)<br>
White space characters such as spaces, tabs, new lines and embedded returns.<br>
</p>
<p> <b>Related:</b>
</p><p><a href="http://support.apple.com/kb/HT5923">Cross-platform filename best practices and conventions</a> - Apple Support<br>
<a href="http://www.jroller.com/dna/entry/unicode_encoding_of_file_name">jroller.com</a> - unicode file names<br>
<a href="http://unicode.org/reports/tr15/">unicode.org</a> - 
Normalization Form D (NFD)<br>
<a href="syntax.html">OS X Syntax</a>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --></p><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-filenames.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
