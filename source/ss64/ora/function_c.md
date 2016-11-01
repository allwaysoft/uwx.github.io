---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE FUNCTION</h1> 
<p>Create a stand-alone function or a call spec.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] FUNCTION [schema.]<i>function</i> [arguments_clause]
      RETURN datatype [invoke_clause]
         [PIPELINED] AS <i>plsql_function_body</i>

   CREATE [OR REPLACE] FUNCTION [schema.]<i>function</i> [arguments_clause]
      RETURN datatype [invoke_clause]
         [PIPELINED | AGGREGATE] USING <i>schema.implementation_type</i>

   CREATE [OR REPLACE] FUNCTION [schema.]<i>function</i> [arguments_clause]
      RETURN <i>datatype</i> [invoke_clause]
         AS LANGUAGE JAVA NAME 'string'

   CREATE [OR REPLACE] FUNCTION [schema.]<i>function</i> [arguments_clause]
      RETURN <i>datatype</i> [invoke_clause]
         AS LANGUAGE C [NAME name] LIBRARY <i>lib_name</i> [WITH CONTEXT][PARAMETERS params]

arguments_clause:
   (argument [IN|OUT|IN OUT] [NOCOPY <i>datatype</i>])

invoke_clause: 
any combination of…
   AUTHID CURRENT_USER
   AUTHID DEFINER
   DETERMINISTIC
   PARALLEL_ENABLE <i>parallel_clause</i>
<i>
</i>parallel_clause:
   (PARTITION <i>argument</i> BY ANY) [{ORDER|CLUSTER} BY (column1,column2..)]

   (PARTITION <i>argument</i> BY {HASH|RANGE}(column1,column2..)) [{ORDER|CLUSTER} BY (column1,column2..)]</pre>
<p>The AUTHID clause lets you specify whether the  function executes with the privileges and in the schema of the user who owns  it or with the privileges and in the schema of CURRENT_USER.</p><p>DETERMINISTIC  indicates that the function should returns the same result value whenever it is called with the same argument values.</p>
<p>AGGREGATE USING will  identify the function as an <a href="syntax-analytic.html">aggregate function</a>,  that evaluates a group of rows and returns a single row.</p>
<p>PIPELINED will instruct Oracle to return the results of a table function iteratively. <br>
  Table functions require the TABLE keyword before the function name in the  query FROM clause.<br> 
  For example:
Select * from TABLE( My_Function(…))</p>
<p>A table function returns a collection type
  (a nested table or varray). </p>
<p class="quote"><i>"All things are created twice. There's a mental or first creation, and a physical or second creation of all things. You have to make sure that the blueprint, the first creation, is really what you want" - Stephen Covey,  (7 Habits)</i></p>
<p><b>Related Commands:</b><br>
<br>
FUNCTION - <a href="function_a.html">ALTER FUNCTION</a> <br>
FUNCTION - <a href="function_d.html">DROP FUNCTION</a><br>
PACKAGE - <a href="package_c.html">CREATE PACKAGE</a> <br>
LIBRARY - <a href="library_c.html">CREATE LIBRARY</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/CODE_PIECES.html">CODE_PIECES</a> 
 <a href="../orad/CODE_SIZE.html">CODE_SIZE</a> 
 <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>      <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>      <a href="../orad/USER_SOURCE.html">USER_SOURCE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

