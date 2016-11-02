---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER MESSAGE TYPE</h1>
<p>Change properties of a message type.</p>
<pre>Syntax
      ALTER MESSAGE TYPE <i>message_type</i><br>         VALIDATION =<br>          { NONE <br>          | EMPTY <br>          | WELL_FORMED_XML <br>          | VALID_XML WITH SCHEMA COLLECTION <i>schema_collection</i> }<br>       [;]

Key:
   NONE  - The message body may contain any data.
   EMPTY - The message body must be NULL
   WELL_FORMED_XML - The message body must contain well-formed XML.
   WITH SCHEMA COLLECTION - XML that conforms to a schema in the collection specified.
</pre> 
<p>  Both sides of a conversation must define the same name for a message type. </p>
<p>Example</p>
<pre> ALTER MESSAGE TYPE<br>   [//SS64.com/Sample/SubmitSample]<br>     VALIDATION = WELL_FORMED_XML ;   </pre>
<p><i>"Don't kill the messenger" - Sophocles 442 B.C.</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="messagetype_c.html">CREATE MESSAGE TYPE</a><br>
  <a href="messagetype_d.html">DROP MESSAGE TYPE</a><br>
  <a href="authorize.html">ALTER AUTHORIZATION</a>  <br>
  <br>
<b>Equivalent Oracle commands</b>:</p>
<p> <a href="../orap/DBMS_AQ.html">DBMS_AQ</a><br>
  <a href="../orap/DBMS_AQELM.html">DBMS_AQELM</a><br>
  <a href="../orap/UTL_HTTP.html">UTL_HTTP</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="messagetype_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

