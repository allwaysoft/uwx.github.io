---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> constraints</h1>
<p>Change the Constraints and Primary Key for an existing table.<br>
  <br>
  Syntax:</p>
<pre><b>   </b><b>ALTER</b> <b>TABLE</b> [<i>schema</i>.]<i>table</i>
      <i>constraint_clause</i> [,…]
          [ENABLE <a href="clause_enable.html">enable_clause</a> | DISABLE <a href="clause_disable.html">disable_clause</a>]
              [{ENABLE|DISABLE} TABLE LOCK]
                 [{ENABLE|DISABLE} ALL TRIGGERS];

<i>constraint_clause</i>:
   ADD <i>out_of_line_<a href="clause_constraint_col.html">constraint</a>(s</i>)
   ADD <i>out_of_line_referential_<a href="clause_constraint_col.html">constraint</a></i>
   DROP PRIMARY KEY [CASCADE] [{KEEP|DROP} INDEX]
   DROP UNIQUE (<i>column</i> [,…]) [{KEEP|DROP} INDEX]
   DROP CONSTRAINT <i>constraint</i> [CASCADE]
   MODIFY <a href="clause_constraint_col.html">CONSTRAINT</a> <i>constraint </i><i>constrnt_state</i>
   MODIFY PRIMARY KEY <i>constrnt_state</i>
   MODIFY UNIQUE (<i>column</i> [,…]) <i>constrnt_state</i>
   RENAME CONSTRAINT <i>constraint </i>TO <i>new_name</i>

<i>constrnt_state</i>:   
    [[NOT] <a href="syntax-constraints.html#deferrable">DEFERRABLE</a>] [INITIALLY {IMMEDIATE|<a href="syntax-constraints.html#deferrable">DEFERRED</a>}]
       [RELY | NORELY] [USING INDEX <i>using_index_clause</i>]
          [ENABLE|DISABLE] [<a href="syntax-constraints.html#validate">VALIDATE|NOVALIDATE</a>]
              [EXCEPTIONS INTO [schema.]table]</pre>
<p><b>Examples</b></p>
<p>Add a column to a table:</p>
<pre>   ALTER TABLE STAFF_OPTIONS
      ADD SO_INSURANCE_PROVIDER Varchar2(35);</pre>
<p>Add  a default value to a column:</p>
<pre>   ALTER TABLE STAFF_OPTIONS
      MODIFY SO_INSURANCE_PROVIDER Varchar2(35) DEFAULT 'ABC Ins';</pre>
<p>Add two columns to a table and remove a constraint:</p>
<pre>   ALTER TABLE STAFF_OPTIONS
      ADD (SO_STAFF_ID INT, SO_PENSION_ID INT)
          STORAGE INITIAL 10 K
          NEXT 10 K
          MAXEXTENTS 121
          PCTINCREASE 0
          FREELISTS 2
      DROP CONSTRAINT cons_SO;</pre>
<p class="quote"><i>"For madam, said Sir Launcelot, I love not to be constrained to love; <br>
for love must arise of the heart, and not by no constraint." ~ Le Morte D'Arthur</i></p>
<p><b>  Related Commands:</b><br>
<a href="analyze.html"><br></a><a href="analyze.html">ANALYZE</a> TABLE COMPUTE STATISTICS<br>
<a href="index_a.html">ALTER INDEX</a><br>
<a href="view_a.html">ALTER VIEW</a><br>
<a href="comment.html">COMMENT</a> - Add a comment to a table or a column. <br>
<a href="rename.html">RENAME</a> <br>
<a href="../orap/DBMS_REDEFINITION.html">DBMS_REDEFINITION</a> <br>
<br>
<b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_CONSTRAINTS.html">DBA_CONSTRAINTS</a>      <a href="../orad/ALL_CONSTRAINTS.html">ALL_CONSTRAINTS</a>      <a href="../orad/USER_CONSTRAINTS.html">USER_CONSTRAINTS</a>
  <a href="../orad/DBA_CONS_COLUMNS.html">DBA_CONS_COLUMNS</a>     <a href="../orad/ALL_CONS_COLUMNS.html">ALL_CONS_COLUMNS</a>     <a href="../orad/USER_CONS_COLUMNS.html">USER_CONS_COLUMNS</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="../orad/ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="../orad/USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a>
  <a href="../orad/DBA_PART_TABLES.html">DBA_PART_TABLES</a>      <a href="../orad/ALL_PART_TABLES.html">ALL_PART_TABLES</a>      <a href="../orad/USER_PART_TABLES.html">USER_PART_TABLES</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

