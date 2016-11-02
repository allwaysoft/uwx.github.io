---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER XML SCHEMA COLLECTION</h1>
<p>Add new  schema components to an existing XML schema collection.</p>
<pre>Syntax
      ALTER XML SCHEMA COLLECTION [<i>relational_schema</i>.]<i>sql_identifier</i> ADD '<i>Schema Component</i>'

Key
   relational_schema  The relational schema name.

   sql_identifier     SQL identifier for the XML schema collection.

   Schema Component   The schema component to insert.
</pre>
<p>    This command can be used to add an entirely new XML schema, (namespace not currently in the XML schema collection), or add a new component to an existing namespace in the collection.</p>
<p>Example</p>
<pre>ALTER XML SCHEMA COLLECTION MyCollection ADD '<br>  &lt;schema xmlns="http://www.w3.org/2001/XMLSchema" <br>         targetNamespace="http://MySchema/my_xml_schema"&gt; <br>     &lt;element name="anotherElement" type="byte"/&gt; <br> &lt;/schema&gt;'</pre>
<p class="quote"><i>"I have spread my dreams under your feet;<br>
Tread softly because you tread on my dreams"
~ William Butler Yeats</i></p>
<p><b>Related commands:</b></p>
<p>  sys.xml_schema_collections<br>
  sys.xml_schema_namespaces  <br>
  <a href="xml_c.html">CREATE XML SCHEMA COLLECTION</a><br>
  <a href="xml_d.html">DROP XML SCHEMA COLLECTION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

