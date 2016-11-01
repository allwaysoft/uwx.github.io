---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_FILE</h1> 
<p>Read and write operating system text files.<br>
  <br>
  FOPEN returns a file handle, which you use in subsequent calls to GET_LINE or 
  PUT to perform stream I/O to a file. When file I/O is done, call FCLOSE to complete 
  any output, and free resources associated with the file. </p>
<pre>Subprocedures:

FOPEN Function 
          Open a file for input or output with the default line size. 

FOPEN Function 
          Open a file with the maximum line size specified. 

FOPEN_NCHAR Function 
          Open a file in Unicode for input or output. 

FOPEN_NCHAR Function 
          Open a file in Unicode for input or output,
          with the maximum line size specified. 

IS_OPEN Function 
          Determine if a file handle refers to an open file. 

FCLOSE    Closes a file. 

FCLOSE_ALL  
          Closes all open file handles. 

GET_LINE  Read text from an open file. 

GET_LINE_NCHAR  
          Read text in Unicode from an open file. 

PUT       Write a string to a file. 

PUT_NCHAR Write a Unicode string to a file. 

NEW_LINE  Write one or more operating system-specific line
          terminators to a file. 

PUT_LINE  Write a line to a file. This appends an operating system-
          specific line terminator. 

PUT_LINE_NCHAR  
          Write a Unicode line to a file. 

PUTF      A PUT procedure with formatting. 

PUTF_NCHAR  
          A PUT_NCHAR procedure with formatting.
          Writes a Unicode string to a file, with formatting. 

FFLUSH    Physically write all pending output to a file.  </pre>
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
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_FILE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

