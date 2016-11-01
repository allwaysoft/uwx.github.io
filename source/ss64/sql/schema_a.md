---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER SCHEMA</h1>
<p>Transfer a securable between schemas.</p>
<pre>Syntax
      ALTER SCHEMA <i>schema</i> TRANSFER <i>securable</i>
	  
Key:
   securable  A one or two-part name of a schema-contained securable.</pre>
<p>    In SQL Server 2005, users and schemas are completely separate.</p>
<p>Example</p>
<pre>USE Mydatabase;<br>ALTER SCHEMA MySchema2 TRANSFER MySchema1.MyTable;<br>GO
</pre>
<p class="quote"><i>"In Europe everything is permanent, and in America everything is
  provisional. This is the great distinction which, if always kept in
  mind, will save a great deal of idle astonishment"~ Willian Dean Howells</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="schema_c.html">CREATE SCHEMA</a><br>
  <a href="schema_d.html">DROP SCHEMA</a>  <br>
  sys.schemas</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="schema_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

