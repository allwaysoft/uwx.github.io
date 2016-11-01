---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_REPUTIL</h1> 
<p>Subprograms used for table replication. This package is referenced 
  only by the generated code.</p>
<pre>Subprocedures:

REPLICATION_OFF Modify tables without replicating the modifications to any other
                site in the replication environment, or disable row-level
                replication when using procedural replication. 

REPLICATION_ON  Re-enable replication of changes after replication has been
                temporarily suspended. 

REPLICATION_IS_ON Function
               Determine whether or not replication is running. 

FROM_REMOTE Function
               Returns TRUE at the beginning of procedures in the internal
               replication packages, and returns FALSE at the end of these procedures. 

GLOBAL_NAME Function
               Determine the global database name of the local database
               (the global name is the returned value). 

MAKE_INTERNAL_PKG Synchronize internal packages and tables in the replication
                  catalog.
                  Note: Do not execute this procedure unless directed to do so
                        by Oracle Support Services. 

SYNC_UP_REP       Synchronize internal triggers and tables/materialized views
                  in the replication catalog.
                  Note: Do not execute this procedure unless directed to do so
                        by Oracle Support Services.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related:</b></span></pre>
<p><span class="body"><br>
</span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

