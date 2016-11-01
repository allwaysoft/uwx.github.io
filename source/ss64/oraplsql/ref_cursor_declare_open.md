---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>CURSORS</h1> 
<p>Declare and OPEN a REF cursor.<br>
  <br>
  There are two steps required to create a cursor variable. First define a ref 
  cursor TYPE; then declare cursor variable(s) of that type. </p>
<pre><b>Define</b> a REF Cursor TYPE:

   TYPE ref_type_name IS REF CURSOR
      [RETURN {cursor_name%ROWTYPE
             |ref_cursor_name%ROWTYPE
             |record_name%TYPE
             |record_type_name
             |table_name%ROWTYPE} ];</pre>
<p> The RETURN clause is optional, when included it causes the cursor 
  variable to be <b>strongly typed</b>.<br>
  <br>
  It is a good practice to use strongly typed cursor variable types - this ensures 
  that columns returned by a query will match the return type of the cursor.<br>
  <br>
  Irrespective of the return clause, each TYPE that you define is a new separate 
  datatype. </p>
<pre><b>Cursor_variable_declaration:</b>

  ref_cursor_name ref_type_name;


<b>OPEN</b> a REF cursor...

  OPEN cursor_variable_name FOR select_statement;

or, to be sure it's not open already:

  IF NOT mycursor%ISOPEN THEN 
    OPEN mycursor FOR select_statement;
  END IF;

You can also open a host cursor variable:

  OPEN :host_cursor_variable_name FOR select_statement;</pre>
<p><b>Notes:</b><br>
  <br>
  The "select_statement" cannot include an INTO clause. <br>
  <br>
  The select statement is part of the OPEN statement (not the declaration) so 
  the same REF cursor can be reopened with different SQL. <br>
  <br>
  Cursor variables can be bind variables. The associated query can reference bind 
  variables as well. 
</p><p> <b> Related:</b></p>
<p><a href="cursor_declare_open.html">Open a normal Cursor</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ref_cursor_declare_open.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

