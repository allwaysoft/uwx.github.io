---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC TRACEON - Enable trace flags.<br>
  DBCC TRACEOFF  - Disable trace flags.<br>
DBCC TRACESTATUS - Display the status of trace flags.</h1>
<pre><i>Syntax</i>
      DBCC TRACEON (<i> trace#</i> [ ,...<i>n</i> ][ , -1 ] ) [WITH NO_INFOMSGS]

      DBCC TRACEOFF (<i> trace#</i> [ ,...<i>n</i> ] [ , -1 ] ) [WITH NO_INFOMSGS]

      DBCC TRACESTATUS ( [ [<i>trace#</i> [,...<i>n</i> ] ]  [,] [-1] ] ) [WITH NO_INFOMSGS]

 Key:

   <i>trace#</i>      - Number of the trace flag(s)
   -1          - Display the status of trace flags that are enabled globally.
   NO_INFOMSGS - Suppress all information messages.
</pre>
<p>By default all trace flags that are enabled for the session are displayed.</p>
<p>Examples</p>
<pre>-- Turn flag on
DBCC TRACEON (3205)<br>GO
-- Turn flag on globally
DBCC TRACEON (2528, -1)<br>GO
-- Turn flag off
DBCC TRACEOFF (3205);<br>GO
-- Show flag status
DBCC TRACESTATUS (2528, 3205)<br>GO</pre>
<p class="quote"><i>“Every branch of human knowledge, if traced up to its source and final
  principles vanishes into a mystery” ~ Arthur Machen</i></p>
<p><b>Related:</b></p>
<p> <a href="syntax-flags.html">Trace Flags </a><br>
Equivalent Oracle command: <a href="../ora/syntax-initora.html">Server Parameters</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_trace.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

