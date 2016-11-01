---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>COMMIT</h1> 
<p>Save changes (transactional).<br>
  <br>
  Syntax:</p>
<pre>   COMMIT [WORK] [COMMENT '<i>comment_text</i>']
   COMMIT [WORK] [FORCE '<i>force_text</i>' [,<i>int</i>] ]
</pre>
<p>FORCE - will manually commit an in-doubt <i>distributed</i> 
  transaction<br>
  force_text - transaction identifier (see the <a href="../orad/DBA_2PC_PENDING.html">DBA_2PC_PENDING</a> 
  view<i>)<br>
  </i>int - sets a specific SCN<i><br>
  </i><br>
  If a network or machine failure prevents a distributed transaction from committing 
  properly, Oracle will store any commit comment in the data dictionary along 
  with the transaction ID.</p>
<p>Commit comments will be deprecated in a future version of Oracle.<br>
Oracle strongly recommends that you use transaction names:   SET TRANSACTION … NAME <br>
<i><br>
</i><span class="quote"><i>“The difference between eggs and bacon: the chicken is involved, the pig is committed” - Anon</i></span><b><br>
<br>
Related:</b></p>
<p><a href="lock.html">LOCK TABLE</a><a href="savepoint.html"><br>
SAVEPOINT</a> - Save changes to a point<br>
<a href="rollback.html">ROLLBACK</a> - undo changes <br>
<a href="transaction_s.html">SET TRANSACTION</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/DBA_2PC_PENDING.html">DBA_2PC_PENDING</a>
 <a href="../orav/V$TRANSACTION.html">V$TRANSACTION</a>
 <a href="../orav/V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="commit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

