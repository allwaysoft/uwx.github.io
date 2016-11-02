---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE MASTER KEY</h1>
<p>Create a  database master key.</p>
<pre>Syntax:
      CREATE MASTER KEY ENCRYPTION BY PASSWORD = '<i>password</i>'</pre>
<p>If password complexity is enforced, the password must be &gt; 8 chars and contain upper/lower case and numeric/ Non-alphanumeric characters.</p>
<p>Back up the master key with <a href="masterkey_b.html">BACKUP MASTER KEY</a></p>
<p><b>Example</b></p>
<pre> USE MyDatabase;<br> CREATE MASTER KEY ENCRYPTION BY PASSWORD = '6464hxJDWHO64H#64n77';<br> GO</pre>
<p class="quote"><i>"Technical skill is mastery of complexity while creativity is mastery of
  simplicity" ~ E. Christopher 
Zeeman (Catastrophe Theory)</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="masterkey_a.html">ALTER MASTER KEY</a><br>
  <a href="masterkey_b.html">BACKUP MASTER KEY</a> <a href="masterkey_d.html"><br>DROP MASTER KEY</a> <br>
  <a href="masterkey_r.html">RESTORE MASTER KEY</a><br>
  sys.symmetric_keys<br>
  sys.databases</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="masterkey_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

