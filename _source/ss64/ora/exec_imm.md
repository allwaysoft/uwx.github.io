---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>EXECUTE IMMEDIATE</h1> 
<p>Execute a dynamic SQL statement or anonymous PL/SQL block.<br>
  <br>
  Syntax:</p>
<pre>   EXECUTE IMMEDIATE <i>dynamic_sql_string</i>
      [INTO {<i>define_variable</i>,… | INTO <i>record_name</i>}]
         [USING
              [IN|OUT|IN OUT] <i>bind_argument</i>,…]
                  [RETURN[ING] INTO
                                   <i>bind_argument</i>,…];

dynamic_sql_string : The SQL statement string or PL/SQL block 

define_variable : One variable receives each column 
                  value returned by the query.

record_name     : A record based on a user-defined TYPE 
                  or %ROWTYPE that receives an entire row
                  returned by a query

bind_argument   : An expression whose value is passed to the
                  SQL statement or PL/SQL block INTO clause 
                  Use for single-row queries; for each column value
                  returned by the query, you must supply an
                  individual variable or field in a record of
                  compatible type.

USING clause    : Allows you to supply bind arguments for the
                  SQL string. This clause is used for both
                  dynamic SQL and PL/SQL,
                  which is why you can specify a parameter mode.
                  This usage is only relevant for PL/SQL, 
                  however; the default is IN, which is the only
                  kind of bind argument you would have for
                  SQL statements.</pre>
<p>You cannot use EXECUTE IMMEDIATE for multiple-row queries. <br>
  <br>
  If "dynamic_sql_string" ends with a semicolon, it will be treated 
  as a PL/SQL block; otherwise, it will be treated as either DML (Data Manipulation 
  Language--SELECT, INSERT, UPDATE, or DELETE) or DDL (Data Definition Language, 
  such as CREATE TABLE). <br>
  <br>
  The "dynamic_sql_string" can contain placeholders for bind arguments, 
  but you cannot use bind values to pass in the names of schema objects, such 
  as table names or column names. <br>
  <br>
  When the statement is executed, the runtime engine replaces each placeholder 
  (an identifier with a colon in front of it, such as :salary_value) in the SQL 
  string with its corresponding bind argument (by position). <br>
  <br>
  You can pass numeric, date, and string expressions. <br>
  <br>
  You cannot, pass a Boolean, or a NULL literal value, you can however pass a 
variable of the correct type that has a value of NULL.
Execute Immediate cannot run queries whose length is greater than 32 KB
</p><p>Example
</p><p><span class="code">begin<br>
execute immediate 'purge recyclebin';<br>
end;</span>
</p><p>  <i>"Everyone wants results, but no one is willing to do what it takes to 
    get them" - Dirty 
  Harry</i><br>
  <br>
  <b>Related Commands:</b><br>
  <br>
<a href="../orap/DBMS_SQL.html">DBMS_SQL</a><br>
<a href="exec.html">EXEC</a>
<br>
Equivalent SQL Server command: exec sp_executesql 'sql Statement'<!-- #BeginLibraryItem "/Library/foot_ora.lbi" --></p><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="exec_imm.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

