---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE INDEX </h1>
<p>Create an  index on a  table or view. Also XML indexes. </p>
<pre>Syntax
      -- Relational Index 
      CREATE [UNIQUE] [CLUSTERED | <u>NONCLUSTERED</u>] INDEX <i>index</i>
         ON object (<i>column</i> [<u>ASC</u> | DESC] [,...<i>n</i> ] ) 
            [INCLUDE (<i>column</i> [ ,...<i>n</i>] ) ]
               [WITH (<i>option</i> [ ,...<i>n</i>] ) ]
                  [ON { <i>partition_scheme</i> ( <i>column</i> ) 
                      | <i>filegroup</i> 
                      | <i>default</i> 
                      }
                  ]
      [;]

     -- XML Index 
     CREATE [ PRIMARY ] XML INDEX <i>index</i>
        ON object ( <i>xml_column</i> )
           [USING XML INDEX <i>xml_index</i> 
              [FOR { VALUE | PATH | PROPERTY } ] ]
                 [WITH ( <i>option</i> [ ,...n ] ) ]
      [;]

Object:
     <i>database</i>.[<i>schema</i>].<i>table_or_view
     schema.table_or_view</i>

Options:
   PAD_INDEX  = {ON | <u>OFF</u>}
   FILLFACTOR = <i>fillfactor</i>
   SORT_IN_TEMPDB = {ON | <u>OFF</u>}
   IGNORE_DUP_KEY = {ON | <u>OFF</u>}  **
   STATISTICS_NORECOMPUTE = {ON | <u>OFF</u>}
   DROP_EXISTING = {ON | <u>OFF</u>}
   ONLINE = {ON | <u>OFF</u>}  **
   ALLOW_ROW_LOCKS = {<u>ON</u> | OFF}
   ALLOW_PAGE_LOCKS = {<u>ON</u> | OFF}
   MAXDOP = <i>max_degree_of_parallelism</i>

     ** not supported for XML indexes

Key:
   ASC/DESC    The sort direction for the index column. 
   INCLUDE...  Nonkey columns to add to a nonclustered index
   <i>partition_scheme</i>  The filegroup partition scheme for a partitioned index
   <i>filegroup</i>    Create the index on a specific filegroup.
   <i>xml_column</i>   The xml column on which the index is based
   PAD_INDEX    Pad the index by <i>fillfactor</i> amount 
   <i>fillfactor</i>   Percentage of each index page to fill during index creation/rebuild.
                1-100, default=0
</pre>
<p>In a default (nonclustered) index, the physical order of the data is independent of the index order.</p>
<p>Previous versions of SQL Server use a different CREATE INDEX syntax - this is supported for backward compatibility only in SQL 2005.</p>
<p>To create an index based on a view, the view must be defined with SCHEMABINDING.<br>
  A unique clustered index must be created on a view before any nonclustered index is created.</p>
<p>Examples</p>
<pre>CREATE UNIQUE INDEX MyIndex01 ON MySchema.MyTable(MyColumn);
CREATE UNIQUE CLUSTERED INDEX MyIndex02 ON MyTable(MyColumn);</pre>
<p class="quote"><i>"Anything you build on a large scale or with intense passion invites
  chaos" ~ Francis Ford Coppola</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="index_a.html">ALTER INDEX</a><br>
  <a href="ptnfunction_c.html">CREATE PARTITION FUNCTION</a><br>
  <a href="ptnscheme_c.html">CREATE PARTITION SCHEME</a><br>
  <a href="stats_c.html">CREATE STATISTICS</a><br>
  Data Types<br>
  <a href="dbcc_showstats.html">DBCC SHOW_STATISTICS</a><br>
  <a href="index_d.html">DROP INDEX</a><br>
  sys.indexes<br>
  sys.index_columns<br>
  sys.xml_indexes<br>
  EVENTDATA<br>
Equivalent Oracle commands:  <a href="../ora/index_c.html">CREATE INDEX</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="index_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

