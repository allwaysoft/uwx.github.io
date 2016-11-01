---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE SYNONYM</h1>
<p>Create a synonym.</p>
<pre>Syntax
      CREATE SYNONYM [<i>Synonym_schema</i>.] <i>synonym</i> FOR <i>object</i> 

   object:
      <i>server</i>.[<i>database</i>].[<i>schema</i>].<i>object
      database</i>.[<i>schema</i>].<i>object
      schema.object</i>

Key
   synonym        The synonym to create
   Synonym_schema The schema in which the synonym is created.
   </pre>
<p>    Synonyms may be created with dynamic SQL.</p>
<p>Synonyms can be created for the following objects: </p>
<p>Table <br>
  View<br>
  local/global temporary table<br>
  Assembly (CLR) Stored Procedure/Table-valued Function/Scalar Function<br>
  Assembly Aggregate (CLR) Aggregate Functions<br>
  Replication-filter-procedure<br>
  Extended Stored Procedure<br>SQL Stored Procedure<br>
  SQL Scalar Function<br>
  SQL Table-valued Function<br>
SQL Inline-table-valued Function</p>
<p>  The base object need not exist at synonym create time. It must obviously exist at run time.</p>
<p>Example</p>
<pre>CREATE SYNONYM ss64 FOR MyDatabase.MySchema.MyTable;<br>GO</pre>
<p class="quote"><i>"A synonym is a word you use when you can't spell the word you first 
thought of" - Burt Bacharach</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="syn_d.html">DROP SYNONYM</a><br>
Equivalent Oracle command:  <a href="../ora/syn_c.html">CREATE SYNONYM</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syn_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

