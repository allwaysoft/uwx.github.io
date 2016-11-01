---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP CERTIFICATE</h1>
<p>Remove a certificate from the database.</p>
<pre>Syntax:
      DROP CERTIFICATE <i>certificate_name


   </i><i>certificate_name</i>
      Name of the certificate</pre>
<p>Certificates can only be dropped if no entities are associated with them.</p>
<p>  Requires CONTROL permission on the certificate.</p>
<p><b>Examples</b></p>
<pre>USE MyDatabase;<br>DROP CERTIFICATE MyCert01;</pre>
<p class="quote"><i>"To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting" ~ Sun Tzu</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="certificate_c.html">CREATE CERTIFICATE</a><br>
  <a href="certificate_a.html">ALTER CERTIFICATE</a><br>
  <a href="certificate_b.html">BACKUP CERTIFICATE</a>  <br>
  <br>
  <b>Equivalent Oracle commands</b>:<a href="../bash/export.html"><br>
  <br>
  </a>Oracle Wallet:<br>
  <a href="../ora/system_a.html">ALTER SYSTEM</a> SET ENCRYPTION KEY..<br>
  <a href="../ora/system_a.html">ALTER SYSTEM</a> SET WALLET..</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

