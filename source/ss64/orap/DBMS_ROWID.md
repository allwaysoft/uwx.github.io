---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_ROWID</h1> 
<p> Create ROWIDs and obtain information about ROWIDs from PL/SQL 
  programs and SQL statements.</p>
<pre>Subprocedures:

ROWID_CREATE Function
              Create a ROWID, for testing only. 

ROWID_INFO    Returns the type and components of a ROWID. 

ROWID_TYPE Function
              Returns the ROWID type: 0 is restricted, 1 is extended. 

ROWID_OBJECT Function
              Returns the object number of the extended ROWID. 

ROWID_RELATIVE_FNO Function
              Returns the file number of a ROWID. 

ROWID_BLOCK_NUMBER Function
              Returns the block number of a ROWID. 

ROWID_ROW_NUMBER Function
              Returns the row number. 

ROWID_TO_ABSOLUTE_FNO Function
              Returns the absolute file number associated with the
              ROWID for a row in a specific table. 

ROWID_TO_EXTENDED Function
              Convert a ROWID from restricted format to extended. 

ROWID_TO_RESTRICTED Function
              Convert an extended ROWID to restricted format. 

ROWID_VERIFY Function
              Check if a ROWID can be correctly extended by the
              ROWID_TO_EXTENDED function.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i><b><br>
<br>
</b><i>Nothing is permanent. - Buddha</i><b></b><b> <br>
</b></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br><br></span><span class="body"><b>Related Packages:</b></span> </pre>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_ROWID.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

