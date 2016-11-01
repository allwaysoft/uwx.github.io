---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> Table and Column Constraint clauses:</h1>
<pre>Column_constraint: 

   [CONSTRAINT <i>constraint</i> ]  {<b>PRIMARY KEY | UNIQUE</b> } 
         [CLUSTERED | NONCLUSTERED ] 
           [WITH FILLFACTOR = <i>fillfactor</i>  
           [WITH ( <i>index_option</i> [ , ...n ] ) 
              [ON <i>storage_option</i>]

   [CONSTRAINT <i>constraint</i> ] 
      [<b>FOREIGN KEY </b>] 
        REFERENCES [<i>schema</i>. ] <i>referenced_table</i> [ ( <i>ref_column</i> ) ] 
           [ON DELETE { <u>NO ACTION</u> | CASCADE | SET NULL | SET DEFAULT } ] 
              [ON UPDATE { <u>NO ACTION</u> | CASCADE | SET NULL | SET DEFAULT } ] 
                 [NOT FOR REPLICATION ] 

   [CONSTRAINT <i>constraint</i> ] 
      <b>CHECK</b> [ NOT FOR REPLICATION ] ( logical_expression ) 


table_constraint:

   [CONSTRAINT <i>constraint</i>] 
      {<b>PRIMARY KEY | UNIQUE</b> } 
         [CLUSTERED | NONCLUSTERED] 
            (<i>column</i> [ <u>ASC</u> | DESC ] [,...<i>n</i>] ) 
               [WITH FILLFACTOR = <i>fillfactor</i>   ]
               [WITH ( <i>index_option</i> [, ...<i>n</i>] ) ]
                  [ON <i>storage_option</i> ] 

   [CONSTRAINT <i>constraint</i>] 
      <b>FOREIGN KEY</b> 
         ( <i>column</i> [,...<i>n</i>] ) 
            REFERENCES <i>referenced_table</i> [ ( <i>ref_column</i> [ ,...<i>n</i> ] ) ] 
               [ON DELETE { <u>NO ACTION</u> | CASCADE | SET NULL | SET DEFAULT } ] 
                  [ON UPDATE { <u>NO ACTION</u> | CASCADE | SET NULL | SET DEFAULT } ] 
                     [NOT FOR REPLICATION ] 

   [ CONSTRAINT <i>constraint</i> ] 
        <b>CHECK</b> [ NOT FOR REPLICATION ] ( <i>logical_expression</i> ) 


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
<p>    Arguments:</p>
<p>ON &lt;partition_scheme&gt; - Table with partitions  stored on  one or more filegroups.<br>
  ON <i>filegroup</i> - Table
is stored in the named filegroup. <br>
ON "default" (or if ON is not specified at all) - The table is stored on the default filegroup.</p>
<p>DEFAULT - A value provided for the column when nothing is explicitly supplied during an insert.<br>
IDENTITY - An identity column, one per table: tinyint, smallint, int, bigint, decimal(p,0), or numeric(p,0)</p>
<p>  NOT FOR REPLICATION - Do not enforce constraints for the replication agent (IDENTITY, FOREIGN KEY and CHECK constraints.) <br>
  CONSTRAINT - Define a PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, or CHECK constraint.</p>
<p>NULL / NOT NULL - Whether the column can accept null values.</p>
<p>CLUSTERED | NONCLUSTERED - The type of index is created for a PRIMARY KEY or UNIQUE constraint. PRIMARY KEY constraints default to CLUSTERED, and UNIQUE constraints default to NONCLUSTERED.</p>
<p>FOREIGN KEY REFERENCES - A constraint to provide referential integrity for the data, requires a UNIQUE INDEX on the referenced table.</p>
<p>max - Applies only to the varchar, nvarchar, and varbinary data types for storing 2^31-1 bytes of character / binary / Unicode data.</p>
<p><u>WITH CHECK</u> / WITH NOCHECK - Is data in the table validated against the new FOREIGN KEY or CHECK constraint.</p>
<p>Examples</p>
<pre>--Add a default constraint<br>ALTER TABLE MyTable 
ADD CONSTRAINT MyNewColumn_dflt<br>DEFAULT 50 FOR MyNewColumn ;<br>GO

-- add a date/time column defaulting to today
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
<div id="bl" class="footer"><a href="table_a_constraint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

