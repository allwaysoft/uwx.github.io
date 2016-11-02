---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>BACKUP SERVICE MASTER KEY</h1>
<p>Backup a service master key.</p>
<pre>Syntax:
      BACKUP SERVICE MASTER KEY TO FILE = '<i>path_to_file</i>'
	      ENCRYPTION BY PASSWORD = '<i>password</i>'</pre>
<p>Specify the complete UNC or local path, including file name, for the file to which the service master key will be exported.</p>
<p>If password complexity is enforced, the password must be &gt; 8 chars and contain upper/lower case and numeric/ Non-alphanumeric characters.</p>
<p>Backup the service master key as soon as it is created, and store the backup in a secure, off-site location.</p>
<p><b>Example</b></p>
<pre> BACKUP SERVICE MASTER KEY TO FILE = 'c:\backups\service_master_key'
    ENCRYPTION BY PASSWORD = 'key_P@ssw0rdGqw0956565';</pre>
<p class="quote"><i>"But I have learned a thing or two; I know as sure as fate,<br>
When we lock up our lives for wealth, the gold key comes too late" ~ Will Carleton</i></p>
<p><b>Related  Commands:</b>
</p><p>  <a href="masterkey_c.html">CREATE MASTER KEY</a><br>
<a href="masterkey_a.html">ALTER MASTER KEY</a><br>
<a href="masterkey_d.html">DROP MASTER KEY</a> <br>
<a href="masterkey_r.html">RESTORE MASTER KEY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

