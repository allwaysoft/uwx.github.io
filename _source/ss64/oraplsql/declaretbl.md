---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>DECLARE </h1> 
<p>Declare TABLE TYPE variables in a PL/SQL declare <a href="structure.html">block</a>. 
  <br>
  <br>
  Table variables are also known as index-by table or array. The table variable 
  contains one column which must be a scalar or record datatype plus a primary 
  key of type BINARY_INTEGER. <br>
  <br>
  Syntax: </p>
<pre>   DECLARE
   TYPE type_name IS TABLE OF
      (column_type |
      variable%TYPE |
      table.column%TYPE
         [NOT NULL]
            INDEX BY BINARY INTEGER;

-- Then to declare a TABLE variable of this type:

   variable_name type_name;

-- Assigning values to a TABLE variable:
   variable_name(n).field_name := 'some text';
-- Where 'n' is the index value</pre>
<p> <b>Using TABLE variable Methods:</b><br>
  <br>
  To execute these use the syntax<br>
</p>
<pre>   table_name[ (parameters)]

EXISTS(n)   Returns TRUE if nth element of the table exists.

COUNT       The number of elements (rows) in the plsql table

FIRST       First and Last index no.s in the table
LAST        returns NULL if table is empty

PRIOR(n)    Returns index no that preceeds n in the plsql table

NEXT(n)     Returns index no that succeeds n in the plsql table

EXTEND(n,i) Append n copies of the 'i'th element to a plsql table
            i defaults to NULL n defaults to 1

TRIM(n)     Remove n elements from the end of a plsql table
            n defaults to 1

DELETE(m,n) Delete elements in range m...n
            m defaults to = n
            n defaults to ALL elements

Note Extend and Trim are new to Oracle 8.</pre>
<p> <span class="body"><b>Examples:</b></span></p>
<pre>   DECLARE
   -- declare the table type
   TYPE MyTrip_table_type IS TABLE OF
       business_trips.bt_cost%Type
       INDEX BY BINARY INTEGER;

   --declare a TABLE variable of this type
   myTrips MyTrip_table_type;

   BEGIN
      myTrips(1) := 'Test Job';
      UPDATE business_trips
      SET bt_cost = bt_cost * 1.2
      WHERE bt_id_pk = myTrips(1)
   END
   /</pre>
<p><b> <br>
  Related :</b></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

