---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1> Operators, comments, delimiters </h1> 
<p>For SQL*Plus and PL/SQL</p>
<pre>Comparison Operators:

   NOT   IS NULL   LIKE   BETWEEN   IN   AND   OR
   +  -  * / @  ;  =  &lt;&gt;  !=  ||  &lt;=   &gt;=

Comments
   -- comment
   /* comment */ 
   &lt;&lt; Begin label - end label &gt;&gt;

Assignment operator
   :=
   You can assign values to a variable, literal value, or function call 
   but NOT a table column.

Exponential operator (valid for plsql only)
   ** 

<b>Delimiters</b>
 Item separator . 
 Character string delimiter '
 Quoted String delimiter "
 Bind variable indicator :
 Attribute indicator %
 Statement terminator  ;

<b>Functions
</b>   All <a href="../ora/syntax-functions.html">SQL functions</a> that return a single row can be used in 
   a plsql procedural statement. Group and DECODE functions are
   not supported.

<b>Examples</b>

v_myDate := TO_DATE('01-OCT-2001',DD-MON-YYYY)
The TO_DATE is required because date formats are region specific.

new in oracle 8i is 
v_mychar := '01-OCT-2001'
Previous versions need a to_char()

Assigning values to a RECORD TYPE or ROWTYPE variable
use dot notation to specify the field:

   job_record.jobname := 'Test Job';</pre>
<p><span class="body"><b> <br>
  Related:</b></span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

