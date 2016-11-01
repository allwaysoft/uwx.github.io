---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP SYMMETRIC KEY</h1>
<p>DROP a symmetric key from the database.</p>
<pre>Syntax:
      DROP SYMMETRIC KEY <i>key_name

   key_name</i>
      Name of the asymmetric key to be dropped</pre>
<p>
  

If the key is open in the current session the drop will fail.</p>
<p>  Requires CONTROL permission on the symmetric key.</p>
<p><b>Examples</b></p>
<pre>CLOSE SYMMETRIC KEY MySymKey01;
DROP SYMMETRIC KEY MySymKey01;</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="key_sm_a.html">ALTER SYMMETRIC KEY</a><br>
  <a href="key_sm_c.html">CREATE SYMMETRIC KEY</a><br>
  <a href="key_sm_a.html">ALTER SYMMETRIC KEY</a>  DROP ENCRYPTION (remove encryption by an asymmetric key)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="key_sm_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

