---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_DEFER_SYS</h1> 
<p>Manage default replication node lists. Requires the Distributed 
  Option.</p>
<pre>Subprocedures and functions:

ADD_DEFAULT_DEST       Add a destination database to the DEFDEFAULTDEST view. 

CLEAR_PROP_STATISTICS  Clear the propagation statistics in the DEFSCHEDULE data dictionary view. 

DELETE_DEFAULT_DEST    Remove a destination database from the DEFDEFAULTDEST view. 

DELETE_DEF_DESTINATION Remove a destination database from the DEFSCHEDULE view. 

DELETE_ERROR           Delete a transaction from the DEFERROR view. 

DELETE_TRAN            Delete a transaction from the DEFTRANDEST view.  

DISABLED Function      Determine whether propagation of the deferred transaction queue from the current site to a specified site is enabled.  

EXCLUDE_PUSH Function  Acquire an exclusive lock that prevents deferred transaction PUSH. 

EXECUTE_ERROR          Reexecute a deferred transaction that did not initially complete successfully in the security context of the original receiver of the transaction. 

EXECUTE_ERROR_AS_USER  Reexecute a deferred transaction that did not initially complete successfully in the security context of the user who executes this procedure. 

PURGE Function         Purge pushed transactions from the deferred transaction queue at your current master site or materialized view site. 

PUSH Function          Force a deferred remote procedure call queue at your current master site or materialized view site to be pushed to a remote site. 

REGISTER_PROPAGATOR    Register the specified user as the propagator for the local database.  

SCHEDULE_PURGE         Schedule a job to purge pushed transactions from the deferred transaction queue at your current master site or materialized view site.  

SCHEDULE_PUSH          Schedule a job to push the deferred transaction queue to a remote site. 

SET_DISABLED           Disable or enables propagation of the deferred transaction queue from the current site to a specified destination site. 

UNREGISTER_PROPAGATOR  Unregister a user as the propagator from the local database. 

UNSCHEDULE_PURGE       Stop automatic purges of pushed transactions from the deferred transaction queue at a master site or materialized view site. 

UNSCHEDULE_PUSH        Stop automatic pushes of the deferred transaction queue from a master site or materialized view site to a remote site.    
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_DEFER_SYS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

