---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>COMPACT</h1> 
<p> Display or alter the compression  of files on NTFS partitions.     </p>
<pre>Syntax
      COMPACT [/C | /U] [/S[:<i>dir</i>]] [/A] [ /I] [/F] [/Q] [<i>filename</i> [...]]

Key    
   /C        Compress the specified files.  Directories will be marked
             so that files added afterward will be compressed.

   /U        Uncompress the specified files.  Directories will be marked
             so that files added afterward will not be compressed.

   /S        Perform the specified operation on files in the given
             directory and all subdirectories.  
             Default "dir" is the current directory.

   /A        Display files with the hidden or system attributes. 
             These files are omitted by default.

   /I        Continue performing the specified operation even after errors
             have occurred.  By default, COMPACT will stop when an error is
             encountered.

   /F        Force the compress operation on all specified files, even
             those which are already compressed.  Already-compressed files
             are skipped by default.

   /Q        Report only the most essential information.

   <i>filename</i>  Specifies a pattern, file, or directory.
</pre>
<p> Used without parameters, COMPACT displays the compression state of the current directory and any files it contains.</p>
<p> You can use multiple       filenames and wildcards.  You must put spaces between multiple       parameters.</p>
<p><i class="quote">“The truth includes all, and is compact just as much as space is compact"    ~ Walt Whitman</i> (<i class="quote">Leaves of Grass</i>)<br>
<br>
<b>Related:</b><br>
<br>
<a href="attrib.html">ATTRIB - </a>Change file attributes<br>
<a href="compress.html">COMPRESS</a> - Compress one or more files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="compact.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

