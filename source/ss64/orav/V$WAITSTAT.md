---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$WAITSTAT </h1>  
 <p> Data Dictionary View </p> 
 
<pre>Columns
   ___________________________
 
   CLASS
   COUNT
   TIMEs

</pre>
<p>A related X$ view worth looking at is X$KCBFWAIT: <br>
  columns:
    <br>
  ADDR <br>
  INDX <br>
  COUNT <br>
TIME </p>
<p> You can use this to display Buffer Waits per file <br>
  (run
      as SYS) <br>
  <span class="code">SELECT count, time, name <br>
  FROM v$datafile df, X$KCBFWAIT fw <br>
  WHERE
  fw.indx+1 = df.file#;</span></p>
<p><b>Related:</b></p>
<p><a href="V$DATAFILE.html">V$DATAFILE<br>
</a><a href="V$FILESTAT.html">V$FILESTAT</a> <a href="V$DATAFILE.html"> </a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$WAITSTAT.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

