---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>FILESPEC Clause</h1> 
<p>Specify a  number of bytes, kilobytes (K), megabytes (M), gigabytes (G), terabytes (T), petabytes (P), or exabytes (E) in any statement that allocates amounts of disk or memory space.<br>
  <br>
  Syntax:</p>
<pre>   '<i>filename</i>' [<i>size</i>] [REUSE]
   '<i>filename</i>' [<i>size</i>] K [REUSE]
   '<i>filename</i>' [<i>size</i>] M [REUSE]
   '<i>filename</i>' [<i>size</i>] G [REUSE]
   '<i>filename</i>' [<i>size</i>] T [REUSE]
   '<i>filename</i>' [<i>size</i>] P [REUSE]
   '<i>filename</i>' [<i>size</i>] E [REUSE]
</pre>
<p>When creating Datafiles or Redo log file groups - the filename can be several filenames separated with commas.</p>
<p>e.g. <span class="code">('file1' 500 M, 'file2' 10 G)</span></p>
<p>REUSE will  reuse an existing file, or  if the filename does not already exist, will create a new one.<br>
  <b><br>
  Related Commands:<br>
  </b><br>
  <a href="database_a.html">ALTER DATABASE</a>  </p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> <br>  
  <a href="../orad/FILEXT$.html">FILEXT$</a> <br>  
<a href="../orad/SYSFILES.html">SYSFILES</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_filespec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

