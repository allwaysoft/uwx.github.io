---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE XML SCHEMA COLLECTION</h1>
<p>Import schema components into a database.</p>
<pre>Syntax
      CREATE XML SCHEMA COLLECTION [<i>relational_schema</i>.]<i>sql_identifier</i> AS <i>Expression</i>

Key
   relational_schema  The relational schema name.

   sql_identifier     SQL identifier for the XML schema collection.

   Expression         A string constant or scalar variable.
                      (varchar, varbinary, nvarchar, nvarbinary, or xml type)</pre>
<p>    The variable in the example below is of nvarchar(max) type. The variable can also be of xml data type, in which case, it is implicitly converted to a string.</p>
<p>Example</p>
<pre>DECLARE @MySchemaCollection nvarchar(max)<br>Set @MySchemaCollection  = N' copy the schema collection here'<br>CREATE XML SCHEMA COLLECTION MyCollection AS @MySchemaCollection </pre>
<p class="quote"><i>"There are people who put their dreams in a
little box and say, "Yes, I've got dreams." Then
they put the box away and bring it out once in
awhile to look in it, and yep, they're still there.
These are great dreams, but they never even get
out of the box." ~ Erma Bombeck</i></p>
<p><b>Related commands:</b></p>
<p>  sys.xml_schema_collections<br>
  sys.xml_schema_namespaces  <br>
<a href="xml_d.html">DROP XML SCHEMA COLLECTION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="xml_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

