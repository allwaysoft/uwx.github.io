---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>COMMIT  TRANSACTION </h1>
<p>Mark the end of a successful implicit or explicit transaction. </p>
<pre>Syntax
      COMMIT TRAN[SACTION] [<i>transaction</i>]

      COMMIT TRAN[SACTION] [@<i>transaction_var</i>] [;]

 Key:
   transaction     A name for the transaction &lt;= 32 characters.
   <i>transaction_var</i> A user-defined variable containing a transaction name.
</pre>
<p>If @@TRANCOUNT is greater than 1,  the transaction will stay active. Each COMMIT TRANSACTION decrements @@TRANCOUNT by 1 until it reaches 1. </p>
<p>When @@TRANCOUNT is 1, COMMIT TRANSACTION makes all data modifications performed since the start of the transaction a permanent part of the database, frees the resources held by the transaction, and decrements @@TRANCOUNT to 0. </p>
<p>Placing COMMIT TRANSACTION or COMMIT WORK statements in a trigger is not recommended.</p>
<p>Example</p>
<pre>DECLARE @MyTran <i>VARCHAR</i>(20);
SELECT @MyTran = 'MyTransaction';

BEGIN TRANSACTION @MyTran;
USE MyDatabase;
DELETE FROM MyDatabase.MySchema.MyTable WHERE MyColumn = 123;

COMMIT TRANSACTION @MyTran;
GO</pre>
<p class="quote"><i>"The two offices of memory are collection and distribution"
- Dr. Johnson</i></p>
<p><b>Related commands:</b></p>
<p><a href="commit.html">COMMIT <span class="body">WORK</span></a><br>
Equivalent Oracle command:  <a href="../ora/commit.html">COMMIT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trans_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

