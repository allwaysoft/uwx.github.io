---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER FUNCTION</h1> 
<p>Recompile a stand-alone function:<br>
  <br>
  Syntax:</p>
<pre>   ALTER FUNCTION [<i>schema</i>.]<i>function</i> COMPILE [DEBUG] [REUSE SETTINGS]

</pre>
<p> DEBUG will instruct the compiler to generate and store 
  the code for use by the PL/SQL debugger.</p>
<p> REUSE SETTINGS will prevent Oracle from dropping and reacquiring
  compiler switch settings. i.e preserve the existing settings
    and
use them for the recompile.</p>
<p>An alternative to ALTER FUNCTION COMPILE is the built-in
  pl/sql package <a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY</a></p>
<p><i class="quote">"Any smoothly functioning technology will have the appearance of magic" ~ Arthur C. Clarke </i><br>
  <b><br>
  Related Commands:<br>
  </b><br>
  FUNCTION - <a href="function_c.html">CREATE FUNCTION</a> <br>
  FUNCTION - <a href="function_d.html">DROP FUNCTION</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/CODE_PIECES.html">CODE_PIECES</a> 
 <a href="../orad/CODE_SIZE.html">CODE_SIZE</a> 
 <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>     <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>     <a href="../orad/USER_SOURCE.html">USER_SOURCE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="function_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

