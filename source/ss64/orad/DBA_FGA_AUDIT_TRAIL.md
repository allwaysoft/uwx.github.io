---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_FGA_AUDIT_TRAIL </h1><p> All fine grained audit event logs </p> 
 
<pre>Columns
   ___________________________
 
   SESSION_ID
      Session id of the query
   TIMESTAMP
      Time of the query
   DB_USER
      Database username who executes the query
   OS_USER
      OS username who executes the query
   USERHOST
      Numeric instance ID for the Oracle instance from which the user is accessing the database. Used only in environments with distributed file systems and shared database files (e.g.,clustered Oracle on DEC VAX/VMS clusters)
   CLIENT_ID
      Client identifier in each Oracle session
   EXT_NAME
      External name
   OBJECT_SCHEMA
      Owner of the table or view
   OBJECT_NAME
      Name of the table or view
   POLICY_NAME
      Name of Fine Grained Auditing Policy
   SCN
      SCN of the query
   SQL_TEXT
      SQL text of the query
   SQL_BIND
      Bind variable data of the query
   COMMENT$TEXT
      Comments

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_FGA_AUDIT_TRAIL.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

