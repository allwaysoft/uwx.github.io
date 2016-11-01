---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>BACKUP CERTIFICATE</h1>
<p>Export a certificate to a file.</p>
<pre>Syntax:
      BACKUP CERTIFICATE <i>certname</i> TO FILE = '<i>pathname</i>'
	      [ WITH PRIVATE KEY 
           ( 
            FILE = '<i>path_to_private_key_file</i>' ,
            ENCRYPTION BY PASSWORD = '<i>encryption_password</i>'
            [ , DECRYPTION BY PASSWORD = '<i>decryption_password</i>' ] 
            ) 
         ]</pre>
<p>If the private key is encrypted with a password in the database, then that decryption password must be specified.<br>When you back up the private key to a file, encryption is required.</p>
<p><b>Example</b></p>
<pre>  BACKUP CERTIFICATE MyCert TO FILE = 'c:\certs\MyCert'
    WITH PRIVATE KEY ( FILE = 'c:\keys\Mykey' , 
	 ENCRYPTION BY PASSWORD = 'thisisa1ongpassw0rd' );
  GO</pre>
<p class="quote"><i>"Simultaneously press the Control key,
the Command key, the Return key and the Power On key" ~  how to warm boot  a Mac II </i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="certificate_c.html">CREATE CERTIFICATE</a><br>
  <a href="certificate_a.html">ALTER CERTIFICATE</a><br>
  <a href="certificate_d.html">DROP CERTIFICATE</a><br>
  <br>
  <b>Equivalent Oracle commands</b>:<a href="../bash/export.html"><br>
  <br>
</a>Oracle Wallet:<br>
<a href="../ora/system_a.html">ALTER SYSTEM</a> SET ENCRYPTION KEY..<br>
<a href="../ora/system_a.html">ALTER SYSTEM</a> SET WALLET..</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="certificate_b.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

