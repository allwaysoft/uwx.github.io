---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Indexes and Sequences</h1>
<p> <b>Unique and Nonunique Indexes</b><br>
Unique indexes guarantee that no two rows
  of a table have duplicate values in the key column (or columns).<br>
For performance reasons, Oracle recommends that unique indexes be created explicitly,
and
not
through
enabling a unique constraint on a table. (Unique integrity constraints are enforced
by automatically defining an
index.)</p>
<p>You can create many indexes for a table as long as the combination of columns
  differs for each index.</p>
<p><a href="index_c.html">CREATE INDEX</a> emp_idx1 ON emp (ename, job);<br>
CREATE INDEX emp_idx2 ON emp (job, ename);</p>
<p>The absence or presence of an index does not require a change in the wording
  of any SQL statement. An index is merely a fast access path to the data.</p>
<p>The query optimizer can use an existing index to build another index. This
  results in a much faster index build.</p>
<p><b>Index multiple columns<br>
</b>A composite index is an index that you create on multiple columns in a table. <br>
  This can speed retrieval of data if
    the SQL WHERE clause references all (or the leading portion) of the columns
  in the  index. Therefore, the order of the columns used in the definition
    is important - the most commonly accessed or most selective columns go first.</p>
<p><b>Rebuilding indexes</b><br>
  Although indexes can be modified with <a href="index_a.html">ALTER INDEX</a> abc
  REBUILD  it is a commonly
  held myth
  about rebuilding indexes that performance will <i>automatically</i>  improve.<br>
     By contrast redesigning an index
to suit the SQL queries being run will give measurable results.</p>
<p><b>Function-Based Indexes</b><br>
  You can create indexes on functions and expressions that involve columns in
    the table being indexed. <br>
  A function-based index precomputes the value of the function or expression
and stores it in an index (B-tree or bitmap).</p>
<p>Function-based indexes defined on UPPER(column_name) or LOWER(column_name)
  can facilitate case-insensitive searches. For example, the following index:<br>
  CREATE INDEX uppercase_idx ON emp (UPPER(empname));<br>
  can facilitate processing queries such as this:<br>
  SELECT * FROM emp WHERE UPPER(empname) = 'RICHARD';</p>
<p>To use function-based indexes you must gather optimizer statistics. <br>
(Not compatible with Rule-based optimization.)</p>
<p>If the <i>function</i> is a PL/SQL function or package function,
    any changes to the function specification will cause the index to be automatically
   disabled.</p>
<p><b>How Indexes Are Searched</b></p>
<p>Index unique scan used when all columns of a unique (B-tree) index are specified
  with equality conditions.<br>
  e.g.<br>
  name = 'ALEX'</p>
<p>Index range scan is used when you specify a wildcard or interval (bounded
  by a start key and/or end key.)<br>
  e.g.<br>
  name LIKE 'AL%'<br>
  order_id BETWEEN 100 AND 120<br>
  order_book_date &gt; SYSDATE - 30</p>
