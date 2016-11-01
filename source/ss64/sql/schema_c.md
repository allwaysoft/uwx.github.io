---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE SCHEMA</h1>
<p>Creates a schema in the current database. The CREATE SCHEMA transaction can also create tables and views within the new schema, and set GRANT, DENY, or REVOKE permissions on those objects.</p>
<pre>Syntax
      CREATE SCHEMA <i>schema_clause</i> [ <i>schema_element</i> [ , ...<i>n</i> ] ]

   schema_clause:
      <i>schema</i>
      AUTHORIZATION <i>owner</i>
      <i>schema</i> AUTHORIZATION <i>owner</i>

   schema_elements: 
       <i>table_definition</i><i>
       view_definition</i>
       <i>grant_statement</i> 
       <i>revoke_statement</i>
       <i>deny_statement</i> 
	  
Key:<i>
   schema</i>           The schema to create.
   owner            This owner may own other schemas but
                    may not use the current schema as its default schema.
   table_definition A CREATE TABLE statement
   view_definition  A CREATE VIEW statement
   grant_statement  A GRANT statement that grants permissions
   revoke_statement A REVOKE statement that revokes permissions
   deny_statement A DENY statement that denies permissions</pre>
<p>    Objects created by  CREATE SCHEMA  are created inside the schema that is being created.</p>
<p>Example</p>
<pre>USE Mydatabase;<br>CREATE SCHEMA SecretPlans AUTHORIZATION BillG<br>    CREATE TABLE takeover (company_id int, company_name varchar(100), cost int)<br>    GRANT SELECT TO SteveB<br>    DENY SELECT TO SteveJ;<br>GO </pre>
<p><i>"In Europe everything is permanent, and in America everything is
  provisional. This is the great distinction which, if always kept in
mind, will save a great deal of idle astonishment"~ Willian Dean Howells</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="schema_a.html">ALTER SCHEMA</a><br>
  <a href="schema_d.html">DROP SCHEMA</a>  <br>
Equivalent Oracle command: <a href="../ora/schema_c.html">CREATE SCHEMA</a> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="schema_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

