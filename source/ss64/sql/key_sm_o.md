---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>OPEN SYMMETRIC KEY</h1>
<p>Decrypt a symmetric key and makes it available for use.</p>
<pre>Syntax:
      OPEN SYMMETRIC KEY <i>Key</i> DECRYPTION BY <i>decrypt_option</i>
<i>
decrypt_options</i>:
   CERTIFICATE <i>certificate</i> [WITH PASSWORD = '<i>password</i>']
   ASYMMETRIC KEY <i>asym_key</i> [WITH PASSWORD = '<i>password</i>']
   SYMMETRIC KEY <i>decrypting_Key</i>
   PASSWORD = '<i>decryption_password</i>'

Key:
   certificate   Certificate whose private key will be used to decrypt the symmetric key.
   asym_key      An asymmetric key whose private key will be used to decrypt the symmetric key.
   password    Password that was used to encrypt the private key of the certificate or asymmetric key.
   decrypting_key  Key that will be used to decrypt the key being opened.
   <i>decryption_password</i>    The password that was used to protect the symmetric key.
</pre>
<p>
  

An open key will continue to be available until it is either explicitly closed or the session is terminated. </p>
<p>If the symmetric key was encrypted with another key, that key must be opened first. </p>
<p><b>Examples</b></p>
<pre>USE myDB;<br>OPEN SYMMETRIC KEY SymKeySS64<br>    DECRYPTION BY CERTIFICATE Cert02;<br>GO</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
 <a href="key_sm_c.html">CREATE SYMMETRIC KEY</a> <br>
   <a href="key_sm_close.html">CLOSE SYMMETRIC KEY</a><br>
  <a href="key_sm_a.html">ALTER SYMMETRIC KEY</a> <br>
  <a href="key_sm_d.html">DROP SYMMETRIC KEY</a>  <br>
sys.symmetric_keys</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

