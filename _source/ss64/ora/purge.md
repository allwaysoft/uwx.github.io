---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>PURGE RECYCLEBIN</h1> 
<p>When the recyclebin is enabled (RECYCLEBIN=ON), any tables that you drop do not  get fully deleted, instead, they are moved to the RecycleBin. The PURGE command allows you to empty the recyclebin. This feature was first introduced in Oracle 10g. <br>
<br>
Syntax:</p>
<pre>   PURGE RECYCLEBIN

   PURGE DBA_RECYCLEBIN

   PURGE USER_RECYCLEBIN

   PURGE TABLE <i>TableName</i></pre>
<p>Purging  from all users recyclebins (using DBA_RECYCLEBIN) requires DBA privileges.</p>
<p><b>Examples</b></p>
<p>Drop a table, bypassing the recyclebin:</p>
<p class="code">drop table SS64 purge;</p>
<p>Disable the recyclebin for this session:</p>
<p class="code">ALTER SESSION SET RECYCLEBIN=OFF;</p>
<p>If using a  9i client against a 10g database, the client won't know what purge is, so use <a href="exec_imm.html">execute immediate</a>:<br>
<br>
<span class="code">begin<br>
execute immediate 'purge recyclebin';<br>
end;</span></p>
<p><a href="http://www.orafaq.com/node/968">More examples from OraFAQ </a><br>
<br>
<b>Related:</b></p>
<p>FLASHBACK TABLE - Restore a Table </p>
<p class="code"> <a href="../orad/DBA_RECYCLEBIN.html">DBA_RECYCLEBIN</a>&nbsp;&nbsp; USER_RECYCLEBIN</p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="purge.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

