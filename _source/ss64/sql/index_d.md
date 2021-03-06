---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP INDEX </h1>
<p>Remove one or more relational or XML indexes from the current database. </p>
<pre>Syntax
      DROP INDEX <i>index</i> ON object [WITH ( <i>options</i> [ ,...n ] ) ]
  
      DROP INDEX [<i>owner</i>.] <i>table_or_view</i>.<i>index</i>
<b>             </b>This syntax for backwards compatibility only (pre 2005)

Options:
    MAXDOP = <i>max_degree_of_parallelism</i>
    ONLINE = { ON | <u>OFF</u> }
    MOVE TO { <i>partition_scheme_name</i> (<i>column</i>) 
    <i>filegroup_name</i>
    "default" 

object:
    <i>database.schema.table_or_view
    database..table_or_view
    schema.table_or_view</i>

</pre> 
<p>Setting MAXDOP/Max_degree_of_parallelism will override the <i>max degree of parallelism </i>configuration option. (Max = 64 processors) </p>
<p>The MOVE TO option (in SQL Server 2005) allows you to drop a clustered index and move the resulting table to another filegroup or partition scheme in a single transaction.</p>
<p>To drop an  index created as part of a Table's PRIMARY KEY or UNIQUE constraint, use ALTER TABLE.. DROP CONSTRAINT.</p>
<p>An index cannot be dropped if the filegroup in which it is located is offline or set to read-only.</p>
<p>Example</p>
<pre>DROP INDEX IX_empID ON Personnel.Employees;<br>GO</pre>
<p class="quote"><i>"Anything you build on a large scale or with intense passion invites
  chaos" ~ Francis Ford Coppola </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="index_c.html">CREATE INDEX</a><br>
  <a href="index_a.html">ALTER INDEX</a><br>
Equivalent Oracle commands:  <a href="../ora/index_d.html">DROP INDEX </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

