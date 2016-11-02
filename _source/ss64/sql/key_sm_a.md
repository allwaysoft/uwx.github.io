---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER SYMMETRIC KEY</h1>
<p>Change the properties of  a symmetric key.</p>
<pre>Syntax:
      ALTER SYMMETRIC KEY <i>Sym_key</i> <i>key_options</i>

<i> key_options</i> ::=
      ADD ENCRYPTION BY <i>crypt</i> [, ... <i>n</i>]
      DROP ENCRYPTION BY <i>crypt</i> [, ... <i>n</i>]

<i> crypt</i>:
      CERTIFICATE <i>certificate
</i>      PASSWORD = '<i>password</i>' 
      SYMMETRIC KEY symmetric_key_name 
      ASYMMETRIC KEY asym_key_name</pre>
<p>To change the encryption method used to protect a symmetric key:</p>
<blockquote>
  <p> Open and decrypt the key<br>
    Add the new encryption method <br>
    Remove the old encryption method. </p>
</blockquote>
<p>The key can never be stored unencrypted.</p>
<p><b>Examples</b></p>
<pre>ALTER SYMMETRIC KEY ss64<br>    ADD ENCRYPTION BY PASSWORD = '6452$23tgcek6Bh9ows9s7';</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="key_sm_c.html">CREATE SYMMETRIC KEY</a><br>
  <a href="key_sm_o.html">OPEN SYMMETRIC KEY</a> <br>
<a href="key_sm_close.html">CLOSE SYMMETRIC KEY</a><br>
  <a href="key_sm_d.html">DROP SYMMETRIC KEY</a><br>
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

