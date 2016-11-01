---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE CREDENTIAL</h1>
<p>Change  properties of a credential.</p>
<pre>Syntax
      CREATE CREDENTIAL <i>credential</i> WITH IDENTITY = '<i>identity</i>'
	      [, SECRET = '<i>secret</i>']</pre>
<p>A credential is a record of the authentication information  required to connect to a resource outside SQL Server. Most credentials are a Windows username/password.</p>
<p>When IDENTITY is a Windows username, the SECRET can be the password. Secret is encrypted using the service master key.</p>
<p><b>Example</b></p>
<pre>CREATE CREDENTIAL MyCredential WITH IDENTITY = 'JDoe',
SECRET = 'sc6l3k$f8-jte6gsi772JFg4';<br>GO</pre>
<p class="quote"><i>"Another person's secret is like another person's money: 
you are not so careful with it as you are of your own" ~ Edgar Watson Howe</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="credential_a.html">ALTER CREDENTIAL </a><br>
  <a href="credential_d.html">DROP CREDENTIAL </a><br>
  sys.credentials<br>
<a href="../pass/pass.html">Password generator</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="credential_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

