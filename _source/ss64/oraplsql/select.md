---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL SELECT Statement </h1> 
<p>Retrieve data from one or more tables, views, or snapshots.<br>
  <br>
  Syntax:</p>
<pre>   SELECT [<i>hint</i>][DISTINCT] <i>select_list</i>
   <b>INTO</b> {variable1, variable2... | record_name}
   FROM <i>table_list</i>
   [WHERE <i>conditions</i>]
   [GROUP BY <i>group_by_list</i>]
   [HAVING <i>search_conditions</i>]
   [ORDER BY <i>order_list</i> [ASC | DESC] ]
   [FOR UPDATE <i>for_update_options</i>]</pre>
<p> key: </p>
<blockquote> 
  <p><i>select_list</i> <br>
    A comma-separated list of table columns (or expressions) eg: </p>
  <pre>column1, column2, column3 
table.column1, table.column2
table.column1 Col_1_Alias, table.column2 Col_2_Alias
schema.table.column1 Col_1_Alias, schema.table.column2 Col_2_Alias
schema.table.*
*
expr1, expr2
(subquery [WITH READ ONLY | WITH CHECK OPTION [CONSTRAINT constraint]])</pre>
  <p>In the <i>select_list</i>s above, 'table' may be replaced with view or snapshot. 
    <br>
    Using the * expression will return all columns.<br>
    If a Column_Alias is specified this will appear at the top of any column headings 
    in the query output.</p>
  <p>DISTINCT<br>
    Supress duplicate rows - display only the unique values.<br>
    Duplicate rows have matching values across every column (or expression) in 
    the <i>select_list</i>. <br>
    <br>
    INTO<br>
    A list of previously defined variables - there must be one variable for each 
    item SELECTed - the results of the select statement are stored in these variables. 
    <br>
    When SELECTing data INTO variables in this way the query must return ONE row.<br>
  </p>
  <p> FROM <i> table_list</i> <br>
    Contains a list of the tables from which the result set data is retrieved. 
  </p><pre>[schema.]{table | view | snapshot}[@dblink] [t_alias]</pre>
  <p>When selecting from a table you can also specify Partition and/or 
    Sample clauses e.g. 
  </p><pre>[schema.]table [PARTITION (partition)] [SAMPLE (sample_percent)]</pre>
  <p> If the SELECT statement involves more than one table, the FROM 
    clause can also contain join specifications (SQL1992 standard).<br>
    <br>
  </p><p>WHERE <i>search_conditions<br>
    </i>A filter that defines the conditions each row in the source table(s) must 
    meet to qualify for the SELECT. Only rows that meet the conditions will be 
    included in the result set. The WHERE clause can also contain inner and outer 
    join specifications (SQL1989 standard). e.g. </p>
  <pre>WHERE tableA.column = tableB.column
WHERE tableA.column = tableB.column(+)
WHERE tableA.column(+) = tableB.column</pre>
<p> GROUP BY <i>group_by_list<br>
    </i>The GROUP BY clause partitions the result set into groups.<br>
    The rows in each group having a unique value in <i>group_by_list</i>. <br>
    The <i>group_by_list</i> may be one or more columns or expressions and may 
    optionally include the CUBE / ROLLUP keywords for creating crosstab results.<br>
    (note the groups will be in random order unless you additionally specify ORDER 
    BY) </p>
  <p>For example, the <b>Order_Items</b> table contains:</p>
    <pre>oi_shipping   oi_value   oi_units
ldn           89.75      2
ny            12.99      1
ldn           55.15      4
edi           23.00      6</pre>
    <p> A GROUP BY <b>oi_shipping</b> will partition the result set into the three 
      groups: ldn, ny, edi </p>
</blockquote>
  <p>Heirarchical Queries<br>
    Any query that does *not* include a GROUP BY clause may include a CONNECT 
    BY heirarchy clause:
