---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>Cursor FOR Loops </h1> 
<p>Without defining a cursor explicitly we can simply substitute 
  the subquery inside a FOR statement.</p>
<pre>e.g. 
SET SERVEROUTPUT ON
BEGIN
   FOR trip_record IN (SELECT bt_id_pk, bt_duration
                      FROM business_trips) LOOP
      -- implicit open/fetch occurs
      IF trip_record.bt_duration = 1 THEN
        DBMS_OUTPUT_LINE ('trip Number ' || trip_record.bt_id_pk
                        || ' is a one day trip');
      END IF;
   END LOOP; -- implicit CLOSE occurs
END;
/

Cursor with Parameters

DECLARE
   v_hotel     business_trips.bt_hotel_id%TYPE := 12;
   v_duration  business_trips.bt_duration.%TYPE := 3;
   CURSOR trip_cursor(p_hotel NUMBER, p_duration VARCHAR2) IS
     SELECT ...

--Then to open the cursor either

OPEN trip_cursor (12, 3);

--or using the variables:

OPEN trip_cursor (v_hotel, v_duration);</pre>
<p> --Alternatively open the cursor implicitly as part of
a Cursor FOR loop<br>
pass the parameters like this...<br>
</p>
<pre>BEGIN
   FOR trip_record IN trip_cursor(12, 3) LOOP ...<span class="body"><b>
<br>
Related:<br></b><br>PL/SQL <a href="loops.html">looping commands</a> 
EXIT - 
GOTO -</span></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="cursor_for_loops.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

