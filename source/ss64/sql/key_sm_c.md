---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE SYMMETRIC KEY</h1>
<p>Create a symmetric key in the database.</p>
<pre>Syntax:
      CREATE SYMMETRIC KEY <i>Sym_key</i> 
         [AUTHORIZATION <i>owner</i>]
            WITH <i>key_options</i> [, ... <i>n</i>]
               ENCRYPTION BY <i>crypt</i> [ , ... n ] 

Options
<i>   crypt</i>:
      CERTIFICATE <i>certificate
</i>      PASSWORD = '<i>password</i>' 
      SYMMETRIC KEY symmetric_key_name 
      ASYMMETRIC KEY asym_key_name    

   <i>key_options</i>:
      KEY_SOURCE = '<i>pass_phrase</i>'
      ALGORITHM = <i>algorithm</i>
      IDENTITY_VALUE = '<i>identity_phrase</i>'

   <i>algorithm</i>:
      DES | TRIPLE_DES | RC2 | RC4 | RC4_128 |
      DESX | AES_128 | AES_192 | AES_256 

Key:
   Sym_key     Unique name for the symmetric key.
               Temporary keys should begin with #
   password       Used to derive a TRIPLE_DES key, p/w complexity is checked.
   symmetric_key_name Used to encrypt the key being created. 
                      Must already be open
   asym_key_name   Asymmetric key used to encrypt the key being created.
                   Must already be open
   pass_phrase     A pass phrase from which to derive the key.
   identity_phrase A phrase used to generate a GUID - for data encryption with a temporary key.
</pre>
<p>
  

RC4 and RC4_128 are not recommended for use with sensitive data.</p>
<p>Temporary keys are only valid for the current session.</p>
<p><b>Examples</b></p>
<pre>CREATE SYMMETRIC KEY ss64 WITH ALGORITHM = AES_256<br>    ENCRYPTION BY CERTIFICATE cert64;<br>GO</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="key_sm_a.html">ALTER SYMMETRIC KEY</a><br>
  <a href="key_sm_d.html">DROP SYMMETRIC KEY</a><br>
sys.symmetric_keys</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="key_sm_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

