---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_INVALID_OBJECTS </h1>
<p> All objects in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Username of the owner of the object
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
   NAMESPACE

   EDITION_NAME

   SHARING

   EDITIONABLE
</pre>
<p><b>Related:</b></p>
<p><a href="DBA_OBJECTS.html">DBA_OBJECTS</a><br>
<a href="DBA_CATALOG.html">DBA_CATALOG</a><br>
</p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

