---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>COMPRESS (<a href="../links/windows.html">2003 Resource Kit</a>)</h1> 
<p> Compress one or more files.</p>
<pre>Syntax
      COMPRESS [-R] [-D] [-S] [ -Z | -ZX ] <i>Source Destination</i>

      COMPRESS -R [-D] [-S] [ -Z | -ZX ] <i>Source</i> [<i>Destination</i>]

Key
   -R   Rename compressed files.

   -D   Update compressed files only if out of date.

   -S   Suppress copyright information.

   -ZX  LZX compression. This is default compression.  

   -Z   MS-ZIP compression.

 <i>Source</i> Source file specification. Wildcards can be used.

<i>Destination</i>
        Destination file | path specification.
        Destination can be a directory.   </pre>
<p> If <i>Source</i> is multiple files and -r is not specified, <i>Destination</i> must be a directory. </p>
<p><b>Examples: </b></p>
<p class="code">COMPRESS demo.txt compressed.txt </p>
<p class="code">COMPRESS -R *.* </p>
<p class="code">COMPRESS -R *.exe *.dll compressed_dir</p>
<p><i class="quote">“In art, truth and reality begin when one no longer understands what one is doing or what one knows, and when there remains an energy that is all the stronger for being constrained, controlled and compressed”    ~ Henri Matisse</i><br>
<br>
<b>Related:</b></p>
<p><a href="http://superuser.com/questions/110991/">Zip a file</a> - using only built-in Batch/VBS commands (Superuser.com)<br>
<a href="compact.html">COMPACT</a> - Compress files or folders on an NTFS partition.<br>
<a href="makecab.html">MAKECAB</a> - Create .CAB files.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="compress.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

