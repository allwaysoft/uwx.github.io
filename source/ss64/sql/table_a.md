---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER TABLE</h1>
<p>Modify a table definition. (columns, constraints,  partitions, enable/disable  constraint/trigger.)</p>
<pre>Syntax
      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> [ WITH {CHECK | NOCHECK} ]
         ADD <i><a href="table_a_col_def.html">column_definition</a></i> [,...<i>n</i>] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> 
         DROP COLUMN <i>column</i> [,...<i>n</i>] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> [ WITH {CHECK | NOCHECK} ]
         ADD <i><a href="table_a_computed.html">computed_column_definition</a></i> [,...<i>n</i>] [;]
    
      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> [ WITH {CHECK | NOCHECK} ]
         ADD <i><a href="table_a_constraint.html">table_constraint</a></i> [,...<i>n</i>] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column
        </i> DROP [CONSTRAINT] <i>constraint</i> [,...<i>n</i>] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i>
         DROP [WITH ( <i><a href="table_a_dropcc.html">drop_clustered_constraint</a></i> [,...<i>n</i>] ) ][,...<i>n</i>] [;]
  
      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i>
         [WITH { <u>CHECK</u> | NOCHECK }] { <u>CHECK</u> | NOCHECK } <b>CONSTRAINT</b> 
            { ALL | <i>constraint</i> [,...<i>n</i>] } [;]
        
      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i>
         {ENABLE | DISABLE} <b>TRIGGER</b>  { ALL | <i>trigger</i> [,...<i>n</i>] } [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> 
         SWITCH [ <b>PARTITION</b> <i>source_partition_number_expression</i> ]
            TO [<i>schema</i>.] <i>target_table</i> 
                [PARTITION <i>target_partition_number_expression </i>] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> 
      [<i>type_schema</i>.] <b><i>type</i></b> [ ( 
                      { <i>precision</i> [ , <i>scale</i> ] | max | <i>xml_schema_collection</i> }
                          ) ] 
         [COLLATE <i>collation_name</i> ] 
            [NULL | NOT NULL] [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> 
         {ADD | DROP } { <b>ROWGUIDCOL</b> | PERSISTED } [;]

      ALTER TABLE <i>table </i>ALTER COLUMN <i>column
        </i> DROP <b>NOT FOR REPLICATION</b> [;]

Rename a table:
      ALTER TABLE [dbo].[<i>old_name</i>] <b>SWITCH TO</b> dbo.<i>new_name</i>;

table:
<i>    database.schema.table
    database..table
    schema.table </i>
</pre>
<p>    Arguments:</p>
<p>ALL - All constraints or triggers in the table are enabled or disabled.</p>
<p>column - A maximum of 128 characters. The name 'timestamp' is used if no name is specified for a timestamp data type column.</p>
<p>TEXTIMAGE_ON - Specifies an alternate storage <i>filegroup</i> for columns of type: text, ntext, image, xml, varchar(max), nvarchar(max), varbinary(max), and CLR user-defined type.</p>
<p>DEFAULT - A value provided for the column when nothing is explicitly supplied during an insert.<br>
IDENTITY - An identity column, one per table: tinyint, smallint, int, bigint, decimal(p,0), or numeric(p,0)</p>
<p>ONLINE - Make underlying tables and associated indexes are available  during the index operation. </p>
<p>  NOT FOR REPLICATION - Do not enforce constraints for the replication agent (IDENTITY, FOREIGN KEY and CHECK constraints.) <br>
  CONSTRAINT - Define a PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, or CHECK constraint.</p>
<p>NULL / NOT NULL - Whether the column can accept null values.</p>
<p>CLUSTERED | NONCLUSTERED - The type of index is created for a PRIMARY KEY or UNIQUE constraint. PRIMARY KEY constraints default to CLUSTERED, and UNIQUE constraints default to NONCLUSTERED.</p>
<p>FOREIGN KEY REFERENCES - A constraint to provide referential integrity for the data, requires a UNIQUE INDEX on the referenced table.</p>
<p>max - Applies only to the varchar, nvarchar, and varbinary data types for storing 2^31-1 bytes of character / binary / Unicode data.</p>
<p><u>WITH CHECK</u> / WITH NOCHECK - Is data in the table validated against the new FOREIGN KEY or CHECK constraint.</p>
<p>To modify a table column you may need to: Delete statistics, Remove Primary, Foreign Key or Check constraints, Delete Indexes.</p>
<p>The following columns may not be modified: <br>
  ROWGUIDCOL, timestamp data type, computed column (or used in a computed column), associated with a DEFAULT definition (may still adjust length, precision &amp; scale.) </p>
<p>Examples</p>
<pre>-- Add a new column (will allow nulls by default)
ALTER TABLE MyTable 
ADD MyNewColumn VARCHAR(45) ;<br>GO

-- Disallow nulls on an existing column
ALTER TABLE MyTable 
ALTER COLUMN MyNewColumn VARCHAR(45) NOT NULL;
GO

-- Add a new column (and dont allow nulls)
ALTER TABLE MyTable 
ADD MyNewCol2 int NOT NULL ;
GO
 
--Add a default constraint<br>ALTER TABLE MyTable 
ADD CONSTRAINT MyNewDefault<br>DEFAULT 50 FOR MyNewCol2 ;<br>GO

-- drop a column
ALTER TABLE MyTable 
DROP COLUMN MyOLDColumn;

-- add a date/time column defaulting to today
ALTER TABLE MyTable<br>ADD MyDateCol smalldatetime NULL<br>CONSTRAINT MyDateDflt<br>DEFAULT GETDATE() WITH VALUES ;<br>GO
</pre>
<p class="quote"><i>"At a good table we may go to school" - Thomas Fuller</i></p>
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
<div id="bl" class="footer"><a href="table_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

