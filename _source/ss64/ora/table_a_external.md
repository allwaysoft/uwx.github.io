---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> external </h1> 
<p>Add, modify or drop columns  for an external table. <br>
<br>
Syntax:</p>
<pre>   <b>ALTER</b> <b>TABLE</b> [<i>schema</i>.]<i>table</i>
      <i>xt_clauses</i> [,…]
         [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
            [PARALLEL <a href="clause_parallel.html">parallel_clause</a>]
               [{ENABLE|DISABLE} TABLE LOCK]
                  [{ENABLE|DISABLE} ALL TRIGGERS]
                      REJECT LIMIT {<i>int</i> | UNLIMITED};

<i>xt_clauses</i>:
   ADD <i>column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>]
     [<a href="clause_constraint.html">table_constraint</a>] [<a href="clause_constraint.html">table_ref_constraint</a>] [<i><a href="clause_lob.html">lob_storage</a></i>]

   SET UNUSED (<i>column</i> [,…])
      [CASCADE CONSTRAINTS ][INVALIDATE]

   DROP COLUMN <i>column
</i>      [CASCADE CONSTRAINTS] [INVALIDATE] CHECKPOINT <i>int</i>

   DROP (<i>column</i> [,…])
      [CASCADE CONSTRAINTS] [INVALIDATE] CHECKPOINT <i>int</i>

   DROP COLUMNS CONTINUE [CHECKPOINT <i>int</i>]

   DROP UNUSED COLUMNS [CHECKPOINT <i>int</i>]

   MODIFY <i>column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>]

   MODIFY <i>column</i> [NOT] SUBSTITUTABLE AT ALL LEVELS [FORCE]

   DEFAULT DIRECTORY <i>directory</i> [ACCESS PARAMETERS {USING CLOB <i>subquery</i> | (<i>opaque_format_spec</i>) }]
      LOCATION (<i>directory</i>:'<i>location_specifier</i>' [,<i>directory</i>2:'<i>location_specifier</i>2'…)</pre>
<p><b> Examples</b></p>
<pre>Add a column to a table
   ALTER TABLE STAFF_OPTIONS
      ADD SO_INSURANCE_PROVIDER Varchar2(35);

Add  a default value to a column
   ALTER TABLE STAFF_OPTIONS
      MODIFY SO_INSURANCE_PROVIDER Varchar2(35) DEFAULT 'ABC Ins';

Add two columns to a table and remove a constraint
   ALTER TABLE STAFF_OPTIONS
      ADD (SO_STAFF_ID INT, SO_PENSION_ID INT)
          STORAGE INITIAL 10 K
          NEXT 10 K
          MAXEXTENTS 121
          PCTINCREASE 0
          FREELISTS 2
      DROP CONSTRAINT cons_SO;</pre>
<p><i class="quote">"The abyss between rational and the spiritual, the external and the internal, the objective and the subjective, the technical and the moral, the universal and the unique, constantly grows deeper" ~ Vaclav Havel</i><b><br>
  <br>
  Related Commands:<br>
  <a href="analyze.html"><br>
  </a></b><a href="analyze.html">ANALYZE</a> TABLE COMPUTE STATISTICS<br>
  <a href="index_a.html">ALTER INDEX</a><br>
  <a href="view_a.html">ALTER VIEW</a><br>
  <a href="comment.html">COMMENT</a> - Add a comment to a table or a column. <br>
  <a href="rename.html">RENAME</a> <br>
  <a href="../orap/DBMS_REDEFINITION.html">DBMS_REDEFINITION</a> <br>
  <b><br>
</b><b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_EXTERNAL_TABLES.html">DBA_EXTERNAL_TABLES</a>  <a href="../orad/ALL_EXTERNAL_TABLES.html">ALL_EXTERNAL_TABLES</a>  <a href="../orad/USER_EXTERNAL_TABLES.html">USER_EXTERNAL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="../orad/ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="../orad/USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a> 
  <a href="../orad/DBA_PART_TABLES.html">DBA_PART_TABLES</a>      <a href="../orad/ALL_PART_TABLES.html">ALL_PART_TABLES</a>      <a href="../orad/USER_PART_TABLES.html">USER_PART_TABLES</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_a_external.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

