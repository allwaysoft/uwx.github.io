---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>INSERT</h1>
<p>Add a new row to a table or view.</p>
<pre>Syntax
      [WITH <i><a href="clause_with_common_te.html">common_table_expression</a></i> [ ,...<i>n</i> ] ]
        INSERT 
           [TOP (<i>expression</i>) [PERCENT] ] 
             [INTO] {<i>object</i> | <i>rowset_function_limited</i> 
                      [WITH ( <i><a href="clause_table_hint.html">Table_Hint_Limited</a></i> [ ...n ] ) ]
                    }
      {
       [( <i>column_list</i> )] [<a href="clause_output.html">OUTPUT_Clause</a>] VALUES ( { DEFAULT | NULL | <i>expression</i> } [ ,...n ])
       <i>derived_table</i> 
       <i>execute_statement</i> 
      } 
      | DEFAULT VALUES 
      [; ]

   object:
     <i>server.database</i>.<i>schema</i>.<i>table_or_view
     database.[schema].table_or_view
     schema.table_or_view</i>

Key
   TOP            The number or percent of random rows that will be inserted.
   <i>rowset_function_limited</i>  Either the OPENQUERY or OPENROWSET function.
   OUTPUT..       Return the inserted rows.
   VALUES         Supply a list of data values to be inserted.
   DEFAULT        Load the column's default value (or NULL).
   DEFAULT VALUES Load defaults for all columns</pre> 
<p>  When an INSTEAD OF trigger is defined on INSERT actions against a table or view, the trigger executes instead of the INSERT statement.</p>
<p>Example</p>
<pre>INSERT INTO Table01 <br>    VALUES ('Character data',1);
GO

INSERT INTO Table02<br>    VALUES (NEWID(),'Character data');
GO</pre>
<p class="quote"><i>"When debugging, novices insert corrective code; experts remove defective code" ~ Richard Pattis</i></p>
<p><b>Related commands:</b></p>
<p>  BULK INSERT<br>
  <a href="table_c.html">CREATE TABLE</a><br>
  <a href="delete.html">DELETE</a><br>
  <a href="execute.html">EXECUTE</a><br>
  IDENTITY (Property)<br>
  NEWID<br>
  <a href="select.html">SELECT</a><br>
  <a href="set.html">SET</a> ROWCOUNT<br>
  <a href="update.html">UPDATE</a><br>
Equivalent Oracle command:  <a href="../ora/insert.html">INSERT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="insert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

