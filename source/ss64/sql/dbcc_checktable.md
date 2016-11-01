---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKTABLE - Check the integrity of a table or indexed view.</h1>
<pre>Syntax
      <b>DBCC CHECKTABLE </b><br>       ('<i>table</i>' | '<i>view</i>'<br>           [ , { NOINDEX | index_id }<br>          |, { REPAIR_ALLOW_DATA_LOSS | REPAIR_FAST | REPAIR_REBUILD } <br>           ] <br>       )<br>       [WITH <br>        { ALL_ERRORMSGS ]<br>          [ , EXTENDED_LOGICAL_CHECKS ] <br>          [ , NO_INFOMSGS ]<br>          [ , TABLOCK ] <br>          [ , ESTIMATEONLY ] <br>          [ , { PHYSICAL_ONLY | DATA_PURITY } ] <br>        }<br>       ]
 Key:
   NOINDEX        - Skip intensive checks of nonclustered indexes. 
   REPAIR_ALLOW_DATA_LOSS - Try to repair all reported errors.
   REPAIR_REBUILD - Perform all repairs that can be performed without risk of data loss.
   REPAIR_FAST    - deprecated option
   ALL_ERRORMSGS  - Return all reported errors per object, default = first 200 errors.
   TABLOCK        - Obtain locks instead of using an internal database snapshot.
   ESTIMATEONLY   - Display the estimated amount of tempdb space that would be required.
   PHYSICAL_ONLY  - Limits the checking to the integrity of the physical structure
  EXTENDED_LOGICAL_CHECKS - If the compatibility level is 100 (SQL Server 2008) or higher,
                    perform logical consistency checks on indexed views, XML indexes,
                    and spatial indexes.
   DATA_PURITY    - Check the table for column values that are not valid or out-of-range.</pre>
<p>Use the DATA_PURITY option for databases upgraded from versions of SQL Server earlier than 2005. </p>
<p>  To repair errors restore from a backup, use the REPAIR options only as a last resort. </p>
<p>Examples</p>
<pre>-- Check the integrity of MyTable in 'MyDatabase'
USE MyDatabase;<br>GO<br>DBCC CHECKTABLE ('MySchema.MyTable')<br>GO</pre>
<p class="quote"><i>"We're going to rebuild and rebuild stronger" 
~ Mayor Rudolph Giuliani</i></p>
<p>  <b>Related</b></p>
<p><a href="dbcc_checkconstraints.html">DBCC CHECKCONSTRAINTS</a> - Check integrity of table constraints.</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_checktable.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

