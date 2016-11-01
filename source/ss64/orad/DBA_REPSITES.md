---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_REPSITES </h1><p> N-way replication information </p> 
 
<pre>Columns
   ___________________________
 
   GNAME
      Name of the replicated object group
   DBLINK
      A database site replicating the schema
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
   GROUP_OWNER
      Owner of the replicated object group</pre>
<p><b>Related:</b></p>
<p><a href="DBA_REPSCHEMA.html">DBA_REPSCHEMA</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_REPSITES.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

