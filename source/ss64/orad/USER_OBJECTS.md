---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_OBJECTS </h1><p> Objects owned by the user </p> 
 
<pre>Columns
   ___________________________
 
   OBJECT_NAME
      Name of the object
   SUBOBJECT_NAME
      Name of the sub-object (for example,partititon)
   OBJECT_ID
      Object number of the object
   DATA_OBJECT_ID
      Object number of the segment which contains the object
   OBJECT_TYPE
      Type of the object
   CREATED
      Timestamp for the creation of the object
   LAST_DDL_TIME
      Timestamp for the last DDL change (including GRANT and REVOKE) to the object
   TIMESTAMP
      Timestamp for the specification of the object
   STATUS
      Status of the object
   TEMPORARY
      Can the current session only see data that it place in this object itself?
   GENERATED
      Was the name of this object system generated?
   SECONDARY
      Is this a secondary object created as part of icreate for domain indexes?
</pre>
<p><b>Related:</b></p>
<p> Running the SQL*Plus script below (<a href="../ora/syntax-variables.html">substituting</a> &amp;Owner and &amp;NewUser) will produce a listing of all the permissions to allow the New User to access all the objects owned by OWNER. Review the output of the script and then run it to <a href="../ora/grant.html">Grant</a> the new permissions to NewUser. </p>
<p>Set pagesize 0<br>
define OWNER=Kate<br>
define NEWUSER=Alex<br>
Spool new_grants.txt
</p>
<p>Select<br>
decode(<span class="code">OBJECT_TYPE</span>,<br>
'TABLE','GRANT SELECT, INSERT, UPDATE, DELETE , REFERENCES ON '||'&amp;OWNER'||'.',<br>
'VIEW','GRANT SELECT ON '||'&amp;OWNER'||'.',<br>
'SEQUENCE','GRANT SELECT ON '||'&amp;OWNER'||'.',<br>
'PROCEDURE','GRANT EXECUTE ON '||'&amp;OWNER'||'.',<br>
'PACKAGE','GRANT EXECUTE ON '||'&amp;OWNER'||'.',<br>
'FUNCTION','GRANT EXECUTE ON '||'&amp;OWNER'||'.' )||<span class="code">object_name</span>||' TO &amp;NewUser;'<br>
From <span class="code">USER_OBJECTS</span> where <span class="code">OBJECT_TYPE</span> IN ( 'TABLE', 'VIEW', 'SEQUENCE', 'PROCEDURE', 'PACKAGE', 'FUNCTION')<br>
Order By OBJECT_TYPE;</p>
<p>Spool Off </p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_OBJECTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

