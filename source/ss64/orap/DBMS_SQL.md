---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_SQL</h1> 
<p>Dynamic SQL statements, including data manipulation language (DML) 
  or data definition language (DDL) statements.</p>
<pre>Subprocedures:

OPEN_CURSOR Function 
               Returns cursor ID number of new cursor. 

PARSE          Parse given statement. 

BIND_VARIABLE  Bind a given value to a given variable or collection. 
BIND_ARRAY     Bind a given value to a given variable or collection. 

DEFINE_COLUMN
DEFINE_COLUMN_LONG
               Define a column to be selected from the given cursor,
               used only with SELECT statements. 

DEFINE_ARRAY   Define a collection to be selected from the given cursor,
               used only with SELECT statements. 

EXECUTE Function 
               Execute a given cursor. 

EXECUTE_AND_FETCH Function 
               Execute a given cursor and fetch rows. 

FETCH_ROWS Function 
               Fetch a row from a given cursor. 

COLUMN_VALUE   Returns value of the cursor element
               for a given position in a cursor. 

COLUMN_VALUE_LONG 
               Returns a selected part of a LONG column,
               that has been defined using DEFINE_COLUMN_LONG. 

VARIABLE_VALUE Returns value of named variable for given cursor. 

IS_OPEN Function 
               Returns TRUE if given cursor is open. 

DESCRIBE_COLUMNS
               Describe the columns for a cursor opened and parsed through DBMS_SQL. 

CLOSE_CURSOR   Close given cursor and frees memory. 

LAST_ERROR_POSITION Function 
               Return byte offset in the SQL statement text where the error occurred. 

LAST_ROW_COUNT Function 
               Returns cumulative count of the number of rows fetched. 

LAST_ROW_ID Function 
               Returns ROWID of last row processed. 

LAST_SQL_FUNCTION_CODE Function 
               Returns SQL function code for statement.  </pre>
<p> For full documentation of the packaged procedures 
  above see the Oracle Manual:<br>
  "Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
  <br>
  </b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
  <i>by Steven Feuerstein et al</i></p>
<p><b>Related:<br>
</b><br><a href="../ora/exec_imm.html">EXECUTE IMMEDIATE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

