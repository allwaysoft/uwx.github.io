---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DROP TABLE</h1> 
<p>Drop a table.<br>
  <br>
  Syntax:</p>
<pre>   DROP TABLE [<i>schema</i>.]<i>table</i> [CASCADE CONSTRAINTS] [<a href="purge.html">PURGE</a>];

Key
   <i>schema</i>   The name of the schema containing the table to be dropped
   <i>table</i>    The name of the table to drop
   PURGE    Bypass the RecycleBin</pre>
<p><b>Examples</b></p>
<p>Drop a table, bypassing the recyclebin:</p>
<p class="code">drop table SS64_table <a href="purge.html">purge</a>;</p>
<p>If the table does not exist, Oracle will return the error: ORA-00942 Table or View Does Not Exist</p>
<p>To drop a table and supress any ORA-00942 error:</p>
<pre>BEGIN<br>   EXECUTE IMMEDIATE 'DROP TABLE [<i>schema</i>.]<i>table</i>';<br>   EXCEPTION WHEN OTHERS THEN NULL;<br>END;</pre>
<p>  <i class="quote">"I've had a wonderful time, but this wasn't it" ~ Groucho 
  Marx</i><br>
  <br>
<b>Related Commands:</b>
</p><pre>  <a href="table_a_cols.html">ALTER TABLE DROP column</a>
  <a href="table_a_cons.html">ALTER TABLE DROP primary key/constraint</a>
  <a href="index_d.html">DROP INDEX</a>
  <a href="mview_d.html">DROP SNAPSHOT</a>
  <a href="view_d.html">DROP VIEW</a></pre>
<p> <b>Related Views:<br>
  </b></p>
<pre>  <a href="../orad/DBA_ALL_TABLES.html">DBA_ALL_TABLES</a>         <a href="../orad/ALL_ALL_TABLES.html">ALL_ALL_TABLES</a>         <a href="../orad/USER_ALL_TABLES.html">USER_ALL_TABLES</a>
  <a href="../orad/DBA_TABLES.html">DBA_TABLES</a>             <a href="../orad/ALL_TABLES.html">ALL_TABLES</a>             <a href="../orad/USER_TABLES.html">USER_TABLES</a>             <a href="../orad/TAB.html">TAB</a>
  <a href="../orad/DBA_PARTIAL_DROP_TABS.html">DBA_PARTIAL_DROP_TABS</a>  <a href="../orad/ALL_PARTIAL_DROP_TABS.html">ALL_PARTIAL_DROP_TABS</a>  <a href="../orad/USER_PARTIAL_DROP_TABS.html">USER_PARTIAL_DROP_TABS</a> 
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="table_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

