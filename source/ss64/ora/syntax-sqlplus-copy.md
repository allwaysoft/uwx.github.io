---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orasyntax.lbi" --><!-- #EndLibraryItem --><h1>SQL*PLUS - COPY Statement </h1> 
<p>Copy from a query into a table. <br>
  The COPY command works for remote and even non-oracle databases.<br>
  <br>
  Syntax:</p>
<pre><b>COPY</b> {
     FROM <i>username</i>[/<i>password</i>]@<i>db_spec</i> |
       TO <i>username</i>[/<i>password</i>]@<i>db_spec</i> |
     FROM <i>username</i>[/<i>password</i>]@<i>db_spec</i> TO <i>username</i>[/<i>password</i>]@<i>db_spec</i>
     }
       {<b>APPEND | CREATE | INSERT | REPLACE</b>}
          <i>destination_table</i> 
            [(<i>column</i>, <i>column</i>, <i>column</i>…)]
               <b>USING</b> <i>query</i>
 
Key
 FROM       Source database (defaults to current)

 TO         Destination database (defaults to current)

 USING      The SELECT statement(source of data to copy)

 APPEND     Insert into the <i>destination_table</i>
            COPY will create the destination_table if does not exist.

 CREATE     Create the <i>destination_table</i> and insert the rows.
            CREATE will fail with an error if the <i>destination_table</i> already exists.

 INSERT     Insert into the <i>destination_table</i>
            INSERT will fail with an error if the <i>destination_table</i> does not already exist.
            Columns in the USING query must match those in the <i>destination_table</i>. 

 REPLACE    Replace destination_table and its contents with rows from query.
            REPLACE will drop the <i>destination_table</i>(if it exists)and 
            replace it with a table containing the copied data. 
</pre>
<p>Columns created with NUMBER datatype will default to NUMBER(38)<br>
A more efficient alternative to COPY… INSERT is <a href="table_c.html">CREATE TABLE</a> AS…</p>
<p><b> Related:</b></p>
<p> SET LONG - default width for LONG columns<br>
SET ARRAYSIZE - Fetchsize<br>
SET COPYCOMMIT - no. of fetches between each autocommit</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-sqlplus-copy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