<p><b>Key Compression</b><br>
Like any form of compression, Key compression can lead to a huge saving in space, letting you store more keys in each index block, which can lead to less I/O
and better performance. Although key compression reduces the storage requirements of an index, it can increase the CPU time required to reconstruct the key column values during
an index scan. It also incurs some additional storage overhead.</p>
<p><b>Reverse Key Indexes</b><br>
Creating a reverse key index, compared to a standard index, reverses the bytes of each column indexed (except the rowid) while keeping the column order. By reversing the keys of the index, the insertions become distributed across all leaf keys in the index.<br>
CREATE INDEX i ON t (my_id) REVERSE;<br>
<br>
The values <b>4</b>771, <b>4</b>772, <b>4</b>773 in the index are reversed to <b>1</b>774, <b>2</b>774, <b>3</b>774</p>
<p>The more even distribution of "hits" on the various leaf blocks is the RKI's best feature. In a heavy, concurrent insert environment, rather than
having everyone wanting access to *the* block, you spread the blocks being<br> 
hit and hence reduce the potentially expensive buffer busy waits.</p>
<p>The main disadvantage is the inability to perform index range scans as such values are now distributed all over the place, only fetch-by-key or full-index (table) scans can be performed.</p>
<p>You can specify the keyword NOREVERSE to REBUILD a reverse-key index into one that is not reverse keyed: Indexes. Rebuilding a reverse-key index without the NOREVERSE keyword produces a rebuilt, reverse-key index. You cannot rebuild a normal index as a reverse key index. You must use the CREATE statement instead.</p>
<p>  <b>Bitmap Indexes</b> ( Enterprise Edition only.)<br>
In a bitmap index, a bitmap for each key value is used instead of a list of rowids. <br>
Each bit in the bitmap corresponds to a possible rowid. If the bit is set, then it means that the row with the corresponding rowid contains the key value. A mapping function converts the bit position to an actual rowid, so the bitmap index provides the same functionality as a regular index even though it uses a different representation internally. If the number of different key values is small, then bitmap indexes are very space efficient. Bitmap indexing is of great benefit to data warehousing applications.</p>
<p>Bitmap indexes are good for:</p>
<p>Low cardinality columns have a small number of distinct values (compared to the number of rows) <br>
e.g. Gender or Marital Status</p>
<p>High cardinality columns have large numbers of distinct values (over 100).</p>
<p>Bitmap indexes include rows that have NULL values, and can dramatically improve the performance of ad hoc queries.</p>
<p>Bitmap indexing efficiently merges indexes that correspond to several conditions in a WHERE clause. Rows that satisfy some, but not all, conditions are filtered
out before the table itself is accessed. This improves response time, often dramatically.</p>
<p>Unlike traditional a B-tree indexes, Bitmap indexes are typically only a fraction of the size of the<br>
indexed data in the table.</p>
<p>Bitmap indexes are also not suitable for columns that are primarily queried with less than or greater than comparisons. For example, a salary column that usually appears in WHERE clauses in a comparison to a certain value is better served with a B-tree index.</p>
<p>Bitmap indexes are not suitable for OLTP applications with large numbers of concurrent transactions modifying the data. These indexes are primarily intended for decision support in data warehousing applications where users typically query the data rather than update it.</p>
<p>The advantages of bitmap indexes are greatest for low cardinality columns: that is, columns in which the number of distinct values is small compared to the number of rows in the table. (See the Oracle concepts manual for an example of this)</p>
<p>Unlike most other types of index, Bitmap indexes include rows that have NULL values. This can be useful for queries such as SELECT COUNT(*) FROM EMP;</p>
<p>You can create bitmap indexes local to a partitioned table (not a global index).</p>
<p>  <b>Bitmap Join Indexes</b><br>
A join index is an index on one table that involves columns of one or more different tables through a join.</p>
<p>Similar to the materialized join view, a bitmap join index precomputes the join and stores it as a database object. The difference is that a materialized join view materializes the join into a table while a bitmap join index materializes the join into a bitmap index. See the Oracle concepts manual for a full example.</p>
<p><b>Dimensions</b><br>
Define hierarchical relationships between pairs of columns or column sets. (Typically data warehouse parent-child relationships.)<br>
The columns in a dimension can come either from the same table (denormalized) or from multiple tables (fully or partially normalized). <br>
To define a dimension over columns from multiple tables, connect the tables using the JOIN clause of <a href="dimension_c.html">CREATE DIMENSION HIERARCHY</a>.</p>
<p><b>Sequences</b> <br>
The sequence generator provides a sequential series of numbers. The sequence generator is especially useful for generating unique sequential ID numbers.</p>
<p>Individual sequence numbers can be skipped if they were generated and used in a transaction that was ultimately rolled back.</p>
<p>A sequence generates a serial list of unique numbers for numeric columns of a database's tables. Sequences simplify application programming by automatically generating unique numerical values for the rows of a single table or multiple tables. <br>
For example, assume two users are simultaneously inserting new employee rows into the EMP table. By using a sequence to generate unique employee numbers
for the EMPNO column, neither user has to wait for the other to enter the next available employee number. The sequence automatically generates the correct
values for each user.<br>
Sequence numbers are independent of tables, so the same sequence can be used for one or more tables. After creation, a sequence can be accessed by various
users to generate actual sequence numbers.<br>
<span class="quote"><br>
<i>"Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers, and we have reason to believe that  it is a
mystery into which the human mind will never penetrate" ~ Leonhard Euler</i></span><br>
<br>
<b>See also</b><br>
<a href="index_c.html">CREATE INDEX</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-indexes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

