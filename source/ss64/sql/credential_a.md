---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER CREDENTIAL</h1>
<p>Change  properties of a credential.</p>
<pre>Syntax
      ALTER CREDENTIAL <i>credential</i> WITH IDENTITY = '<i>identity</i>'
	      [, SECRET = '<i>secret</i>']</pre>
<p>A credential is a record of the authentication information required to connect to a resource outside SQL Server. Most credentials are a Windows username/password.</p>
<p>When IDENTITY is a Windows username, the SECRET can be the password. Secret is encrypted using the service master key.</p>
<p><b>Example</b></p>
<pre>ALTER CREDENTIAL MyCredential WITH IDENTITY = 'JDoe';<br>GO</pre>
<p>The above will set the secret (password) for MyCredential to NULL </p>
<p class="quote"><i> "In my end is my beginning" ~ Mary Stuart, Queen of Scots</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a href="credential_c.html">CREATE CREDENTIAL </a><br>
  <a href="credential_d.html">DROP CREDENTIAL </a><br>
  sys.credentials</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

