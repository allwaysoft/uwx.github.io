---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> columns</h1> 
<p>Add, modify or drop columns and column properties<br>
  <br>
  Syntax:</p>
<pre><b>   </b><b>ALTER</b> <b>TABLE</b> [<i>schema</i>.]<i>table</i>
      <i>column_clauses</i>,…
         [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
              [{ENABLE|DISABLE} TABLE LOCK]
                 [{ENABLE|DISABLE} ALL TRIGGERS];

<i> column_clauses</i>:
   ADD ( <i>column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>] [,…] )
     [<a href="clause_constraint.html">table_constraint</a>] [<a href="clause_constraint.html">table_ref_constraint</a>] [<i><a href="clause_lob.html">lob_storage</a></i>]

   SET UNUSED (<i>column</i>,…)
      [CASCADE CONSTRAINTS ][INVALIDATE]

   DROP COLUMN <i>column</i>
      [CASCADE CONSTRAINTS] [INVALIDATE] CHECKPOINT <i>int</i>

   DROP (<i>column</i>,…)
      [CASCADE CONSTRAINTS] [INVALIDATE] CHECKPOINT <i>int</i>

   DROP COLUMNS CONTINUE [CHECKPOINT <i>int</i>]

   DROP UNUSED COLUMNS [CHECKPOINT <i>int</i>]

   MODIFY <i>column</i> <a href="syntax-datatypes.html">datatype</a> [DEFAULT <i>expr</i>] [<a href="clause_constraint_col.html">column_constraint(s)</a>]

   MODIFY <i>column</i> [NOT] SUBSTITUTABLE AT ALL LEVELS [FORCE]

   MODIFY NESTED TABLE <i>collection_item </i>RETURN AS {LOCATOR | ITEM}

   MODIFY LOB (<i>lob_item</i>) (<i>modify_LOB_parameters</i>)

   MODIFY VARRAY <i>varray_item</i> (<i>modify_LOB_parameters</i>)

   RENAME COLUMN <i>column</i> TO <i>new_name</i>

<i>modify_LOB_parameters:</i>

   PCTVERSION <i>int</i>
   RETENTION
   FREEPOOLS <i>int</i>
   REBUILD FREEPOOLS
   CACHE 
   CACHE READS [LOGGING|NOLOGGING]
   NOCACHE [LOGGING|NOLOGGING]
   ALLOCATE EXTENT [( [size <i>int</i> K | M ]
      [DATAFILE '<i>filename</i>' ]
        [INSTANCE <i>int</i>] )]
   DEALLOCATE UNUSED [KEEP <i>int</i> K | M ]
</pre>
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
<p><i class="quote">"Fools ignore complexity; pragmatists suffer it; experts avoid it; geniuses remove it" ~ Alan Perlis </i><b><br>
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
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="../orad/ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="../orad/USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a> 
  <a href="../orad/DBA_TAB_COLS.html">DBA_TAB_COLS</a>         <a href="../orad/ALL_TAB_COLS.html">ALL_TAB_COLS</a>         <a href="../orad/USER_TAB_COLS.html">USER_TAB_COLS</a> 
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_a_cols.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

