---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC INPUTBUFFER / OUTPUTBUFFER</h1>
<p>Display the last statement sent from a client to a database instance.</p>
<pre>Syntax
      DBCC INPUTBUFFER (<i>session_id</i> [, <i>request_id</i> ])<br>         [WITH NO_INFOMSGS ]

      DBCC OUTPUTBUFFER (<i>session_id</i> [, <i>request_id</i> ])<br>         [WITH NO_INFOMSGS ]

Key:
    session_id  - The session ID
    request_id  - A specific request (batch) within the session.
	 NO_INFOMSGS - Suppress all information messages (severity 0-10)</pre>
<p>To find the request_ids for a given session id (@@spid = current session):</p>
<p>  SELECT request_id <br>
  FROM sys.dm_exec_requests <br>
  WHERE session_id = @@spid</p>
<p>Example</p>
<pre>-- Display session # 52<br>DBCC INPUTBUFFER (52);
DBCC OUTPUTBUFFER (52); </pre>
<p class="quote"><i>"A lawyer who represents himself has a fool for a client." ~ proverb </i></p>
<p>  Equivalent Oracle command: Select from <a href="../orav/V$SESSION.html">v$SESSION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_inputbuffer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

