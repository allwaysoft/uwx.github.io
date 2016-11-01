---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE PROCEDURE</h1> 
<p>Create a stored stand-alone procedure.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] PROCEDURE [<i>schema</i>.]<i>procedure_name</i> <i>(options)
     </i> <i>invoker_rights</i> AS plsql_sub_program_body

   CREATE [OR REPLACE] PROCEDURE [<i>schema</i>.]<i>procedure_name</i> <i>(options)
     </i> <i>invoker_rights</i> AS LANGUAGE JAVA NAME ('string')

   CREATE [OR REPLACE] PROCEDURE [<i>schema</i>.]<i>procedure_name</i> <i>(options)
     </i> <i>invoker_rights</i> AS LANGUAGE C NAME <i>name</i> LIBRARY <i>lib_name</i> 
        [AGENT IN (<i>argument</i>)] [WITH CONTEXT][PARAMETERS (parameters)]

<i>options: </i>
      <i>argument</i> IN [NOCOPY] <a href="syntax-datatypes.html">datatype</a>
      <i>argument</i> OUT [NOCOPY] <a href="syntax-datatypes.html">datatype</a>
      <i>argument</i> IN OUT [NOCOPY] <a href="syntax-datatypes.html">datatype</a>
     (The procedure can have several <i>arguments</i> separated with commas)

<i>invoker_rights</i>:
      AUTHID CURRENT_USER
      AUTHID DEFINER</pre>
<p>Oracle does not allow  a specific precision for  function parameters, only type of the variable. This means that a parameter defined as <a href="syntax-datatypes.html">integer or number(38)</a> can accept fractional values. if you want to have an integer passed to a procedure/function, use pls_integer instead of integer. </p>
<p>Alternatively reassigning to a variable within the procedure will force Oracle to implicitly convert the datatype and precision to match the variable, thie requires a slightly different definition, e.g. number(37) .</p>
<p>AUTHID DEFINER will execute with the privileges of the procedure schema/owner.<br>
  <br>
  NOCOPY will instruct Oracle to pass the argument as fast as possible. This can significantly enhance performance when passing a large value.</p>
<p><span class="quote"><i>"All the world's a stage,<br>
and all the men and women merely players:<br>
They have their exits and their entrances;<br>
and one man in his time plays many parts" ~ William Shakespeare (As You Like It)</i></span><br>
<br>
<b>Related Commands:</b></p>
<p><a href="procedure_a.html">ALTER PROCEDURE</a><br>
  <a href="procedure_d.html">DROP PROCEDURE</a> <br>
  LIBRARY - <a href="library_c.html">CREATE LIBRARY</a> <br>
  <br>
  <b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/CODE_PIECES.html">CODE_PIECES</a> <br>                                                         
&nbsp;<a href="../orad/CODE_SIZE.html">CODE_SIZE</a> <br>  
&nbsp;<a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SOURCE.html">USER_SOURCE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="procedure_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

