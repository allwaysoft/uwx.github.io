---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DELETE</h1>
<p>Remove  rows from a table.</p>
<pre>Syntax
      [WITH <i><a href="clause_with_common_te.html">common_table_expression</a></i> [ ,...n ] ]
      <b>DELETE</b> 
      [TOP ( <i>expression</i> ) [ PERCENT ] ] 
      [<b>FROM</b> ] 
         server.database.schema.table/view
         database.[schema].table/view 
         schema.table/view 
         <i>rowset_function_limited</i> 
            [WITH ( <a href="clause_table_hint.html">table_hint_limited</a>  [ ...n ] ) ]
                [<a href="clause_output.html">OUTPUT_Clause</a>] [;]
      <b>FROM</b>  <i>table_source</i> [ ,...n ] ] 
         [WHERE { <i>search_condition</i> 
         [ CURRENT OF 
               [ GLOBAL ] <i>cursor_name</i> 
               <i>cursor_variable_name</i> 
         ] 
           [OPTION ( <a href="clause_query_hint.html">Query Hint</a>  [ ,...n ] ) ]  [;]

Key:

   TOP <i>#</i>   Number (or percent) of rows that will be deleted. 
           This will be a random subset of the rows

   rowset_function_limited
           Either the OPENROWSET or OPENQUERY  function,
           e.g. OPENQUERY(MyOracleSvr, 'SELECT name, id FROM scott.sales')

   FROM    An optional keyword

   <i>rowset_function_limited</i>  Either an OPENQUERY or OPENROWSET function
 
   OUTPUT_Clause  Return the deleted rows (or expressions)
                  Not supported when targeting a view or remote table.

   FROM table_source  An additional FROM clause - specify data from table_source
                      but delete the corresponding rows from the table in the first FROM clause.
                      This is an alternative to specifying a join, or a subquery in the WHERE clause.
                     (T-SQL extension)

   WHERE    Conditions to limit the number of rows to be deleted.
            If ommitted, DELETE will remove all rows from the table. 

   CURRENT OF 
            Perform the DELETE at the current position of the cursor.

   GLOBAL   The <i>cursor_name </i>refers to a global cursor.

</pre>
<p>    DROP VIEW can be executed against indexed views.</p>
<p>Example</p>
<pre>DELETE FROM MyDatabase.MyTable<br>WHERE Price &gt; 500.00;<br>GO</pre>
<p class="quote"><i># We always did feel the same, We just saw it from a different point of view# - Bob Dylan, Tangled Up In Blue</i></p>
<p><b>Related:</b></p>
<p> <a href="select.html">SELECT</a><br>
  <a href="update.html">UPDATE</a><br>
Equivalent Oracle command: <a href="../ora/delete.html">DELETE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="delete.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

