---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE PACKAGE / PACKAGE BODY </h1> 
<p>Create a PL/SQL stored package. A package is a database object that contains PL/SQL types, objects and subprograms. <br>
  <br>
Syntax:</p>
<pre>   CREATE [OR REPLACE] PACKAGE [schema.]<i>package_name</i> [<i>invoker_rights</i>] AS <i>package</i>

   CREATE [OR REPLACE] PACKAGE BODY [schema.]<i>package_name</i> AS <i>plsql_package_body</i>

<i>   invoker_rights</i>:  
      AUTHID CURRENT_USER
      AUTHID DEFINER</pre>
<p>AUTHID DEFINER will cause the package to execute with the privileges of the package 
owner.</p>
<p><b>Example</b></p>
<pre>CREATE or REPLACE PACKAGE SS64_data as
   TYPE ss64_cursor IS REF CURSOR RETURN all_objects%rowtype
END SS64_data;

CREATE or REPLACE PROCEDURE get_owner_objects(owner_name IN varchar2,
 cat_cursor IN OUT SS64_data.ss64_cursor)
BEGIN
    OPEN cat_cursor FOR SELECT * from all_objects WHERE owner=owner_name;
END;</pre>
<p><span class="quote"><i>"If you have built castles in the air, your work need not be lost… put foundations under them" ~ Henry David Thoreau </i></span><br>
  <br>
<b>Related Commands:</b></p>
<p><a href="package_a.html">ALTER PACKAGE</a> <br>
  <a href="package_d.html">DROP PACKAGE</a><br>
<a href="../oraplsql/procedures.html">An overview of Stored Procedures &amp; PL/SQL</a><br>
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
<div id="bl" class="footer"><a href="package_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

