---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_SYNONYMS </h1><p> All synonyms in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Username of the owner of the synonym
   SYNONYM_NAME
      Name of the synonym
   TABLE_OWNER
      Owner of the object referenced by the synonym
   TABLE_NAME
      Name of the object referenced by the synonym
   DB_LINK
      Name of the database link referenced in a remote synonym</pre>

<p>To list all the attributes for a synonym, including the object type use 
  this query</p>
<pre>select
 o.object_type,s.table_name,
 s.synonym_name,s.table_owner,s.owner
from
 dba_synonyms s,
 dba_objects o
where 
 o.object_name=s.table_name
 and 
 o.owner=s.table_owner
 and
 s.owner='PUBLIC'</pre>

<p><b>Related:</b></p>
<pre> DBA_SYNONYMS <a href="ALL_SYNONYMS.html">ALL_SYNONYMS</a> <a href="USER_SYNONYMS.html">USER_SYNONYMS</a> <a href="PUBLICSYN.html">PUBLICSYN</a> </pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_SYNONYMS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

