---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a></h1>
<p>Computed column  definition. </p>
<pre>Syntax


  ALTER TABLE <i>table</i> ALTER COLUMN <i>column</i> [ WITH {CHECK | NOCHECK} ] ADD <i>computed_column_definition</i> [,...<i>n</i>]
    

Computed_column_definition:

   <i>column</i> AS <i>computed_column_expression</i>  [PERSISTED [ NOT NULL ] ]
      [CONSTRAINT <i>constraint</i> { <b>PRIMARY KEY | UNIQUE</b> } ]
         [CLUSTERED | NONCLUSTERED]
            [WITH FILLFACTOR = <i>fillfactor</i> 
               [WITH ( <i>index_option</i> [, ...<i>n</i>] ) ]

   <i>column</i> AS <i>computed_column_expression</i>  [PERSISTED [ NOT NULL ] ]
      [CONSTRAINT <i>constraint</i>]
         [<b>FOREIGN KEY</b> ] 
            [REFERENCES <i>referenced_table</i> [ ( <i>ref_column</i> ) ] ]
               [ ON DELETE { <u>NO ACTION</u> | CASCADE } ] 
                  [ ON UPDATE { <u>NO ACTION</u> } ] 
                     [ NOT FOR REPLICATION ] 

   <i>column</i> AS <i>computed_column_expression</i>  [PERSISTED [ NOT NULL ] ]
      [CONSTRAINT <i>constraint</i> ]
         [<b>CHECK</b> [ NOT FOR REPLICATION ] ( <i>logical_expression</i> ) ] 
            [ ON <i>storage_option</i> ] 



table:
<i>    database.schema.table
    database..table
    schema.table </i>

storage_options:
    <i>partition_scheme</i> ( <i>partition_column</i> ) 
    <i>filegroup</i> 
    "default" 

index_options:
   PAD_INDEX = {ON | <u>OFF</u>} 
   FILLFACTOR = <i>fillfactor</i> 
   IGNORE_DUP_KEY = {ON | <u>OFF</u>} 
   STATISTICS_NORECOMPUTE = {ON | <u>OFF</u>} 
   ALLOW_ROW_LOCKS = {<u>ON</u> | OFF} 
   ALLOW_PAGE_LOCKS = {<u>ON</u> | OFF} </pre>
<p>    computed_column_expression - An expression that defines the value of a computed column. A computed column is not physically stored in the table, unless the column is marked PERSISTED. </p>
<p>Example</p>
<pre>-- add a date/time column defaulting to today
ALTER TABLE MyTable<br>ADD MyDateColumn smalldatetime NULL<br>CONSTRAINT MyDateColumn_dflt<br>DEFAULT GETDATE() WITH VALUES ;<br>GO
</pre>
<p><span class="quote"><i>"At a good table we may go to school" - Thomas Fuller</i></span></p>
<p><b>Related commands:</b></p>
<p><a href="table_c.html">CREATE TABLE</a><br>
<a href="table_d.html">DROP TABLE</a><br>
Equivalent Oracle command:  <a href="../ora/table_a.html">ALTER TABLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_a_computed.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

