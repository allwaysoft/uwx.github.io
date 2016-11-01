---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_REPSCHEMA </h1><p> N-way replication information </p> 
 
<pre>Columns
   ___________________________
 
   SNAME
      OBSOLETE COLUMN: Name of the replicated schema
   DBLINK
      A database site replicating the object group
   MASTERDEF
      Is the database the master definition site for the replicated object group
   SNAPMASTER
      For a snapshot site,is the database the current refresh master
   MASTER_COMMENT
      Description of the database site
   MASTER
      Redundant information from dba_repcat.master
   PROP_UPDATES
      Number of requested updates for master in repcat$_repprop
   MY_DBLINK
      A sanity check after import: is this master the current site
   GNAME
      Name of the replicated object group
   GROUP_OWNER
      Owner of the replicated object group

</pre>
<p><b>Related:</b></p>
<p><a href="DBA_REPEXTENSIONS.html">DBA_REPEXTENSIONS</a><br>
<a href="DBA_REPSITES.html">DBA_REPSITES</a><br>
<a href="DBA_REPSITES_NEW.html">DBA_REPSITES_NEW</a><br>
<a href="DBA_REPCOLUMN_GROUP.html">DBA_REPCOLUMN_GROUP</a><br>
<a href="DBA_REPPARAMETER_COLUMN.html">DBA_REPPARAMETER_COLUMN</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_REPSCHEMA.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

