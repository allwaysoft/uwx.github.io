---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER MASTER KEY</h1>
<p>Alter properties of a  database master key.</p>
<pre>Syntax:
      ALTER MASTER KEY [FORCE] REGENERATE WITH ENCRYPTION BY PASSWORD = '<i>password</i>'

      ALTER MASTER KEY ADD ENCRYPTION BY [SERVICE MASTER KEY | PASSWORD = '<i>password</i>']

      ALTER MASTER KEY DROP ENCRYPTION BY [SERVICE MASTER KEY | PASSWORD = '<i>password</i>']</pre>
<p>REGENERATE  - re-create the database master key and all the keys it protects. </p>
<p>FORCE -  continue even if the master key is unavailable or the server cannot decrypt all the encrypted private keys.</p>
<p>ADD ENCRYPTION BY SERVICE MASTER KEY - Will store an encrypted copy of the master key  in both the current database and in master.</p>
<p><b>Example</b></p>
<pre> USE MyDatabase;<br> ALTER MASTER KEY REGENERATE WITH ENCRYPTION BY PASSWORD = '6464hxJDWHO64H64n77';<br> GO</pre>
<p class="quote"><i>"Technical skill is mastery of complexity while creativity is mastery of
  simplicity" - E. Christopher 
Zeeman (Catastrophe Theory)</i></p>
<p><b>Related  Commands:</b><br>
  <br>
  <a href="masterkey_c.html">CREATE MASTER KEY</a><br>
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
<div id="bl" class="footer"><a href="masterkey_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