</p><pre>[START WITH condition] CONNECT BY condition</pre>
  <p>HAVING <i>search_conditions</i> <br>
    An additional filter - the HAVING clause acts as an additional filter to the 
    <b>grouped</b> result rows - as opposed to the WHERE clause that applies to 
    individual rows. The HAVING clause is most commonly used in conjunction with 
    a GROUP BY clause.<br>
    <br>
    ORDER BY <i>order_list</i> [ <u>ASC</u> | DESC ] [ NULLS { FIRST | LAST } 
    ]<br>
    The ORDER BY clause defines the order in which the rows in the result set 
    are sorted. <i>order_list</i> specifies the result set columns that make up 
    the sort list. The ASC and DESC keywords are used to specify if the rows are 
  sorted ascending (1...9 a...z) or descending (9...1 z...a). 
  </p><p>You can sort by any column even if that column is not actually in the main 
    SELECT clause. If you do not include an ORDER BY clause then the order of 
    the result set rows will be unpredictable (random or quasi random).<br>
    <br>
    FOR UPDATE <i>options</i> - this locks the selected rows (Oracle will normally 
    wait for a lock unless you specify NOWAIT)<br>
    <br>
    Cursors are often used with a SELECT FROM ... FOR UPDATE [NOWAIT] <br>
    Specifying NOWAIT will exit with an error if the rows are already locked by 
    another session. <br>
    Because the locks are not released until the end of the transaction you should 
    not 'commit across fetches' from an explicit cursor if FOR UPDATE is used.<br>
</p>
  <pre>FOR UPDATE [OF [ [schema.]{table|view}.] column] [NOWAIT]

DECLARE
   CURSOR ... IS
      SELECT ..FROM...WHERE...
      FOR UPDATE OF ... NOWAIT;</pre>

<p><b>Writing a SELECT statement</b></p>
<p>The clauses (SELECT ... FROM ... WHERE ... HAVING ... ORDER BY ... ) must be 
  in this order.</p>
<p>The position of commas and semicolons is not forgiving</p>
<p>Each expression must be unambiguous. In other words if the FROM clause includes 
  2 columns with the same name, then both column names must be prefixed with the 
  tablename (or view name). 

</p><pre>    SELECT DISTINCT
        customer_id,
        oi_ship_date
    FROM
        customers
        order_items  
    WHERE
        customers.customer_id = order_items.customer_id
        AND order_items.oi_ship_date &gt; '01-may-2001';</pre>
<p>If the table and view names themselves must be qualified with the schema (<code>scott.t_customers.customer_id,</code>) 
  then this can become rather verbose. This syntax can be greatly simplified by 
  assigning a <b>table_alias</b> (sometimes also known as a range variable or 
  correlation name). <br>
  <br>
  The fully qualified table has to be specified only in the FROM clause. All other 
  table or view references can then use the alias name. e.g.</p>
<pre>    SELECT DISTINCT
        cst.customer_id, 
        cst.customer_id,
        ord.oi_ship_date
    FROM
        customers <b>cst</b>
        order_items <b>ord</b>
    WHERE
        cst.customer_id = ord.customer_id
        AND ord.oi_ship_date &gt; '01-may-2001';</pre>
<p>Ambiguous expressions can also be avoided through the use of an appropriate <a href="../ora/syntax-naming.html">naming convention</a>.<b><br>
<br>
</b><i class="quote">"Computers are useless. They only give you answers" - Pablo Picasso </i><b><br>
<br>
Related SQL Commands:</b></p>
<blockquote> 
<p>Standard (non PL/SQL) <a href="../ora/select.html">SELECT</a> command<br>
<a href="../ora/delete.html">DELETE</a><a href="../ora/insert.html"><br>
</a><a href="../ora/explain.html">EXPLAIN PLAN</a><a href="../ora/insert.html"> 
<br>
INSERT</a><a href="../ora/truncate.html"><br>
TRUNCATE</a><br>
<a href="../ora/update.html">UPDATE</a> </p>
</blockquote>
<p><b>Related Views:</b></p>
<pre>  <a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>        <a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>        <a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> 
  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>       <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>       <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>           <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>           <a href="../orad/USER_TABLES.html">USER_TABLES</a>         <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>            <a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>            <a href="../orad/USER_VIEWS.html">USER_VIEWS</a>
                                                                <a href="../orad/DICTIONARY.html">DICTIONARY</a>
                                                                <a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

