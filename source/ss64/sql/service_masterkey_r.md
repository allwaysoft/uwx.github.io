---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE SERVICE MASTER KEY</h1>
<p>Import a service master key from a backup.</p>
<pre>Syntax:
       RESTORE SERVICE MASTER KEY FROM FILE = '<i>path_to_file</i>' 
          DECRYPTION BY PASSWORD = '<i>password</i>' [FORCE]</pre>
<p>During a restore, SQL Server will decrypt all the keys and secrets with the current service master key, and then encrypt them with the restored service master key. <br>
If any one of the decryptions fails, the restore will fail. You can use the FORCE option to ignore errors and replace the service master key, but this option will cause the loss of any data that cannot be decrypted.</p>
<p><b>Example</b></p>
<pre> RESTORE SERVICE MASTER KEY FROM FILE = 'c:\backups\service_master_key' 
    DECRYPTION BY PASSWORD = 'key_P@ssw0rdGqw0956565';
 GO
</pre>
<p class="quote"><i>"But I have learned a thing or two; I know as sure as fate,<br>
When we lock up our lives for wealth, the gold key comes too late" 
~ Will Carleton</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="service_masterkey_a.html">ALTER SERVICE MASTER KEY</a><br>
<a href="service_masterkey_b.html">BACKUP SERVICE MASTER KEY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="service_masterkey_r.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

