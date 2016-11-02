---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>Fetch and Close a REF Cursor</h1> 
<pre><b>FETCH</b> a REF cursor:

  FETCH {<i>cursor_name</i> | :<i>host_cursor_variable_name</i>}
     INTO {<i>variable1</i>[, <i>variable2</i>,...] | <i>record_name</i>};

The variables must match (both in number and positionally) the 
columns listed in the REF cursor OPEN statement.
Also the data types must either match or be compatible.

A fetch statement retrieves rows one at a time from
the result set of a multi-row query - in other words it
advances the cursor to the next row.

<b>CLOSE</b> a REF cursor:

  CLOSE {<i>cursor_name</i> | :<i>host_cursor_variable_name</i>};

Closing a cursor releases the context area. 

REF Cursor Attributes:

cursor<b>%ROWCOUNT</b> - int - number of rows fetched so far
cursor<b>%ROWTYPE</b>  - returns the datatype of the underlying table
cursor<b>%FOUND</b>    - bool - TRUE if &gt;1 row returned
cursor<b>%NOTFOUND</b> - bool - TRUE if 0 rows returned
cursor<b>%ISOPEN</b>   - bool - TRUE if cursor still open
</pre>
<p><span class="body">    <b>Notes:</b><br>
    Typically the REF CURSOR definition and the OPEN FOR SELECT will be in a packaged procedure on the server<br>
    <br>
  A client-side application will then call the procedure - thus obtaining a valid open cursor with the correct SQL<br>
  The client-side application will then perform further 
  processing, FETCH into variables etc<br>
    <br>
  Note that the cursor variable must be the same TYPE
  for both the packaged procedure on the server and
  in the DECLARE section of the client-side application.<br>
    <br>
  The way to be sure of this is to declare the TYPE in a
PACKAGE</span></p>
<p>Cursor<b>%ROWCOUNT</b> will display the number of rows retrieved so far. <br>
Until Oracle has retrieved all the rows then by definition it does not have an accurate record of how many there are. Of course <a href="../orad/USER_TABLES.html">user_tables </a>or <a href="../orad/DBA_TABLES.html">dba_tables</a> will have a count of the number of rows (NUM_ROWS), but this is only as up to date as the statistics.</p>

<p><b>Example:</b></p>
<pre>CREATE PACKAGE my_cursor_types AS

   TYPE MyCursor IS REF CURSOR;
   ...
END my_cursor_types;


CREATE PROCEDURE GetCarter ( proc_cv IN OUT my_cursor_types.MyCursor,
                             emp_name VARCHAR2(50) )
   ...

Then the client-side application code would start like

DECLARE
    local_cv        my_cursor_types.MyCursor;
    carter_record   carter%ROWTYPE
BEGIN
   GetCarter(local_cv,:employee)    -- employee is a host variable
   FETCH local_cv INTO carter_record;
   ...</pre>
<p> <span class="body"><b> 
  Related:</b></span></p>
<p><span class="body"><a href="cursor_fetch_close.html">Fetch and CLOSE a normal 
  cursor</a></span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ref_cursor_fetch_close.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

