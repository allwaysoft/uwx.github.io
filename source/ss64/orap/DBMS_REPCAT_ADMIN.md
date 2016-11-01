---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_REPCAT_ADMIN</h1> 
<p>Record the name of an executing module (or transaction) in the 
  database for later use with Oracle Trace and the SQL trace facility.</p>
<pre>Subprocedures:

GRANT_ADMIN_ANY_SCHEMA   Grant the necessary privileges to the replication administrator
                         to administer any replication group at the current site.  

GRANT_ADMIN_SCHEMA       Grant the necessary privileges to the replication administrator
                         to administer a schema at the current site.  

REGISTER_USER_REPGROUP   Assign proxy materialized view administrator or receiver
                         privileges at the master site or master materialized view
                         site for use with remote sites.  

REVOKE_ADMIN_ANY_SCHEMA  Revoke the privileges and roles from the replication administrator
                         that were granted by GRANT_ADMIN_ANY_SCHEMA. 

REVOKE_ADMIN_SCHEMA      Revoke the privileges and roles from the replication administrator
                         that were granted by GRANT_ADMIN_SCHEMA. 

UNREGISTER_USER_REPGROUP Revoke the privileges and roles from the proxy materialized
                         view administrator or receiver that were granted by the
                         REGISTER_USER_REPGROUP procedure.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related</b></span><span class="body"><b>:</b></span> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_REPCAT_ADMIN.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

