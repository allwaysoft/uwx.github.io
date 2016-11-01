---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>EXTRACT.exe / Extrac32.exe</h1> 
<p>Uncompress one or more compressed .CAB cabinet files.</p>
<pre>Syntax
      Extrac32 [/Y] [/A] [/D | /E] [/L <i>dir</i>] <i>cabinet</i> [<i>filename</i>...]

      Extrac32 [/Y] <i>source</i> [<i>newname</i>]

      Extrac32 [/Y] /C <i>source destination</i>

      EXTRACT  [/Y] [/A] [/D | /E] [/L <i>dir</i>]<i> cabinet</i> [<i>filename...</i>]

Key
   <i>cabinet</i>    Cabinet file (contains two or more files.)

   <i>filenames </i> Name of the file to extract from the cabinet
              Wild cards (*.*) (.) and multiple files (separated by
              blanks are valid.

   source     Compressed file (a cabinet with only one file.)

   newname    New filename to give the exracted file.
              If not supplied the original name is used.

options
      /A       Process ALL cabinets. Follow cabinet chain.

      /C       Copy source file to destination (to copy from <a href="https://en.wikipedia.org/wiki/Distribution_Media_Format">DMF floppy</a> disks.)

      /D       Display cabinet directory (use with <i>filename</i> to avoid extract)

      /E       Extract all (use instead of *.* to extract all files)

      /L <i>dir</i>   Location to place extracted files (default is current folder)

      /Y       Overwrite files without any prompt</pre>
<p> Extrac32.exe can be used from the command line, but does not display any output on the console. (Extrac32.exe is part of Internet Explorer.)  The output can be redirected through the <a href="more.html">more</a> utility <span class="code">extrac32.exe /? | more</span></p>
<p><b>Examples</b></p>
<p>Extracting the archive demo.cab to the work folder:</p>
<p><span class="code">C:\&gt; extrac32.exe demo.cab /L "C:\work\"</span></p>
<p>Create a self extracting archive containing movie.mov:</p>
<p><span class="code">C:\&gt; makecab movie.mov "temp.cab"<br>
C:\&gt; copy  /b  "%windir%\system32\extrac32.exe"+"temp.cab" "movie.exe"<br>
C:\&gt; del /q /f "temp.cab"</span></p>
<p class="quote"><i>“It is not the man who has too little, but the man who craves more, who is poor” ~ President José Mujica</i></p>
<p><b>Related Commands:</b><br>
  <br>
  <a href="../nt/attrib.html">ATTRIB</a> - Display or change file attributes<br>
  <a href="copy.html">COPY</a> - Copy one or more files to another location<br>
<a href="makecab.html">MAKECAB</a> - Create .CAB file<br>
<a href="https://support.microsoft.com/kb/132913">Q132913</a> - Extract utility <br>
Equivalent bash command (Linux): <a href="../bash/gzip.html">gzip</a> - Compress or decompress named file(s)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

