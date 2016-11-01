---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP XML SCHEMA COLLECTION</h1>
<p>Delete an entire XML schema collection and all of its components.</p>
<pre>Syntax
      DROP XML SCHEMA COLLECTION [<i>relational_schema</i>.]<i>sql_identifier</i>

Key
   <i>relational_schema</i>   The relational schema name.
   <i>sql_identifier</i>      The XML schema collection to drop.</pre>

<p>    You cannot drop an XML schema collection if it is associated with any xml type parameter or column,
specified in any table constraints or referenced in a schema-bound function / stored procedure (CREATE FUNCTION ...
WITH SCHEMABINDING) </p>
<p>Example</p>
<pre>DROP XML SCHEMA COLLECTION MySchemaCollection<br>GO</pre>
<p class="quote"><i>"The word schema comes from the Greek word "σχήμα" (skhēma) that means shape or more generally plan" - <a href="http://en.wikipedia.org/wiki/Schema">Wikipedia</a></i></p>
<p><b>Related commands:</b></p>
<p>  <a href="xml_c.html">CREATE XML SCHEMA COLLECTION</a><br>
  <a href="xml_a.html">ALTER XML SCHEMA COLLECTION</a><br>
Equivalent Oracle command:<a href="../orap/DBMS_XMLSAVE.html">DBMS_XMLSAVE</a>.deleteXML</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="xml_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

