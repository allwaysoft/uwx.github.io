---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC OPENTRAN</h1>
<p>Display information about the oldest <i>active</i> transaction and the oldest <i> replicated </i>transactions.</p>
<pre>Syntax
      DBCC OPENTRAN <br>         [( [ '<i>database</i>' | <i>database_id</i> | 0 ] ) ]<br>              [WITH TABLERESULTS]  [, [NO_INFOMSGS] ]<br>         ]

Key:
    TABLERESULTS - Output in a tabular format that can be loaded into a table. 
	 NO_INFOMSGS - Suppress all information messages (severity 0-10)</pre>
<p>Example</p>
<pre>BEGIN TRAN<br>...Insert/Update/Delete<br>GO<br>DBCC OPENTRAN;<br>ROLLBACK TRAN;</pre>
<p class="quote"><i>“If love does not know how to give and take without restrictions, it is not love, but a transaction that never fails to lay stress on a plus and a minus” ~ Emma Goldman</i></p>
<p>  Equivalent Oracle command: Select from <a href="../orav/V$TRANSACTION.html">V$TRANSACTION</a> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_opentran.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

