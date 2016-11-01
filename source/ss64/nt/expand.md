---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>EXPAND</h1> 
<p>Uncompress one or more compressed .CAB cabinet files.</p>
<pre>Syntax
      EXPAND [-R] <i>Source Destination</i>
      EXPAND -R <i>Source</i> [<i>Destination</i>]
      EXPAND -I <i>Source</i> [<i>Destination</i>]
      EXPAND -D <i>Source</i>.cab [-F:<i>Files</i>]
      EXPAND <i>Source</i>.cab -F:<i>Files</i> <i>Destination</i>

Options
   <i>Source</i>       Source file specification.  Wildcards can be used.

  -F:<i>Files</i>      Name of files to expand from a .CAB.

  <i>Destination</i>   Destination file | path specification.
                Destination can be a directory.
                If <i>Source</i> is multiple files and -r is not specified,
                Destination must be a directory.

  -R            Rename expanded files.

  -I            Rename expanded files but ignore directory structure.

  -D            Display list of files in source.
                The output display does not display the PATH, but will use it on the extraction.</pre>
<p> The Microsoft  File Expansion Utility dates back to MS-DOS 5 in 1990 supplied on floppy disc.</p>
<p>Versions of Expand prior to 6.0 (Windows 7) have  buggy handling of cab files that contain filenames in subfolders - it will not preserve the path. <a href="http://ss64.org/viewtopic.php?id=1816">Full details</a> over on the forum.</p>
<p><b>Example</b></p>
<p class="code">C:\&gt; Expand -d demo.cab</p>
<p class="quote">"There's no limit possible to the expansion of each one of us" ~ Charles M. Schwab</p>
<p><b>Related:</b><br>
<br>
<a href="attrib.html">ATTRIB</a> - Display or change file attributes<br>
<a href="copy.html">COPY</a> - Copy one or more files to another location<br>
<a href="extract.html">EXTRACT</a> - Uncompress CAB files<br>
<a href="makecab.html">MAKECAB</a> - Create .CAB files<br>
Equivalent bash command (Linux): <a href="../bash/gzip.html">gzip</a> - Compress or decompress named file(s)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="expand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

