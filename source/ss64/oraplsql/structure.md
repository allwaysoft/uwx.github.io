---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>Structure of PL/SQL Statements</h1> 
<p>All PL/SQL functions and procedures, including packaged procedures 
  and anonymous blocks follow the following basic layout: <br>
  <br>
  Structure:</p>
<pre> PROCEDURE <i>procedure</i> (<br>    parameter1 <i>datatype</i> [DEFAULT <i>default_value1 </i>],
    parameter2 <i>datatype</i> [DEFAULT <i>default_value2 </i>] [,...]) IS

 <a href="declare.html">DECLARE</a>
 /* declarations */
   
 <a href="begin.html">BEGIN</a>
 /* executable code */

 <a href="exception.html">EXCEPTION</a>
 /* error handling */

 END;
 /

or for a function:

   FUNCTION <i>function</i> RETURN <i>datatype </i>IS
   DECLARE  /* declarations */
   BEGIN    /* executable code */
  [RETURN <i>value</i>]
   EXCEPTION /* error handling */
   END;
   /
</pre>
<p>  To create a procedure:</p>
<pre>CREATE OR REPLACE PROCEDURE <i>procedure</i> IS
 ...
 END <i>procedure</i>;
 /</pre>
<p> Or a flat file SQL script can contain simply:</p>
<pre>   BEGIN
   /* executable code */

   EXCEPTION
   /* error handling */

   END;</pre>
<p>This is known as an 'anonymous block'</p>
<p><b>  </b></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="structure.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

