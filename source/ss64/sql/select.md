---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>SELECT</h1>
<p>Retrieve rows from the database</p>
<pre>Summary Syntax:

   [WITH<common_table_expression>]
       <b>SELECT</b> [ALL|DISTINCT] [TOP n [PERCENT] [WITH TIES]] <b><i>select_list</i></b> [INTO <i>new_table</i> ]
          [<b>FROM</b> <b><i>table_source</i></b> ]
             [WHERE <i>search_condition</i> ]
                [GROUP BY <i>group_by_expression</i> ]
                   [HAVING <i>search_condition</i> ]
                      [ORDER BY <i>expression </i>[<u>ASC</u>|DESC] ]


Key
   select_list    One or more Columns from a Table, View or Alias:
                  table.*, table.column1, table2.column3, view4.* ...

   table_source   <i>Table_or_view</i>
                  <i>Table_or_view</i> [AS] <i>table_alias</i>
                  <i>rowset_function</i> [AS] <i>table_alias</i>
                  <i>user_defined_function</i> [AS] <i>table_alias</i>
                  OPENXML XML clause
                  <i>table_source</i> [INNER JOIN] <i>table_source</i>
                  <i>table_source</i> {LEFT | RIGHT | FULL} [OUTER] JOIN <i>table_source</i>
</common_table_expression></pre>
<p>    In addition to the above the UNION, EXCEPT and INTERSECT operators can be used to combine multiple queries  into a single set of results, each <i>query_spec</i> must return the same number of columns:</p>
<pre><i>query_spec</i> UNION [ALL] <i>query_spec</i>  [...<i>n</i> ] ;
<i>query_spec</i> EXCEPT <i>query_spec</i>  [...n ] ] ;
<i>query_spec</i> INTERSECT <i>query_spec</i>  [...n ] ] ;
</pre>
<p>Examples</p>
<pre>USE MyDatabase ;<br>GO<br>SELECT *<br>FROM MySchema.MyTable<br>ORDER BY MyColumn ASC ;
GO

SELECT MyColumn1, MyColumn2<br>FROM MySchema.MyTable;
GO

SELECT My_alias.*<br>FROM MySchema.MyTable My_alias;
GO

SELECT MyColumn1, AVG(MyColumn3) AS 'Average Price'<br>FROM MySchema.MyTable<br>WHERE MyColumn3 &gt; 750<br>GROUP BY MyColumn1<br>ORDER BY MyColumn1 ;<br>GO
</pre>
<p class="quote"><i>"A synonym is a word you use when you can't spell the word you first 
thought of" - Burt Bacharach</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="insert.html">INSERT</a><br>
  <a href="update.html">UPDATE</a><br>
    <a href="union.html">UNION</a>  <br>
Equivalent Oracle command:  <a href="../ora/select.html">SELECT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

