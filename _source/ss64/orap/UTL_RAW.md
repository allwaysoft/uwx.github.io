---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages UTL_RAW</h1> 
<p>SQL functions for manipulating RAW datatypes.</p>
<pre>Functions:

CAST_FROM_BINARY_INTEGER Function 
           Returns the binary representation of a BINARY_INTEGER (in RAW). 

CAST_FROM_NUMBER Function 
           Returns the binary representation of a NUMBER (in RAW). 

CAST_TO_BINARY_INTEGER Function 
           Casts the binary representation of a BINARY_INTEGER (in RAW) into a BINARY_INTEGER  

CAST_TO_NUMBER Function 
           Casts the binary representation of a NUMBER (in RAW) into a NUMBER. If include_length is TRUE, the first byte of r encodes the number of bytes in r ( 

CAST_TO_RAW Function 
           Converts a VARCHAR2 represented using n data bytes into a RAW with n data bytes. 

CAST_TO_VARCHAR2 Function 
           Converts a RAW represented using n data bytes into VARCHAR2 with n data bytes. 

CONCAT Function 
           Concatenates up to 12 RAWs into a single RAW. 

LENGTH Function 
           Returns the length in bytes of a RAW r. 

SUBSTR Function 
           Returns len bytes, starting at pos from RAW r. 

TRANSLATE Function 
           Translates the bytes in the input RAW r according to the bytes in the translation RAWs from_set and to_set. 

TRANSLITERATE Function 
           Converts the bytes in the input RAW r according to the bytes in the transliteration RAWs from_set and to_set. 

OVERLAY Function 
           Overlays the specified portion of target RAW with overlay RAW, starting from byte position pos of target and proceding for len bytes. 

COPIES Function 
           Returns n copies of r concatenated together. 

XRANGE Function 
           Returns a RAW containing all valid 1-byte encodings in succession, beginning with the value start_byte and ending with the value end_byte. 

REVERSE Function 
           Reverses a byte sequence in RAW r from end to end. 

COMPARE Function 
           Compares RAW r1 against RAW r2. 

CONVERT Function 
           Converts RAW r from character set from_charset to character set to_charset and returns the resulting RAW. 

BIT_AND Function 
           Performs bitwise logical and of the values in RAW r1 with RAW r2 and returns the anded result RAW. 

BIT_OR Function 
           Performs bitwise logical or of the values in RAW r1 with RAW r2 and returns the or'd result RAW. 

BIT_XOR Function 
           Performs bitwise logical exclusive or of the values in RAW r1 with RAW r2 and returns the xor'd result RAW. 

BIT_COMPLEMENT Function 
           Performs bitwise logical complement of the values in RAW r and returns the complement'ed result RAW.
 </pre>
<p><span class="body">For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br>    Application info can be pushed into <a href="../orav/V$SESSION.html">V$SESSION</a>/<a href="../orav/V$SESSION_LONGOPS.html">V$SESSION_LONGOPS</a></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="UTL_RAW.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

