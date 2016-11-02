---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_OUTPUT</h1> 
<p>Send messages between stored procedures, packages, and triggers. 
  <br>
  This package is especially useful for displaying PL/SQL debugging information. 
</p>
<pre>Subprocedures:

 ENABLE    Enable message output. 

 DISABLE   Disable message output. 

 PUT       Place a line in the buffer.

 PUT_LINE  Place a partial line in buffer. 

 NEW_LINE  Terminate a line created with PUT. 

 GET_LINE  Retrieve one line from the buffer.

 GET_LINES Retrieve an array of lines from buffer.</pre>  
<p>dbms_output.PUT_LINE has a limit of 255 characters, to display more than this, use the alternative procedure available at René Nyffenegger's website: <a href="http://www.adp-gmbh.ch/ora/misc/oru_10028.html">procedure put_line</a></p>
<p>For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i></p>
<p><b></b></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

