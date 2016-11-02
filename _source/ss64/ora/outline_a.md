---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER OUTLINE</h1> 
<p>Alter a stored outline.<br>
  <br>
  Syntax:</p>
<pre>   ALTER OUTLINE [<u>PUBLIC</u>|PRIVATE] <i>outline</i> <i>options</i>;

<i>options</i>:<br>   REBUILD
   RENAME TO new_name
   CHANGE CATEGORY TO new_category_name
</pre>
<p>Specify PRIVATE  to modify the outline that is private to the current session (whose data is stored in the current parsing schema.)</p>
<p><i class="quote">"A prediction is worth twenty explanations" - K. Brecher</i><b><br>
    <br>
  Related Commands:<br>
  <br>
  </b> OUTLINE - <a href="outline_c.html">CREATE OUTLINE</a> <br>
  OUTLINE - <a href="outline_d.html">DROP OUTLINE</a><br>
  SESSION - <a href="session_a.html">ALTER SESSION</a><br>
  SYSTEM - <a href="system_a.html">ALTER SYSTEM</a> <b><br>
  </b><a href="../orap/DBMS_OUTLN.html">DBMS_OUTLN</a>
</p>
<p><b>Related Views:</b></p>
<p class="code">  <a href="../orad/DBA_OUTLINES.html">DBA_OUTLINES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_OUTLINES.html">USER_OUTLINES</a> <br>  
  <a href="../orad/DBA_OUTLINE_HINTS.html">DBA_OUTLINE_HINTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_OUTLINE_HINTS.html">USER_OUTLINE_HINTS</a><br>                                                                
<a href="../orad/SESSION_PRIVS.html">SESSION_PRIVS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="outline_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

