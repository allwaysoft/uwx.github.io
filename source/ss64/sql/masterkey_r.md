---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>RESTORE MASTER KEY</h1>
<p>Import a database master key from a backup file.</p>
<pre>Syntax
      RESTORE MASTER KEY FROM FILE = '<i>path_to_file</i>' 
      DECRYPTION BY PASSWORD = '<i>password</i>'
      ENCRYPTION BY PASSWORD = '<i>password</i>'
      [FORCE]</pre> 
<p>FORCE will continue the restore process even if the current database master key is not open, or if  some of the encrypted private keys cannot be decrypted.</p>
<p>This encryption/decryption is a resource-intensive operation. </p>
<p>Example</p>
<pre>RESTORE MASTER KEY <br>    FROM FILE = 'c:\my_backup_master_key' <br>    DECRYPTION BY PASSWORD = '6464hxJDWHO64H#64n77' <br>    ENCRYPTION BY PASSWORD = '98yiugh87JJODsdigh9';<br>GO</pre>
<p class="quote"><i>"What man has written, man may read<br>
  But God fills every root and seed<br>
  With cryptic words, to strangely set<br>
  For mortal to decipher yet" 
- Charles William Dalmon</i></p>
<p><b>Related:</b></p>
<p>  <a href="masterkey_c.html">CREATE MASTER KEY</a> <br>
  <a href="masterkey_a.html">ALTER MASTER KEY</a><br>
<a href="masterkey_b.html">BACKUP MASTER KEY<br>
</a><a href="masterkey_d.html">DROP MASTER KEY</a><br>
<a href="/pass/pass.html">Password generator</a><br>
Equivalent Oracle command: <a href="../ora/profile_d.html">DROP PROFILE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

