---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> CREATE  APPLICATION ROLE </h1>
<p>Add an application role to the current database.</p>
<pre>Syntax
      CREATE APPLICATION ROLE <i>application_role_name</i> 
         WITH PASSWORD = '<i>passwor</i>d' [ , DEFAULT_SCHEMA = <i>schema_name</i> ]</pre>


<p>Key:</p>
<blockquote>
  <p>password: The password that  users will use to activate the application role.</p>
  <p>schema_name: The first schema that will be searched by the server when it resolves the names of objects for this role. If  undefined, the application role will use DBO as its default schema. <i>schema_name</i> can be a schema that does not exist in the database. </p>
</blockquote>
<p><b>Example</b></p>
<pre class="code" id="ctl00_LibFrame_MainContent_ctl10other" space="preserve">CREATE APPLICATION ROLE <span class="style4">Vincentio</span> 
    WITH PASSWORD = '987Gbv876sPYY5m23' 
    , DEFAULT_SCHEMA = Shrew;
GO</pre>
<p class="quote"><i>"The only role models you need are bad ones, Good ones just get in the way of you becoming yourself " ~ Jane Rule </i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="app_role_a.html">ALTER APPLICATION ROLE</a>
  <br>
  <a href="app_role_d.html">DROP APPLICATION ROLE</a>
  <br>
  <br>
  <b>Equivalent Oracle command</b>:<a href="../bash/export.html"><br>
  <br>
  </a><a href="../ora/session_a.html">ALTER SESSION</a> SET CURRENT SCHEMA </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="app_role_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

