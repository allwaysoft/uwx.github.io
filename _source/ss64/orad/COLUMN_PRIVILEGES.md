---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>COLUMN_PRIVILEGES </h1><p> 
</p><p>Grants on columns for which the user is the grantor,grantee,owner,or an enabled role or PUBLIC is the grantee.<br>
This view is included for compatibility with Oracle version 6.
</p> 
 
<pre>Columns
   ___________________________
 
   GRANTEE
      Name of the user to whom access was granted
   OWNER
      Username of the owner of the object
   TABLE_NAME
      Name of the object
   COLUMN_NAME
      Name of the column
   GRANTOR
      Name of the user who performed the grant
   INSERT_PRIV
      Permission to INSERT into the column?
   UPDATE_PRIV
      Permission to UPDATE the column?
   REFERENCES_PRIV
      Permission to make REFERENCES to the column?
   CREATED
      Timestamp for the grant

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="COLUMN_PRIVILEGES.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

