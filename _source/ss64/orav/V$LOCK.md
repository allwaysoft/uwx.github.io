---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$LOCK </h1>  
 <p> Data Dictionary View relating to <a href="../ora/syntax-locking.html">locks</a> in the database. </p> 
 
<pre>Columns
   ___________________________
 
   ADDR
   KADDR
   SID   (session holding the lock)
   TYPE  (TM,TX,MR,ST)
   ID1   (for DML locks, the object_id being locked )
   ID2
   LMODE  (if &gt;1 then lock has been aquired)
   REQUEST
   CTIME
   BLOCK
</pre>
<p>Types:<br>

JI (Materialized view)<br>
MR (Media Recovery)<br>
ST (Disk Space Transaction)<br>
TM (DML or Table Lock)<br>
TX (Transaction)</p>
<p>LockMode/RequestModes:<br>
1 null<br>
 2 Row Share (SS)<br>
 3 Row Exclusive (SX)<br>
 4 Share (S)<br>
 5 Share Row Exclusive (SSX)<br>
6  Exclusive(X)</p>
<p><b>Example:</b><br>
<br>
LISTLOCKS.SQL --</p>
<pre>set pagesize 85

col username format a10
col osuser format a15
col sid format 9999
col serial format 99999
col type format a2
col request format 9
col lmode format 9
col lmode_desc format a16
col type_desc format a30 wrap

SELECT /*+ FIRST_ROWS ORDERED */ username,
s.osuser osuser , s.sid sid , s.serial# serial, l.lmode lmode ,
decode(L.LMODE,1,'No Lock',
2,'Row Share',
3,'Row Exclusive',
4,'Share',
5,'Share Row Exclusive',
6,'Exclusive','NONE') lmode_desc, l.type type ,
decode(l.type,
'BL','Buffer hash table instance lock',
'CF',' Control file schema global enqueue lock',
'CI','Cross-instance function invocation instance lock',
'CS','Control file schema global enqueue lock',
'CU','Cursor bind lock',
'DF','Data file instance lock',
'DL','Direct loader parallel index create',
'DM','Mount/startup db primary/secondary instance lock',
'DR','Distributed recovery process lock',
'DX','Distributed transaction entry lock',
'FI','SGA open-file information lock',
'FS','File set lock',
'HW','Space management operations on a specific segment lock',
'IN','Instance number lock',
'IR','Instance recovery serialization global enqueue lock',
'IS','Instance state lock',
'IV','Library cache invalidation instance lock',
'JQ','Job queue lock',
'KK','Thread kick lock',
'MB','Master buffer hash table instance lock',
'MM','Mount definition gloabal enqueue lock',
'MR','Media recovery lock',
'PF','Password file lock',
'PI','Parallel operation lock',
'PR','Process startup lock',
'PS','Parallel operation lock',
'RE','USE_ROW_ENQUEUE enforcement lock',
'RT','Redo thread global enqueue lock',
'RW','Row wait enqueue lock',
'SC','System commit number instance lock',
'SH','System commit number high water mark enqueue lock',
'SM','SMON lock',
'SN','Sequence number instance lock',
'SQ','Sequence number enqueue lock',
'SS','Sort segment lock',
'ST','Space transaction enqueue lock',
'SV','Sequence number value lock',
'TA','Generic enqueue lock',
'TD','DDL enqueue lock',
'TE','Extend-segment enqueue lock',
'TM','DML enqueue lock',
'TT','Temporary table enqueue lock',
'TX','Transaction enqueue lock',
'UL','User supplied lock',
'UN','User name lock',
'US','Undo segment DDL lock',
'WL','Being-written redo log instance lock',
'WS','Write-atomic-log-switch global enqueue lock') type_desc ,
request , block
FROM v$lock l, v$session s
WHERE s.sid = l.sid
AND l.type &lt;&gt; 'MR'
AND s.type &lt;&gt; 'BACKGROUND'
ORDER BY username
/
</pre>
<p><b>Related:</b></p>
<pre><a href="V$ENQUEUE_LOCK.html">V$ENQUEUE_LOCK</a>
<a href="V$EVENT_NAME.html">V$EVENT_NAME</a>
<a href="V$LATCH.html">V$LATCH</a>
<a href="V$LIBRARYCACHE.html">V$LIBRARYCACHE</a>
<a href="V$_LOCK.html">V$_LOCK</a>
<a href="V$LOCKED_OBJECT.html">V$LOCKED_OBJECT</a>
<a href="V$LOCKS_WITH_COLLISIONS.html">V$LOCKS_WITH_COLLISIONS</a>
<a href="V$LOCK_ACTIVITY.html">V$LOCK_ACTIVITY</a> 
<a href="V$LOCK_ELEMENT.html">V$LOCK_ELEMENT</a>
<a href="V$RESOURCE.html">V$RESOURCE</a>
<a href="V$RESOURCE_LIMIT.html">V$RESOURCE_LIMIT</a>
<a href="V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

