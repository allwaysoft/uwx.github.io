---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>BACKUP MASTER KEY</h1>
<p>Export the database master key.</p>
<pre>Syntax:
      BACKUP MASTER KEY TO FILE = '<i>path_to_file</i>' 
	      ENCRYPTION BY PASSWORD = '<i>password</i>'</pre>
<p>Specify the complete UNC or local path, including file name, for the file to which the master key will be exported.</p>
<p>If password complexity is enforced, the password must be &gt; 8 chars and contain upper/lower case and numeric/ Non-alphanumeric characters.</p>
<p>Before the master key is backed up, it must be open/decrypted. <br>
If the master key is encrypted  with a password, it must be explicitly opened. <br>
If the master key is encrypted with the service master key,  it does not have to be explicitly opened. </p>
<p>Backup the master key as soon as it is created, and store the backup in a secure, off-site location.</p>
<p><b>Example</b></p>
<pre> USE MyDatabase;<br>    OPEN MASTER KEY DECRYPTION BY PASSWORD = 'master_PAssword_g0es_h3re';
    BACKUP MASTER KEY TO FILE = 'c:\backups\MyDb_masterkey' 
    ENCRYPTION BY PASSWORD = 'key_P@ssw0rd';
 GO </pre>
<p class="quote"><i>"Patience is the key to contentment" ~ Mohammed</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="masterkey_c.html">CREATE MASTER KEY</a><br>
  <a href="masterkey_a.html">ALTER MASTER KEY</a><br>
  <a href="masterkey_d.html">DROP MASTER KEY</a> <br>
  <a href="masterkey_r.html">RESTORE MASTER KEY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="masterkey_b.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

