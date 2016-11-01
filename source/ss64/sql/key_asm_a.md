---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER ASYMMETRIC KEY</h1>
<p>Change properties of an  asymmetric key.</p>
<pre>Syntax:
       ALTER ASYMMETRIC KEY <i>Asym_Key option</i>

<i>options
</i>    WITH PRIVATE KEY ( <i>password_option</i> [, <i>password_option</i>])
    REMOVE PRIVATE KEY
    ATTESTED BY = '<i>path_to_dll</i>'
    REMOVE ATTESTED OPTION 

<i>password_options</i>
    ENCRYPTION BY PASSWORD = '<i>password</i>'
    DECRYPTION BY PASSWORD = 'old_password'</pre>
<p>If there is no database master key then ENCRYPTION BY PASSWORD  is required.<br>
The database master key must be opened before it can be used to protect a private key.</p>
<p><b>Examples</b></p>
<pre>ALTER ASYMMETRIC KEY MyKey01<br>    WITH PRIVATE KEY (<br>    DECRYPTION BY PASSWORD = 'fmsA$ek7i82bv64fobjsd2764',<br>    ENCRYPTION BY PASSWORD = '35agRofg0sjlkfssJ454GX72$262');<br>GO
</pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success.
  If you love what you are doing, you will be successful." ~ Herman Cain</i></p>
<p><b>Related:</b><br>
  <a href="key_asm_c.html"><br>
  CREATE ASYMMETRIC KEY</a><br>
  <a href="key_asm_d.html">DROP ASYMMETRIC KEY</a><br>
<a href="/pass/pass.html">Password generator</a><br>
Equivalent Oracle command: <a href="../ora/user_a.html">ALTER USER</a> AUTHENTICATED USING CERTIFICATE</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

