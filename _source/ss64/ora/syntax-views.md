---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>Views, Materialized Views and Synonyms</h1>
<h2>Views</h2>
<p>A view takes the output of a query and makes it appear like a virtual table.
  You can use a view in most places where a table can be used.<br>All operations performed on a view  will affect data in the base table
and so are subject to the integrity constraints and triggers of the base table.</p>
<p>A View can be used to simplify SQL statements for the user or to isolate an application from any future change to the base table definition. A View can also be used
to improve security by restricting access to a predetermined set of rows or columns.</p>
<p>In addition to operating on base tables,  one View can be based on another, a view can also JOIN a view with a table (GROUP BY or UNION).</p>
<p>Using views encourages the use of <i>Shared SQL</i> with the benefit of
  reduced memory usage.</p>
<h2>Read-Only vs Updatable Views</h2>
<p>The data dictionary views <a href="../orad/ALL_UPDATABLE_COLUMNS.html">ALL_UPDATABLE_COLUMNS</a>, <a href="../orad/DBA_UPDATABLE_COLUMNS.html">DBA_UPDATABLE_COLUMNS</a>,<br>
  and <a href="../orad/USER_UPDATABLE_COLUMNS.html">USER_UPDATABLE_COLUMNS</a> indicate
  which view
columns are updatable. </p>
<p>An updatable  view lets you insert, update, and delete rows in the  view and propagate the changes to the target
master table.</p>
<p>In order to be updatable, a view cannot contain any of the following constructs:<br>
  SET or DISTINCT operators, an aggregate or analytic function, a GROUP BY,  ORDER BY, CONNECT BY, or START WITH clause, a  subquery (or collection
  expression) in a SELECT list<br>
  or finally (with some exceptions) a JOIN . See the <i>Oracle Database Administrator's Guide </i>for full details.<br>
<br>Views that are not updatable can be modified using an INSTEAD OF trigger.</p>
<h2>Materialized Views</h2>
<p>  Materialized views are schema objects that can be used to summarize, precompute, replicate, and distribute data. E.g. to construct a data warehouse.</p>
<p>A materialized view provides indirect access to table data by storing the results of a query in a separate schema object. Unlike an ordinary view, which
  does not take up any storage space or contain any data.</p>
<p>The existence of a materialized view is transparent to SQL, but when used for query rewrites will improve the performance of SQL execution. An <b>updatable  materialized view</b> lets you insert, update, and delete.</p>
<p>You can define a materialized view on a base table,  <a href="syntax-tables.html">partitioned table</a> or view  and you can define indexes on a materialized view.</p>
<p>A materialized view can be stored in the same database as its base table(s)  or in a different database. <br>
  Materialized views stored in the same database as their base tables can improve query performance through query rewrites. Query rewrites are particularly useful in a data warehouse environment.</p>
<p><b>A materialized view log</b> is a schema object that records changes to a master table's data so that a materialized view defined on the master table can be refreshed incrementally.</p>
<h2>Synonyms</h2>
<p> A synonym is an alias for any table, view, materialized view, sequence, procedure, function, or package. <br>
  A public synonym is owned by the user group PUBLIC and every user in a database can access it. <br>
  A private synonym is in the schema of a specific user who has control over its availability to others.</p>
<p>Synonyms are used to:<br>
- Mask the real name and owner of a schema object <br>
- Provide global (public) access to a schema object<br>
- Provide location transparency for tables, views, or program units of a remote database.<br>
- Simplify SQL statements for database users</p>
<p>e.g. to query the table PATIENT_REFERRALS with SQL:</p>
<p class="code">SELECT * FROM MySchema.PATIENT_REFERRALS;</p>
<p class="code">CREATE PUBLIC SYNONYM referrals FOR MySchema.PATIENT_REFERRALS;</p>
<p>After the public synonym is created, you can query with a simple SQL statement:<br>
  <br>
  <span class="code">SELECT * FROM referrals;</span></p>
<h2>Heterogeneous Services</h2>
<p> A database server component that allows access to a non-Oracle database using Oracle SQL.<br>
<br>
<i class="quote">"We always did feel the same,
We just saw it from a different point of view… - Bob Dylan, "Tangled Up In Blue"</i><br>
<br>
<b>Related</b></p>
<p><a href="syntax-datatypes.html">Full list of Datatypes</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-views.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
