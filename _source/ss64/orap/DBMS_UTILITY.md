---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_UTILITY</h1> 
<p>Utility routines, Analyze, Time, Conversion etc.</p>
<pre>Subprocedures:

COMPILE_SCHEMA   Compile all procedures, functions, packages, and
                 triggers in the specified schema. 

ANALYZE_SCHEMA   Analyze all the tables, clusters, and indexes in
                 a schema. 

ANALYZE_DATABASE Analyze all the tables, clusters, and indexes in
                 a database. 

FORMAT_ERROR_STACK Function 
                 Format the current error stack. 

FORMAT_CALL_STACK Function 
                 Format the current call stack. 

IS_CLUSTER_DATABASE Function 
                 Is this database running in cluster database mode. 

GET_TIME Function 
                 Current time in 100th's of a second. 

GET_PARAMETER_VALUE Function 
                 Get an init.ora parameter. 

NAME_RESOLVE     Resolve the given name. 

NAME_TOKENIZE    Parse the given name. 

COMMA_TO_TABLE   Convert a comma-separated list of names into a
                 PL/SQL table of names. 

TABLE_TO_COMMA   Converts a PL/SQL table of names into a comma-separated
                 list of names. 

PORT_STRING Function 
                 Return a string that uniquely identifies the version of Oracle
                 and the operating system. 

DB_VERSION       Version information for the database. 

MAKE_DATA_BLOCK_ADDRESS Function 
                 Create a data block address given a file number and a block number. 

DATA_BLOCK_ADDRESS_FILE Function 
                 Get the file number part of a data block address. 

DATA_BLOCK_ADDRESS_BLOCK Function 
                 Get the block number part of a data block address. 

GET_HASH_VALUE Function 
                 Compute a hash value for the given string. 

ANALYZE_PART_OBJECT 
                 Equivalent to <a href="../ora/analyze.html">ANALYZE TABLE</a>|INDEX [&lt;object_name&gt;<schema>.]

EXEC_DDL_STATEMENT Execute the DDL statement in parse_string. 

CURRENT_INSTANCE Function 
                 Return the current connected instance number. 

ACTIVE_INSTANCES Active instance numbers and names </schema></pre>
<p><span class="body"><b>Examples:</b><br>
  <br>
  Compile all schema objects for the schema
  SCOTT:</span></p>
<p><span class="body">EXEC DBMS_UTILITY.compile_schema('SCOTT');</span></p>
<p><span class="body">To collect stats for the schema
    SCOTT:<br>
  <br>
  EXEC DBMS_UTILITY.analyze_schema('SCOTT<schemaname>','COMPUTE') <br>
  <br>
  Do not collect stats for either the SYS or SYSTEM schemas.<br>
  Stats can be removed with:<br>
  <br>
  CONNECT SYS/password<br>
  EXEC DBMS_UTILITY.analyze_schema('SYS','DELETE') <br>
  <br>
  To check if statistics have been deleted from a schema:<br>
  <br>
  SELECT * FROM <a href="../orad/USER_TABLES.html">user_tables</a> WHERE avg_space
    is not null; <br>
  This will return 'no rows selected' when no stats are present.<br>
  <br>
  Analyze_schema() is available in Oracle version 7.3.4 and above, however
    if you have Oracle 8i or 9 you will obtain faster and better statistics from <a href="DBMS_STATS.html">DBMS_STATS.GATHER_SCHEMA_STATS</a> 
  <br>
  <br>
  For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i><b><br>
  </b><br>
  <i class="quote">"The fitter you are, the better you will survive. Start training now" -
  <a href="http://www.amazon.com/exec/obidos/external-search?tag=ss64&amp;keyword=sas%20survival&amp;mode=blended">SAS
  Survival Guide</a> (John Wiseman)</i></schemaname></span></p>
<p><span class="body"><b>Related Commands:<br>
  <br>
  </b> <a href="DBMS_DDL.html">DBMS_DDL</a><br>
<a href="DBMS_STATS.html">DBMS_STATS.GATHER_SCHEMA_STATS</a> <br>
<a href="DBMS_DDL.html">DBMS_DDL</a> - compile/analyze objects <br>
<a href="DBMS_IOT.html">DBMS_IOT</a>.BUILD_CHAIN_ROWS_TABLE <br>
<a href="../ora/analyze.html"><br>
ANALYZE</a> - Analyse Table | Index<a href="../ora/explain.html"><br>
EXPLAIN PLAN</a><br>
STATISTICS - <a href="../ora/stats_assoc.html">ASSOCIATE STATISTICS</a> <br>
STATISTICS - <a href="../ora/stats_dis.html">DISASSOCIATE STATISTICS</a></span></p>
<p><span class="body"><b>Related Views:</b></span> <span class="body"> </span></p>
<pre> <a href="../orav/V$TIMER.html">V$TIMER</a>                                                       <a href="../orad/INDEX_STATS.html">INDEX_STATS</a>
 <a href="../orad/DBA_PART_COL_STATISTICS.html">DBA_PART_COL_STATISTICS</a>  <a href="../orad/ALL_PART_COL_STATISTICS.html">ALL_PART_COL_STATISTICS</a> <a href="../orad/USER_PART_COL_STATISTICS.html">USER_PART_COL_STATISTICS</a> 
 <a href="../orad/DBA_SUBPART_COL_STATISTICS.html">DBA_SUBPART_COL_STATISTICS</a>  <a href="../orad/ALL_SUBPART_COL_STATISTICS.html">ALL_SUBPART_COL_STATISTICS</a>  <a href="../orad/USER_SUBPART_COL_STATISTICS.html">USER_SUBPART_COL_STATISTICS</a> 
 <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a>   <a href="../orad/ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a>  <a href="../orad/USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 
 <a href="../orad/DBA_USTATS.html">DBA_USTATS</a>               <a href="../orad/ALL_USTATS.html">ALL_USTATS</a>              <a href="../orad/USER_USTATS.html">USER_USTATS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_UTILITY.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

