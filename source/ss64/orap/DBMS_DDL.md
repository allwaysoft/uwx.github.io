---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Package: DBMS_DDL</h1> 
<p>Provides access to some SQL Data Definition Language (DDL) statements 
  from a stored procedure. It also provides special admin operations that are 
  not available as DDLs. <br>
  <br>
  The ALTER_COMPILE and ANALYZE_OBJECT procedures commit the current transaction, 
  perform the operation, and then commit again. This package runs with the privileges 
  of calling user, rather than the package owner SYS. </p>
<pre>Subprocedures:

ALTER_COMPILE   Compile the PL/SQL object. 

ANALYZE_OBJECT  Provide statistics for the database object.
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b></b><b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
</b></span><span class="body"><b>Related Packages:</b></span> </pre>
<p><span class="body"><a href="DBMS_UTILITY.html">DBMS_UTILITY</a> - Utility routines, 
  Analyze etc<br>
  <a href="../ora/analyze.html">ANALYZE</a> - Analyse Table | Index<br>
  <b><br>
  Related Views:</b></span> <span class="body"> </span></p>
<pre>                                                               <a href="../orad/INDEX_STATS.html">INDEX_STATS</a>
 <a href="../orad/DBA_PART_COL_STATISTICS.html">DBA_PART_COL_STATISTICS</a>  <a href="../orad/ALL_PART_COL_STATISTICS.html">ALL_PART_COL_STATISTICS</a> <a href="../orad/USER_PART_COL_STATISTICS.html">USER_PART_COL_STATISTICS</a> 
 <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a>   <a href="../orad/ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a>  <a href="../orad/USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 
 <a href="../orad/DBA_USTATS.html">DBA_USTATS</a>               <a href="../orad/ALL_USTATS.html">ALL_USTATS</a>              <a href="../orad/USER_USTATS.html">USER_USTATS</a> 
   </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_DDL.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

