---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_ENCODE</h1> 
<p>Encode RAW data into a standard encoded format so that the data 
  can be transported between hosts.<br>
  Also contains the decode counterpart. Typically used to encode the body of email 
  text.</p>
<pre>Functions:

BASE64_ENCODE Function 
                Encode the binary representation of the RAW value
                into base 64 elements and return it in the form of
                a RAW string 

BASE64_DECODE Function
                Read the base 64-encoded RAW input string and decode
                it to its original RAW value 

UUENCODE Function
                Read the RAW input string and encode it to the
                corresponding uuencode format string 

UUDECODE Function
                Read the RAW uuencode format input string and
                decode it to the corresponding RAW string 

QUOTED_PRINTABLE_ENCODE Function
                Read the RAW input string and encode it to the
                corresponding quoted printable format string 

QUOTED_PRINTABLE_DECODE Function
                Read the varchar2 quoted printable format input
                string and decode it to the corresponding RAW string  </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

