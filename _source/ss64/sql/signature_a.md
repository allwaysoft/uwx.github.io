---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ADD SIGNATURE</h1>
<p>Add a digital signature to a stored procedure, function, trigger, or event notification.</p>
<pre>Syntax
      ADD [COUNTER] SIGNATURE TO <i>class::module</i>
         BY <i>crypto_list</i> [,...<i>n</i>]

   crypto_list:
       CERTIFICATE <i>cert</i> [WITH PASSWORD = '<i>password</i>']
       CERTIFICATE <i>cert</i> WITH SIGNATURE = <i>signed_blob</i>
       ASYMMETRIC KEY <i>Asym_key</i> [WITH PASSWORD = '<i>password</i>']
       ASYMMETRIC KEY <i>Asym_key</i> WITH SIGNATURE = <i>signed_blob</i>
	  
Key
   module         Stored procedure, function, trigger, or event notification.
   cert           The certificate used to sign the stored procedure, function..
   password       To decrypt the private key.
   signed_blob    Allows shipping a module (as a blob) without including it's private key.</pre>
<p>Example</p>
<pre>ADD SIGNATURE FROM MyDatabase.MyStoredproc<br>    BY CERTIFICATE MyCertificate;</pre>
<p class="quote"><i>"If only God would give me some clear sign! Like making a
large deposit in my name at a Swiss bank" </i>- Woody Allen </p>
<p><b>Related commands:</b></p>
<p>  sys.crypt_properties<br>
  <a href="signature_d.html">DROP SIGNATURE</a><br>
Equivalent Oracle command: <a href="../ora/user_a.html">ALTER USER</a> USING AUTHENTICATION... </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="signature_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

