---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1><a href="table_a.html">ALTER TABLE</a> add column</h1>
<pre>Syntax
      ALTER TABLE <i>table </i>ALTER COLUMN <i>column</i> [ WITH {CHECK | NOCHECK} ]
         ADD <i>column_definition</i> [,...<i>n</i>] [;]

column_definition:

   <i>column data_type</i>
      [COLLATE <i>collation_name</i> ] 
         [NULL | NOT NULL]
            [CONSTRAINT <i>constraint</i>] DEFAULT <i>constant_expression</i> ] 
            [IDENTITY [ ( <i>seed</i> ,<i>increment</i> ) ] [ NOT FOR REPLICATION ] 
               [ROWGUIDCOL] [<i><a href="table_a_constraint.html">column_constraint</a></i> [ ...n ] ] 
    
data_type: 
   [<i>type_schema</i>.] <i>type</i> 
      [ ( <i>precision</i> [ , <i>scale</i> ] | max | 
          [ { <u>CONTENT</u> | DOCUMENT } ] <i>xml_schema_collection</i> ) ] 

 
table:
<i>    database.schema.table
    database..table
    schema.table </i>
</pre>
<p>    Arguments:</p>
<p>ALL - All constraints or triggers in the table are enabled or disabled.</p>
<p>column - A maximum of 128 characters. The name 'timestamp' is used if no name is specified for a timestamp data type column.</p>
<p>TEXTIMAGE_ON - Specifies an alternate storage <i>filegroup</i> for columns of type: text, ntext, image, xml, varchar(max), nvarchar(max), varbinary(max), and CLR user-defined type.</p>
<p>CONTENT - Allow multiple top-level elements in each instance of the xml data type.<br>
DOCUMENT - Allow only one top-level element in each instance of the xml data type.</p>
<p>  DEFAULT - A value provided for the column when nothing is explicitly supplied during an insert.<br>
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
  ROWGUIDCOL, timestamp data type, computed column (or used in a computed column), associated with a DEFAULT definition (may still adjust length, precision &amp; scale.) you cannot modify an existing  column to add the IDENTITY property.</p>
<p>Example</p>
<pre>-- Add a column
ALTER TABLE MyTable ADD MyNewColumn VARCHAR(45) NULL ;<br>GO</pre>
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
<div id="bl" class="footer"><a href="table_a_col_def.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

