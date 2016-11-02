---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_PG</h1> 
<p>Oracle Procedural Gateway.<br>
  <br>
  Convert COBOL numeric data into Oracle numbers and convert Oracle numbers into 
  COBOL numeric data.</p>
<pre>Subprocedures:
MAKE_NUMBER_TO_RAW_FORMAT
            Make a number_to_raw format conversion specification
            used to convert an Oracle number of declared precision
            and scale to a RAW byte-string in the remote host internal
            format. 

MAKE_RAW_TO_NUMBER_FORMAT
            Make a raw_to_number format conversion specification used
            to convert a RAW byte-string from the remote host internal
            format into an Oracle number of comparable precision and scale.

NUMBER_TO_RAW
            Convert an Oracle number of declared precision and scale to
            a RAW byte-string in the remote host internal format. 

NUMBER_TO_RAW_ FORMAT
            Convert, according to the number_to_raw conversion format
            n2rfmt, an Oracle number numval of declared precision and scale
            to a RAW byte-string in the remote host internal format. 

RAW_TO_NUMBER
            Convert a RAW byte-string from the remote host internal format
            into an Oracle number. 

RAW_TO_NUMBER_FORMAT
            Convert, according to the raw_to_number conversion format
            r2nfmt, a RAW byte-string rawval in the remote host internal
            format to an Oracle number. 

WMSG        Extract a warning message specified by wmsgitem from wmsgblk.

WMSGCNT     Test a wmsgblk to determine how many warnings, if any, are
            present. </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:</b><br></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_PG.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

