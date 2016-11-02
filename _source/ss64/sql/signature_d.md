---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP SIGNATURE</h1>
<p>Drop a digital signature from a stored procedure, function, trigger, or event notification.</p>
<pre>Syntax
      DROP [COUNTER] SIGNATURE FROM <i>module</i>
         BY <i>crypto_list</i> [,...<i>n</i>]

   crypto_list:
       CERTIFICATE <i>cert</i> [WITH PASSWORD = '<i>password</i>']
       CERTIFICATE <i>cert</i> WITH SIGNATURE = @<i>cert_signature</i>
       ASYMMETRIC KEY <i>Asym_key</i> [WITH PASSWORD = '<i>password</i>']
       ASYMMETRIC KEY <i>Asym_key</i> WITH SIGNATURE = @asym_key_signature
	  
Key
   module         Stored procedure, function, trigger, or event notification.
   cert           The certificate used to sign the stored procedure, function..
   password       To decrypt the private key.
   cert_signature The certificate signature (binary).</pre>
<p>   Example</p>
<pre>DROP SIGNATURE FROM MyDatabase.MyStoredproc<br>    BY CERTIFICATE MyCertificate;</pre>
<p class="quote"><i>"If only God would give me some clear sign! Like making a
large deposit in my name at a Swiss bank" </i>- Woody Allen </p>
<p><b>Related commands:</b></p>
<p>sys.crypt_properties<br>
<a href="signature_a.html">ADD SIGNATURE</a><br>
Equivalent Oracle command: <a href="../ora/user_a.html">ALTER USER</a> USING AUTHENTICATION... </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

