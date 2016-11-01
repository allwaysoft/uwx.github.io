---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER AUTHORIZATION</h1>
<p>Change the ownership of an entity.</p>
<pre>Syntax
      ALTER AUTHORIZATION ON [<i>entity_type</i>::] <i>entity</i> TO SCHEMA OWNER
      ALTER AUTHORIZATION ON [<i>entity_type</i>::] <i>entity</i> TO <i>principal </i>

Key
   <i>principal</i>    The name of the principal that will own the entity

   <i>entity_type</i>  The class of the entity,
      one of:
          Database
          Schema
          XML Schema Collection
          Assembly
          Role
          <u>Object</u>    (table,view,function,procedure,queue,synonym)
          Fulltext Catalog
          Certificate
          Type
          Message Type
          Contract
          Service
          Remote Service Binding
          Route
          Symmetric Key
          Endpoint</pre>
<p>You cannot change the owner of a system database (master, model, tempdb), the resource database, or any database that is used as a distribution database. The ownership of  entity types not listed above cannot be transferred.</p>
<p><b>Example</b></p>
<pre class="code" id="ctl00_LibFrame_MainContent_ctl10other" space="preserve">ALTER AUTHORIZATION ON OBJECT::tblParts TO BillG;
ALTER AUTHORIZATION ON tblCustomers TO MichikoOsada;<br>GO</pre>
<p class="quote"><i>"One of the healthiest ways to gamble is with a spade and a package of garden seeds" ~ Dan Bennett</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="schema_c.html">CREATE SCHEMA</a><br>
  <a href="user_c.html">CREATE USER</a><br>
  <br>
  <b>Equivalent Oracle commands</b>:</p>
<p>  Imp/Exp or Create.. As Select.. </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

