---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>RENAME Statement</h1> 
<p>Rename a table, view, sequence or private synonym.<br>
  <br>
  Syntax:</p>
<pre>   RENAME <i>old</i> TO <i>new</i>
</pre>
<p>To rename table columns:</p>
<blockquote> 
  <p>CREATE TABLE tmp AS SELECT MyColOld  MyColNew, col2, col3 FROM MY_TABLE; <br>
    DROP TABLE MY_TABLE;<br>
    RENAME tmp TO MY_TABLE;<br>
    <br>
    You can also<br>
    ALTER TABLE MODIFY COLUMN…<br>
    ALTER TABLE DROP COLUMN… <br>
  ALTER TABLE SET UNUSED COLUMN… </p>
</blockquote>
<p><span class="quote"><i>"A clever man commits no minor blunders" ~ Goethe (1749-1832) </i></span> <b><br>
  <br>
Related Commands:</b></p>
<p> TABLE - <a href="table_c.html">CREATE TABLE</a><br>
  TABLE - <a href="table_a.html">ALTER TABLE </a><br>
  <a href="insert.html">INSERT</a><a href="select.html"><br>
  SELECT</a><a href="truncate.html"><br>
  TRUNCATE</a><br>
  <a href="update.html">UPDATE</a> </p>
<p><b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_SNAPSHOTS.html">DBA_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_SNAPSHOTS.html">ALL_SNAPSHOTS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SNAPSHOTS.html">USER_SNAPSHOTS</a> <br>  
&nbsp;<a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a><br>  
&nbsp;<a href="../orad/DBA_TABLES.html">DBA_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_TABLES.html">ALL_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_TABLES.html">USER_TABLES</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/TAB.html">TAB</a><br>  
&nbsp;<a href="../orad/DBA_VIEWS.html">DBA_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_VIEWS.html">ALL_VIEWS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_VIEWS.html">USER_VIEWS</a><br>                                                                
&nbsp;<a href="../orad/DICTIONARY.html">DICTIONARY</a><br>                                                                
&nbsp;<a href="../orad/DICT_COLUMNS.html">DICT_COLUMNS</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rename.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

