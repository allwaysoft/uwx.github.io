---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>Merge Statement </h1> 
<p>Select rows from one or more sources for update or insertion into a table.<br>
  <br>
  Syntax:</p>
<pre>   MERGE [<i><a href="select_hints.html">hint</a></i>] INTO [<i>schema</i>.]<i>table</i> [@<i>dblink</i>] [<i>t_alias</i>]
     USING [<i>schema</i>.]<i>table</i> [t_alias] ON (<i>condition</i>)
       [WHEN MATCHED THEN UPDATE SET <b>(</b><i>column </i>= {<i>expr</i> | DEFAULT}, <i>column </i>= {<i>expr</i> | DEFAULT},…<b>)</b>]
         [ WHERE <i>condition</i> ] [DELETE WHERE <i>condition</i> ]
           [ WHEN NOT MATCHED THEN INSERT <b>(</b><i>column</i>, <i>column</i>,…<b>)</b> VALUES <b>(</b> {<i>expr</i> | DEFAULT},{<i>expr</i> | DEFAULT},… <b>)</b> ]
             [ WHERE <i>condition</i> ]
               [ LOG ERRORS [INTO [<i>schema</i>.]<i>table</i>] [(<i>simple_expression</i>)] [ REJECT LIMIT { <i>integer</i> | UNLIMITED } ] ]</pre>
<p>Use the <span class="code">INTO</span> clause to specify the target table or view. To merge data into a view, the  view must be updatable.</p>
<p>Use the <span class="code">USING</span> clause to specify the source of the data, this can be a table, view, or the result  of a subquery.</p>
<p>Use the <span class="code">ON</span> clause to specify the condition upon which the MERGE  operation either updates or inserts. For each row in the target table  for which the search condition is true, Oracle Database <b>updates</b> the row  with corresponding data from the source table. If the condition is not  true for any rows, then the database <b>inserts</b> into the target table based  on the corresponding source table row.</p>
<p><span class="code">WHEN MATCHED THEN UPDATE</span> specifies the new column values of the target table. Oracle performs this update if the condition of the <span class="code">ON</span> clause is true. If the update clause is executed, then all update triggers defined on the target table are activated.</p>
<p>Specify  <span class="code">DELETE WHERE <i>condition</i></span> to clean up data in a table while populating or updating it. This will only affect   rows in the destination table  that are updated by the merge operation. The  <span class="code"><i>condition</i></span> evaluates the updated value, not the original value that was evaluated by the <span class="code">UPDATE SET ... WHERE</span> condition. If a row of the destination table meets the <span class="code">DELETE</span> condition but is not included in the join defined by the <span class="code">ON</span> clause, then it is not deleted. Any delete triggers defined on the target table will be activated for each row deletion.</p>
<p>You cannot update a column that is referenced in the <span class="code">ON condition</span> clause.<br>
You cannot specify <span class="code">DEFAULT</span> when updating a view.</p>
<p>The VALUES clause can be replaced with a sub query. 
The VALUES keyword is required only when directly inserting data values, rather than using a subquery. (In some early Oracle versions, you will need to use the 'old style' join syntax in the subquery.)<br>
</p>
<p><b>Examples:</b></p>
<pre>SQL&gt; MERGE INTO bonuses <b>B</b>
   USING (SELECT employee_id, salary, department_id FROM employees
   WHERE department_id = 80) <b>Sal</b>
   ON (B.employee_id = Sal.employee_id)
   WHEN MATCHED THEN UPDATE SET B.bonus = B.bonus + Sal.salary*.01
     DELETE WHERE (Sal.salary &gt; 50000)
   WHEN NOT MATCHED THEN INSERT (B.employee_id, B.bonus)
     VALUES (Sal.employee_id, Sal.salary*.01)
     WHERE (Sal.salary &lt;= 50000);<span class="code"></span></pre>
<p class="quote"><i>"When debugging, novices insert corrective code; experts remove defective code" ~ Richard Pattis </i></p>
<p><b>Related:</b></p>
<p><a href="delete.html">DELETE</a><a href="select.html"><br>
  </a><a href="explain.html">EXPLAIN PLAN</a><br>
<a href="insert.html">INSERT</a><a href="select.html"><br>
  SELECT</a><a href="truncate.html"><br>
  TRUNCATE</a><br>
<a href="update.html">UPDATE</a></p>
<p class="code">&nbsp;<a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> <br>  
 &nbsp;<a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
 &nbsp;<a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
 &nbsp;<a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a><br>                                                                
 &nbsp;<a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
 &nbsp;<a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

