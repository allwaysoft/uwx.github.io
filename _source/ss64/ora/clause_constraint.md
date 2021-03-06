---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CONSTRAINT Clause</h1> 
<p>Restrict the data values that can be added to a table. Also see 
  <a href="clause_constraint_col.html">Constraint Clause (column)</a><br>
  <br>
  Syntax - Table Constraint:</p>
<pre>   CONSTRAINT <i>constrnt_name</i> {<b>UNIQUE</b>|<b>PRIMARY KEY</b>} <i>column</i> <i>constrnt_state</i>

   CONSTRAINT <i>constrnt_name</i> <b>CHECK</b>(<i>condition</i>) <i>constrnt_state</i></pre>
<p> Syntax - Table Referential Constraint:</p>
<pre>   CONSTRAINT <i>constrnt_name</i> <b>FOREIGN KEY</b> (<i>column</i>,…)
       REFERENCES [schema.]table (<i>column</i>,…)
          [ON DELETE {CASCADE|SET NULL}] <i>constrnt_state</i></pre>
<p>'column' can be either a single 
column name or several columns separated with commas,</p>
<p>Options:</p>
<pre><i>constrnt_state</i>   
    [[NOT] <a href="syntax-constraints.html#deferrable">DEFERRABLE</a>] [INITIALLY {IMMEDIATE|<a href="syntax-constraints.html#deferrable">DEFERRED</a>}]
       [RELY | NORELY] [USING INDEX <i>using_index_clause</i>]
          [ENABLE|DISABLE] [<a href="syntax-constraints.html#validate">VALIDATE|NOVALIDATE</a>]
              [EXCEPTIONS INTO [<i>schema</i>.]<i>table</i>]
<i>
using_index_clause</i>
    PCTFREE <i>int</i>
    INITTRANS <i>int</i>
    MAXTRANS <i>int</i>
    TABLESPACE <i>tablespace_name</i>
    STORAGE <a href="clause_storage.html">storage_clause</a>
    NOSORT
    LOGGING|NOLOGGING
    {LOCAL|GLOBAL} PARTITION BY RANGE(<i>column_list</i>)( <i>partition_clause</i>,…)}

<i>partition_clause:</i>
   PARTITION <i>partition</i> VALUES LESS THAN (<i>values list</i>) <i>ptn_storage</i>

<i>   ptn_storage</i>:
      PCTFREE <i>int</i>
      PCTUSED <i>int</i>
      INITTRANS <i>int</i>
      MAXTRANS <i>int</i>
      STORAGE <a href="clause_storage.html">storage_clause</a>
      TABLESPACE <i>tablespace</i>
      LOGGING|NOLOGGING

<i>condition:</i>
An expression that evaluate to TRUE, FALSE or unknown.<br>   Some examples:
<br>   emp_name = 'SMITH' 
   emp_name IN ('SMITH', 'JONES', 'FRASER') 
   hiredate &gt; '01-JAN-01'
   employees.dept_id = departments.dept_id_pk
   EMP_sal &gt;5000 AND emp_commission IS NULL</pre>
<p>notes:<br>
  A referential constraint with ON DELETE CASCADE will cascade deletes - so deleting 
  a primary key row will delete all related foreign keys. <br>
  e.g. delete a customer and all that customer's orders will disappear.<br>
  <br>
  This page does not cover the syntax for <i>Object Table </i>constraints.<br>
  <b><br>
</b><b> Related Commands:</b></p>
<p><a href="clause_disable.html">disable</a> constraint - clause<br>
  <a href="clause_drop.html">drop</a> constraint - clause<br>
  <a href="syntax-constraints.html">Syntax for Oracle constraints</a>  <br>
ORA-00001 - Unique constraint violated. (Invalid data has been rejected) </p>
<p><b>Related Views:</b></p>
<p><span class="code"> <a href="../orad/DBA_CONSTRAINTS.html">DBA_CONSTRAINTS</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_CONSTRAINTS.html">ALL_CONSTRAINTS</a>&nbsp;&nbsp;&nbsp;<a href="../orad/USER_CONSTRAINTS.html">USER_CONSTRAINTS</a><br> 
  <a href="../orad/DBA_CONS_COLUMNS.html">DBA_CONS_COLUMNS</a>&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_CONS_COLUMNS.html">ALL_CONS_COLUMNS</a>&nbsp;&nbsp;<a href="../orad/USER_CONS_COLUMNS.html">USER_CONS_COLUMNS</a><br>                                                  
  CONSTRAINT_COLUMNS<br>                                                  
  CONSTRAINT_DEFS<br> 
  DBA_CROSS_REFS                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USER_CROSS_REFS<br>
  <br>
  </span>Valid <b>constraint_types</b> are:<span class="code"><br>
  <br>  
  Primary key     = P <br>  
  Unique Key      = U <br>  
  Foreign Key     = R <br>  
  Check, not null = C <br>  
Check (view)    = V</span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

