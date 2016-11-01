---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DELETE Statement </h1> 
<p>Delete rows from a table, or view.<br>
  <br>
  Syntax:</p>
<pre>   DELETE [FROM] [schema.] <b>table</b> [@dblink] [alias]
      WHERE (condition)
         [RETURNING expr INTO DATA_ITEM]

   DELETE [FROM] [schema.] <b>table</b> [SUB]PARTITION partition [alias]
      WHERE (condition)
         [RETURNING expr INTO DATA_ITEM]

   DELETE [FROM] [schema.] <b>view</b> [@dblink] [alias]
      WHERE (condition)
         [RETURNING expr INTO DATA_ITEM]

   DELETE [FROM] <b>subquery</b> [WITH READ ONLY] [alias]
      WHERE (condition)
         [RETURNING expr INTO DATA_ITEM]

   DELETE [FROM] <b>subquery</b> [WITH CHECK OPTION] [CONSTRAINT constraint] [alias]
      WHERE (condition)
         [RETURNING expr INTO DATA_ITEM]</pre>
<p>To improve performance, you can also add a hint to any
    of the above… DELETE <a href="select_hints.html"><i>hint</i></a> FROM Schema.table…</p>
<p><b>Example:<br>
  <br>
  </b>The following example returns column es_salary from the deleted rows and 
    stores the result in bind array :1</p>
<pre>DELETE FROM t_employee_salary
WHERE es_emp_id = 1075 AND es_commission = 50 
RETURNING es_salary INTO :1;</pre>
<p><b> Related Commands:</b></p>
<p><a href="insert.html">INSERT</a><a href="select.html"><br>
  SELECT</a><a href="truncate.html"><br>
  TRUNCATE</a><br>
  <a href="update.html">UPDATE</a></p>
<p><b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> <br>  
&nbsp;<a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
&nbsp;<a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
&nbsp;<a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a><br>                                                                
&nbsp;<a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
&nbsp;<a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="delete.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
