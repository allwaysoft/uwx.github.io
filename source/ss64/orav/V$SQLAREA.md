---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SQLAREA </h1>  
 <p> Lists statistics on shared SQL area and contains one row per SQL string. It provides statistics on SQL statements that are in memory, parsed, and ready for execution. The statistics are cumulative, if the same SQL statement has been run more than once, it will show total values for all executions of the statement.</p> 
 
<pre>Columns


   SQL_TEXT        (first 1000 characters)
   SQL_FULLTEXT    (CLOB)
   SHARABLE_MEM
   PERSISTENT_MEM
   RUNTIME_MEM
   SORTS
   VERSION_COUNT
   LOADED_VERSIONS
   OPEN_VERSIONS
   USERS_OPENING
   FETCHES
   EXECUTIONS      (How many times the statement has been executed)
   USERS_EXECUTING
   LOADS
   FIRST_LOAD_TIME (When the statement was first loaded into the SQL area)
   INVALIDATIONS
   PARSE_CALLS     (How many times Oracle has had to re-parse the statement)
   DISK_READS      (Cumulative total of disk blocks read for this statement)
   BUFFER_GETS     (Cumulative total of memory blocks read for this statement)
   ROWS_PROCESSED  (Cumulative total of rows processed by this statement)
   COMMAND_TYPE
   OPTIMIZER_MODE
   PARSING_USER_ID
   PARSING_SCHEMA_ID
   KEPT_VERSIONS
   ADDRESS
   HASH_VALUE   (A hash value for the statement which is guaranteed to be unique)
   MODULE
   MODULE_HASH
   ACTION
   ACTION_HASH
   SERIALIZABLE_ABORTS
   CPU_TIME
   ELAPSED_TIME
   IS_OBSOLETE
   CHILD_LATCH</pre>
<p>Note that <a href="V$SQL.html">V$SQL</a> can often be used in place of V$SQLAREA and may have less impact (fewer gets  on the library cache latches)</p>
<p><b>Examples:</b></p>
<p>-- Count the number of recent UPDATE statements:<br>
<span class="code">SELECT max(command_type), count (*)<br>
FROM <b>v$sqlarea</b><br>
WHERE command_type =6<br>
AND open_versions &gt; 0<br>
AND rows_processed &gt; 0;</span></p>
<p>-- Count the number of recent UPDATE statements:<br>
<span class="code">SELECT count (*)<br>
FROM <b>SYS.v_$sqlarea</b><br>
WHERE sql_text LIKE 'UPDATE %'<br>
AND open_versions &gt; 0<br>
AND rows_processed &gt; 0;</span></p>
<p>-- Show SQL statements that are running right now:<br>
<span class="code">SELECT sql_text <br>
FROM v$sqlarea <br>
WHERE users_executing &gt; 0;</span></p>
<p>-- List recent SQL activity grouped by type:<br>
<span class="code">SELECT decode(command_type, 1,'CRE TAB', 2,'INSERT', 3,'SELECT', 6,'UPDATE', 7,'DELETE', 9,'CRE INDEX', 12,'DROP TABLE', 15,'ALT TABLE',39,'CRE TBLSPC', 42,'DDL', 44,'COMMIT', 45,'ROLLBACK', 47,'PL/SQL EXEC', 48,'SET XACTN', 62,'ANALYZE TAB', 63,'ANALYZE IX', 71,'CREATE MLOG', 74,'CREATE SNAP',79,'ALTER ROLE', 85,'TRUNC TAB', to_char(command_type)) SQLcmd,<br>
count (*)<br>
FROM <b>v$sqlarea</b><br>
WHERE open_versions &gt; 0<br>
AND rows_processed &gt; 0<br>
Group By decode(command_type, 1,'CRE TAB', 2,'INSERT', 3,'SELECT', 6,'UPDATE', 7,'DELETE', 9,'CRE INDEX', 12,'DROP TABLE', 15,'ALT TABLE',39,'CRE TBLSPC', 42,'DDL', 44,'COMMIT', 45,'ROLLBACK', 47,'PL/SQL EXEC', 48,'SET XACTN', 62,'ANALYZE TAB', 63,'ANALYZE IX', 71,'CREATE MLOG', 74,'CREATE SNAP',79,'ALTER ROLE', 85,'TRUNC TAB', to_char(command_type));</span></p>
<p>-- Track the progress of a specific (long running) statement:<br>
<span class="code">SELECT SUBSTR(sql_text, 1, 60) "SQL Text",<br>
rows_processed "Total Rows Processed",<br>
ROUND((SYSDATE - TO_DATE(first_load_time, 'yyyy-mm-dd hh24:mi:ss')) * 24 * 60, 1) "Total Time (Min)",<br>
TRUNC(rows_processed /((SYSDATE - TO_DATE(first_load_time, 'yyyy-mm-dd hh24:mi:ss')) * 24 * 60)) "Rows/Min",<br>
TRUNC(rows_processed /((SYSDATE - TO_DATE(first_load_time, 'yyyy-mm-dd hh24:mi:ss')) * 24 * 60 * 60)) "Rows/Sec"<br>
FROM <b>v$sqlarea</b><br>
WHERE sql_text LIKE 'INSERT INTO TABLE T_BLAH VALUES 1,2,3%'<br>
AND open_versions &gt; 0<br>
AND rows_processed &gt; 0;</span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

