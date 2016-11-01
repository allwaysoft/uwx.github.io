---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ROLLBACK</h1>
<p>Undo a transaction, completely or to a savepoint.</p>
<pre>Syntax
      ROLLBACK TRAN[SACTION  [<i>option</i>] [;]

      ROLLBACK [WORK] [;]

Options
       <i>transaction
      </i> @<i>tranaction_variable
       </i><i>savepoint </i>
       @<i>savepoint_variable
</i>
Key
   Transaction     Name assigned to the transaction on BEGIN TRANSACTION. 
   @Transaction    User-defined variable containing a valid transaction name.
   savepoint       Savepoint name from a SAVE TRANSACTION statement.
   @savepoint_var  User-defined variable containing a valid savepoint name. 
   WORK            SQL 92 Compatibility</pre>
<p>   A transaction cannot be rolled back after  COMMIT TRANSACTION  is executed.</p>
<p>Example</p>
<pre>ROLLBACK;</pre>
<p class="quote"><i>"All that glitters is not gold. All who wander are not lost"
- William Shakespeare</i></p>
<p><b>Related commands:</b></p>
<p> <a href="commit.html">COMMIT</a><br>
Equivalent Oracle command:  <a href="../ora/rollback.html">ROLLBACK</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rollback.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

