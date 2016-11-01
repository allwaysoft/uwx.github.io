---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE ASYMMETRIC KEY</h1>
<p>Create an asymmetric key in the database.</p>
<pre>Syntax:
   CREATE ASYMMETRIC KEY <i>Asym_Key_Name</i> 
      [AUTHORIZATION <i>database_principal_name</i>]
         FROM &lt;<i>Asym_Key_Source</i>&gt;
            [ENCRYPTION BY PASSWORD = '<i>password</i>']

   CREATE ASYMMETRIC KEY <i>Asym_Key_Name</i> 
      [AUTHORIZATION <i>database_principal_name</i>]
         WITH ALGORITHM = { RSA_512 | RSA_1024 | RSA_2048 }
            [ENCRYPTION BY PASSWORD = '<i>password</i>'] 
Key:

   Asym_Key_Source: The source from which to load the asymmetric key pair:
      FILE = '<i>path_to_strong-name_file</i>'
      EXECUTABLE FILE = '<i>path_to_executable_file</i>'
      ASSEMBLY <i>Assembly_Name</i>

   database_principal_name
           The owner of the asymmetric key. The owner cannot be a role or a group.
           default = current user.

   'path_to_strong-name_file'
           Path of a strong-name file from which to load the key pair. 

   'path_to_executable_file'
          An assembly file from which to load the public key.

   Assembly_Name
          Name of an assembly from which to load the public key.

   'password'
          Password with which to encrypt the private key.
          default = encrypt using the database master key.
</pre>
<p>
  

An asymmetric key is a secured at the database level. In its default form, this entity contains both a public key and a private key. The private key can be 512, 1024, or 2048 bits long. </p>
<p>Without the FROM clause, CREATE ASYMMETRIC KEY generates a <b>new</b> key pair. <br>
  With the FROM clause, CREATE ASYMMETRIC KEY <b>imports</b> a key pair from a file or imports a public key from an assembly.</p>
<p>If no database master key has been created, a password is required to protect the private key. <br>
Requires CREATE ASYMMETRIC KEY permission on the database.</p>
<p><b>Examples</b></p>
<pre>CREATE ASYMMETRIC KEY MyKey01 
  WITH ALGORITHM = RSA_2048 
  ENCRYPTION BY PASSWORD = 'fmsA$ek7i82bv64fobjsd2764'; 
GO


CREATE ASYMMETRIC KEY MyKey02 AUTHORIZATION JDoe 
  FROM FILE = ' c:\Certs\JDoe.tmp' 
  ENCRYPTION BY PASSWORD = '35agRofg0sjlkfssJ454GX72$262';
GO </pre>
<p class="quote"><i>"Success is not the key to happiness. Happiness is the key to success.
  If you love what you are doing, you will be successful" ~ Herman Cain</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="key_asm_a.html">ALTER ASYMMETRIC KEY</a><br>
  <a href="key_asm_d.html">DROP ASYMMETRIC KEY</a><br>
Equivalent Oracle command: <a href="../ora/user_a.html">ALTER USER</a> AUTHENTICATED USING CERTIFICATE</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="key_asm_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

