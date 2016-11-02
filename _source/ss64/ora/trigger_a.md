---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER TRIGGER</h1> 
<p>Change the properties of a trigger.<br>
  <br>
  Syntax:</p>
<pre>   ALTER TRIGGER [<i>schema</i>.]<i>trigger</i> ENABLE 

   ALTER TRIGGER [<i>schema</i>.]<i>trigger</i> DISABLE

   ALTER TRIGGER [<i>schema</i>.]<i>trigger</i> RENAME TO <i>new_name
</i>
   ALTER TRIGGER [<i>schema</i>.]<i>trigger</i> COMPILE [DEBUG] [REUSE SETTINGS]</pre>
<p>An alternative to ALTER TRIGGER COMPILE is the built-in  pl/sql package <a href="../orap/DBMS_UTILITY.html">DBMS_UTILITY</a></p>
<p>Example</p>
<p class="code">Alter trigger ss64.trig_staff_details DISABLE<br>
/<br>UPDATE table ss64.staff_details SET zip_code =2468 where zip_code =2467<br>
/<br>
Alter trigger ss64.trig_staff_details ENABLE<br>
/</p>
<p><i class="quote">"Oh judge! Your damn laws! The good people don't need them, and the bad people don't obey them" ~ Ammon Hennacy</i><br>
  <br>
<b> Related Commands:</b></p>
<p> <a href="trigger_c.html">CREATE TRIGGER</a> <br>
  <a href="trigger_d.html">DROP TRIGGER</a><br>
  <a href="table_a.html">ALTER TABLE</a> <br>
  <br>
  <b>Related Views:</b></p>
<pre> <a href="../orad/DBA_SOURCE.html">DBA_SOURCE</a>             <a href="../orad/ALL_SOURCE.html">ALL_SOURCE</a>             <a href="../orad/USER_SOURCE.html">USER_SOURCE</a> 
 <a href="../orad/DBA_TRIGGERS.html">DBA_TRIGGERS</a>           <a href="../orad/ALL_TRIGGERS.html">ALL_TRIGGERS</a>           <a href="../orad/USER_TRIGGERS.html">USER_TRIGGERS</a> 
 <a href="../orad/DBA_TRIGGER_COLS.html">DBA_TRIGGER_COLS</a>       <a href="../orad/ALL_TRIGGER_COLS.html">ALL_TRIGGER_COLS</a>       <a href="../orad/USER_TRIGGER_COLS.html">USER_TRIGGER_COLS</a>
 <a href="../orad/DBA_INTERNAL_TRIGGERS.html">DBA_INTERNAL_TRIGGERS</a>  <a href="../orad/ALL_INTERNAL_TRIGGERS.html">ALL_INTERNAL_TRIGGERS</a>  <a href="../orad/USER_INTERNAL_TRIGGERS.html">USER_INTERNAL_TRIGGERS</a>         </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trigger_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

