 

<h1>Oracle PL/SQL</h1>
<p>Oracle Procedural SQL extensions:</p>
<pre><a href="structure.html">PL/SQL Structure</a>
  <a href="declare.html">DECLARE</a> - also declaring <a href="declaretbl.html">Table Variables</a>
  <a href="exception.html">BEGIN-EXCEPTION-END</a>

<a href="operators.html">Operators</a>
<a href="if.html">Conditional Statements</a> - IF

Cursor commands

1) <a href="cursor_declare_open.html">Cursor DECLARE</a> - Define structure &amp; create a named SQL area
2) <a href="cursor_declare_open.html">Cursor OPEN</a>    - Interpret any bind variables and Query the database  
3) <a href="cursor_fetch_close.html">Cursor FETCH</a>   - Load the current row into variables
4) <a href="cursor_fetch_close.html">Cursor CLOSE</a>   - When there are no more rows to process

<a href="loops.html">Looping Statements</a> - LOOP, WHILE, FOR
<a href="cursor_for_loops.html">Cursor FOR</a> loops

Cursor Variables (REF cursors)

1) <a href="ref_cursor_declare_open.html">REF Cursor DECLARE</a> - Define structure &amp; create a named SQL area
2) <a href="ref_cursor_declare_open.html">REF Cursor OPEN</a>    - Interpret any bind variables and Query the database  
3) <a href="ref_cursor_fetch_close.html">REF Cursor FETCH</a>   - Load the current row into variables
4) <a href="ref_cursor_fetch_close.html">REF Cursor CLOSE</a>   - When there are no more rows to process

<a href="select.html">SELECT</a>... INTO v_myvar... ;
<a href="../ora/insert.html">INSERT</a> INTO... VALUES... ;
<a href="../ora/update.html">UPDATE</a>... SET... =... <a href="current.html">WHERE CURRENT OF</a> cursor_name;
<a href="../ora/delete.html">DELETE</a> FROM... <a href="current.html">WHERE CURRENT OF</a> cursor_name;</pre>
<p> <a href="procedures.html">An overview of Stored Procedures PL/SQL</a></p>
<p><i class="quote">"Software code, like laws and sausages, should never be examined in production" ~ Edward Tenner</i><b><br>
<br>
Related Commands:</b><br>
<a href="../ora/commit.html"><br>
COMMIT</a> <a href="../ora/savepoint.html"><br>
SAVEPOINT</a> <a href="../ora/rollback.html"><br>
ROLLBACK</a> </p><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="index.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

