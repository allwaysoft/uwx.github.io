---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>OUTPUT Clause</h1>
<p>Return information from, or expressions based on, each row affected by an INSERT, UPDATE, or DELETE statement.</p>
<pre>Syntax
  
  {
    [OUTPUT <i>dml_select_list</i> INTO { @<i>table_variable</i> | <i>output_table</i> } [ ( <i>column_list</i> ) ] ]
    [OUTPUT <i>dml_select_list</i> ]
  }

  dml_select_list:
           {column_name | scalar_expression} [ [AS] <i>column_alias_identifier</i> ]
            [ ,...n ]

  column_name:
           {DELETED | INSERTED | <i>from_table_name</i>} . { * | <i>column_name</i>}

Key:
   @<i>table_variable</i>  a table variable that the returned rows are inserted into instead of being returned to the caller. 
   output_table      A table that the returned rows are inserted into instead of being returned to the caller. 
   column_list       An optional list of column names on the target table of the INTO clause.
   scalar_expression An expression that evaluates to a single value.
   DELETED           A column prefix that specifies the value deleted by the update/delete.
   INSERTED          A column prefix that specifies the value added by the insert/update.</pre>
<p>  If  multiple users may be  performing a destructive read from one table use the READPAST <a href="clause_table_hint.html">table hint</a> to prevent locking issues.</p>
<p>Example</p>
<pre>DELETE dbo.MyTable WITH (READPAST)<br>OUTPUT deleted.*<br>WHERE DbID = 100;<br>GO</pre>
<p class="quote"><i>"If you can suffer without a hint of self-pity, without a hint of
  self-preoccupation, then this develops an almost limitless capacity for
  compassion for everyone everywhere" ~
John Griffin</i></p>
<p><b>Related commands:</b></p>
<p>  <span class="body">  <a href="insert.html">INSERT</a><br>
    <a href="update.html">UPDATE</a><br>
  <a href="delete.html">DELETE</a></span><br>
  <a href="set.html">SET</a> TRANSACTION ISOLATION LEVEL</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clause_output.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

