---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>COMMIT</h1>
<p>Mark the end of a transaction.</p>
<pre>Syntax
      COMMIT 
      COMMIT WORK 
      COMMIT TRAN[SACTION] [<i>transaction_name </i>| @<i>transaction_var</i>] <br>          [;]
</pre>
<p>A commit will make any data modifications performed since the start of the transaction a permanent part of the database.</p>
<p>transaction_name is simply used by programmers to associate a BEGIN TRANSACTION statement with a  COMMIT TRANSACTION statement. It is ignored by the database engine.</p>
<p>The syntax COMMIT or COMMIT WORK is compatible with SQL-92  </p>
<p>Example</p>
<pre>COMMIT</pre>
<p class="quote"><i>"Once a
  journalist makes a commitment of confidentiality to a source, only the
source can end that commitment" ~ Matt Cooper </i></p>
<p><b>Related commands:</b></p>
<p><a href="trans_c.html">COMMIT TRANSACTION</a><br>
<a href="checkpoint.html">CHECKPOINT</a><br>
  <br>
<b>Equivalent Oracle command</b>:</p>
<p> <a href="../ora/commit.html">COMMIT</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

