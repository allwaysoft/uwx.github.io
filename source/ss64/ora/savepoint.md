---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>SAVEPOINT</h1> 
<p>Save changes to a point (transactional).<br>
  <br>
  Syntax:</p>
<pre>   SAVEPOINT <i>text_identifier</i>
<b>
Example</b>:
   UPDATE employees
   SET salary = 95000
   WHERE last_name = 'Smith'; 

   SAVEPOINT justsmith; 

   UPDATE employees
   SET salary = 1000000; 

   SAVEPOINT everyone; 

   SELECT SUM(salary) FROM employees; 

   ROLLBACK TO SAVEPOINT justsmith; 

   COMMIT;</pre>
<p><span class="quote"><i>"It's the hardest thing in the world to accept a 'little' success and leave it that way" - Marlon Brando</i></span><br>
<br>
<b>Related Commands:</b></p>
<p><a href="commit.html">COMMIT</a> - Save changes<br>
<a href="rollback.html">ROLLBACK</a> - undo changes<br>
<br>
<b>Related Views:</b></p>
<pre> <a href="../orav/V$TRANSACTION.html">V$TRANSACTION</a>
 <a href="../orav/V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="savepoint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

