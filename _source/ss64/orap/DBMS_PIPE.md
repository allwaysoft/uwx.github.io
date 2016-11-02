---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_PIPE</h1> 
<p>Allow two or more sessions in the same instance to communicate. 
  Similar in concept to a UNIX pipe.</p>
<pre>Subprocedures:

CREATE_PIPE Function
              Explicitly creates a pipe (necessary for private pipes). 

PACK_MESSAGE  Build message in local buffer. 

SEND_MESSAGE Function
              Send message on named pipe: This implicitly creates a
              public pipe if the named pipe does not exist. 

RECEIVE_MESSAGE Function
              Copy message from named pipe into local buffer. 

NEXT_ITEM_TYPE Function
              Return datatype of next item in buffer. 

UNPACK_MESSAGE 
              Access next item in buffer. 

REMOVE_PIPE Function
              Remove the named pipe. 

PURGE         Purge contents of named pipe. 

RESET_BUFFER  Purge contents of local buffer. 

UNIQUE_SESSION_NAME Function
              Returns the unique session name.  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br>
Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
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

