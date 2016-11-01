---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SQL </h1>  
<p>Information about Sql processes running now. </p>
<pre>Columns
   ___________________________
 
   ACTION
   ACTION_HASH
   ADDRESS
   BUFFER_GETS
   CHILD_LATCH
   CHILD_NUMBER
   COMMAND_TYPE
   DISK_READS
   EXECUTIONS
   FETCHES
   FIRST_LOAD_TIME
   HASH_VALUE
   INVALIDATIONS
   KEPT_VERSIONS
   LOADED_VERSIONS
   LOADS
   MODULE
   MODULE_HASH
   OPEN_VERSIONS
   OPTIMIZER_COST
   OPTIMIZER_MODE
   PARSE_CALLS
   PARSING_SCHEMA_ID
   PARSING_USER_ID
   PERSISTENT_MEM
   PLAN_HASH_VALUE
   ROWS_PROCESSED
   RUNTIME_MEM
   SERIALIZABLE_ABORTS
   SHARABLE_MEM
   SORTS
   <b>SQL_TEXT</b>
   SQLTYPE
   TYPE_CHK_HEAP
   USERS_EXECUTING
   USERS_OPENING</pre>
<p>
<b>Examples</b>
</p><p class="code">SQL &gt; Select 
substr(sql_text,0,80),<br> 
decode(<i>command_type</i>,2,'INSERT'),<br>
executions <br>From V$SQL
<br>Where command_type = 2<br>
Order By executions;

</p><p><span class="code">SQL &gt; Select 
  substr(sql_text,0,80),<br> 
decode(command_type,3,'SELECT'),<br>
executions
<br>
From V$SQL
<br>
Where command_type = 3<br>
Order By executions;
</span></p>

<p>List of <i>command_type</i> values with meaning: </p>
<p>Insert 2<br>
Select 3<br>
Update 6<br>
Delete 7<br>
Lock Table 26<br>
Alter Database 35<br>
Alter Session 42<br>
Commit 44<br>
Rollback 45<br>
Savepoint  46<br>
Begin/Declare 47</p>
<p><b>Related:</b></p>
<pre><a href="V$OPEN_CURSOR.html">V$OPEN_CURSOR</a> 
<a href="V$SQLAREA.html">V$SQLAREA</a> 
<a href="V$SQLTEXT.html">V$SQLTEXT</a> 
<a href="V$SQLTEXT_WITH_NEWLINES.html">V$SQLTEXT_WITH_NEWLINES</a> 
<a href="V$SQL_BIND_DATA.html">V$SQL_BIND_DATA</a> 
<a href="V$SQL_BIND_METADATA.html">V$SQL_BIND_METADATA</a> 
<a href="V$SQL_CURSOR.html">V$SQL_CURSOR</a> 
<a href="V$SQL_SHARED_MEMORY.html">V$SQL_SHARED_MEMORY</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SQL.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

