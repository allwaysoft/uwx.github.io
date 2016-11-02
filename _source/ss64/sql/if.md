---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>IF...ELSE</h1>
<p>Conditionally execute  T-SQL statements.</p>
<pre>Syntax
      IF <i>boolean_expression</i><br>      { <i>sql_statement</i> | <i>statement_block</i> }
    [ ELSE
      { <i>sql_statement</i> | <i>statement_block</i> } ]

Key<i>
   boolean_expression</i>
        An expression that returns TRUE or FALSE.
        If Boolean_expression contains a SELECT statement,
        it must be enclosed in parentheses.

   <i>sql_statement</i> | <i>statement_block</i>
        Any T-SQL statement or statement grouping as
        defined with a statement block.
        Unless a statement block is used, the IF or ELSE condition
        can affect the performance of only one T-SQL statement.

        Use BEGIN and END to define a statement block.</pre>
<p>Example</p>
<pre>IF exists (select *<br>	        from sales<br>	        where customer_id = 123)<br>  Print 'Record exits'<br>ELSE<br>  Print 'Record doesn''t exist'</pre>
<p class="quote"><i>“IF you can keep your head when all about you, Are losing theirs and blaming it on you...” ~  Rudyard Kipling 1899 </i></p>
<p><b>Related:</b></p>
<p> <a href="exists.html">EXISTS</a><br>
Equivalent Oracle  command:  Select into a cursor then: <span class="code">IF <i>cursorname</i> = 123 Then</span>... </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

