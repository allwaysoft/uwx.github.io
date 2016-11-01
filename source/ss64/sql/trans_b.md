---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>BEGIN  TRANSACTION </h1>
<p>Mark the starting point of an explicit, local transaction. </p>
<pre>Syntax
      BEGIN TRAN[SACTION] [<i>transaction</i> [WITH MARK ['<i>description</i>'] ] [;]

      BEGIN TRAN[SACTION] [@<i>transaction_var</i> [WITH MARK ['<i>description</i>'] ] [;]

 Key:
   transaction     A name for the transaction &lt;= 32 characters.
   <i>transaction_var</i> A user-defined variable containing a transaction name.
   WITH MARK       Note the transaction in the log.
</pre>
<p>    This will increment @@TRANCOUNT by 1.</p>
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
<p><a href="trans_c.html">COMMIT TRANSACTION</a><br>
Equivalent Oracle command:  <a href="../ora/savepoint.html">SAVEPOINT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trans_b.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

