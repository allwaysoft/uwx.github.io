---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP SCHEMA</h1>
<p>Remove a schema from the database.</p>
<pre>Syntax
      DROP SCHEMA <i>schema</i>
	  
Key<i>
   </i><i>schema</i>     The schema to drop. </pre>
<p>All objects in the schema must be dropped before the schema is dropped.</p>
<p>Example</p>
<pre>DROP TABLE MySchema.MyTable1;
DROP TABLE MySchema.MyTable2;<br>DROP SCHEMA MySchema;<br>GO</pre>
<p><i>"In Europe everything is permanent, and in America everything is
  provisional. This is the great distinction which, if always kept in
mind, will save a great deal of idle astonishment"~ Willian Dean Howells</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="schema_c.html">CREATE SCHEMA</a><br>
  <a href="schema_a.html">ALTER SCHEMA</a><br>
  <a href="table_d.html">DROP TABLE</a><br>
Equivalent Oracle command:  DROP TYPE, <a href="../ora/user_d.html">DROP USER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="schema_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

