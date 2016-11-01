---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>UPDATE</h1>
<p>Change existing data in a table.</p>
<pre>Syntax
      [WITH <i><a href="clause_with_common_te.html">common_table_expression</a></i> [ ,...<i>n</i> ] ]
        UPDATE 
           [TOP (<i>expression</i>) [PERCENT] ] 
             {<i>object</i> | <i>rowset_function_limited</i> 
             [WITH ( <i><a href="clause_table_hint.html">Table_Hint_Limited</a></i> [ ...n ] ) ] }
                SET  {<i>column_expression_clause</i> } [,...<i>n</i>] 
                   [<a href="clause_output.html">OUTPUT <i>Clause</i></a>]
                      [FROM {<i>table_source</i> } [ ,...<i>n</i> ] ] 
                         [WHERE <i>where_clause</i> ] 
                            [OPTION ( <i>query_hint</i> [,...<i>n</i>] ) ] [;]

   column_expression_clause:
      <i>column</i>= { <i>expression</i> | DEFAULT | NULL }
      <i>udt_column</i>.<i>property</i> = <i>expression </i>
      <i>udt_column</i>.<i>field</i> = <i>expression</i> } 
      <i>udt_column</i>.<i>method</i> ( <i>argument</i> [ ,...<i>n</i> ] ) 
      <i>column</i> { .WRITE ( <i>expression</i> , @<i>Offset</i> , @<i>Length</i> ) }
      @<i>variable</i> = <i>expression</i> 
      @<i>variable</i> = <i>column</i> = <i>expression</i> [,...<i>n</i>] 

   where_clause:
      <i>search_condition</i> 
      CURRENT OF  { {[GLOBAL] <i>cursor</i>} | <i>cursor_variable</i> }

   object:
     <i>server.database</i>.<i>schema</i>.<i>table_or_view
     database.[schema].table_or_view
     schema.table_or_view</i>

Key
   WITH common_table_expression
                  A temporary named result set or view
   TOP            The number or percent of random rows that will be updated.
   <i>rowset_function_limited</i>  Either the OPENQUERY or OPENROWSET function.
   SET            List of column or variable names to be updated.
   DEFAULT        Load the column's default value (if no default defined will set to NULL)
   udt_column     A user-defined type column.
   .WRITE         Update a substring of the column value: 
                  replace @Length units starting from @Offset of column with <i>expression</i>. 
   @variable      Set the variable to the value returned by expression.
   @variable = column = expression
                  Set the variable to the same value as the column. 
   @variable = column, column = expression, 
                  Set the variable to the pre-update value of the column.
   OUTPUT..       Return the updated rows.
   CURRENT OF     perform the update at the current position of the cursor.
   query_hint     Apply query optimizer hints</pre> 
<p>Examples</p>
<pre>-- Apply a discount to orders placed today
UPDATE Sales.tblOrderLines
SET Linecost = Linecost * 0.95
FROM Sales.tblOrderLines AS sl
JOIN Sales.tblOrderHeader AS so
ON sl.OrderID = so.OrderID
AND so.OrderDate &gt; CONVERT(DATETIME, CONVERT(CHAR(8), GETDATE(), 112)) ;
GO

-- Wildcard update
UPDATE Sales.tblOrderLines
SET OrderDescription = REPLACE(OrderDescription, 'original string', 'replacement string')
WHERE OrderID = 64;
GO

-- Update with inner join
UPDATE t1
SET col = t2.col
FROM Table1 t1
INNER JOIN Table2 AS t2 ON t1.ID = t2.ID</pre>
<p class="quote"><i>"When debugging, novices insert corrective code; experts remove defective code" - Richard Pattis</i></p>
<p><b>Related commands:</b></p>
<p><a href="insert.html">INSERT</a><br>
BULK INSERT<br>
<a href="table_c.html">CREATE TABLE</a><br>
<a href="delete.html">DELETE</a><br>
<a href="execute.html">EXECUTE</a><br>
IDENTITY (Property)<br>
<a href="select.html">SELECT</a><br>
SET ROWCOUNT<br>
UPDATE(column) - Function, test for insert/update<br>
Equivalent Oracle command:  <a href="../ora/update.html">UPDATE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

