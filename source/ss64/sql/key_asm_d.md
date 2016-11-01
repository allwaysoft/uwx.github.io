---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP ASYMMETRIC KEY</h1>
<p>DROP an asymmetric key from the database.</p>
<pre>Syntax:
      DROP ASYMMETRIC KEY <i>key_name


   key_name</i>
      Name of the asymmetric key to be dropped</pre>
<p>
  

If the key has been used to encrypt a symmetric key (or map a user/login), you must drop the user/login and the symmetric key before dropping the asymmetric key.</p>
<p>  Requires CONTROL permission on the asymmetric key.</p>
<p><b>Examples</b></p>
<pre>USE MyDatabase;<br>DROP ASYMMETRIC KEY MyAsymKey01;</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="key_asm_a.html">ALTER ASYMMETRIC KEY</a><br>
  <a href="key_asm_c.html">CREATE ASYMMETRIC KEY</a><br>
  <a href="key_sm_a.html">ALTER SYMMETRIC KEY</a>  DROP ENCRYPTION (remove encryption by an asymmetric key) </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="key_asm_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

