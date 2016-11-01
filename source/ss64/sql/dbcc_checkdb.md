---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKDB - Check the allocation,  and  integrity of all  objects in a database.</h1>
<pre>Syntax
      <b>DBCC CHECKDB </b><br>         [<b>(</b> '<i>database</i>' | database_id | 0<br>              [ , NOINDEX <br>                  <b>{</b>REPAIR_ALLOW_DATA_LOSS |
                  REPAIR_FAST |
                  REPAIR_REBUILD<b>}</b><br>             <b>)</b>]<br>         [WITH <br>            {<br>             [ALL_ERRORMSGS ] [ , NO_INFOMSGS ] [ , TABLOCK ]<br>                [, ESTIMATEONLY ] [ , <b>{</b> PHYSICAL_ONLY | DATA_PURITY <b>}</b> ]<br>            }<br>         ]<br>
 Key:
   NOINDEX        - Skip intensive checks of nonclustered indexes for user tables
   REPAIR_ALLOW_DATA_LOSS - Try to repair all reported errors.
   REPAIR_REBUILD - Perform all repairs that can be performed without risk of data loss.
   ALL_ERRORMSGS  - Return all reported errors per object, default = first 200 errors.
   TABLOCK        - Obtain locks instead of using an internal database snapshot. 
                    this limits the checks that are performed.
   ESTIMATEONLY   - Display the estimated amount of tempdb space that would be required.
   PHYSICAL_ONLY  - Limits the checking to the integrity of the physical structure
   DATA_PURITY    - Check the database for column values that are not valid or out-of-range.
</pre>

<p>Example</p>
<pre>-- Check the current database.<br>DBCC CHECKDB;<br>GO
</pre>
<p class="quote"><i>"There are moments when everything goes well;
don't be frightened, it won't last"
~ Jules Renard</i></p>
<p>  <b>Related</b></p>
<p><a href="http://www.cryer.co.uk/brian/sqlserver/howtorundbcccheckdboneachdb.htm">Brian Cryer How To </a>- Run DBCC checkdb on each database (using cursors)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_checkdb.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

