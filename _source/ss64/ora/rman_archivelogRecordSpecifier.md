---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="rman.html">RMAN</a> <code>archivelogRecordSpecifier</code></h1> 
<p>Subclause to specify a range of archived redo logs.<br>
<br>
Syntax:</p>
<pre>ARCHIVELOG 
     {   ALL 
       | LIKE '<i>string_pattern</i>' 
       | <a href="#archlogRange">archlogRange</a> [LIKE '<i>string_pattern</i>' [THREAD [=] <i>integer</i>]]
     }
 
   archlogRange<a id="archlogRange"></a>::=
    {
      <b>{</b>  FROM TIME  [=] '<i>date_string</i>'
       | UNTIL TIME  [=] '<i>date_string</i>'
       | TIME BETWEEN '<i>date_string</i>' AND '<i>date_string</i>' 
       | FROM TIME [=] '<i>date_string</i>' UNTIL TIME [=]'<i>date_string</i>' 
       | UNTIL SCN [=] <i>integer</i>
       | SCN BETWEEN <i>integer</i> AND <i>integer</i> 
       | FROM SCN [=] <i>integer</i> [UNTIL SCN [=] integer]
      <b>}</b>
     [THREAD [=] <i>integer</i>]
       | <b>{</b>  UNTIL SEQUENCE [=] <i>integer</i>
          | FROM SEQUENCE [=] <i>integer</i> [UNTIL SEQUENCE [=] <i>integer</i>] 
          | SEQUENCE [BETWEEN <i>integer</i> AND] <i>integer</i>
         <b>}</b>
      [THREAD [=] <i>integer</i>]
   }</pre>
<p><i class="quote">"We don't want to go back to tomorrow, we want to go forward" ~ Dan Quale</i><b><br><br>
Related:</b></p>
<p><b>  </b><a href="rman_crosscheck.html">CROSSCHECK</a> - Check whether backup items still exist.<br>
<a href="rman_restore.html">RESTORE</a> - Restore files from an RMAN backup (or copy) </p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

