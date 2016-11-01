---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE DIRECTORY</h1> 
<p>Create a directory - an alias for a filesystem pathname - used 
  to store LOBs.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] DIRECTORY <i>directory</i> AS <i>'pathname'</i>;</pre>
<p><b>Example</b></p>
<p class="code"> Create or replace DIRECTORY dir_test as 'c:\test';</p>
<p class="code">declare<br>
MyFile utl_file.file_type;</p>
<p class="code">begin<br>
MyFile := utl_file.fopen('DIR_TEST', 'some_filename.txt', 'w');<br>
utl_file.put_line(MyFile, 'Here is some example text');<br>
utl_file.put_line(MyFile, 'Another line of text');<br>
utl_file.fclose(MyFile);<br>
end;<br>
/</p>
<p><i><span class="quote">"Free at last! Free at last! Thank God almighty, we are free at last!" ~ Rev Martin Luther King JR </span></i></p>
<p><b>Related Commands:</b></p>
<p>DIRECTORY - <a href="directory_d.html">DROP DIRECTORY</a></p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_DIRECTORIES.html">DBA_DIRECTORIES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_DIRECTORIES.html">ALL_DIRECTORIES</a> </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="directory_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

