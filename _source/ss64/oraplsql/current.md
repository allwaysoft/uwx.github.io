---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapl.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Where current of</h1> 
<p><span class="code">... WHERE CURRENT OF</span> <i>cursor</i></p>
<p>WHERE CURRENT is used as a reference to the current row when 
using a cursor to UPDATE or DELETE the current row.<br>
<br>
The cursor must be based on SQL that <a href="select.html">selects 'FOR UPDATE'</a><br>
<br>
e.g.<br>
</p>
<pre>DECLARE
   CURSOR trip_cursor IS
      SELECT
           bt_id_pk,
           bt_duration
      FROM
           business_trips
      WHERE
           bt_id_pk = 23
      FOR UPDATE OF bt_id_pk, bt_duration;
BEGIN
   FOR trip_record IN trip_cursor LOOP
     UPDATE business_trips
     SET bt_duration = 5
     <b>WHERE CURRENT OF</b> trip_cursor;
   END LOOP;
   COMMIT;
END;
<span class="body"><b><br>
Related:</b></span> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

