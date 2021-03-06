---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>SELECT… CONNECT BY</h1> 
<p>Select data with a hierarchical  (parent/child) relationship. (also used by <a href="explain.html">EXPLAIN PLAN</a>)</p>
<p>  Syntax:</p>
<pre>   <a href="select.html">SELECT</a>… 
   [START WITH <i>initial_condition</i>]
   <b>CONNECT BY </b>[nocycle] <b>PRIOR</b> <i>recurse_condition
</i>   [ORDER SIBLINGS BY <i>order_by_clause</i>]

 Key:

    START WITH        : The row(s) to be used as the root of the hierarchy

    CONNECT BY        : Condition that identifies the relationship between
                        parent and child rows of the hierarchy

    NOCYCLE           : Do not circle around loops (where the current row has
                        a child which is also its ancestor.)

    ORDER SIBLINGS BY : Preserve ordering of the hierarchical query 
                        then apply the <i>order_by_clause</i> to the sibling rows
</pre>
<p><b>Examples</b></p>
<p>First create a table with some  data: (A sample list of files and folders similar to the Windows Start menu) </p>
<p>CREATE TABLE stmenu (<br>
  id int,<br>
  Menuitem varchar2(75),<br>
parentid int);</p>
<p><a href="connectby.sql.txt">Add Sample data.sql</a> </p>
<p><b>Display the folder and parent ID</b> (Walk up the tree showing all items):</p>
<p>COLUMN id FORMAT 999<br>
  COLUMN Menuitem FORMAT a84<br>
  COLUMN parentid FORMAT 999<br>
  COLUMN parentfolder FORMAT a84<br>
  COLUMN x FORMAT a85</p>
<p>&lt;  SELECT id, Menuitem, parentid<br>
  FROM stmenu<br>
  CONNECT BY PRIOR id=parentid<br>
START WITH id=1;</p>
<pre>   ID Menuitem                                     PARENTID
---- -------------------------------------------- --------
   1 \Start Menu\Programs\
   2 Startup\                                            1
   3 Administrative Tools\                               1
  18 Authorization Manager.lnk                           3
  19 Certification Authority.lnk                         3
…</pre>
<p><b>Display Item and it's immediate Parent </b></p>
<blockquote>
  <p>SELECT<br>
    (select Menuitem<br>
    from stmenu<br>
    where id=x.parentid<br>
    ) parentfolder, <br>
    Menuitem<br>
    FROM stmenu x<br>
    CONNECT BY PRIOR id=parentid<br>
    START WITH id=1;</p>
</blockquote>
<p><b>Walk down the tree</b> (show heirarchy for one item)</p>
<blockquote>
  <p>COLUMN Menuitem FORMAT a34<br>
    SELECT id, Menuitem,parentid<br>
    FROM stmenu<br>
    CONNECT BY PRIOR parentid=id<br>
    START WITH id=29;</p>
</blockquote>
<p><b>Walk up the tree</b> for 3 items</p>
<blockquote>
  <p>  SELECT id, Menuitem,parentid<br>
    FROM stmenu<br>
    where id in (4,12,28)<br>
    CONNECT BY PRIOR id=parentid<br>
  START WITH id=1;</p>
</blockquote>
<p><b>Display the full tree </b>(indenting child items) </p>
<blockquote>
  <p>  SELECT<br>
    lpad(' ',2*(parentid-1))|| Menuitem<br>
    FROM stmenu<br>
    CONNECT BY PRIOR id=parentid<br>
  START WITH id=1;</p>
</blockquote>
<p><b>Operators</b></p>
<p>PRIOR - Most commonly used when comparing column values with the equality operator. PRIOR identifies the parent row in the column. </p>
<blockquote>
  <p>The PRIOR keyword can be on either side of the = operator. CONNECT BY PRIOR id=parentid will return different results to CONNECT BY PRIOR parentid=id</p>
  <p>Operators other than the equal sign (=) are theoretically possible in CONNECT BY clauses. However, this can result in an infinite loop through the possible combinations.</p>
</blockquote>
<p>CONNECT_BY_ROOT - When you qualify a column with this operator, Oracle returns the column value using data from the root row. This operator extends the functionality of the CONNECT BY [PRIOR] condition of hierarchical queries. (Oracle 10g) </p>
<p><b>Pseudo-columns</b></p>
<p>LEVEL - Returns a number indicating the level in the heirarchy: 1 for a root row, 2 for a child of a root, and so on.<br>
  <br>
  New pseudo-columns in Oracle 10g: <br>CONNECT_BY_ISCYCLE - Returns 1 if the current row has a child which is also its ancestor (otherwise 0.)<br>
CONNECT_BY_ISLEAF - Returns 1 if the current row is a leaf of the tree defined by the CONNECT BY condition (otherwise 0.) Indicates that a  row can be further expanded.</p>
<p><b>Notes:</b></p>
<p>Precedence of the concatenation operator (||) might not be what you expect.</p>
<p><span class="code">CONNECT BY PRIOR C1 || C2 =…</span><br>
  is equivalent to <br>
  <span class="code">CONNECT BY  (PRIOR C1) || C2 =…</span></p>
<p>so use<br>
  <span class="code">CONNECT BY PRIOR (C1 || C2) =…</span></p>
<p><span class="quote"><i>"If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it." ~ President Lyndon B. Johnson (The Wilderness Act, 1964)</i></span></p>
<p><b> Related:</b></p>
<p><a href="insert.html">  </a><a href="explain.html">EXPLAIN PLAN</a><a href="insert.html"> <br>
  </a>
  <a href="union.html">UNION</a>  <br>
<a href="syntax-analytic.html">Analytic Features</a> (for Oracle 8i and above)<br>
<a href="syntax-analytic-lead.html">Lag and Lead</a> - functions to access  other rows without the need to perform a self join.<br>
  <a href="select_hints.html">Select Hints </a><b><br>
  </b><a href="http://www.jlcomp.demon.co.uk/faq/ind_faq.html#SQL_techniques">SQL Examples</a> - Oracle Co-Operative FAQ<b><br>
  </b><a href="http://www.adp-gmbh.ch/ora/sql/outer_join.html"> Outer Join examples</a> - ADP - Analyse, Design &amp; Programmierung GmbH<br>
  <br>
<b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_TAB_COLUMNS.html">DBA_TAB_COLUMNS</a>      <a href="../orad/ALL_TAB_COLUMNS.html">ALL_TAB_COLUMNS</a>      <a href="../orad/USER_TAB_COLUMNS.html">USER_TAB_COLUMNS</a> 
  <a href="../orad/DBA_TAB_COLS.html">DBA_TAB_COLS</a>         <a href="../orad/ALL_TAB_COLS.html">ALL_TAB_COLS</a>         <a href="../orad/USER_TAB_COLS.html">USER_TAB_COLS</a> 
  <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>            <a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>            <a href="../orad/USER_VIEWS.html">USER_VIEWS</a>
                                                                <a href="../orad/DICTIONARY.html">DICTIONARY</a>
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="connectby.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

