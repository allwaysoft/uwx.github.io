---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER SERVICE MASTER KEY</h1>
<p>Change the service master key of a  SQL Server instance.</p>
<pre>Syntax:
       ALTER SERVICE MASTER KEY [FORCE] REGENERATE


       ALTER SERVICE MASTER KEY WITH OLD_ACCOUNT = '<i>account</i>' , OLD_PASSWORD = '<i>password</i>'

       ALTER SERVICE MASTER KEY WITH NEW_ACCOUNT = '<i>account</i>' , NEW_PASSWORD = '<i>password</i>' 

       ALTER SERVICE MASTER KEY [ { ADD | DROP } ENCRYPTION BY MACHINE KEY ]</pre>
<p>FORCE will regenerate the service master key, even at the risk of data loss, if a dependent key cannot be decrypted, the data which that key secures will be lost.</p>
<p>If the SQL Service account is running under the old account, supply the new account/password.</p>
<p>If the SQL Service account is running under a new account, supply the old account/password. </p>
<p>If you change the Windows account under which the SQL Server service runs, you must also enable decryption of the service master key. The <i>SQL Server Configuration Manager </i>can be used to change the  service account and will automatically configure all the security and encryption settings.</p>
<p><b>Example</b></p>
<pre> ALTER SERVICE MASTER KEY REGENERATE;<br> GO</pre>
<p class="quote"><i>"But I have learned a thing or two; I know as sure as fate,<br>
When we lock up our lives for wealth, the gold key comes too late" 
~ Will Carleton</i></p>
<p><b>Related  Commands:</b><br>
<br>
<a href="service_masterkey_b.html">BACKUP SERVICE MASTER KEY</a> <a href="service_masterkey_r.html"><br>
RESTORE SERVICE MASTER KEY</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="service_masterkey_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

