---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>GRANT Object permissions</h1>
<p>Grant permissions to system objects, database objects, </p>
<pre>Syntax
      GRANT SELECT ON [sys.]<b><i>system_object</i></b> FROM <i>principal</i>

      GRANT EXECUTE ON [sys.]<b><i>system_object</i></b> FROM <i>principal</i>

      GRANT <i>object_permission</i> [,...<i>n</i> ] 
         ON <b><i>Object</i></b>
            TO <i>principal</i> [,...<i>n</i> ]
               [WITH GRANT OPTION]
                  [AS <i>principal</i> ]
Key:
   Objects
          ASSEMBLY :: <i>assembly</i>
          ASYMMETRIC KEY :: <i>asymmetric_key</i>
          CERTIFICATE :: <i>certificate</i>
          CONTRACT :: <i>contract</i>
          ENDPOINT :: <i>endpoint</i>
          FULLTEXT CATALOG :: <i>full-text_catalog</i>
          LOGIN :: <i>SQL_Server_login</i>
          MESSAGE TYPE :: <i>message_type</i>
          [OBJECT ::]<b>[<i>schema</i>].<i>object</i></b> [(<i>column </i>[,...<i>n</i> ])]
          REMOTE SERVICE BINDING :: <i>remote_binding</i>
          ROUTE :: <i>route</i>
          SCHEMA :: <i>schema</i> 
          SERVICE :: <i>service</i>
          SYMMETRIC KEY :: <i>symmetric_key</i> 
          TYPE :: [<i>schema</i>].<i>type</i> 
          XML SCHEMA COLLECTION :: [<i>schema</i>.] <i>XML_schema_collection</i>

   system_object  Objects such as stored procedures, functions and views.

   principal   one of: 
                user /role /application role
                user mapped to a Windows login/group/certificate
                user mapped to an asymmetric key
                user not mapped to a server principal.

   WITH GRANT     Also allow the principal to grant this permission to other principals.

   object_permission
                  ALTER/CONTROL/RECEIVE/REFERENCES/IMPERSONATE/
                  SELECT/UPDATE/INSERT/DELETE/
                  EXECUTE/TAKE OWNERSHIP/VIEW DEFINITION
                  ALL - Against an object, GRANT ALL will grant all permissions applicable to the object.</pre>
<p>Examples</p>
<pre>USE MyDb;
GRANT EXECUTE ON sys.MyStoredproc TO public;
GO

GRANT SELECT ON MyTable.MyColumn TO MyUser;
GO</pre>
<p class="quote"><i>"I don't know if I believe in role models. We're all so different; we're all individuals. In the long run, that's what matters" ~ Wilson Cruz</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="revoke.html">REVOKE Object</a> permissions<br>
  <a href="deny.html">DENY Object</a> permissions  <br>
  <a href="grant_user.html">GRANT User/Role</a> permissions  <br>
Equivalent Oracle command: <a href="../ora/revoke.html">REVOKE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
